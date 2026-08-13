import type { Metadata } from "next";
import PathLayout from "../_components/PathLayout";
import PersonaForm from "../_components/PersonaForm";
import { PERSONAS } from "@/lib/personas";

const persona = PERSONAS.operator;

export const metadata: Metadata = {
  title: "GTM Operators | The GTM Table",
  description:
    "Sit with operators who have done the work and meet founders on real enterprise problems. Bay Area dinners and golf.",
};

export default function OperatorPage() {
  return (
    <PathLayout
      badge="FOR GTM OPERATORS"
      accent="cyan"
      title={persona.title}
      intro={persona.intro}
      points={persona.points}
    >
      <PersonaForm
        persona={persona.key}
        fields={persona.fields}
        ctaLabel={persona.ctaLabel}
        accent="cyan"
        formHeader="SAY WHAT WORKED"
      />
    </PathLayout>
  );
}
