import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageSeo {
  title: string;
  description: string;
  /** Path starting with "/" — used for canonical + OG url. */
  path: string;
  /** Optional OG image path (defaults to the site OG image). */
  image?: string;
}

/**
 * Build consistent per-page Metadata: canonical, Open Graph, Twitter.
 * `metadataBase` is set once in the root layout.
 */
export function buildMetadata({ title, description, path, image }: PageSeo): Metadata {
  const url = path === "/" ? "/" : path;
  const ogImage = image || "/images/roar-mma-mural-canal-gardens-lahore.jpg";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.shortName,
      locale: "en_PK",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
