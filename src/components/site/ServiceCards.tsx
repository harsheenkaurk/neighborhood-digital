import { services } from "@/lib/business";

export function ServiceCards({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <li
          key={s.name}
          className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_12px_28px_-18px_oklch(0.256_0.043_259/0.45)]"
        >
          <h3 className="text-lg font-semibold text-card-foreground">{s.name}</h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
            {s.description}
          </p>
          <p className="mt-5 border-t border-dashed border-border pt-4 text-sm font-medium text-foreground">
            Price:{" "}
            <span className="rounded border border-dashed border-accent/70 bg-accent/10 px-1.5 py-0.5 text-xs text-marigold-foreground">
              {s.price}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}