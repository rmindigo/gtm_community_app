// TEMPORARY diagnostic — runs the same contact call the form does and returns
// the raw Resend error. No secret values. Delete once segments are proven.

import { Resend } from "resend";
import { PERSONAS } from "@/lib/personas";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = process.env.RESEND_API_KEY ?? "";
  const persona = PERSONAS.founder;
  const segmentId = process.env[persona.segmentEnv];

  const env = {
    apiKey: { set: !!key },
    segmentFounder: { set: !!segmentId, length: segmentId?.length ?? 0 },
    segmentOperator: { set: !!process.env.RESEND_SEGMENT_OPERATOR },
    segmentSponsor: { set: !!process.env.RESEND_SEGMENT_SPONSOR },
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null,
    vercelEnv: process.env.VERCEL_ENV ?? null,
  };

  if (url.searchParams.get("run") !== "1") {
    return Response.json({ env, hint: "add ?run=1 to attempt a contact create" });
  }
  if (!key) return Response.json({ env, skipped: "no api key" });

  const resend = new Resend(key);
  const out: Record<string, unknown> = { env };
  const email = `diag+${Date.now()}@example.com`;

  // 1. Exactly what actions.ts sends.
  try {
    const r = await resend.contacts.create({
      email,
      firstName: "Diag",
      lastName: "Test",
      unsubscribed: false,
      properties: { persona: "founder", stage: "Closing the first few" },
      ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
    });
    out.withSegment = { data: r.data, error: r.error };
  } catch (err) {
    out.withSegment = { threw: err instanceof Error ? err.message : String(err) };
  }

  // 2. Same call minus the segment, to isolate whether the segment id is the
  // thing being rejected.
  try {
    const r = await resend.contacts.create({
      email: `diag-nosegment+${Date.now()}@example.com`,
      firstName: "Diag",
      lastName: "NoSegment",
      unsubscribed: false,
      properties: { persona: "founder" },
    });
    out.withoutSegment = { data: r.data, error: r.error };
  } catch (err) {
    out.withoutSegment = { threw: err instanceof Error ? err.message : String(err) };
  }

  return Response.json(out);
}
