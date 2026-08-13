// TEMPORARY diagnostic — reports whether Resend env vars reach the runtime.
// Booleans and lengths only, never values. Delete once the pipeline is proven.

export const dynamic = "force-dynamic";

export async function GET() {
  const seen = (name: string) => {
    const v = process.env[name];
    return { set: typeof v === "string" && v.length > 0, length: v?.length ?? 0 };
  };

  const from = process.env.RESEND_FROM ?? "";
  const key = process.env.RESEND_API_KEY ?? "";

  return Response.json({
    RESEND_API_KEY: { ...seen("RESEND_API_KEY"), startsWithRe: key.startsWith("re_") },
    RESEND_FROM: { ...seen("RESEND_FROM"), domain: from.split("@").pop()?.replace(">", "") ?? null },
    RESEND_NOTIFY_TO: seen("RESEND_NOTIFY_TO"),
    RESEND_AUDIENCE_FOUNDER: seen("RESEND_AUDIENCE_FOUNDER"),
    RESEND_AUDIENCE_OPERATOR: seen("RESEND_AUDIENCE_OPERATOR"),
    RESEND_AUDIENCE_SPONSOR: seen("RESEND_AUDIENCE_SPONSOR"),
    // Names that merely *look* like ours — catches typos and wrong prefixes.
    resendishKeys: Object.keys(process.env).filter((k) => /RESEND|EMAIL|SMTP/i.test(k)),
    vercelEnv: process.env.VERCEL_ENV ?? null,
  });
}
