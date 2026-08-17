import Link from "next/link";
import Footer from "./_components/Footer";
import PixelLogo from "./_components/PixelLogo";

export const metadata = {
  title: "Level not found | The GTM Table",
};

// The one place coin-op language belongs: nothing is being bought here, and
// "insert coin to continue" is what an arcade cabinet actually says when a
// game ends. Keeps the joke away from the paid seat.
export default function NotFound() {
  return (
    <div>
      <header className="mx-auto flex max-w-[820px] items-center justify-between gap-4 px-6 py-[22px]">
        <Link href="/" className="flex items-center gap-[14px] text-white hover:text-gold">
          <PixelLogo />
          <span className="font-pixel text-xs tracking-[2px]">THE GTM TABLE</span>
        </Link>
      </header>

      <main className="mx-auto max-w-[820px] px-6 pb-24 pt-16 text-center">
        <div className="font-pixel text-[clamp(40px,9vw,84px)] leading-[1.2] text-gold [text-shadow:6px_6px_0_#2b2b5e]">
          404
        </div>

        <div
          data-blink
          className="mt-8 font-pixel text-[10px] tracking-[2px] text-green"
          style={{ animation: "blink 1.4s steps(1) infinite" }}
        >
          — INSERT COIN TO CONTINUE —
        </div>

        <h1 className="mt-6 font-pixel text-[clamp(14px,2.4vw,20px)] leading-[1.7] text-white">
          This level does not exist.
        </h1>

        <p className="prose-mono mx-auto mt-5 text-muted">
          The page you were after is not here. The table still is.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-[14px]">
          {/* Colours are inline: globals.css sets `a { color: gold }` outside
              any layer, which beats Tailwind utilities on <a> elements. */}
          <Link
            href="/"
            className="press inline-block border-[3px] px-[18px] py-[14px] font-pixel text-[10px] shadow-[5px_5px_0_#000] hover:shadow-[2px_2px_0_#000]"
            style={{ background: "#ffd23f", borderColor: "#000", color: "#0a0a14" }}
          >
            BACK TO THE TABLE
          </Link>
          <Link
            href="/"
            className="press inline-block border-[3px] px-[18px] py-[14px] font-pixel text-[10px] shadow-[5px_5px_0_#000] hover:shadow-[2px_2px_0_#000]"
            style={{ background: "#13132b", borderColor: "#52d8ff", color: "#52d8ff" }}
          >
            PICK YOUR SEAT
          </Link>
        </div>
      </main>

      <Footer prefix="/" width="max-w-[820px]" tagline="The GTM Table. Bay Area." />
    </div>
  );
}
