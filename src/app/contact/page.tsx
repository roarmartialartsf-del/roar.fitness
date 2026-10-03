import type { Metadata } from "next";
import { site, waLink } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { localBusinessJsonLd } from "@/lib/jsonld";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import MapFacade from "@/components/MapFacade";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Free Trial | ROAR MMA Canal Gardens Lahore",
  description:
    "Book a free trial or get in touch with ROAR MMA in Canal Gardens, Lahore. Call or WhatsApp 0307-4112139, or send us a message. Kids & adults, all levels welcome.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />

      <section className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">Talk</span>
        <div className="container">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
          <span className="eyebrow" style={{ marginTop: 20 }}>Get in Touch</span>
          <h1>Let&apos;s Talk.</h1>
          <p className="lead">
            Book a free trial, ask about membership, or explore a sponsorship or brand collaboration with ROAR. Message
            us and Coach Azhar&apos;s team will get back to you — no commitment, no pressure.
          </p>
        </div>
      </section>

      <section className="section" id="trial">
        <span className="ghost-word" aria-hidden="true">Roar</span>
        <div className="container">
          <div className="trial-grid">
            <Reveal className="trial-intro">
              <span className="eyebrow">Free Trial</span>
              <h2 className="section-title">Book Your Free Trial</h2>
              <p>
                Tell us a little about what you&apos;re looking for and we&apos;ll help you find the right class and
                time. Prefer to chat? Call or WhatsApp us directly.
              </p>
              <ul className="trial-points">
                <li>Free trial — no commitment needed</li>
                <li>Kids &amp; adults, all levels, 8+ disciplines</li>
                <li>Sponsorships &amp; brand collaborations welcome</li>
                <li>Direct reply from the head coach&apos;s team</li>
              </ul>
              <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href={`tel:${site.phone.e164}`} className="btn btn-outline">Call {site.phone.display}</a>
                <a href={waLink("Hi ROAR, I'd like to book a free trial.")} target="_blank" rel="noopener" className="btn btn-red">
                  WhatsApp Us
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="find-us">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Find Us</span>
            <h2 className="section-title">Come Train With Us</h2>
          </Reveal>
          <Reveal className="find-grid">
            <div>
              <span className="find-k">Address</span>
              <p className="find-v">{site.address.full}</p>
              <p className="rating-line">
                Rated {site.rating.value}★ from {site.rating.count}+ reviews ·{" "}
                <a href={site.rating.profileUrl} target="_blank" rel="noopener">Google reviews</a>
              </p>
            </div>
            <div>
              <span className="find-k">Phone</span>
              <p className="find-v"><a href={`tel:${site.phone.e164}`}>{site.phone.display}</a></p>
              <span className="find-k">WhatsApp</span>
              <p className="find-v"><a href={waLink("Hi ROAR, I'd like to know more.")} target="_blank" rel="noopener">{site.whatsapp.display}</a></p>
            </div>
            <div>
              <span className="find-k">Training Days</span>
              <ul className="find-days">
                <li><span>Monday – Friday</span><span className="dim">Regular Classes</span></li>
                <li><span>Saturday – Sunday</span><span className="dim">Special Training</span></li>
                <li><span>One-on-One &amp; Home</span><span className="dim">By Appointment</span></li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <p className="disc-note" style={{ marginTop: 34 }}>{site.schedule.note}</p>
          </Reveal>
          <Reveal>
            <MapFacade />
          </Reveal>
        </div>
      </section>
    </>
  );
}
