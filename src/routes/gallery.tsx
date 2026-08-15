import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { GalleryGrid } from "@/components/site/GalleryGrid";

const title = "Gallery | __project_studio School Projects";
const description =
  "A gallery of school charts, models, files and craft work made by __project_studio in Ludhiana. Owner-approved photos are being added.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <Section
      eyebrow="Gallery"
      title="Photos of our work"
      intro="Photographs of finished projects have not been shared yet. Each slot below is a marked placeholder and can be swapped for a real, owner-approved photo."
    >
      <GalleryGrid />
    </Section>
  );
}