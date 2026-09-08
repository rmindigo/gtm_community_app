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
    label: "FOUNDERS HOST THE TABLE",
    body: "They bring the questions they are working, and they cover the dinner. Pipeline that will not build, the stalled deal, the pricing call, the hire they have not made.",
    accent: "gold",
  },
  {
    key: "operator",
    label: "OPERATORS BRING THE PLAYS",
    body: "They have built the pipe, sold into the account, expanded it, lost it, and won the next one. They say what worked, as guests of the table.",
    accent: "cyan",
  },
  {
    key: "sponsor",
    label: "SPONSORS HOST A ROOM",
    body: "Some tables carry one. They take care of that dinner or that golf outing, get a few minutes at the top, then they listen.",
    accent: "magenta",
  },
];
