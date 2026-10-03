import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: "Combat sports club in Canal Gardens, Lahore — boxing, MMA, Muay Thai, kickboxing, Wushu & self-defense.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C0D10",
    theme_color: "#0C0D10",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
