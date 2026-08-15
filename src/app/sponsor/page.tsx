import type { Metadata } from "next";
import PersonaPage from "../_components/PersonaPage";
import { PERSONAS } from "@/lib/personas";
import { personaMetadata } from "@/lib/metadata";

const persona = PERSONAS.sponsor;

export const metadata: Metadata = personaMetadata(persona);

export default function Page() {
  return <PersonaPage persona={persona} />;
}
