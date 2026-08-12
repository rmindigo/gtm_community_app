// Neither Press Start 2P nor the latin subset of IBM Plex Mono carries U+2605,
// so the ★ is drawn as blocky pixel art instead of relying on a font fallback.
export default function PixelStar() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 7 7"
      className="inline-block h-[1em] w-[1em] align-[-0.1em]"
      fill="currentColor"
      shapeRendering="crispEdges"
    >
      <rect x="3" y="0" width="1" height="7" />
      <rect x="0" y="3" width="7" height="1" />
      <rect x="1" y="1" width="1" height="1" />
      <rect x="5" y="1" width="1" height="1" />
      <rect x="1" y="5" width="1" height="1" />
      <rect x="5" y="5" width="1" height="1" />
      <rect x="2" y="2" width="3" height="3" />
    </svg>
  );
}
