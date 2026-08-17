/**
 * Single source of truth for all business information.
 * Anything wrapped in [SQUARE BRACKETS] is a placeholder that has NOT been
 * confirmed by the owner yet: replace it here and it updates site-wide.
 */
export const business = {
  name: "__project_studio",
  tagline: "Neat, hand-made school projects, done properly and on time.",
  intro:
    "__project_studio: makes projects, assignments and files for students in Ludhiana, prepared neatly and handed over ready to submit.",
  city: "Ludhiana, Punjab",
  address: "[ADD FULL SHOP / PICKUP ADDRESS]",
  phone: "+91 78147 49588",
  whatsapp: "917814749588",
  email: "[ADD BUSINESS EMAIL]",
  hours: "[ADD OPENING HOURS]",
  instagram:
    "https://www.instagram.com/__project_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  instagramHandle: "@__project_studio",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Ludhiana%2C+Punjab",
} as const;

export type ServiceItem = {
  name: string;
  description: string;
  /** Only filled in once the owner shares actual pricing. */
  price: string;
};

export const services: ServiceItem[] = [
  {
    name: "School projects",
    description: "School projects made on the topic your school assigns.",
    price: "Rs 500 (Rs 800 with a theme)",
  },
  {
    name: "College assignments",
    description: "College assignments written out neatly and completed as required.",
    price: "Rs 4 per page",
  },
  {
    name: "Practical notebooks",
    description: "Practical notebooks written and completed for your subject.",
    price: "Rs 300 to Rs 500",
  },
  {
    name: "Notes of all kinds",
    description: "Notes of all kinds, written out for any subject or class.",
    price: "It depends",
  },
];

export const galleryPlaceholders = [
  "[ADD PHOTO: finished project]",
  "[ADD PHOTO: assignment pages]",
  "[ADD PHOTO: practical notebook]",
  "[ADD PHOTO: project file pages]",
  "[ADD PHOTO: written notes]",
  "[ADD PHOTO: completed order ready for pickup]",
];