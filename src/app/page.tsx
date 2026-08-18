import Footer from "./_components/Footer";
import PixelLogo from "./_components/PixelLogo";
import PixelStar from "./_components/PixelStar";
import Hosts from "./_components/Hosts";
import { nextTableLine, cadenceLine } from "@/lib/tableInfo";
import { roomModel } from "@/lib/roomModel";
import { PERSONAS } from "@/lib/personas";
import { ACCENTS } from "@/lib/theme";

const ctaLinks = {
  founder: "/founder",
  operator: "/operator",
  sponsor: "/sponsor",
};

const players = [
  {
    tag: "FOUNDER →",
    href: ctaLinks.founder,
    note: "Sit with operators who have already answered the questions you are working.",
    accent: "#ffd23f",
    solid: true,
  },
  {
    tag: "GTM OPERATOR →",
    href: ctaLinks.operator,
    note: "Trade notes with people who have carried the number. Meet founders worth the time.",
    accent: "#52d8ff",
  },
  {
    tag: "SPONSOR →",
    href: ctaLinks.sponsor,
    note: "Cover the table. The dinners, the golf, the rooms.",
    accent: "#ff5db1",
  },
];

const steps = [
  {
    title: "Build the table",
    body: "Each table holds a few founders, a few operators, and the GTM questions they came with.",
    chip: "#ffd23f",
  },
  {
    title: "Set the question",
    body: "The questions stay narrow. Build the outbound motion. Open the first enterprise account. Hire the first VP of Sales. Price the next tier.",
    chip: "#52d8ff",
  },
  {
    title: "Trade the plays",
    body: "Operators say what worked in the field. Founders bring the mess behind the question.",
    chip: "#46f797",
  },
  {
    title: "Keep it light",
    body: "A follow-up, an introduction, and the next table when it earns the time.",
    chip: "#ff5db1",
  },
];

const eventFormats = [
  {
    title: "Founder advisory dinners",
    body: "A few founders. A few operators. A few questions to work. Dinner on the table.",
    accent: "text-gold",
    spine: "bg-gold",
  },
  {
    title: "Operator salons",
    body: "Field leaders trade notes on how the enterprise buys now.",
    accent: "text-cyan",
    spine: "bg-cyan",
  },
  {
    title: "Golf outings",
    body: "Eighteen holes. Room to talk between shots.",
    accent: "text-green",
    spine: "bg-green",
  },
  {
    title: "Sponsor-hosted tables",
    body: "A room a sponsor covers. They introduce themselves, then they listen.",
    accent: "text-magenta",
    spine: "bg-magenta",
  },
];

const sponsorValue = [
  "A seat near the founders and operators in the room",
  "Time with the deal before it becomes a vendor list",
  "The dinners and the golf to host",
  "Time to earn the trust of the people who sign",
];

function Eyebrow({ children, className = "text-gold" }: { children: React.ReactNode; className?: string }) {
  return <div className={`font-pixel text-[10px] tracking-[2px] ${className}`}>{children}</div>;
}

function Cursor({ color }: { color: string }) {
  return (
    <span
      data-blink
      className="ml-2 inline-block h-[1em] w-[0.5em] align-[-0.15em]"
      style={{ background: color, animation: "blink 1s steps(1) infinite" }}
    />
  );
}

function Bullet({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="flex gap-[10px]">
      <span style={{ color }}>▶</span>
      {children}
    </div>
  );
}

function ArcadeButton({
  href,
  children,
  color,
  solid = false,
}: {
  href: string;
  children: React.ReactNode;
  color: string;
  solid?: boolean;
}) {
  return (
    <a
      href={href}
      className="press inline-block border-[3px] px-[18px] py-[14px] font-pixel text-[10px] shadow-[5px_5px_0_#000] hover:shadow-[2px_2px_0_#000]"
      style={
        solid
          ? { background: color, color: "#0a0a14", borderColor: "#000" }
          : { background: "#13132b", color, borderColor: color }
      }
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div>
      <header className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-4 px-6 py-[22px]">
        <div className="flex items-center gap-[14px]">
          <PixelLogo />
          <div className="font-pixel text-xs tracking-[2px] text-white">THE GTM TABLE</div>
        </div>
        {/* Anchor links to sections the reader scrolls past anyway. On a phone the
            row wraps to two lines and pushes the seat picker below the fold, so it
            starts at sm. The footer carries the same four links. */}
        <nav className="hidden flex-wrap gap-[22px] text-base sm:flex">
          <a href="#how">How it works</a>
          <a href="#formats">Formats</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#hosts">Hosts</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-[1140px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-10 px-6 pb-16 pt-10">
        <div>
          <div className="inline-block border-[3px] border-black bg-green px-3 py-2 font-pixel text-[10px] tracking-[2px] text-void shadow-[4px_4px_0_#000]">
            BAY AREA FIRST — ENTERPRISE GTM
          </div>

          <h1 className="mt-6 font-pixel text-[clamp(22px,3.4vw,40px)] leading-[1.35] text-white [text-shadow:4px_4px_0_#2b2b5e]">
            Founders and operators. One table. Straight talk on enterprise deals.
            <Cursor color="#ffd23f" />
          </h1>

          <p className="prose-mono mt-6 text-body">
            The GTM Table is a dinner. Restaurants around San Francisco and the Bay Area. Founders bring the GTM questions they are working. Operators bring the plays that answered theirs. Everybody talks.
          </p>

          <div className="mb-[14px] mt-7 flex items-center gap-2 font-pixel text-[10px] tracking-[1px] text-gold">
            <PixelStar /> PICK YOUR SEAT <PixelStar />
          </div>

          {/* Three seats stacked, mirroring the three Room Model boxes opposite. */}
          <div className="grid gap-[14px]">
            {players.map((player) => (
              <a
                key={player.tag}
                href={player.href}
                className="press block border-[3px] p-4 shadow-[5px_5px_0_#000] hover:shadow-[2px_2px_0_#000]"
                style={
                  player.solid
                    ? { background: player.accent, borderColor: "#000", color: "#0a0a14" }
                    : { background: "#13132b", borderColor: "#34346a", color: "#e8e8f0" }
                }
              >
                <div
                  className="font-pixel text-[10px]"
                  style={{ color: player.solid ? "#0a0a14" : player.accent }}
                >
                  {player.tag}
                </div>
                <div
                  className="mt-2 text-[15px] leading-[1.3]"
                  style={{ color: player.solid ? "#0a0a14" : "#d8d8ec" }}
                >
                  {player.note}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-[26px] font-pixel text-[10px] leading-[1.8] tracking-[1px] text-green">
            {nextTableLine()}
          </div>
          <div className="mt-2 font-pixel text-[10px] leading-[1.8] tracking-[1px] text-muted">
            {cadenceLine()}
          </div>
        </div>

        <aside className="border-[3px] border-edge bg-panel p-[26px] shadow-[8px_8px_0_#000]">
          <Eyebrow className="text-cyan">ROOM MODEL</Eyebrow>
          <h2 className="mb-5 mt-[14px] font-pixel text-[14px] leading-[1.7] text-white">
            Who sits. Who talks. Who hosts.
          </h2>
          <div className="grid gap-[14px]">
            {roomModel.map((role) => (
              <div key={role.key} className="border-[3px] border-edge-dim bg-band p-4">
                <div
                  className="font-pixel text-[10px] leading-[1.7]"
                  style={{ color: ACCENTS[role.accent] }}
                >
                  {role.label}
                </div>
                <p className="mt-2 text-base leading-[1.4] text-body">{role.body}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section
        id="how"
        className="mx-auto grid max-w-[1140px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-11 border-t-[3px] border-edge-dim px-6 py-[72px]"
      >
        <div>
          <Eyebrow className="text-green">HOW IT WORKS — QUEST LOG</Eyebrow>
          <h2 className="mb-3 mt-[18px] font-pixel text-[clamp(16px,2.2vw,24px)] leading-[1.7] text-white">
            One room. One problem. The people who have solved it.
          </h2>
          <p className="text-[17px] text-muted">One page and four doors. Pick yours. The room comes after.</p>
        </div>
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-[18px] border-[3px] border-edge bg-panel p-5 shadow-[6px_6px_0_#000]"
            >
              <div
                className="flex h-[38px] w-[38px] flex-none items-center justify-center border-[3px] border-black font-pixel text-xs text-void"
                style={{ background: step.chip }}
              >
                {index + 1}
              </div>
              <div>
                <div className="font-pixel text-[11px] leading-[1.6] text-white">{step.title}</div>
                <p className="mt-[6px] text-base leading-[1.4] text-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1140px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 px-6 pb-[72px]">
        <div className="border-[3px] border-gold bg-panel p-[30px] shadow-[8px_8px_0_#000]">
          <Eyebrow>FOR FOUNDERS</Eyebrow>
          <h2 className="mb-3 mt-4 font-pixel text-[clamp(14px,1.8vw,19px)] leading-[1.7] text-white">
            Get the operator&apos;s read before the mistake compounds.
          </h2>
          <p className="mb-4 text-[17px] leading-[1.45] text-body">
            Founders come for operators who know the difference between a good story and a deal that closes.
          </p>
          <div className="mb-6 grid gap-[10px] text-base leading-[1.4] text-body">
            {PERSONAS.founder.points.map((reason) => (
              <Bullet key={reason} color="#ffd23f">
                {reason}
              </Bullet>
            ))}
          </div>
          <ArcadeButton href={ctaLinks.founder} color="#ffd23f" solid>
            I&apos;M A FOUNDER →
          </ArcadeButton>
        </div>

        <div className="border-[3px] border-cyan bg-panel p-[30px] shadow-[8px_8px_0_#000]">
          <Eyebrow className="text-cyan">FOR GTM OPERATORS</Eyebrow>
          <h2 className="mb-3 mt-4 font-pixel text-[clamp(14px,1.8vw,19px)] leading-[1.7] text-white">
            The room runs on operators.
          </h2>
          <p className="mb-4 text-[17px] leading-[1.45] text-body">
            Operators come for the peers, the dinners, the golf, and founders worth the time.
          </p>
          <div className="mb-6 grid gap-[10px] text-base leading-[1.4] text-body">
            {PERSONAS.operator.points.map((reason) => (
              <Bullet key={reason} color="#52d8ff">
                {reason}
              </Bullet>
            ))}
          </div>
          <ArcadeButton href={ctaLinks.operator} color="#52d8ff">
            I&apos;M A GTM OPERATOR →
          </ArcadeButton>
        </div>
      </section>

      <section id="formats" className="border-y-[3px] border-edge-dim bg-band">
        <div className="mx-auto grid max-w-[1140px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-10 px-6 py-16">
          <div>
            <Eyebrow className="text-green">BAY AREA FIRST — STAGE SELECT</Eyebrow>
            <h2 className="mb-3 mt-[18px] font-pixel text-[clamp(16px,2.2vw,24px)] leading-[1.7] text-white">
              Trust gets built over dinner, not on a stage.
            </h2>
            <p className="text-[17px] leading-[1.45] text-muted">
              The GTM Table starts in the Bay Area. Small rooms. Dinners, salons, operator tables, golf. A sponsor covers the check.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {eventFormats.map((format) => (
              // Accent spine down the left edge: colour does the differentiating,
              // which the title already does. No new vocabulary.
              <div
                key={format.title}
                className="flex border-[3px] border-edge bg-panel shadow-[5px_5px_0_#000]"
              >
                <div className={`w-[6px] flex-none ${format.spine}`} />
                <div className="p-[18px]">
                  <div className={`font-pixel text-[10px] leading-[1.6] ${format.accent}`}>
                    {format.title}
                  </div>
                  <p className="prose-mono mt-3 text-body">{format.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sponsors"
        className="mx-auto grid max-w-[1140px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-10 px-6 py-[72px]"
      >
        <div>
          <Eyebrow className="text-magenta">SPONSORS</Eyebrow>
          <h2 className="mb-3 mt-[18px] font-pixel text-[clamp(16px,2.2vw,24px)] leading-[1.7] text-white">
            Cover the room where the deals get talked about.
          </h2>
          <p className="prose-mono text-muted">
            Sponsors cover the dinners, the golf, and the rooms that bring founders and operators together. They get proximity and trust.
          </p>
        </div>
        <div className="border-[3px] border-magenta bg-panel p-7 shadow-[8px_8px_0_#000]">
          <h3 className="mb-[18px] font-pixel text-[13px] leading-[1.7] text-white">Why sponsors come</h3>
          <div className="grid gap-[10px] text-base leading-[1.4] text-body">
            {sponsorValue.map((item) => (
              <Bullet key={item} color="#ff5db1">
                {item}
              </Bullet>
            ))}
          </div>
          <div className="my-5 border-[3px] border-edge-dim bg-band p-4">
            <div className="font-pixel text-[9px] leading-[1.8] tracking-[2px] text-magenta">
              SPONSOR STANDARD
            </div>
            <p className="mt-[6px] text-base leading-[1.4] text-body">
              A sponsor has to fit the founders and operators at the table. The room stays small. Operators run it.
            </p>
          </div>
          <ArcadeButton href={ctaLinks.sponsor} color="#ff5db1" solid>
            I&apos;M INTERESTED IN SPONSORING →
          </ArcadeButton>
        </div>
      </section>

      <div className="mx-auto max-w-[1140px] px-6 pb-[72px]">
        <Hosts />

        <div className="mt-6 flex items-center border-[3px] border-edge-dim bg-band p-7 shadow-[8px_8px_0_#000]">
          <p className="font-pixel text-[clamp(12px,1.6vw,15px)] leading-[2] text-green">
            &gt; The promise is the room. The right people. One hard question. Enough trust to say what is actually going on in the deal.
            <Cursor color="#46f797" />
          </p>
        </div>
      </div>

      <section id="cta" className="border-t-[3px] border-edge-dim bg-band">
        <div className="mx-auto max-w-[820px] px-6 py-20 text-center">
          <div
            data-blink
            className="font-pixel text-[10px] tracking-[2px] text-gold"
            style={{ animation: "blink 1.4s steps(1) infinite" }}
          >
            — REQUEST A SEAT —
          </div>
          <h2 className="mb-3 mt-[22px] font-pixel text-[clamp(16px,2.4vw,26px)] leading-[1.7] text-white">
            Take the seat that fits your role at the table.
          </h2>
          <p className="mb-8 text-[17px] text-muted">
            Founder, operator, or sponsor. Tell us which seat is yours and we take it from there.
          </p>
          <div className="flex flex-wrap justify-center gap-[14px]">
            <ArcadeButton href={ctaLinks.founder} color="#ffd23f" solid>
              I&apos;M A FOUNDER
            </ArcadeButton>
            <ArcadeButton href={ctaLinks.operator} color="#52d8ff">
              I&apos;M A GTM OPERATOR
            </ArcadeButton>
            <ArcadeButton href={ctaLinks.sponsor} color="#ff5db1">
              SPONSORING
            </ArcadeButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
