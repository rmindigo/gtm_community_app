import { SCANLINES } from "@/lib/theme";

// CRT scanline overlay. Off by default — flip SCANLINES in src/lib/theme.ts.
export default function Scanlines() {
  if (!SCANLINES) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[99]"
      style={{
        background:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) 2px, transparent 2px, transparent 4px)",
      }}
    />
  );
}
