import Link from "next/link";
import { site } from "@/content/site";

export interface Crumb {
  label: string;
  href: string;
}

/** Visible breadcrumbs + matching BreadcrumbList JSON-LD. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol>
        {trail.map((c, i) => (
          <li key={c.href}>
            {i < trail.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            {i < trail.length - 1 && <span className="sep" aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
