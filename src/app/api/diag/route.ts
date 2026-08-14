// TEMPORARY diagnostic — runs the same Resend calls the form does and reports
// each step's raw outcome. No secret values. Delete once the flow is proven.

import { Resend } from "resend";
import { PERSONAS } from "@/lib/personas";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = process.env.RESEND_API_KEY ?? "";
  const from = process.env.RESEND_FROM ?? "";
  const notifyTo = process.env.RESEND_NOTIFY_TO ?? "";
  const persona = PERSONAS.founder;
  const segmentId = process.env[persona.segmentEnv];

  const env = {
    apiKey: { set: !!key, startsWithRe: key.startsWith("re_") },
    from: { set: !!from, domain: from.split("@").pop()?.replace(">", "") ?? null },
    notifyTo: { set: !!notifyTo },
    segmentFounder: { set: !!segmentId },
    vercelEnv: process.env.VERCEL_ENV ?? null,
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null,
  };

  if (url.searchParams.get("run") !== "1") {
    return Response.json({ env, hint: "add ?run=1 to exercise contact + email" });
  }
  if (!key || !from || !notifyTo) {
    return Response.json({ env, skipped: "missing config" });
  }

  const resend = new Resend(key);
  const out: Record<string, unknown> = { env };
  const testEmail = `diag+${Date.now()}@example.com`;

  // Step 1: contact create, exactly as actions.ts does it.
  try {
    const r = await resend.contacts.create({
      email: testEmail,
      firstName: "Diag",
      lastName: "Test",
      unsubscribed: false,
      properties: { persona: "founder", stage: "Closing the first few" },
      ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
    });
    out.contact = { data: r.data, error: r.error };
  } catch (err) {
    out.contact = { threw: err instanceof Error ? err.message : String(err) };
  }

  // Step 2: the confirmation email.
  try {
    const r = await resend.emails.send({
      from,
      to: notifyTo,
      replyTo: notifyTo,
      subject: "GTM Table — diagnostic",
      html: "<p>Diagnostic send from /api/diag.</p>",
    });
    out.email = { data: r.data, error: r.error };
  } catch (err) {
    out.email = { threw: err instanceof Error ? err.message : String(err) };
  }

  return Response.json(out);
}
