import Image from "next/image";
import Link from "next/link";
import { getProgram, type Program } from "@/content/programs";
import { site, waLink } from "@/content/site";
import { serviceJsonLd, faqJsonLd } from "@/lib/jsonld";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";

export default function ProgramDetail({ program, crumbs }: { program: Program; crumbs: Crumb[] }) {
  const related = program.related.map(getProgram).filter(Boolean) as Program[];
  const priceText = program.priceMonthly ? `PKR ${program.priceMonthly.toLocaleString()}` : "Custom quote";

  return (
    <>
      <JsonLd data={serviceJsonLd(program)} />
      <JsonLd data={faqJsonLd(program.faqs)} />

      {/* HERO */}
      <section className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">{program.name.split(" ")[0]}</span>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow" style={{ marginTop: 20 }}>{program.tagline}</span>
          <h1>{program.name}</h1>
          <p className="lead">{program.intro}</p>
          <div className="hero-actions" style={{ marginTop: 30 }}>
            <Link href="/contact#trial" className="btn btn-red">Book a Free Trial</Link>
            <a href={waLink(`Hi ROAR, I'm interested in ${program.name} classes.`)} target="_blank" rel="noopener" className="btn btn-ghost">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* DETAIL */}
      <section className="section">
        <div className="container">
          <div className="detail-grid">
            <Reveal className="prose">
              <h2 className="block-head">What You&apos;ll Learn</h2>
              <ul className="feature-list">
                {program.whatYouLearn.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <h2 className="block-head" style={{ marginTop: 40 }}>Who It&apos;s For</h2>
              <p>{program.whoFor}</p>
              {program.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </Reveal>

            <Reveal delay={100}>
              <div className="detail-media">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  width={720}
                  height={540}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="price-card">
                <span className="block-head">Membership</span>
                <p className="p-amount">{priceText}{program.priceMonthly ? <span> / month</span> : null}</p>
                {program.priceNote && <p style={{ color: "var(--muted)", marginTop: 12, fontSize: "0.9rem" }}>{program.priceNote}</p>}
                <div className="meta-chips">
                  <span>{program.duration}</span>
                  <span>{program.levels}</span>
                </div>
                <Link href="/pricing" className="btn btn-outline btn-block" style={{ marginTop: 22 }}>
                  See All Pricing
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <span className="ghost-word" aria-hidden="true">FAQ</span>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2 className="section-title">{program.name} FAQ</h2>
          </Reveal>
          <div className="faq-list">
            {program.faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Keep Exploring</span>
              <h2 className="section-title">Related Programs</h2>
            </Reveal>
            <div className="related-grid">
              {related.map((r) => <ProgramCard key={r.slug} program={r} />)}
            </div>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/pricing" className="btn btn-outline">View Pricing</Link>
              <Link href="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading={`Start ${program.name} at ROAR`}
        whatsappMessage={`Hi ROAR, I'd like to book a free trial for ${program.name}.`}
      />
      <span className="sr-only">{site.name}, {site.address.locality}</span>
    </>
  );
}
