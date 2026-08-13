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

// Wraps the plain-text lines in a light, on-brand HTML shell.
function renderEmail(heading: string, body: string[]): string {
  const paragraphs = body
    .map(
      (line) =>
        `<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#57534e;">${line}</p>`,
    )
    .join("");
  return `<div style="background:#f5f2ea;padding:32px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid rgba(28,26,23,0.08);border-radius:20px;padding:32px;">
      <p style="margin:0 0 20px;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#8a6a1f;">The GTM Table</p>
      <h1 style="margin:0 0 16px;font-size:24px;line-height:1.2;color:#1c1a17;">${heading}</h1>
      ${paragraphs}
      <p style="margin:24px 0 0;font-size:14px;color:#a8a29e;">The GTM Table — Bay Area enterprise GTM.</p>
    </div>
  </div>`;
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

  // Collect every configured field into a flat record for the notification.
  const answers: Record<string, string> = {};
  for (const field of persona.fields) {
    const value = (formData.get(field.name) as string)?.trim();
    if (value) answers[field.label] = value;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const audienceId = process.env[persona.audienceEnv];
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

  // 1. Bucket the contact into this persona's audience. Deliberately outside
  // the main try: a duplicate applicant or a bad audience id must not cost us
  // the confirmation and the notification. Log it and carry on.
  if (audienceId) {
    const [firstName, ...rest] = name ? name.split(" ") : [];
    try {
      await resend.contacts.create({
        audienceId,
        email,
        firstName: firstName || undefined,
        lastName: rest.join(" ") || undefined,
        unsubscribed: false,
      });
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
        .map(([label, value]) => `<p style="margin:0 0 8px;"><strong>${label}:</strong> ${value}</p>`)
        .join("");
      await resend.emails.send({
        from,
        to: notifyTo,
        // Reply goes straight back to the applicant.
        replyTo: email,
        subject: `New ${persona.key} — ${name}`,
        html: `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1c1a17;">${rows}</div>`,
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
