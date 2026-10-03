import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { coachJsonLd } from "@/lib/jsonld";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Coach Azhar Hussain | Certified MMA & Boxing Coach Lahore",
  description:
    "Meet Azhar Hussain — ROAR's head coach and founder. 15 years' experience, federation-certified across boxing, MMA, Muay Thai, kickboxing & self-defense in Lahore.",
  path: "/coach",
  image: site.coach.image,
});

export default function CoachPage() {
  return (
    <>
      <JsonLd data={coachJsonLd()} />
      <section className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">Coach</span>
        <div className="container">
          <Breadcrumbs items={[{ label: "Coach", href: "/coach" }]} />
          <span className="eyebrow" style={{ marginTop: 20 }}>Tale of the Tape</span>
          <h1>Coach Azhar Hussain</h1>
          <p className="lead">
            ROAR&apos;s head coach and founder — a federation-certified coach with 15 years of experience across boxing,
            MMA, Muay Thai, kickboxing, Wushu and self-defense, and a Master of Sports Science &amp; Physical Education.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="coach-grid">
            <Reveal className="coach-card">
              <div className="coach-photo">
                <Image
                  src={site.coach.image}
                  alt="Head Coach Azhar Hussain at ROAR MMA, Canal Gardens Lahore"
                  width={720}
                  height={720}
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <span className="coach-badge">Head Coach</span>
              </div>
              <h2 className="coach-name">Azhar Hussain</h2>
              <p className="coach-role">Head Coach &amp; Founder</p>
              <div className="coach-tape">
                <div><span className="tape-k">Experience</span><span className="tape-v">15 Years</span></div>
                <div><span className="tape-k">Disciplines</span><span className="tape-v">Boxing / MMA / Muay Thai / Wushu</span></div>
              </div>
              <p className="coach-bio">
                Azhar Hussain has led ROAR since 2011 and brings 15 years of coaching experience — including the last 7
                years coaching at The University of Lahore. A Master of Sports Science &amp; Physical Education and a
                professional stunt fighter for film and drama, he is certified across nearly every discipline he teaches.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact#trial" className="btn btn-red">Train With Azhar</Link>
                <a href={waLink("Hi Coach Azhar, I'd like to train at ROAR.")} target="_blank" rel="noopener" className="btn btn-ghost">WhatsApp</a>
              </div>
            </Reveal>

            <Reveal className="coach-quals" delay={100}>
              <h2 className="block-head">Qualifications &amp; Certifications</h2>
              <ol className="quals-list">
                {site.credentials.map((c, i) => (
                  <li key={c}>
                    <span className="q-no">{String(i + 1).padStart(2, "0")}</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        heading="Train With a Certified Coach"
        whatsappMessage="Hi ROAR, I'd like to book a free trial with Coach Azhar."
      />
    </>
  );
}
