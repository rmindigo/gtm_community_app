import Link from "next/link";
import Footer from "./Footer";
import PixelLogo from "./PixelLogo";
import { ACCENTS, type AccentName } from "@/lib/theme";

type PathLayoutProps = {
  title: string;
  intro: string;
  points: string[];
  // Badge above the headline, e.g. "FOR FOUNDERS".
  badge: string;
  accent: AccentName;
  children: React.ReactNode;
};

export default function PathLayout({
  title,
  intro,
  points,
  badge,
  accent,
  children,
}: PathLayoutProps) {
  const color = ACCENTS[accent];

  return (
    <div style={{ "--accent": color } as React.CSSProperties}>
      <header className="mx-auto flex max-w-[820px] items-center justify-between gap-4 px-6 py-[22px]">
        <Link href="/" className="flex items-center gap-[14px] text-white hover:text-gold">
          <PixelLogo />
          <span className="font-pixel text-xs tracking-[2px]">THE GTM TABLE</span>
        </Link>
        <Link href="/" className="text-base">
          ← Back
        </Link>
      </header>

      <main className="mx-auto max-w-[820px] px-6 pb-20 pt-9">
        <div
          className="inline-block border-[3px] border-black px-3 py-2 font-pixel text-[10px] tracking-[2px] text-void shadow-[4px_4px_0_#000]"
          style={{ background: color }}
        >
          {badge}
        </div>

        <h1 className="mt-[26px] font-pixel text-[clamp(20px,3.4vw,32px)] leading-[1.6] text-white [text-shadow:4px_4px_0_#2b2b5e]">
          {title}
          <span
            data-blink
            className="ml-2 inline-block h-[1em] w-[0.5em] align-[-0.15em]"
            style={{ background: color, animation: "blink 1s steps(1) infinite" }}
          />
        </h1>

        <p className="mt-[22px] max-w-[58ch] text-lg leading-[1.5] text-body">{intro}</p>

        <div className="mt-6 grid gap-[10px] text-base leading-[1.4] text-body">
          {points.map((point) => (
            <div key={point} className="flex gap-[10px]">
              <span style={{ color }}>▶</span>
              {point}
            </div>
          ))}
        </div>

        <div className="mt-10">{children}</div>
      </main>

      <Footer prefix="/" width="max-w-[820px]" tagline="The GTM Table. Bay Area." />
    </div>
  );
}
