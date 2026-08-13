import type { Metadata } from "next";
import PathLayout from "../_components/PathLayout";
import UpdatesForm from "../_components/UpdatesForm";

export const metadata: Metadata = {
  title: "Stay posted | The GTM Table",
  description: "Hear when the next Bay Area table opens. Leave your email. Nothing else.",
};

export default function UpdatesPage() {
  return (
    <PathLayout
      badge="KEEP ME POSTED"
      accent="green"
      title="Hear when the next table opens."
      intro="The GTM Table starts in the Bay Area. Leave your email. We tell you when a room opens near you, and what it is about."
      points={[
        "Word when a Bay Area table opens.",
        "The theme and the room, before it fills.",
        "Nothing else.",
      ]}
    >
      <UpdatesForm />
    </PathLayout>
  );
}
