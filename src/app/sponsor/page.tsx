import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PersonaPage from "../_components/PersonaPage";
import { PERSONAS, SHOW_SPONSORS } from "@/lib/personas";
import { personaMetadata } from "@/lib/metadata";

const persona = PERSONAS.sponsor;

export const metadata: Metadata = personaMetadata(persona);

export default function Page() {
  if (!SHOW_SPONSORS) notFound();
  return <PersonaPage persona={persona} />;
}
