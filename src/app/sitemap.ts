import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { disciplines } from "@/content/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/programs",
    "/kids",
    "/personal-training",
    "/home-training",
    "/coach",
    "/pricing",
    "/events",
    "/gallery",
    "/contact",
  ];

  const routes = [
    ...staticRoutes,
    ...disciplines.map((d) => d.route),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/programs/") ? 0.8 : 0.7,
  }));
}
