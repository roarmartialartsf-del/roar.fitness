import type { Metadata } from "next";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Gallery | Inside ROAR MMA, Canal Gardens Lahore",
  description:
    "Step inside ROAR MMA in Canal Gardens, Lahore — the training floor, heavy bags, women's self-defense zone and our coaching team. See the gym before you visit.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">Gym</span>
        <div className="container">
          <Breadcrumbs items={[{ label: "Gallery", href: "/gallery" }]} />
          <span className="eyebrow" style={{ marginTop: 20 }}>Contact Sheet</span>
          <h1>Inside the Gym</h1>
          <p className="lead">
            A look inside ROAR MMA — the training floor, equipment, and the team. Follow{" "}
            <a href={site.socials.instagram} target="_blank" rel="noopener" style={{ color: "var(--gold)" }}>
              {site.socials.instagramHandle}
            </a>{" "}
            for more.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>

      <CTASection />
    </>
  );
}
