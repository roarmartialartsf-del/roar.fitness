/**
 * Gallery images — real ROAR MMA gym, class, and competition photos,
 * categorised by discipline so the gallery can filter them.
 */
export type GalleryCategory =
  | "boxing"
  | "kickboxing"
  | "mma"
  | "gymnastics"
  | "fitness"
  | "kids"
  | "competition";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
}

export const galleryItems: GalleryItem[] = [
  // ---------- Boxing ----------
  { src: "/images/boxing-pads-ring-lahore.jpg", alt: "Boxer and coach with focus mitts in the ring at ROAR MMA, Lahore", caption: "Pad work in the ring", category: "boxing" },
  { src: "/images/boxing-womens-padwork-lahore.jpg", alt: "Women's boxing focus-mitt training at ROAR MMA, Lahore", caption: "Focus-mitt training", category: "boxing" },
  { src: "/images/boxing-fighter-coach-roar.jpg", alt: "ROAR boxer with head coach Azhar Hussain, Lahore", caption: "Fighter & coach", category: "boxing" },

  // ---------- Kickboxing ----------
  { src: "/images/kickboxing-head-kick-sparring-lahore.jpg", alt: "Kickboxing high head-kick sparring at ROAR MMA, Lahore", caption: "High-kick sparring", category: "kickboxing" },
  { src: "/images/kickboxing-kids-high-kick-lahore.jpg", alt: "Young student throwing a high kick at ROAR MMA, Lahore", caption: "Kids high kick", category: "kickboxing" },
  { src: "/images/kickboxing-coach-kid-kick-lahore.jpg", alt: "Coach teaching a child a front kick at ROAR MMA, Lahore", caption: "Coaching the kick", category: "kickboxing" },
  { src: "/images/kickboxing-kids-kick-lahore.jpg", alt: "Kids kickboxing demonstration at ROAR MMA, Lahore", caption: "Kids kickboxing", category: "kickboxing" },

  // ---------- MMA ----------
  { src: "/images/mma-knee-clinch-sparring-lahore.jpg", alt: "MMA clinch and knee-strike sparring at ROAR MMA, Lahore", caption: "Clinch & knees", category: "mma" },
  { src: "/images/mma-throw-takedown-lahore.jpg", alt: "MMA throw and takedown training at ROAR MMA, Lahore", caption: "Takedown drill", category: "mma" },
  { src: "/images/mma-ground-grappling-lahore.jpg", alt: "MMA ground grappling at ROAR MMA, Lahore", caption: "Ground grappling", category: "mma" },
  { src: "/images/mma-kids-grappling-lahore.jpg", alt: "Kids grappling practice at ROAR MMA, Lahore", caption: "Kids grappling", category: "mma" },

  // ---------- Gymnastics / flexibility ----------
  { src: "/images/gymnastics-splits-kid-roar.jpg", alt: "Young student holding full splits at ROAR MMA, Lahore", caption: "Full splits", category: "gymnastics" },
  { src: "/images/gymnastics-acrobatics-roar.jpg", alt: "Acrobatics and balance training at ROAR MMA, Lahore", caption: "Acrobatics & balance", category: "gymnastics" },
  { src: "/images/gymnastics-kids-splits-roar.jpg", alt: "Kids flexibility and splits training at ROAR MMA, Lahore", caption: "Flexibility training", category: "gymnastics" },
  { src: "/images/gymnastics-backbend-ball-roar.jpg", alt: "Mobility and backbend training with a stability ball at ROAR MMA, Lahore", caption: "Backbend & mobility", category: "gymnastics" },
  { src: "/images/gymnastics-bridge-flexibility-roar.jpg", alt: "Bridge and flexibility drills at ROAR MMA, Lahore", caption: "Bridge & flexibility", category: "gymnastics" },

  // ---------- Fitness / conditioning ----------
  { src: "/images/fitness-group-conditioning-lahore.jpg", alt: "Group strength and conditioning session at ROAR MMA, Lahore", caption: "Strength & conditioning", category: "fitness" },
  { src: "/images/fitness-core-training-roar.jpg", alt: "Core training at ROAR MMA, Lahore", caption: "Core training", category: "fitness" },
  { src: "/images/fitness-kids-pushups-roar.jpg", alt: "Kids conditioning and push-ups at ROAR MMA, Lahore", caption: "Kids conditioning", category: "fitness" },

  // ---------- Kids ----------
  { src: "/images/kids-punch-drill-lahore.jpg", alt: "Kids martial arts punch drill at ROAR MMA, Lahore", caption: "Kids punch drill", category: "kids" },
  { src: "/images/kids-stance-coach-lahore.jpg", alt: "Young ROAR students in fighting stance with their coach, Lahore", caption: "Young fighters", category: "kids" },
  { src: "/images/kids-class-lineup-lahore.jpg", alt: "Kids martial arts class lined up at ROAR MMA, Lahore", caption: "Kids class", category: "kids" },

  // ---------- Competitions & awards ----------
  { src: "/images/competition-kids-awards-trophy-roar.jpg", alt: "ROAR students with grading certificates and a trophy, Lahore", caption: "Kids awards & trophy", category: "competition" },
  { src: "/images/competition-womens-boxing-championship.jpg", alt: "ROAR athletes at the Interuniversity Women Boxing Championship", caption: "Women's boxing championship", category: "competition" },
  { src: "/images/competition-boxing-victory-ring.jpg", alt: "Referee raising a ROAR boxer's hand in victory at a Pakistan Boxing Federation event", caption: "Boxing victory", category: "competition" },
  { src: "/images/competition-university-awards-roar.jpg", alt: "ROAR team with certificates at a university championship", caption: "University championship", category: "competition" },
  { src: "/images/competition-mma-champion-belt.jpg", alt: "ROAR fighter with a championship belt after a win", caption: "MMA champion", category: "competition" },
  { src: "/images/competition-mma-champion-victory.jpg", alt: "ROAR fighter's hand raised with the championship belt", caption: "Champion, hand raised", category: "competition" },
];
