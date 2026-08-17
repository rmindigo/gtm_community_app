import FormatIcon, { type FormatIconName } from "../_components/FormatIcon";

// TEMPORARY preview surface for the new visuals. Delete this route once the
// icons and OG cards are approved — it is not linked from anywhere.
export const metadata = {
  title: "Preview | The GTM Table",
  robots: { index: false, follow: false },
};

const icons: { name: FormatIconName; label: string; color: string }[] = [
  { name: "dinner", label: "Founder advisory dinners", color: "#ffd23f" },
  { name: "salon", label: "Operator salons", color: "#52d8ff" },
  { name: "golf", label: "Golf outings", color: "#46f797" },
  { name: "table", label: "Sponsor-hosted tables", color: "#ff5db1" },
];

const ogPages = [
  { path: "/opengraph-image", label: "Homepage" },
  { path: "/founder/opengraph-image", label: "/founder" },
  { path: "/operator/opengraph-image", label: "/operator" },
  { path: "/sponsor/opengraph-image", label: "/sponsor" },
];

export default function Preview() {
  return (
    <main className="mx-auto max-w-[1140px] px-6 py-12">
      <div className="font-pixel text-[10px] tracking-[2px] text-green">PREVIEW — NOT LINKED</div>
      <h1 className="mt-4 font-pixel text-[20px] leading-[1.6] text-white">New visuals</h1>

      {/* ---- format icons ---- */}
      <h2 className="mt-12 font-pixel text-[13px] leading-[1.7] text-white">
        Format icons — at size, in card
      </h2>
      <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {icons.map((icon) => (
          <div
            key={icon.name}
            className="border-[3px] border-edge bg-panel p-[18px] shadow-[5px_5px_0_#000]"
          >
            <div className="flex items-center gap-3" style={{ color: icon.color }}>
              <FormatIcon name={icon.name} />
              <div className="font-pixel text-[10px] leading-[1.6]">{icon.label}</div>
            </div>
            <p className="mt-2 text-base leading-[1.4] text-body">
              A few founders. A few operators. A few questions to work.
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-pixel text-[13px] leading-[1.7] text-white">
        Icons enlarged — check the pixel grid
      </h2>
      <div className="mt-5 flex flex-wrap gap-8">
        {icons.map((icon) => (
          <div key={icon.name} className="text-center">
            <div
              className="border-[3px] border-edge-dim bg-band p-4"
              style={{ color: icon.color }}
            >
              <FormatIcon name={icon.name} className="block h-24 w-24" />
            </div>
            <div className="mt-2 text-[13px] text-muted">{icon.name}</div>
          </div>
        ))}
      </div>

      {/* ---- OG cards ---- */}
      <h2 className="mt-16 font-pixel text-[13px] leading-[1.7] text-white">
        Link preview cards — 1200×630
      </h2>
      <p className="prose-mono mt-3 text-muted">
        These are the real generated images, shown at half size. This is what
        renders when someone shares the link in Slack, LinkedIn or iMessage.
      </p>
      <div className="mt-6 grid gap-8">
        {ogPages.map((page) => (
          <div key={page.path}>
            <div className="mb-2 font-pixel text-[10px] tracking-[1px] text-gold">{page.label}</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.path}
              alt={`OG card for ${page.label}`}
              width={600}
              height={315}
              className="block border-[3px] border-edge"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
