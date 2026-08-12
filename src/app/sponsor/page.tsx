import type { Metadata } from "next";
import PathLayout from "../_components/PathLayout";
import PersonaForm from "../_components/PersonaForm";
import { PERSONAS } from "@/lib/personas";

const persona = PERSONAS.sponsor;

export const metadata: Metadata = {
  title: "Sponsors | The GTM Table",
  description:
    "Cover the dinners and the golf that bring founders and operators together. Proximity and trust, not a booth.",
};

export default function SponsorPage() {
  return (
    <PathLayout
      badge="P3 — SPONSORS"
      accent="magenta"
      title={persona.title}
      intro={persona.intro}
      points={persona.points}
    >
      <PersonaForm
        persona={persona.key}
        fields={persona.fields}
        ctaLabel={persona.ctaLabel}
        accent="magenta"
        formHeader="CO-OP MODE — ENTER SPONSOR DATA"
      />
    </PathLayout>
  );
}
