import type { Metadata } from "next";
import Link from "next/link";
import { disciplines } from "@/content/programs";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Martial Arts Programs in Lahore | ROAR MMA Canal Gardens",
  description:
    "Explore all martial arts programs at ROAR in Lahore — Boxing, MMA, Muay Thai, Kickboxing, Wushu & Kung Fu, Self-Defense, Fitness and Kids classes. Book a free trial.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="page-hero-watermark" aria-hidden="true">Programs</span>
        <div className="container">
          <Breadcrumbs items={[{ label: "Programs", href: "/programs" }]} />
          <span className="eyebrow" style={{ marginTop: 20 }}>The Card</span>
          <h1>Our Programs</h1>
          <p className="lead">
            Eight disciplines under one roof in Canal Gardens, Lahore — coached by a federation-certified head coach.
            Whether you want to compete, get fit, or learn to defend yourself, there&apos;s a program for you. Every
            group class runs Monday to Friday.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="programs-grid">
            {disciplines.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <ProgramCard program={p} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal className="disciplines" >
            <span className="disc-label">Also Available</span>
            <div className="disc-tags">
              <Link href="/kids">Kids Martial Arts</Link>
              <Link href="/personal-training">Personal Training</Link>
              <Link href="/home-training">Home MMA Training</Link>
            </div>
            <p className="disc-note">
              Kids programs, one-on-one coaching and private home training are available alongside every discipline.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
