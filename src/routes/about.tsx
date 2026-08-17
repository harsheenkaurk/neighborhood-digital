import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { business } from "@/lib/business";
import { Section, Placeholder } from "@/components/site/Section";

const title = "About __project_studio | School Project Makers in Ludhiana";
const description =
  "Who we are: a small Ludhiana studio that makes school projects, college assignments, practical notebooks and notes for students, prepared neatly and on time.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About us"
        title="A small studio for student project work"
        intro={`${business.name} makes school projects for students in ${business.city}. Work is prepared by hand and handed over ready to submit.`}
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-lg border border-border bg-card p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-card-foreground">Our story</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <Placeholder>[ADD BUSINESS STORY: how and when the studio started, in the owner's own words]</Placeholder>
            </p>
            <h3 className="mt-8 text-lg font-semibold text-card-foreground">What we offer</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              School projects, college assignments, practical notebooks and notes of all kinds.
              Every item is made for the topic and class the school or college has assigned. See the{" "}
              <Link
                to="/services"
                className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4"
              >
                services page
              </Link>{" "}
              for the full list.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-card-foreground">What makes it special</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Hand-made finishing rather than printed shortcuts.</li>
              <li>Work planned around your submission date.</li>
              <li>Direct conversation with the person making your project.</li>
              <li>
                <Placeholder>[ADD ANY OTHER OWNER-CONFIRMED DETAIL]</Placeholder>
              </li>
            </ul>
          </article>

          <aside className="rounded-lg border border-border bg-secondary/60 p-6">
            <h3 className="text-lg font-semibold text-foreground">Where we are</h3>
            <p className="mt-3 flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {business.city}
                <br />
                <Placeholder>{business.address}</Placeholder>
              </span>
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Opening hours: <Placeholder>{business.hours}</Placeholder>
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact us
            </Link>
          </aside>
        </div>
      </Section>

      <Section
        tinted
        eyebrow="Customer feedback"
        title="Testimonials"
        intro="No customer testimonials have been collected yet, so nothing is shown here. Real, owner-approved reviews can be added in this section later."
      >
        <p className="text-sm text-muted-foreground">
          <Placeholder>[ADD GENUINE CUSTOMER TESTIMONIALS ONCE COLLECTED]</Placeholder>
        </p>
      </Section>
    </>
  );
}