import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock3, Instagram, MessageCircle } from "lucide-react";
import { business } from "@/lib/business";
import { Section, Placeholder } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";

const title = "Contact __project_studio | School Projects in Ludhiana";
const description =
  "Call +91 78147 49588 or send an enquiry to __project_studio in Ludhiana for projects, assignments, practical notebooks, project files and notes.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Get in touch"
      intro="Call or message with your class, subject, topic and submission date, and we will tell you what is possible."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-8">
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <span className="block font-medium text-foreground">Phone</span>
                <a
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                >
                  {business.phone}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <span className="block font-medium text-foreground">WhatsApp</span>
                <a
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Message us on WhatsApp
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <span className="block font-medium text-foreground">Instagram</span>
                <a
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  href={business.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {business.instagramHandle}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <span className="block font-medium text-foreground">Location</span>
                <span className="text-muted-foreground">{business.city}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-card-foreground">Send an enquiry</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            This form checks your details in the browser only. It is not connected to an email
            service or backend yet, so please call or use WhatsApp for anything urgent.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}