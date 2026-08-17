import { ogCard, ACCENT, size, contentType } from "@/lib/ogCard";

export const alt = "Cover the room where the deals get talked about.";
export { size, contentType };

export default function Image() {
  return ogCard({
    eyebrow: "SPONSORS",
    title: "Cover the room where the deals get talked about.",
    footer: "GTMERS.CO/SPONSOR",
    accent: ACCENT.MAGENTA,
  });
}
