import type { Metadata } from "next";
import PathLayout from "../_components/PathLayout";
import PersonaForm from "../_components/PersonaForm";
import { PERSONAS } from "@/lib/personas";

const persona = PERSONAS.founder;

export const metadata: Metadata = {
  title: "Founders | The GTM Table",
  description:
    "Sit with operators who have closed the enterprise deal you are working. Bay Area dinners for founders building B2B revenue.",
};

export default function FounderPage() {
  return (
    <PathLayout
      badge="P1 — FOR FOUNDERS"
      accent="gold"
      title={persona.title}
      intro={persona.intro}
      points={persona.points}
    >
      <PersonaForm
        persona={persona.key}
        fields={persona.fields}
        ctaLabel={persona.ctaLabel}
        accent="gold"
        formHeader="NEW GAME — ENTER PLAYER DATA"
      />
    </PathLayout>
  );
}
