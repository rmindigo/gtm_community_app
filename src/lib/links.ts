import type { PersonaKey } from "./personas";

export const SITE = "https://gtmers.co";

// Where a link is going out. Keep this list short — the value of UTMs is
// comparing a handful of channels, not tagging every message uniquely.
export type Source = "linkedin" | "email" | "x" | "newsletter" | "qr" | "referral";
export type Medium = "dm" | "post" | "profile" | "signature" | "intro" | "print";

/**
 * Builds a tagged persona link for outreach.
 *
 *   personaLink("founder", { source: "linkedin", medium: "dm" })
 *   → https://gtmers.co/founder?utm_source=linkedin&utm_medium=dm
 *
 * `campaign` is optional and free-form — use it for a specific push
 * ("march-table", "yc-batch") so results can be compared later.
 */
export function personaLink(
  persona: PersonaKey,
  opts: { source: Source; medium: Medium; campaign?: string },
): string {
  const url = new URL(`/${persona}`, SITE);
  url.searchParams.set("utm_source", opts.source);
  url.searchParams.set("utm_medium", opts.medium);
  if (opts.campaign) url.searchParams.set("utm_campaign", opts.campaign);
  return url.toString();
}
