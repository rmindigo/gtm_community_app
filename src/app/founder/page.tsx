import type { Metadata } from "next";
import PersonaPage from "../_components/PersonaPage";
import { PERSONAS } from "@/lib/personas";

const persona = PERSONAS.founder;

export const metadata: Metadata = {
  title: "Founders | The GTM Table",
};

export default function Page() {
  return <PersonaPage persona={persona} />;
}
