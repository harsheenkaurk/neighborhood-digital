import { ImageIcon } from "lucide-react";
import { galleryPlaceholders } from "@/lib/business";

/**
 * Owner-approved photographs are not available yet, so each tile is a clearly
 * marked placeholder. To use a real photo: drop it in `src/assets/`, import it,
 * and render an <img> with descriptive alt text in place of the tile below.
 */
export function GalleryGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {galleryPlaceholders.map((label) => (
        <li
          key={label}
          className="paper-grain flex aspect-4/3 flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-card p-6 text-center transition-colors hover:border-accent"
        >
          <ImageIcon className="size-7 text-accent" aria-hidden="true" />
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
        </li>
      ))}
    </ul>
  );
}