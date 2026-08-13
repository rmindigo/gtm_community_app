// TEMPORARY diagnostic — reports whether Resend env vars reach the runtime, and
// optionally attempts a real send so the raw API error is visible.
// Booleans and lengths only, never secret values. Delete once sending is proven.

import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const seen = (name: string) => {
    const v = process.env[name];
    return { set: typeof v === "string" && v.length > 0, length: v?.length ?? 0 };
  };

  const from = process.env.RESEND_FROM ?? "";
  const key = process.env.RESEND_API_KEY ?? "";
  const notifyTo = process.env.RESEND_NOTIFY_TO ?? "";

  const env = {
    RESEND_API_KEY: { ...seen("RESEND_API_KEY"), startsWithRe: key.startsWith("re_") },
    RESEND_FROM: { ...seen("RESEND_FROM"), domain: from.split("@").pop()?.replace(">", "") ?? null },
    RESEND_NOTIFY_TO: seen("RESEND_NOTIFY_TO"),
    RESEND_AUDIENCE_FOUNDER: seen("RESEND_AUDIENCE_FOUNDER"),
    RESEND_AUDIENCE_OPERATOR: seen("RESEND_AUDIENCE_OPERATOR"),
    RESEND_AUDIENCE_SPONSOR: seen("RESEND_AUDIENCE_SPONSOR"),
    resendishKeys: Object.keys(process.env).filter((k) => /RESEND|EMAIL|SMTP/i.test(k)),
    vercelEnv: process.env.VERCEL_ENV ?? null,
  };

  // ?send=1 performs one real send to RESEND_NOTIFY_TO and returns the raw result.
  if (url.searchParams.get("send") !== "1") {
    return Response.json({ env, hint: "add ?send=1 to attempt a real send" });
  }

  if (!key || !from || !notifyTo) {
    return Response.json({ env, send: { skipped: "missing key, from, or notifyTo" } });
  }

  try {
    const resend = new Resend(key);
    const result = await resend.emails.send({
      from,
      to: notifyTo,
      subject: "GTM Table — pipeline test",
      html: "<p>Diagnostic send. If this arrived, Resend is wired correctly.</p>",
    });
    return Response.json({ env, send: { data: result.data, error: result.error } });
  } catch (err) {
    return Response.json({
      env,
      send: { threw: err instanceof Error ? err.message : String(err) },
    });
  }
}
