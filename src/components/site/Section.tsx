import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tinted = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={tinted ? "bg-secondary/50 py-16 sm:py-20" : "py-16 sm:py-20"}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h2 className="rule-underline mt-2 text-2xl sm:text-3xl">{title}</h2>
          {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-dashed border-accent/70 bg-accent/10 px-1.5 py-0.5 text-[0.8em] font-medium text-marigold-foreground">
      {children}
    </span>
  );
}