import Link from "next/link";
import Footer from "./Footer";
import PixelLogo from "./PixelLogo";
import Hosts from "./Hosts";
import PersonaForm from "./PersonaForm";
import { ACCENTS } from "@/lib/theme";
import { nextTableLine } from "@/lib/tableInfo";
import type { Persona } from "@/lib/personas";

// One template, three pages. Content and accent come from the persona; the
// structure is identical so the pages stay in step.
export default function PersonaPage({ persona }: { persona: Persona }) {
  const color = ACCENTS[persona.accent];

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
          {persona.badge}
        </div>

        <h1 className="mt-[26px] font-pixel text-[clamp(20px,3.4vw,32px)] leading-[1.6] text-white [text-shadow:4px_4px_0_#2b2b5e]">
          {persona.landing.heroTitle}
          <span
            data-blink
            className="ml-2 inline-block h-[1em] w-[0.5em] align-[-0.15em]"
            style={{ background: color, animation: "blink 1s steps(1) infinite" }}
          />
        </h1>

        {persona.landing.pitch.map((para, i) => (
          <p key={para} className={`prose-mono ${i === 0 ? "mt-[22px] text-body" : "mt-4 text-muted"}`}>
            {para}
          </p>
        ))}

        <div className="mt-8 grid gap-[10px] text-base leading-[1.4] text-body">
          {persona.points.map((point) => (
            <div key={point} className="flex gap-[10px]">
              <span style={{ color }}>▶</span>
              {point}
            </div>
          ))}
        </div>

        <p className="mt-8 border-l-[3px] border-edge pl-4 text-[15px] leading-[1.6] text-muted">
          {persona.landing.otherRoles}
        </p>

        <Hosts className="mt-[72px]" />

        <div className="mt-[72px] font-pixel text-[10px] leading-[1.8] tracking-[1px] text-green">
          {nextTableLine()}
        </div>

        <div className="mt-6">
          <PersonaForm
            persona={persona.key}
            fields={persona.fields}
            ctaLabel={persona.ctaLabel}
            accent={persona.accent}
            formHeader={persona.formHeader}
          />
        </div>
      </main>

      <Footer prefix="/" width="max-w-[820px]" tagline="The GTM Table. Bay Area." />
    </div>
  );
}
