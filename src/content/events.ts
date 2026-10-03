/**
 * ROAR MMA — events & competitions.
 * Only entries with `verified: true` are rendered on the site.
 * Do NOT state any athlete selection, title, medal or ranking as fact
 * unless it is confirmed with the owner and set verified: true here.
 */

export interface RoarEvent {
  id: string;
  title: string;
  date: string; // ISO or human; keep "as of" clarity
  location: string;
  description: string;
  image?: string;
  status: "upcoming" | "past";
  verified: boolean;
}

export const events: RoarEvent[] = [
  // Placeholder (unverified) examples — kept hidden until confirmed by the owner.
  // Flip `verified: true` (and correct the details) to publish.
  {
    id: "wako-kickboxing",
    title: "WAKO Kickboxing involvement",
    date: "TBC",
    location: "Pakistan",
    description:
      "ROAR has been involved with WAKO kickboxing and Pakistan kickboxing representation. Exact details to be confirmed before publishing.",
    status: "past",
    verified: false,
  },
  {
    id: "coaching-referee-courses",
    title: "Coaching & referee courses",
    date: "TBC",
    location: "Pakistan",
    description:
      "Participation in coaching and referee courses across combat sports. Specifics to be confirmed before publishing.",
    status: "past",
    verified: false,
  },
];

export const verifiedEvents = events.filter((e) => e.verified);
