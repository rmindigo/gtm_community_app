const ctaLinks = {
  founder: "/founder",
  operator: "/operator",
  sponsor: "/sponsor",
  updates: "/updates",
};

const paths = [
  {
    label: "I’m a founder",
    href: ctaLinks.founder,
    note: "Get practical GTM advice from experienced enterprise operators.",
    primary: true,
  },
  {
    label: "I’m a GTM operator",
    href: ctaLinks.operator,
    note: "Join curated rooms with thoughtful peers and high-quality founders.",
  },
  {
    label: "I’m interested in sponsoring",
    href: ctaLinks.sponsor,
    note: "Fund intimate rooms, dinners, golf outings, and founder programming.",
  },
  {
    label: "Keep me posted",
    href: ctaLinks.updates,
    note: "Get updates as Bay Area rooms open.",
  },
];

const roomStandards = [
  ["Founders pay for signal", "Practical advice from operators who have sold, expanded, partnered, and implemented inside complex B2B accounts."],
  ["Operators are the expert network", "Senior GTM practitioners get access to curated rooms, thoughtful peers, dinners, golf outings, and founder conversations."],
  ["Sponsors fund the experience", "Aligned sponsors underwrite the rooms and programming without turning the table into a pitch floor."],
];

const audiences = [
  {
    title: "Founders",
    tag: "Paying customer",
    body: "For founders building enterprise revenue motion who want specific advice on pipeline, positioning, buyer access, deal strategy, and team design.",
  },
  {
    title: "GTM operators",
    tag: "Expert network",
    body: "For experienced AEs, CROs, RevOps, partnerships, success, marketing, and sales engineering leaders who bring field-tested judgment.",
  },
  {
    title: "Sponsors",
    tag: "Funding partner",
    body: "For credible companies that want to earn trust with founders and operators by supporting high-signal rooms and premium experiences.",
  },
];

const steps = [
  {
    title: "Curate the room",
    body: "Each table is built around founder needs, operator expertise, and a concrete enterprise GTM theme.",
  },
  {
    title: "Set the question",
    body: "Topics are specific: opening enterprise accounts, fixing stalled pipeline, hiring the first VP Sales, partner-led motion, expansion, or board-level revenue narrative.",
  },
  {
    title: "Trade real playbooks",
    body: "Operators share what they have seen work in the field. Founders bring the messy context behind the deal, segment, or motion.",
  },
  {
    title: "Keep it lightweight",
    body: "No portal, no feed, no overbuilt workflow. Useful follow-up, curated introductions, and the next room when it earns the time.",
  },
];

const founderReasons = [
  "Pressure-test enterprise GTM decisions before they get expensive.",
  "Learn from operators who have carried quota, led teams, and navigated complex accounts.",
  "Get practical perspective on buyer psychology, deal strategy, hiring, messaging, and expansion.",
];

const operatorReasons = [
  "Spend time with serious peers outside generic panels and mass rooms.",
  "Meet founders wrestling with real enterprise GTM problems.",
  "Access intimate dinners, golf outings, salons, and selective Bay Area gatherings.",
];

const eventFormats = [
  {
    title: "Founder advisory dinners",
    body: "A few founders, a few operators, one concrete GTM problem.",
  },
  {
    title: "Operator salons",
    body: "Senior field leaders comparing notes on enterprise motion and market shifts.",
  },
  {
    title: "Golf outings",
    body: "Small-format relationship building with time for substantive founder/operator conversations.",
  },
  {
    title: "Sponsor-hosted tables",
    body: "Premium rooms funded by aligned partners who add credibility, not noise.",
  },
];

const sponsorValue = [
  "Direct association with a curated Bay Area founder/operator room",
  "Credible proximity to enterprise revenue conversations before they become vendor evaluations",
  "Thoughtful hosting moments: dinners, golf, salons, and small-format programming",
  "Trust-building with the people shaping complex B2B sales decisions",
];

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d6b15f]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-stone-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">{body}</p> : null}
    </div>
  );
}

function CTAButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  const classes =
    variant === "primary"
      ? "border border-[#f0d28a] bg-[#ead39a] text-[#17130c] shadow-[0_18px_70px_rgba(214,177,95,0.22)] hover:bg-[#f4dfaa]"
      : "border border-stone-200/15 bg-stone-100/[0.06] text-stone-50 hover:border-[#d6b15f]/70 hover:bg-stone-100/[0.1]";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition sm:w-auto ${classes}`}
    >
      {children}
    </a>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4 text-stone-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6b15f]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090d12] text-stone-100">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_18%_8%,rgba(214,177,95,0.18),transparent_28%),radial-gradient(circle_at_85%_4%,rgba(120,91,52,0.22),transparent_30%),linear-gradient(145deg,#07101b_0%,#101116_48%,#090705_100%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-50">
          The GTM Table
        </a>
        <nav className="hidden items-center gap-7 text-sm text-stone-300 md:flex">
          <a className="transition hover:text-stone-50" href="#model">
            Model
          </a>
          <a className="transition hover:text-stone-50" href="#formats">
            Formats
          </a>
          <a className="transition hover:text-stone-50" href="#sponsors">
            Sponsors
          </a>
          <a className="transition hover:text-stone-50" href="#about">
            Ryan
          </a>
        </nav>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28">
        <div>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-xl border border-[#d6b15f]/25 bg-[#d6b15f]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f1d99d] sm:px-4">
            <span>Bay Area first</span>
            <span className="h-1 w-1 rounded-full bg-[#d6b15f]" />
            <span>Enterprise GTM</span>
          </div>
          <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-stone-50 sm:text-6xl lg:text-7xl xl:text-8xl">
            Private conversations for founders and operators building real enterprise GTM.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl sm:leading-9">
            The GTM Table is a curated enterprise GTM community where founders, revenue leaders, and top field operators trade the real playbooks behind complex B2B sales.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-400">
            Founders and sponsors fund the room. Operators are the expert network. The experience stays small, practical, and built around the conversations that do not happen on stage.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {paths.map((path) => (
              <a
                key={path.label}
                href={path.href}
                className={`group rounded-2xl border p-4 transition ${
                  path.primary
                    ? "border-[#d6b15f]/60 bg-[#ead39a] text-[#17130c] shadow-[0_20px_80px_rgba(214,177,95,0.2)] hover:bg-[#f2dda8]"
                    : "border-stone-200/12 bg-stone-100/[0.055] text-stone-50 hover:border-[#d6b15f]/55 hover:bg-stone-100/[0.09]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold">{path.label}</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
                <p className={`mt-2 text-sm leading-6 ${path.primary ? "text-[#3b2f18]" : "text-stone-400"}`}>{path.note}</p>
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-stone-500">CTA links are placeholders until final beehiiv URLs are provided.</p>
        </div>

        <aside className="relative rounded-[2rem] border border-stone-100/10 bg-stone-100/[0.055] p-4 shadow-2xl shadow-black/35 backdrop-blur sm:p-6">
          <div className="rounded-[1.5rem] border border-[#d6b15f]/18 bg-[#111316]/90 p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-stone-100/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b15f]">Room model</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-stone-50">Who pays. Who advises. Who hosts.</h2>
              </div>
              <div className="hidden h-14 w-14 rounded-full border border-[#d6b15f]/25 bg-[#d6b15f]/10 sm:block" />
            </div>
            <div className="mt-6 space-y-4">
              {roomStandards.map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-stone-100/10 bg-stone-50/[0.035] p-5">
                  <h3 className="text-lg font-semibold text-stone-50">{title}</h3>
                  <p className="mt-2 leading-7 text-stone-300">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section id="model" className="relative z-10 border-y border-stone-100/10 bg-stone-100/[0.035] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The model"
            title="A paid founder room powered by an operator network and sponsor-funded experiences."
            body="The business model is intentionally clear: founders pay for practical GTM signal, sponsors fund the premium programming, and operators join as the expert network that makes the room worth entering."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audiences.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-stone-100/10 bg-[#111316]/80 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d6b15f]">{item.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-stone-50">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <SectionHeader
          eyebrow="How it works"
          title="Concrete rooms for concrete enterprise GTM problems."
          body="The first version stays intentionally simple: one page, clear interest paths, and curated conversations before any additional infrastructure is built."
        />
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.title} className="grid gap-4 rounded-[1.5rem] border border-stone-100/10 bg-stone-100/[0.045] p-5 sm:grid-cols-[3.25rem_1fr] sm:p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d6b15f]/30 bg-[#d6b15f]/12 font-mono text-sm font-semibold text-[#f1d99d]">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-50">{step.title}</h3>
                <p className="mt-2 leading-7 text-stone-300">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 px-5 pb-20 sm:px-8 sm:pb-24 lg:grid-cols-2 lg:px-10">
        <article className="rounded-[2rem] border border-stone-100/10 bg-[#12100c] p-6 sm:p-8">
          <SectionHeader
            eyebrow="For founders"
            title="Get operator judgment before GTM mistakes compound."
            body="Founders join to access practical enterprise GTM advice from experienced operators who know the difference between a good story and a winnable deal."
          />
          <BulletList items={founderReasons} />
          <div className="mt-8">
            <CTAButton href={ctaLinks.founder}>I’m a founder</CTAButton>
          </div>
        </article>
        <article className="rounded-[2rem] border border-stone-100/10 bg-stone-100/[0.05] p-6 sm:p-8">
          <SectionHeader
            eyebrow="For GTM operators"
            title="Join the expert network behind the room."
            body="Operators join for curated rooms, thoughtful peers, intimate dinners, golf outings, and high-quality founder conversations — not another feed to monitor."
          />
          <BulletList items={operatorReasons} />
          <div className="mt-8">
            <CTAButton href={ctaLinks.operator} variant="secondary">
              I’m a GTM operator
            </CTAButton>
          </div>
        </article>
      </section>

      <section id="formats" className="relative z-10 border-y border-stone-100/10 bg-[#0f151c] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader
              eyebrow="Bay Area first"
              title="Intimate formats that fit the way trust is actually built."
              body="The GTM Table starts in the Bay Area with small rooms designed for substance: private dinners, founder salons, operator tables, golf outings, and sponsor-supported experiences."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {eventFormats.map((format) => (
                <div key={format.title} className="rounded-[1.5rem] border border-[#d6b15f]/16 bg-[#d6b15f]/[0.055] p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-50">{format.title}</h3>
                  <p className="mt-3 leading-7 text-stone-300">{format.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <SectionHeader
          eyebrow="Sponsors"
          title="Fund the rooms where enterprise GTM trust is formed."
          body="Sponsors pay to support the rooms, experiences, and programming that bring high-quality founders and operators together. The value is proximity, credibility, and thoughtful association — not booth traffic or generic lead capture."
        />
        <div className="rounded-[2rem] border border-stone-100/10 bg-stone-100/[0.05] p-6 sm:p-8">
          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-stone-50">Why sponsors would pay</h3>
          <BulletList items={sponsorValue} />
          <div className="mt-8 rounded-2xl border border-[#d6b15f]/18 bg-[#d6b15f]/[0.06] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d6b15f]">Sponsor standard</p>
            <p className="mt-3 leading-7 text-stone-300">
              Sponsors are selected for relevance to enterprise founders and GTM leaders. The room stays curated, premium, and operator-led.
            </p>
          </div>
          <div className="mt-8">
            <CTAButton href={ctaLinks.sponsor}>I’m interested in sponsoring</CTAButton>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 border-y border-stone-100/10 bg-stone-100/[0.035] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[2rem] border border-stone-100/10 bg-[#111316] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b15f]">About Ryan</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-stone-50">Ryan Mindigo</h2>
            <p className="mt-5 leading-8 text-stone-300">
              Ryan is building The GTM Table as a Bay Area-first enterprise GTM room for founders, revenue leaders, operators, and aligned sponsors.
            </p>
          </div>
          <div className="flex items-center rounded-[2rem] border border-stone-100/10 bg-[#12100c] p-6 sm:p-8 lg:p-10">
            <p className="text-2xl font-medium leading-10 tracking-[-0.035em] text-stone-100 sm:text-3xl sm:leading-[1.25]">
              The promise is quality control: the right people, a specific GTM question, and enough trust in the room for founders and operators to say what is actually happening.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d6b15f]">Request a seat</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-stone-50 sm:text-5xl lg:text-6xl">
          Choose the path that matches your role at the table.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
          Founder, operator, sponsor, and updates paths currently use local placeholders and should be replaced with final beehiiv URLs when ready.
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          <CTAButton href={ctaLinks.founder}>I’m a founder</CTAButton>
          <CTAButton href={ctaLinks.operator} variant="secondary">
            I’m a GTM operator
          </CTAButton>
          <CTAButton href={ctaLinks.sponsor} variant="secondary">
            I’m interested in sponsoring
          </CTAButton>
          <CTAButton href={ctaLinks.updates} variant="secondary">
            Keep me posted
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
