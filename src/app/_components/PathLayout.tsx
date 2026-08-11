import Link from "next/link";

type PathLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  children: React.ReactNode;
};

export default function PathLayout({ eyebrow, title, intro, points, children }: PathLayoutProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f2ea] text-stone-800">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_18%_8%,rgba(214,177,95,0.16),transparent_32%),radial-gradient(circle_at_85%_4%,rgba(190,160,100,0.12),transparent_34%),linear-gradient(145deg,#f8f5ee_0%,#f3eee3_50%,#efe7d7_100%)]" />

      <header className="relative z-10 mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-900">
          The GTM Table
        </Link>
        <Link href="/" className="text-sm text-stone-500 transition hover:text-stone-900">
          ← Back
        </Link>
      </header>

      <section className="relative z-10 mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#8a6a1f]">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-stone-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-stone-600 sm:text-xl sm:leading-9">{intro}</p>

        <ul className="mt-9 space-y-4 text-stone-700">
          {points.map((point) => (
            <li key={point} className="flex gap-3 leading-7">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c69a3a]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">{children}</div>
      </section>
    </main>
  );
}
