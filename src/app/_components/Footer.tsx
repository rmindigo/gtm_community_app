import Link from "next/link";

// `prefix` lets the persona pages point the anchors back at the homepage.
// `width` matches the footer to the page's own content column.
export default function Footer({
  prefix = "",
  width = "max-w-[1140px]",
  // Home carries the long sign-off; the form pages keep it short.
  tagline = "The GTM Table. Bay Area. © 2026 · GAME OVER? PRESS START.",
}: {
  prefix?: string;
  width?: string;
  tagline?: string;
}) {
  const links = [
    ["How it works", `${prefix}#how`],
    ["Formats", `${prefix}#formats`],
    ["Sponsors", `${prefix}#sponsors`],
    ["Hosts", `${prefix}#hosts`],
  ];

  return (
    <footer className="border-t-[3px] border-edge-dim bg-void">
      <div
        className={`mx-auto ${width} flex flex-wrap items-center justify-between gap-5 px-6 py-9`}
      >
        <div>
          <Link
            href="/"
            className="font-pixel text-[11px] tracking-[2px] text-white hover:text-gold"
          >
            THE GTM TABLE
          </Link>
          <div className="mt-2 text-[15px] text-muted">{tagline}</div>
        </div>
        <nav className="flex flex-wrap gap-[22px] text-base">
          {links.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
