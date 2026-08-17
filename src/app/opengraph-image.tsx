import { ogCard, ACCENT, size, contentType } from "@/lib/ogCard";

export const alt = "The GTM Table — enterprise GTM dinners in the Bay Area";
export { size, contentType };

export default function Image() {
  return ogCard({
    eyebrow: "BAY AREA FIRST — ENTERPRISE GTM",
    title: "Founders and operators. One table.",
    footer: "GTMERS.CO",
    accent: ACCENT.GREEN,
  });
}
