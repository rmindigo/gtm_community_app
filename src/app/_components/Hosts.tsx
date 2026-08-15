import HostAvatar from "./HostAvatar";
import { hosts } from "@/lib/hosts";

// The hosts section. Shared by the homepage and the persona pages, so both
// stay in step when a bio or a photo changes.
export default function Hosts({
  eyebrow = "WHO RUNS THE TABLE",
  className = "",
}: {
  eyebrow?: string;
  className?: string;
}) {
  return (
    <section id="hosts" className={className}>
      <div className="font-pixel text-[10px] tracking-[2px] text-cyan">{eyebrow}</div>

      <div className="mt-[18px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-stretch gap-6">
        {hosts.map((host) => (
          <div
            key={host.name}
            className="border-[3px] border-edge bg-panel p-7 shadow-[8px_8px_0_#000]"
          >
            <div className="mb-4 flex items-center gap-4">
              <HostAvatar host={host} />
              <div>
                <div className="font-pixel text-[13px] leading-[1.6] text-white">{host.name}</div>
                <a href={host.linkedin} target="_blank" rel="noreferrer" className="text-[15px]">
                  LinkedIn →
                </a>
              </div>
            </div>
            {host.bio ? <p className="prose-mono text-body">{host.bio}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
