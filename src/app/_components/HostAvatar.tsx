import Image from "next/image";
import { ACCENTS } from "@/lib/theme";
import type { Host } from "@/lib/hosts";

// 52px square, matching the design handoff. Monogram until a photo exists.
const SIZE = 52;

export default function HostAvatar({ host }: { host: Host }) {
  const color = ACCENTS[host.accent];

  // No photo yet — solid accent block with the initials, as originally drawn.
  if (!host.image) {
    return (
      <div
        aria-hidden
        className="flex flex-none items-center justify-center border-[3px] border-black font-pixel text-xs text-void"
        style={{ width: SIZE, height: SIZE, background: color }}
      >
        {host.initials}
      </div>
    );
  }

  // Photo. `quality` and the small render size do the downsampling; the CSS
  // then scales those few pixels up hard-edged instead of smoothing them, which
  // is what reads as 8-bit. Grayscale plus a contrast push stands in for a
  // reduced palette, so photos sit inside the existing colour system rather
  // than introducing their own.
  //
  // This assumes ordinary photos. If a host supplies art that is *already*
  // pixelated and palette-reduced, drop the filter and keep only
  // image-rendering — otherwise grayscale strips colour someone chose on
  // purpose. Mixed sources look inconsistent side by side, so treat all the
  // hosts the same way.
  return (
    <div
      className="flex-none overflow-hidden border-[3px] border-black"
      style={{ width: SIZE, height: SIZE, background: color }}
    >
      <Image
        src={host.image}
        alt={host.name}
        width={SIZE}
        height={SIZE}
        quality={45}
        className="h-full w-full object-cover"
        style={{
          imageRendering: "pixelated",
          filter: "grayscale(1) contrast(1.1)",
        }}
      />
    </div>
  );
}
