/**
 * Single source of truth for all business information.
 * Anything wrapped in [SQUARE BRACKETS] is a placeholder that has NOT been
 * confirmed by the owner yet: replace it here and it updates site-wide.
 */
export const business = {
  name: "__project_studio",
  tagline: "Neat, hand-made school projects, done properly and on time.",
  intro:
    "__project_studio makes school projects for students in Ludhiana: charts, models, files and craft work, prepared neatly and handed over ready to submit.",
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
    name: "Chart paper projects",
    description:
      "Hand-written and hand-decorated charts on the topic your school assigns, with clean lettering and borders.",
    price: "[ADD PRICE]",
  },
  {
    name: "Working & still models",
    description:
      "Science and social studies models built from cardboard, thermocol and craft material, finished and labelled.",
    price: "[ADD PRICE]",
  },
  {
    name: "Project files & assignments",
    description:
      "Neatly written files with cover page, index and decorated pages, arranged in the order your teacher asks for.",
    price: "[ADD PRICE]",
  },
  {
    name: "Craft & decoration work",
    description:
      "Craft items, cards and display work for school activities and competitions.",
    price: "[ADD PRICE]",
  },
  {
    name: "[ADD SERVICE NAME]",
    description: "[ADD OWNER-CONFIRMED SERVICE DESCRIPTION]",
    price: "[ADD PRICE]",
  },
  {
    name: "[ADD SERVICE NAME]",
    description: "[ADD OWNER-CONFIRMED SERVICE DESCRIPTION]",
    price: "[ADD PRICE]",
  },
];

/** Gallery slots to be replaced with owner-approved photographs. */
export const galleryPlaceholders = [
  "[ADD PHOTO: finished chart project]",
  "[ADD PHOTO: working model]",
  "[ADD PHOTO: project file pages]",
  "[ADD PHOTO: craft work]",
  "[ADD PHOTO: work table / studio]",
  "[ADD PHOTO: completed order ready for pickup]",
];