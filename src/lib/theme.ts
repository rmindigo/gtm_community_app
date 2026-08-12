// Retro arcade theme knobs.

// CRT scanline overlay, off by default. Set to true to switch it on everywhere.
export const SCANLINES = false;

// One accent per player. Drives borders, focus rings, ::selection and buttons.
export const ACCENTS = {
  gold: "#ffd23f", // founders / primary
  cyan: "#52d8ff", // GTM operators
  magenta: "#ff5db1", // sponsors
  green: "#46f797", // meta / keep me posted
} as const;

export type AccentName = keyof typeof ACCENTS;
