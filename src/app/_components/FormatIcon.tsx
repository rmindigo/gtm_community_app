// Pixel glyphs for the four format cards. Same technique as PixelLogo and
// PixelStar: rects on a coarse grid, crisp edges, currentColor so each icon
// takes its card's accent. No image assets.

export type FormatIconName = "dinner" | "salon" | "golf" | "table";

const PATHS: Record<FormatIconName, [number, number, number, number][]> = {
  // Plate between a fork and a knife, from above.
  dinner: [
    [1, 2, 1, 8], [1, 2, 1, 1], [3, 2, 1, 1],          // fork tines
    [2, 3, 1, 7],                                       // fork stem
    [12, 2, 1, 4], [12, 6, 1, 6],                       // knife
    [6, 3, 4, 1], [5, 4, 6, 1], [5, 5, 6, 4],           // plate
    [5, 9, 6, 1], [6, 10, 4, 1],
    [7, 5, 2, 1],                                       // rim highlight
  ],
  // Two speech bubbles, one answering the other. Filled rather than outlined —
  // hollow shapes lose their interiors at 24px and read as plain rectangles.
  salon: [
    [0, 0, 8, 6], [2, 6, 2, 1], [1, 7, 1, 1],           // first, tail lower-left
    [6, 8, 8, 5], [10, 13, 2, 1],                       // reply, tail lower-right
  ],
  // Flag on a pin, ball at the base.
  golf: [
    [6, 1, 1, 11],                                      // pole
    [7, 2, 5, 1], [7, 3, 4, 1], [7, 4, 3, 1], [7, 5, 2, 1], [7, 6, 1, 1],
    [3, 12, 8, 1],                                      // ground
    [2, 10, 2, 1], [1, 11, 4, 1],                       // ball
  ],
  // A long table with seats down both sides.
  table: [
    [1, 6, 12, 3],                                      // table top
    [2, 3, 2, 2], [6, 3, 2, 2], [10, 3, 2, 2],          // seats above
    [2, 10, 2, 2], [6, 10, 2, 2], [10, 10, 2, 2],       // seats below
  ],
};

export default function FormatIcon({
  name,
  className = "block h-6 w-6 flex-none",
}: {
  name: FormatIconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 14 14"
      className={className}
      fill="currentColor"
      shapeRendering="crispEdges"
    >
      {PATHS[name].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} />
      ))}
    </svg>
  );
}
