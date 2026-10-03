import { site } from "@/content/site";
import type { Program, FAQ } from "@/content/programs";
import { disciplines } from "@/content/programs";
import { aeoSummary } from "@/content/aeo";

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${site.address.street}, ${site.address.area}`,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

/** ExerciseGym (LocalBusiness subtype) for home + contact. */
export function localBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: site.name,
    alternateName: site.legalName,
    url: site.url,
    logo: `${site.url}/icon.png`,
    image: `${site.url}${site.coach.image}`,
    telephone: site.phone.e164,
    address: postalAddress,
    priceRange: "PKR 5,000–15,000",
    currenciesAccepted: "PKR",
    description: aeoSummary,
    slogan: site.tagline,
    areaServed: { "@type": "City", name: "Lahore" },
    knowsAbout: [
      "Mixed Martial Arts",
      "Boxing",
      "Kickboxing",
      "Muay Thai",
      "Wushu",
      "Shaolin Kung Fu",
      "Self-Defense",
      "Women's Self-Defense",
      "Strength and Conditioning",
      "Weight Loss Training",
      "Kids Martial Arts",
    ],
    keywords:
      "MMA gym Lahore, martial arts academy Lahore, boxing classes Lahore, Muay Thai Lahore, kickboxing Lahore, self defense Lahore, Wushu Kung Fu Lahore, weight loss training Lahore, kids martial arts Lahore, Canal Gardens",
    sameAs: [site.socials.instagram, site.socials.facebook],
    founder: {
      "@type": "Person",
      name: site.coach.name,
      jobTitle: site.coach.title,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ROAR MMA Programs",
      itemListElement: disciplines.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d.name, url: `${site.url}${d.route}` },
        ...(d.priceMonthly ? { price: d.priceMonthly, priceCurrency: "PKR" } : {}),
      })),
    },
  };
  // Only include geo when the owner has confirmed coordinates.
  if (site.address.geo.verified && site.address.geo.lat && site.address.geo.lng) {
    data.geo = { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng };
  }
  return data;
}

/** Person schema for the coach page (only confirmed credentials). */
export function coachJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.coach.name,
    jobTitle: site.coach.title,
    image: `${site.url}${site.coach.image}`,
    worksFor: { "@type": "ExerciseGym", name: site.name, url: site.url },
    hasCredential: site.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
  };
}

/** Service schema for a program page. */
export function serviceJsonLd(program: Program) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: program.name,
    serviceType: program.primaryKeyword,
    description: program.metaDescription,
    url: `${site.url}${program.route}`,
    areaServed: { "@type": "City", name: "Lahore" },
    provider: { "@type": "ExerciseGym", name: site.name, url: site.url },
  };
  if (program.priceMonthly) {
    data.offers = {
      "@type": "Offer",
      price: program.priceMonthly,
      priceCurrency: "PKR",
      description: "Per month, per discipline",
    };
  }
  return data;
}

/** FAQPage schema — text must match the visible FAQ exactly. */
export function faqJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
