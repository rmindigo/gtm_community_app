import { ogCard, ACCENT, size, contentType } from "@/lib/ogCard";

export const alt = "The room runs on operators.";
export { size, contentType };

export default function Image() {
  return ogCard({
    eyebrow: "FOR GTM OPERATORS",
    title: "The room runs on operators.",
    footer: "GTMERS.CO/OPERATOR",
    accent: ACCENT.CYAN,
  });
}
