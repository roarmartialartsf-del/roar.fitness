/**
 * ROAR MMA — single source of truth for business data.
 * Edit values here; the whole site reads from this file.
 * Items with `verified: false` must be confirmed with Coach Azhar before launch.
 */

export const site = {
  name: "ROAR Mixed Martial Arts",
  shortName: "ROAR MMA",
  legalName: "ROAR Martial Arts Fitness Club",
  tagline: "One Club · One Family · One Roar",
  supportingLine: "Train Hard. Build Discipline. Become Stronger.",

  // Canonical URL — keep in sync with NEXT_PUBLIC_SITE_URL and the Vercel primary domain.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.roarmartialarts.com",

  established: { year: 2011, verified: false },

  rating: {
    value: 4.9,
    count: 133,
    asOf: "2026-10",
    verified: false,
    // Visible text only — do NOT add self-serving Review/AggregateRating JSON-LD.
    profileUrl: "https://www.google.com/maps/search/?api=1&query=ROAR+Mixed+Martial+Arts+Canal+Gardens+Lahore",
  },

  address: {
    street: "41-GC, Afroz Arcade Basement, near Canal Bistro",
    area: "Block G, Canal Gardens",
    locality: "Lahore",
    region: "Punjab",
    postalCode: "54000",
    country: "PK",
    countryName: "Pakistan",
    full: "41-GC, Afroz Arcade Basement, near Canal Bistro, Block G, Canal Gardens, Lahore 54000, Pakistan",
    // Placeholder map query until exact coordinates / GBP pin are confirmed by the owner.
    mapQuery: "Canal Gardens Block G Lahore",
    geo: { lat: null as number | null, lng: null as number | null, verified: false },
  },

  phone: { e164: "+923074112139", display: "0307-4112139" },
  whatsapp: { number: "923074112139", display: "0307-4112139" },

  coach: {
    name: "Azhar Hussain",
    title: "Head Coach & Founder",
    experienceYears: 15,
    image: "/images/coach-azhar-hussain-roar-mma-lahore.jpg",
  },

  socials: {
    instagram: "https://instagram.com/roar.fitness.lahore",
    instagramHandle: "@roar.fitness.lahore",
    facebook: "https://www.facebook.com/roarmartialartsfitnessclub/",
  },

  // Optional promo video (VSL). Paste an Instagram Reel or YouTube link here to
  // make the homepage video play; leave empty to show a "coming soon" slot.
  media: {
    reelUrl: "",
  },

  schedule: {
    weekday: "Monday – Friday · regular group classes",
    weekend: "Saturday – Sunday · special & weekend training",
    private: "One-on-one & home training by appointment",
    note: "Exact class times vary by discipline and level — message us on WhatsApp and we'll find a slot that fits.",
  },

  stats: [
    { value: 14, suffix: "+", label: "Years Strong" },
    { value: 4.9, suffix: "★", label: "Google Rating" },
    { value: 133, suffix: "+", label: "5-Star Reviews" },
    { value: 8, suffix: "+", label: "Disciplines" },
  ],

  // Confirmed coach credentials (Section 2). Keep only true ones; flip verified when confirmed.
  credentials: [
    "Pakistan Boxing Federation — Qualified Coach (2-Star)",
    "Pakistan Mixed Martial Arts Federation — Qualified MMA Coach",
    "Pakistan Kickboxing Federation — Qualified Coach",
    "Pakistan Muay Thai Federation — Qualified Coach",
    "Pakistan Self-Defense Federation — Qualified Coach",
    "Wushu Black Sash & Shaolin Kung Fu Black Sash",
    "Master of Sports Science & Physical Education",
    "ICE REPS Certified — Level 1 & Level 2",
    "Complete Strength & Conditioning Course",
    "7 years Head Coach — The University of Lahore",
    "Professional action fighter & stunt man (film & drama)",
  ],
} as const;

export type Site = typeof site;

/** Build a wa.me link with a pre-filled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Primary navigation (program children render as a dropdown). */
export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "MMA", href: "/programs/mma" },
      { label: "Boxing", href: "/programs/boxing" },
      { label: "Kickboxing", href: "/programs/kickboxing" },
      { label: "Muay Thai", href: "/programs/muay-thai" },
      { label: "Self-Defense", href: "/programs/self-defense" },
      { label: "Wushu & Kung Fu", href: "/programs/wushu-kung-fu" },
      { label: "Fitness & Weight Loss", href: "/programs/fitness" },
      { label: "Kids Martial Arts", href: "/kids" },
    ],
  },
  { label: "Personal & Home", href: "/personal-training" },
  { label: "Coach", href: "/coach" },
  { label: "Pricing", href: "/pricing" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
