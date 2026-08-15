import { roomModel } from "@/lib/roomModel";
import { ACCENTS } from "@/lib/theme";
import type { PersonaKey } from "@/lib/personas";

// The three roles, with the reader's own row lit and the other two dimmed.
// Places the visitor in the room without offering them a door out of it.
export default function RoomModelStrip({ current }: { current: PersonaKey }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[14px]">
      {roomModel.map((role) => {
        const isCurrent = role.key === current;
        const color = ACCENTS[role.accent];

        return (
          <div
            key={role.key}
            className="border-[3px] p-4"
            style={{
              background: isCurrent ? "#13132b" : "#0d0d20",
              borderColor: isCurrent ? color : "#2a2a52",
              opacity: isCurrent ? 1 : 0.55,
            }}
          >
            <div
              className="font-pixel text-[10px] leading-[1.7]"
              style={{ color: isCurrent ? color : "#a9a9c8" }}
            >
              {role.label}
            </div>
            <p className="mt-2 text-base leading-[1.4] text-body">{role.body}</p>
          </div>
        );
      })}
    </div>
  );
}
