import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/lib/business";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          {business.name}
          <span className="block text-[0.68rem] font-sans font-normal uppercase tracking-[0.18em] text-muted-foreground">
            School projects · {business.city.split(",")[0]}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${business.phone.replace(/\s/g, "")}`}
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call now
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-5 pb-4 pt-2 md:hidden" aria-label="Mobile navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${business.phone.replace(/\s/g, "")}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-base font-medium text-primary-foreground"
          >
            <Phone className="size-4" aria-hidden="true" />
            {business.phone}
          </a>
        </nav>
      )}
    </header>
  );
}