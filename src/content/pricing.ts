/** Membership plans (PKR / month, per discipline). Confirm amounts with the owner. */
export interface Plan {
  name: string;
  desc: string;
  price: string; // formatted amount, e.g. "5,000"
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
  /** WhatsApp pre-fill for this plan. */
  waMessage: string;
}

export const plans: Plan[] = [
  {
    name: "Kids Program",
    desc: "One discipline of choice for young athletes.",
    price: "5,000",
    period: "/ month",
    features: [
      "Single discipline (Boxing, Kickboxing, Wushu & more)",
      "5 days a week (Mon–Fri)",
      "Builds discipline, focus & confidence",
      "Federation-certified coaching",
      "Safe, structured environment",
    ],
    cta: "Book a Trial",
    waMessage: "Hi ROAR, I'm interested in the Kids Program.",
  },
  {
    name: "Adults",
    desc: "One discipline of choice for adults — our most popular plan.",
    price: "7,000",
    period: "/ month",
    featured: true,
    features: [
      "Single discipline of your choice",
      "Boxing · Kickboxing · Muay Thai · Wushu",
      "5 days a week (Mon–Fri)",
      "Weekend special training access",
      "Federation-certified head coach",
    ],
    cta: "Get Started",
    waMessage: "Hi ROAR, I'm interested in the Adults membership.",
  },
  {
    name: "MMA",
    desc: "The complete mixed martial arts program.",
    price: "10,000",
    period: "/ month",
    features: [
      "Striking + wrestling + grappling",
      "Sparring & fight training",
      "5 days a week (Mon–Fri)",
      "All experience levels welcome",
      "Competition preparation available",
    ],
    cta: "Book a Trial",
    waMessage: "Hi ROAR, I'm interested in the MMA program.",
  },
  {
    name: "Self-Defense",
    desc: "Real-world self-defense, including women's classes.",
    price: "10,000",
    period: "/ month",
    features: [
      "Practical self-defense skills",
      "Dedicated women's self-defense option",
      "Federation-certified curriculum",
      "Build awareness & confidence",
      "All levels welcome",
    ],
    cta: "Book a Trial",
    waMessage: "Hi ROAR, I'm interested in Self-Defense classes.",
  },
  {
    name: "Physical Fitness",
    desc: "Strength, conditioning & weight-loss coaching.",
    price: "5,000",
    period: "/ month",
    features: [
      "Strength & conditioning sessions",
      "Weight-loss programming",
      "Personalized fitness plans",
      "Coached by a sports-science specialist",
      "All fitness levels",
    ],
    cta: "Start Training",
    waMessage: "Hi ROAR, I'm interested in the Physical Fitness program.",
  },
  {
    name: "MMA — One-on-One",
    desc: "Private in-club MMA coaching for the serious athlete.",
    price: "15,000",
    period: "/ month",
    features: [
      "Private one-on-one MMA sessions",
      "In-club personal coaching",
      "Tailored fight preparation",
      "Fastest possible progression",
      "Flexible scheduling",
    ],
    cta: "Go Private",
    waMessage: "Hi ROAR, I'm interested in one-on-one MMA coaching.",
  },
];
