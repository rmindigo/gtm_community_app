import type { PersonaKey } from "./personas";
import type { AccentName } from "./theme";

// The three roles at the table. Used by the homepage Room Model panel and by
// the strip on each persona page, so the wording stays identical in both.
export const roomModel: {
  key: PersonaKey;
  label: string;
  body: string;
  accent: AccentName;
}[] = [
  {
    key: "founder",
    label: "FOUNDERS RESERVE THE SEAT",
    body: "They bring the questions they are working. Pipeline that will not build, the stalled deal, the pricing call, the hire they have not made.",
    accent: "gold",
  },
  {
    key: "operator",
    label: "OPERATORS BRING THE PLAYS",
    body: "They have built the pipe, sold into the account, expanded it, lost it, and won the next one. They say what worked.",
    accent: "cyan",
  },
  {
    key: "sponsor",
    label: "SPONSORS COVER THE ROOM",
    body: "They take care of the dinner and the golf. They get a few minutes at the top, then they listen.",
    accent: "magenta",
  },
];
