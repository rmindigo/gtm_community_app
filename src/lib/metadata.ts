import type { Metadata } from "next";
import type { Persona } from "./personas";

// Builds the per-page metadata from a persona's `meta` block, so the three
// route files stay identical and the copy lives with the rest of the persona.
export function personaMetadata(persona: Persona): Metadata {
  const { title, description, ogTitle, ogDescription, ogImage } = persona.meta;
  const url = `/${persona.key}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "The GTM Table",
      url,
      title: ogTitle,
      description: ogDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}
