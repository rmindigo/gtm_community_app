// 2×2 grid of 12px squares, drawn entirely with box-shadow. No image asset.
export default function PixelLogo() {
  return (
    <span
      aria-hidden
      className="mr-3 block h-3 w-3 bg-gold shadow-[12px_0_0_#52d8ff,0_12px_0_#ff5db1,12px_12px_0_#46f797]"
    />
  );
}
