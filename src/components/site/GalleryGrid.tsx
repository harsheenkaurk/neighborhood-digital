import gallery1 from "@/assets/gallery-1.png.asset.json";
import gallery2 from "@/assets/gallery-2.png.asset.json";
import gallery3 from "@/assets/gallery-3.png.asset.json";
import gallery4 from "@/assets/gallery-4.png.asset.json";

const photos = [
  { src: gallery3.url, alt: "Biology practical file page with a hand-drawn labelled diagram of the human heart" },
  { src: gallery4.url, alt: "Decorated Mathematics lab manual cover made with cut-paper shapes" },
  { src: gallery2.url, alt: "Hand-drawn and coloured index pages for practical notebooks" },
  { src: gallery1.url, alt: "Neatly ruled accounts schedules written out on notebook pages" },
];

export function GalleryGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <li
          key={photo.src}
          className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-colors hover:border-accent"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}