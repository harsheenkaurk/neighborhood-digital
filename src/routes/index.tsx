import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock3, Ruler, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { business } from "@/lib/business";
import { Section } from "@/components/site/Section";
import { ServiceCards } from "@/components/site/ServiceCards";

const title = "__project_studio | School Projects Made Neatly in Ludhiana";
const description =
  "__project_studio makes school projects, college assignments, practical notebooks and notes for students in Ludhiana, Punjab. Call +91 78147 49588.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    icon: Ruler,
    title: "Neat, hand-made work",
    body: "School projects, college assignments and practical notebooks put together carefully, with clean writing and tidy finishing.",
  },
  {
    icon: Clock3,
    title: "Ready by your date",
    body: "Share your submission date when you enquire and the project is prepared to be ready before it.",
  },
  {
    icon: Sparkles,
    title: "Made to the topic given",
    body: "Work is made for the exact topic and class your school has assigned, not picked off a shelf.",
  },
  {
    icon: MapPin,
    title: "Based in Ludhiana",
    body: "Serving students across Ludhiana, Punjab. Pickup details on request.",
  },
];

function Index() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {business.city}
            </p>
            <h1 className="mt-5 text-3xl leading-[1.1] sm:text-5xl">{business.name}</h1>
            <p className="mt-4 font-display text-lg text-muted-foreground sm:text-xl">
              {business.tagline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {business.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get in touch
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-base font-medium text-foreground transition-colors hover:border-accent"
              >
                See what we make
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Why students come to us"
        title="Simple, careful project work"
        intro="A short list of what you can expect when you hand over a project."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.title} className="rounded-lg border border-border bg-card p-6">
              <h.icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold text-card-foreground">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tinted
        eyebrow="What we make"
        title="Services we take on"
        intro="Prices are shared on enquiry, since they depend on size, material and how soon it is needed."
      >
        <ServiceCards limit={3} />
        <div className="mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4"
          >
            View all project types
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <Section title="Have a project due soon?" intro="Call or message with your class, subject and submission date.">
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${business.phone.replace(/\s/g, "")}`}
            className="rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Call {business.phone}
          </a>
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border border-border bg-card px-5 py-3 text-base font-medium text-foreground transition-colors hover:border-accent"
          >
            Message on WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
}
