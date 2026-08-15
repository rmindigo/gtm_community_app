import type { AccentName } from "./theme";

export type Host = {
  name: string;
  // Monogram shown until `image` is set.
  initials: string;
  linkedin: string;
  accent: AccentName;
  // Leave empty and the card renders without a paragraph, so no placeholder
  // copy ships by accident.
  bio: string;
  // Optional headshot. Drop a file in /public and point at it — the avatar
  // switches from monogram to photo with no other change. Square crops work
  // best; the source is rendered small, so 200×200 is plenty.
  image?: string;
};

// The people running the room.
export const hosts: Host[] = [
  {
    name: "Ryan Mindigo",
    initials: "RM",
    linkedin: "https://www.linkedin.com/in/rmindigo/",
    accent: "gold",
    bio: "Ryan has spent 16 years in enterprise GTM, most recently on the founding team at Brief and before that at BrowserStack, where he scaled the West Coast enterprise team from one AE to ten and landed Google, Wells Fargo, Oracle, and HSBC. A 2x founder and early Yammer alum, he puts founders across the table from operators who have run the play.",
  },
  {
    name: "Danny Varty",
    initials: "DV",
    linkedin: "https://www.linkedin.com/in/danny-varty-9a9aa115/",
    accent: "cyan",
    bio: "Danny has spent 15 years selling into the enterprise, most recently as founding sales leader at Ragie and before that at Iterable, Meta, and Microsoft, where he carried the $80M Office 365 number across the West Coast. He has opened the first enterprise accounts at startups and closed the largest ones at scale.",
  },
];
