import type { Metadata } from "next";
import Image from "next/image";
import { verifiedEvents } from "@/content/events";
import { galleryItems } from "@/content/gallery";
import { waLink } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Events, Competitions & Achievements | ROAR MMA Lahore",
  description:
    "Championships, fights and awards from ROAR Mixed Martial Arts in Lahore — women's boxing, MMA title wins, and young students earning their gradings and trophies.",
  path: "/events",
});

const achievements = galleryItems.filter((g) => g.category === "competition");

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">Wins</span>
        <div className="container">
          <Breadcrumbs items={[{ label: "Events", href: "/events" }]} />
          <span className="eyebrow" style={{ marginTop: 20 }}>The Season</span>
          <h1>Events &amp; Achievements</h1>
          <p className="lead">
            ROAR students and fighters compete across Pakistan — from women&apos;s boxing championships and MMA title
            bouts to young athletes earning their gradings and trophies. Here are moments from the ROAR journey.
          </p>
        </div>
      </section>

      {/* Achievements photo wall */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Contact Sheet</span>
            <h2 className="section-title">Competitions &amp; Awards</h2>
            <p className="section-sub">Real moments from ROAR — championships, title wins &amp; gradings</p>
          </Reveal>
          <div className="gallery-grid">
            {achievements.map((a, i) => (
              <Reveal key={a.src} as="figure" className="shot" delay={(i % 3) * 70}>
                <span className="shot-no">{String(i + 1).padStart(2, "0")}</span>
                <Image src={a.src} alt={a.alt} width={900} height={675} sizes="(max-width: 640px) 100vw, 33vw" loading="lazy" />
                <figcaption>{a.caption}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verified structured events (render only when confirmed) */}
      {verifiedEvents.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Fixtures</span>
              <h2 className="section-title">Upcoming &amp; Past</h2>
            </Reveal>
            <div className="programs-grid">
              {verifiedEvents.map((e) => (
                <Reveal key={e.id} className="program-card">
                  <div className="program-card-body">
                    <span className="program-card-meta">{e.status === "upcoming" ? "Upcoming" : "Past"} · {e.date}</span>
                    <h3 className="program-card-title">{e.title}</h3>
                    <p className="program-card-excerpt">{e.description}</p>
                    <span className="program-card-meta">{e.location}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <Reveal className="disciplines">
            <span className="disc-label">Compete With ROAR</span>
            <p className="disc-note" style={{ marginTop: 14 }}>
              Interested in fight training or representing ROAR at competitions? Message us on WhatsApp to ask about
              upcoming events, gradings and fight-training camps.
            </p>
            <div style={{ marginTop: 22 }}>
              <a href={waLink("Hi ROAR, I'd like to know about competitions and fight training.")} target="_blank" rel="noopener" className="btn btn-red">
                Ask About Competing
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
