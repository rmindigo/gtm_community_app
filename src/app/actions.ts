"use server";

import { Resend } from "resend";
import { PERSONAS, type PersonaKey } from "@/lib/personas";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isPersonaKey(value: unknown): value is PersonaKey {
  return value === "founder" || value === "operator" || value === "sponsor";
}

// Arcade palette, shared with globals.css.
const MAIL = {
  void: "#0a0a14",
  panel: "#13132b",
  edge: "#34346a",
  white: "#ffffff",
  body: "#d8d8ec",
  muted: "#a9a9c8",
  gold: "#ffd23f",
};

// Press Start 2P is a webfont and mail clients will not load it, so the
// pixel look is carried by a monospace stack every client already has.
const MONO = "'Courier New', Courier, monospace";

// Table-based layout with inline styles and no border-radius or box-shadow —
// the parts of the arcade system that survive Gmail, Outlook and Apple Mail.
function renderEmail(heading: string, body: string[]): string {
  const paragraphs = body
    .map(
      (line) =>
        `<p style="margin:0 0 16px;font-family:${MONO};font-size:15px;line-height:1.6;color:${MAIL.body};">${line}</p>`,
    )
    .join("");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${MAIL.void};margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="520" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;width:100%;background-color:${MAIL.panel};border:3px solid ${MAIL.edge};">
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 22px;font-family:${MONO};font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${MAIL.gold};">The GTM Table</p>
              <h1 style="margin:0 0 20px;font-family:${MONO};font-size:20px;line-height:1.5;font-weight:700;color:${MAIL.white};">${heading}</h1>
              ${paragraphs}
              <p style="margin:28px 0 0;font-family:${MONO};font-size:13px;line-height:1.6;color:${MAIL.muted};">The GTM Table — Bay Area enterprise GTM.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
}

export async function subscribe(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  // Honeypot: a hidden field real users never see. If it's filled, it's a bot —
  // return success without doing anything so the bot gets no signal.
  if ((formData.get("nickname") as string)?.trim()) {
    return { status: "success" };
  }

  const personaValue = formData.get("persona");
  if (!isPersonaKey(personaValue)) {
    return { status: "error", message: "Something went off. Refresh and try again." };
  }
  const persona = PERSONAS[personaValue];

  const email = (formData.get("email") as string)?.trim() ?? "";
  const name = (formData.get("name") as string)?.trim() ?? "";

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a valid email." };
  }

  // Two shapes of the same submission: `answers` is keyed by question for the
  // notification email; `properties` is keyed by field name for Resend, so
  // segments can filter on them. Long free-text is left out of properties —
  // it does not segment usefully and belongs in the notification.
  const answers: Record<string, string> = {};
  const properties: Record<string, string> = {};
  for (const field of persona.fields) {
    const value = (formData.get(field.name) as string)?.trim();
    if (!value) continue;
    answers[field.label] = value;
    if (field.type !== "textarea" && field.name !== "email" && field.name !== "name") {
      properties[field.name] = value;
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  // Trimmed and shape-checked: a stray space or newline pasted into the env
  // var makes Resend reject the whole contact with a 422, which would cost us
  // the lead entirely. An unusable id is better ignored than sent.
  const rawSegmentId = process.env[persona.segmentEnv]?.trim();
  const segmentId = /^[0-9a-f-]{36}$/i.test(rawSegmentId ?? "") ? rawSegmentId : undefined;
  if (rawSegmentId && !segmentId) {
    console.error(`[subscribe] ${persona.segmentEnv} is not a valid uuid; skipping segment`);
  }
  const notifyTo = process.env.RESEND_NOTIFY_TO;
  // RESEND_FROM only has to live on the verified domain — no mailbox needed.
  // Replies go here instead, so they reach a real inbox. Falls back to the
  // notify address when unset.
  const replyTo = process.env.RESEND_REPLY_TO || notifyTo;

  // Not yet configured (no domain/keys). Don't fail the user — log and succeed
  // so the form is fully testable now. Wire keys later and it starts sending.
  if (!apiKey || !from) {
    console.warn(
      `[subscribe] Resend not configured — skipped send for ${persona.key}:`,
      { email, name, answers },
    );
    return { status: "success" };
  }

  const resend = new Resend(apiKey);

  // 1. Store the contact. Deliberately outside the main try: a duplicate
  // applicant or a bad segment id must not cost us the confirmation and the
  // notification. Log it and carry on.
  //
  // Resend is one audience with segments and custom properties (audienceId is
  // deprecated). `persona` always goes on as a property, so segments can be
  // rebuilt in the dashboard without a deploy; the segment id is optional and
  // just adds the contact directly.
  {
    const [firstName, ...rest] = name ? name.split(" ") : [];
    const base = {
      email,
      firstName: firstName || undefined,
      lastName: rest.join(" ") || undefined,
      unsubscribed: false,
      ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
    };

    try {
      const withProps = await resend.contacts.create({
        ...base,
        properties: { persona: persona.key, ...properties },
      });

      // Resend rejects the whole contact if a property has not been declared
      // in the dashboard first ("One or more properties do not exist"). Losing
      // the contact is worse than losing the metadata, so retry bare.
      if (withProps.error) {
        console.error(`[subscribe] properties rejected for ${persona.key}:`, withProps.error);
        const bare = await resend.contacts.create(base);
        if (bare.error) {
          console.error(`[subscribe] contact not stored for ${persona.key}:`, bare.error);
        }
      }
    } catch (error) {
      console.error(`[subscribe] contact not stored for ${persona.key}:`, error);
    }
  }

  try {
    // 2. Send the persona confirmation email to the subscriber.
    await resend.emails.send({
      from,
      to: email,
      ...(replyTo ? { replyTo } : {}),
      subject: persona.email.subject,
      html: renderEmail(persona.email.heading, persona.email.body),
    });

    // 3. Notify the operator with the full application (optional).
    if (notifyTo) {
      const rows = Object.entries(answers)
        .map(
          ([label, value]) =>
            `<tr>
              <td style="padding:0 0 4px;font-family:${MONO};font-size:11px;letter-spacing:1px;text-transform:uppercase;color:${MAIL.gold};">${label}</td>
            </tr>
            <tr>
              <td style="padding:0 0 18px;font-family:${MONO};font-size:15px;line-height:1.5;color:${MAIL.body};">${value}</td>
            </tr>`,
        )
        .join("");
      await resend.emails.send({
        from,
        to: notifyTo,
        // Reply goes straight back to the applicant.
        replyTo: email,
        subject: `New ${persona.key} — ${name}`,
        html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${MAIL.void};margin:0;padding:0;">
          <tr>
            <td align="center" style="padding:32px 16px;">
              <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;background-color:${MAIL.panel};border:3px solid ${MAIL.edge};">
                <tr>
                  <td style="padding:32px;">
                    <p style="margin:0 0 24px;font-family:${MONO};font-size:12px;letter-spacing:3px;text-transform:uppercase;color:${MAIL.gold};">New ${persona.key}</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}</table>
                    <p style="margin:12px 0 0;font-family:${MONO};font-size:13px;line-height:1.6;color:${MAIL.muted};">Reply to this email to reach them directly.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>`,
      });
    }
  } catch (error) {
    console.error(`[subscribe] Resend error for ${persona.key}:`, error);
    return {
      status: "error",
      message: "We couldn't record that. Try again in a moment.",
    };
  }

  return { status: "success" };
}
