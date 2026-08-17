import { createFileRoute, Link } from "@tanstack/react-router";
import { business } from "@/lib/business";
import { Section } from "@/components/site/Section";
import { ServiceCards } from "@/components/site/ServiceCards";

const title = "Services We Offer | __project_studio Ludhiana";
const description =
  "School projects, college assignments, practical notebooks and notes made by __project_studio in Ludhiana. Prices shared on enquiry.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="What we make for students"
        intro="Each type of work below is made to the topic your school or college assigns."
      >
        <ServiceCards />
      </Section>

      <Section
        tinted
        title="How an order works"
        intro="Three simple steps from enquiry to handover."
      >
        <ol className="grid gap-5 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Tell us the topic",
              body: "Share the class, subject, topic and your submission date by call or WhatsApp.",
            },
            {
              step: "02",
              title: "Confirm the details",
              body: "We agree on size, material and price before any work begins.",
            },
            {
              step: "03",
              title: "Collect it",
              body: "The finished project is handed over before your submission date.",
            },
          ].map((s) => (
            <li key={s.step} className="rounded-lg border border-border bg-card p-6">
              <span className="font-display text-2xl text-accent">{s.step}</span>
              <h3 className="mt-3 text-base font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ask about your project
          </Link>
          <a
            href={`tel:${business.phone.replace(/\s/g, "")}`}
            className="rounded-md border border-border bg-card px-5 py-3 text-base font-medium text-foreground transition-colors hover:border-accent"
          >
            Call {business.phone}
          </a>
        </div>
      </Section>
    </>
  );
}