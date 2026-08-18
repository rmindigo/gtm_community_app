// Single source of truth for the next table. Edit here and every surface that
// prints it updates — homepage hero and each persona page.
//
// `date` is empty until a real date is set. The line omits whatever is empty
// rather than inventing a placeholder, so nothing false ships by accident.
// Set it to a display string when the date is real, e.g. "MARCH 12".
export const nextTable = {
  date: "",
  city: "SAN FRANCISCO",
  seats: 12,
};

// Standing facts about how the series runs, as opposed to the next specific
// table. Kept on their own line so neither has to carry four facts at once.
export const cadence = {
  frequency: "MONTHLY",
  access: "INVITE ONLY",
};

// "NEXT LEVEL: MARCH 12 · SAN FRANCISCO · 12 SEATS"
// "NEXT LEVEL: SAN FRANCISCO · 12 SEATS"  (no date set)
export function nextTableLine(): string {
  const parts = [
    nextTable.date,
    nextTable.city,
    nextTable.seats ? `${nextTable.seats} SEATS` : "",
  ].filter(Boolean);

  return `NEXT LEVEL: ${parts.join(" · ")}`;
}

// "MONTHLY · INVITE ONLY"
export function cadenceLine(): string {
  return [cadence.frequency, cadence.access].filter(Boolean).join(" · ");
}
