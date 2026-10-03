import type { Metadata } from "next";
import Link from "next/link";
import { plans } from "@/content/pricing";
import { site, waLink } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Membership Fees & Pricing | ROAR MMA Gym Lahore",
  description:
    "ROAR MMA gym fees in Lahore: Kids PKR 5,000, Adults 7,000, MMA 10,000, Self-Defense 10,000, Fitness 5,000, one-on-one 15,000. Home training on request. Book a trial.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">Invest</span>
        <div className="container">
          <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
          <span className="eyebrow" style={{ marginTop: 20 }}>Membership Plans</span>
          <h1>Pricing &amp; Membership</h1>
          <p className="lead">
            Straightforward martial arts and MMA gym fees in Lahore. All prices are in PKR, billed monthly per
            discipline. Home personal training is also available — message us for a custom quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="plans">
            {plans.map((p) => (
              <article key={p.name} className={`plan${p.featured ? " plan--featured" : ""}`}>
                {p.featured && <span className="plan-badge">Most Popular</span>}
                <h2 className="plan-name">{p.name}</h2>
                <p className="plan-desc">{p.desc}</p>
                <p className="plan-price">PKR <strong>{p.price}</strong><span>{p.period}</span></p>
                <ul className="plan-feat">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a
                  href={waLink(p.waMessage)}
                  target="_blank"
                  rel="noopener"
                  className={`btn ${p.featured ? "btn-red" : "btn-outline"} plan-cta`}
                >
                  {p.cta}
                </a>
              </article>
            ))}
          </Reveal>

          <Reveal className="disciplines" >
            <span className="disc-label">Home Personal Training</span>
            <p className="disc-note" style={{ marginTop: 14 }}>
              Private home-based MMA coaching — 3 one-hour sessions per week with a personalised plan. Pricing is a
              custom quote based on your location and schedule.{" "}
              <Link href="/home-training" style={{ color: "var(--gold)" }}>Learn more →</Link>
            </p>
            <p className="rating-line">
              Rated {site.rating.value}★ from {site.rating.count}+ reviews ·{" "}
              <a href={site.rating.profileUrl} target="_blank" rel="noopener">See our Google reviews</a>
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        heading="Not Sure Which Plan?"
        text="Book a free trial and we'll help you pick the right program — no commitment, no pressure."
        whatsappMessage="Hi ROAR, I'd like help choosing a membership plan."
      />
    </>
  );
}
