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

// "NEXT TABLE: MARCH 12 · SAN FRANCISCO · 12 SEATS"
// "NEXT TABLE: SAN FRANCISCO · 12 SEATS"  (no date set)
export function nextTableLine(): string {
  const parts = [
    nextTable.date,
    nextTable.city,
    nextTable.seats ? `${nextTable.seats} SEATS` : "",
  ].filter(Boolean);

  return `NEXT TABLE: ${parts.join(" · ")}`;
}
