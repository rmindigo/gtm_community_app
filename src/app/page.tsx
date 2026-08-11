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
    note: "Sit with operators who have closed the deal you are working.",
    primary: true,
  },
  {
    label: "I’m a GTM operator",
    href: ctaLinks.operator,
    note: "Trade notes with people who have carried the number. Meet founders worth the time.",
  },
  {
    label: "I’m interested in sponsoring",
    href: ctaLinks.sponsor,
    note: "Cover the table. The dinners, the golf, the rooms.",
  },
  {
    label: "Keep me posted",
    href: ctaLinks.updates,
    note: "Hear when the next Bay Area table opens.",
  },
];

const roomStandards = [
  ["Founders pay to sit", "They bring the deal on the table. The stalled pipe, the first enterprise logo, the price nobody will sign."],
  ["Operators bring the plays", "They have sold into the account, expanded it, lost it, and won the next one. They say what worked."],
  ["Sponsors cover the room", "They pay for the dinner and the golf. They do not pitch across the table."],
];

const audiences = [
  {
    title: "Founders",
    tag: "Paying customer",
    body: "Founders selling into the enterprise. They come with the pipeline, the price, the buyer they cannot reach, the hire they have not made.",
  },
  {
    title: "GTM operators",
    tag: "Expert network",
    body: "AEs, CROs, RevOps, partnerships, success, marketing, and sales engineers. They carried the number and know how the deal was won.",
  },
  {
    title: "Sponsors",
    tag: "Funding partner",
    body: "Companies that want time with founders and operators. They pay for the room and stay off the sales floor.",
  },
];

const steps = [
  {
    title: "Build the table",
    body: "Each table holds a few founders, a few operators, and one enterprise problem to work.",
  },
  {
    title: "Set the question",
    body: "The question is narrow. Open the first enterprise account. Fix the stalled pipe. Hire the first VP of Sales. Run the partner motion.",
  },
  {
    title: "Trade the plays",
    body: "Operators say what worked in the field. Founders bring the mess behind the deal.",
  },
  {
    title: "Keep it light",
    body: "No portal. No feed. A follow-up, an introduction, and the next table when it earns the time.",
  },
];

const founderReasons = [
  "Test the GTM call before it costs the quarter.",
  "Hear from operators who carried the number and ran the team.",
  "Talk through the buyer, the deal, the hire, the price, the next segment.",
];

const operatorReasons = [
  "Sit with operators who have done the work. No panels. No stage.",
  "Meet founders working real enterprise problems.",
  "Come to the dinners and the golf across the Bay Area.",
];

const eventFormats = [
  {
    title: "Founder advisory dinners",
    body: "A few founders. A few operators. One deal to work. Dinner on the table.",
  },
  {
    title: "Operator salons",
    body: "Field leaders trade notes on how the enterprise buys now.",
  },
  {
    title: "Golf outings",
    body: "Eighteen holes. Room to talk between shots.",
  },
  {
    title: "Sponsor-hosted tables",
    body: "A room a sponsor pays for. They host. They do not pitch.",
  },
];

const sponsorValue = [
  "A seat near the founders and operators in the room",
  "Time with the deal before it becomes a vendor list",
  "The dinners and the golf to host",
  "Time to earn the trust of the people who sign",
];

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a1f]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-stone-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">{body}</p> : null}
    </div>
  );
}

function CTAButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  const classes =
    variant === "primary"
      ? "border border-[#d6b15f] bg-[#e7c778] text-[#2a2109] shadow-[0_14px_44px_rgba(214,177,95,0.28)] hover:bg-[#eed08a]"
      : "border border-stone-900/15 bg-white text-stone-900 shadow-sm hover:border-[#d6b15f]/70 hover:bg-stone-50";

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
    <ul className="mt-6 space-y-4 text-stone-600">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c69a3a]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f2ea] text-stone-800">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_18%_8%,rgba(214,177,95,0.16),transparent_32%),radial-gradient(circle_at_85%_4%,rgba(190,160,100,0.12),transparent_34%),linear-gradient(145deg,#f8f5ee_0%,#f3eee3_50%,#efe7d7_100%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-900">
          The GTM Table
        </a>
        <nav className="hidden items-center gap-7 text-sm text-stone-500 md:flex">
          <a className="transition hover:text-stone-900" href="#model">
            Model
          </a>
          <a className="transition hover:text-stone-900" href="#formats">
            Formats
          </a>
          <a className="transition hover:text-stone-900" href="#sponsors">
            Sponsors
          </a>
          <a className="transition hover:text-stone-900" href="#about">
            Ryan
          </a>
        </nav>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28">
        <div>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-xl border border-[#d6b15f]/40 bg-[#d6b15f]/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6a1f] sm:px-4">
            <span>Bay Area first</span>
            <span className="h-1 w-1 rounded-full bg-[#c69a3a]" />
            <span>Enterprise GTM</span>
          </div>
          <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-stone-900 sm:text-6xl lg:text-7xl xl:text-8xl">
            Founders and operators. One table. Straight talk on enterprise deals.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl sm:leading-9">
            The GTM Table is a dinner. Restaurants around San Francisco and the Bay Area. Founders bring the deal they are trying to close. Operators bring the plays that closed theirs. Nobody performs. Everybody talks.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-500">
            Founders pay to sit down. Sponsors cover the table. Operators come to talk. The room stays small. The talk stays honest.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {paths.map((path) => (
              <a
                key={path.label}
                href={path.href}
                className={`group rounded-2xl border p-4 transition ${
                  path.primary
                    ? "border-[#d6b15f] bg-[#e7c778] text-[#2a2109] shadow-[0_16px_50px_rgba(214,177,95,0.26)] hover:bg-[#eed08a]"
                    : "border-stone-900/12 bg-white text-stone-900 shadow-sm hover:border-[#d6b15f]/60 hover:bg-stone-50"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold">{path.label}</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
                <p className={`mt-2 text-sm leading-6 ${path.primary ? "text-[#4a3c17]" : "text-stone-500"}`}>{path.note}</p>
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-stone-400">CTA links are placeholders until final beehiiv URLs are provided.</p>
        </div>

        <aside className="relative rounded-[2rem] border border-stone-900/10 bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-8">
          <div className="border-b border-stone-900/10 pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a1f]">Room model</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-stone-900">Who pays. Who talks. Who hosts.</h2>
          </div>
          <div className="mt-6 space-y-4">
            {roomStandards.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-stone-900/8 bg-stone-50 p-5">
                <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 leading-7 text-stone-600">{body}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="model" className="relative z-10 border-y border-stone-900/10 bg-stone-900/[0.02] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The model"
            title="Founders pay. Operators talk. Sponsors cover the table."
            body="The money is simple. Founders pay to sit down. Sponsors cover the room. Operators come for the people at the table."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audiences.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-stone-900/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a6a1f]">{item.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-stone-900">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <SectionHeader
          eyebrow="How it works"
          title="One room. One problem. The people who have solved it."
          body="One page and four doors. Pick yours. The room comes after."
        />
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.title} className="grid gap-4 rounded-[1.5rem] border border-stone-900/10 bg-white p-5 shadow-sm sm:grid-cols-[3.25rem_1fr] sm:p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d6b15f]/40 bg-[#d6b15f]/15 font-mono text-sm font-semibold text-[#8a6a1f]">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-900">{step.title}</h3>
                <p className="mt-2 leading-7 text-stone-600">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-5 px-5 pb-20 sm:px-8 sm:pb-24 lg:grid-cols-2 lg:px-10">
        <article className="rounded-[2rem] border border-stone-900/10 bg-white p-6 shadow-sm sm:p-8">
          <SectionHeader
            eyebrow="For founders"
            title="Get the operator’s read before the mistake compounds."
            body="Founders come for operators who know the difference between a good story and a deal that closes."
          />
          <BulletList items={founderReasons} />
          <div className="mt-8">
            <CTAButton href={ctaLinks.founder}>I’m a founder</CTAButton>
          </div>
        </article>
        <article className="rounded-[2rem] border border-stone-900/10 bg-white p-6 shadow-sm sm:p-8">
          <SectionHeader
            eyebrow="For GTM operators"
            title="The room runs on operators."
            body="Operators come for the peers, the dinners, the golf, and founders worth the time. Not another feed to check."
          />
          <BulletList items={operatorReasons} />
          <div className="mt-8">
            <CTAButton href={ctaLinks.operator} variant="secondary">
              I’m a GTM operator
            </CTAButton>
          </div>
        </article>
      </section>

      <section id="formats" className="relative z-10 border-y border-stone-900/10 bg-stone-900/[0.03] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader
              eyebrow="Bay Area first"
              title="Trust gets built over dinner, not on a stage."
              body="The GTM Table starts in the Bay Area. Small rooms. Dinners, salons, operator tables, golf. A sponsor covers the check."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {eventFormats.map((format) => (
                <div key={format.title} className="rounded-[1.5rem] border border-[#d6b15f]/35 bg-[#d6b15f]/[0.09] p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-900">{format.title}</h3>
                  <p className="mt-3 leading-7 text-stone-600">{format.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <SectionHeader
          eyebrow="Sponsors"
          title="Cover the room where the deals get talked about."
          body="Sponsors pay for the dinners, the golf, and the rooms that bring founders and operators together. They get proximity and trust. Not a booth. Not a lead list."
        />
        <div className="rounded-[2rem] border border-stone-900/10 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-stone-900">Why sponsors pay</h3>
          <BulletList items={sponsorValue} />
          <div className="mt-8 rounded-2xl border border-[#d6b15f]/35 bg-[#d6b15f]/[0.09] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6a1f]">Sponsor standard</p>
            <p className="mt-3 leading-7 text-stone-600">
              A sponsor has to fit the founders and operators at the table. The room stays small. Operators run it.
            </p>
          </div>
          <div className="mt-8">
            <CTAButton href={ctaLinks.sponsor}>I’m interested in sponsoring</CTAButton>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 border-y border-stone-900/10 bg-stone-900/[0.02] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[2rem] border border-stone-900/10 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a1f]">About Ryan</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-stone-900">Ryan Mindigo</h2>
            <p className="mt-5 leading-8 text-stone-600">
              Ryan is building The GTM Table in the Bay Area. He puts founders across the table from operators who have run the play, and sponsors who cover the room.
            </p>
          </div>
          <div className="flex items-center rounded-[2rem] border border-stone-900/10 bg-[#faf6ec] p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="text-2xl font-medium leading-10 tracking-[-0.035em] text-stone-800 sm:text-3xl sm:leading-[1.25]">
              The promise is the room. The right people. One hard question. Enough trust to say what is actually going on in the deal.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a1f]">Request a seat</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-stone-900 sm:text-5xl lg:text-6xl">
          Take the seat that fits your role at the table.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
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
