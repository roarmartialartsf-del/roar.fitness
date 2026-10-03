import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site, waLink } from "@/content/site";
import { disciplines } from "@/content/programs";
import { plans } from "@/content/pricing";
import { whyRoar, aeoFaqs, aeoSummary } from "@/content/aeo";
import { buildMetadata } from "@/lib/seo";
import { localBusinessJsonLd, faqJsonLd } from "@/lib/jsonld";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import Slider, { type Slide } from "@/components/Slider";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata: Metadata = buildMetadata({
  title: "Best MMA Gym & Martial Arts Academy in Lahore | ROAR MMA",
  description:
    "ROAR MMA is one of Lahore's best martial arts & weight-loss clubs — Canal Gardens. Boxing, MMA, Muay Thai, kickboxing, Wushu & self-defense with a federation-certified coach. Free trial.",
  path: "/",
});

const trainingOptions = [
  { when: "Monday – Friday", title: "Weekday Classes", text: "Regular group classes across all disciplines — five days a week for kids and adults at every level." },
  { when: "Saturday & Sunday", title: "Weekend Special Training", text: "Focused special sessions on weekends for sparring, skill work, and fight preparation." },
  { when: "By Appointment", title: "One-on-One Coaching", text: "Private in-club personal training with the head coach for the fastest, most tailored progress." },
  { when: "At Your Location", title: "Home Personal Training", text: "Can't make it to the club? Book personal training and we'll bring the coaching to your home." },
];

const highlightSlides: Slide[] = [
  { src: "/images/boxing-pads-ring-lahore.jpg", alt: "Boxing pad work in the ring at ROAR MMA, Lahore", caption: "Boxing — master the sweet science", tag: "Boxing" },
  { src: "/images/mma-knee-clinch-sparring-lahore.jpg", alt: "MMA clinch and knee sparring at ROAR MMA, Lahore", caption: "MMA & Muay Thai — the complete fight game", tag: "MMA" },
  { src: "/images/kickboxing-head-kick-sparring-lahore.jpg", alt: "Kickboxing head-kick sparring at ROAR MMA, Lahore", caption: "Kickboxing — explosive striking, head to toe", tag: "Kickboxing" },
  { src: "/images/competition-mma-champion-belt.jpg", alt: "ROAR fighter with a championship belt", caption: "Champions made at ROAR", tag: "Competition" },
  { src: "/images/gymnastics-splits-kid-roar.jpg", alt: "Young student holding full splits at ROAR MMA, Lahore", caption: "Flexibility & discipline from day one", tag: "Kids" },
  { src: "/images/fitness-group-conditioning-lahore.jpg", alt: "Group strength and conditioning at ROAR MMA, Lahore", caption: "Strength, conditioning & weight loss", tag: "Fitness" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd(aeoFaqs)} />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-watermark" aria-hidden="true">RMA</div>
        <div className="hero-inner">
          <Reveal as="p" className="hero-meta">
            <span>Canal Gardens, Lahore</span>
            <span className="slash">/</span>
            <span>Est. 2011</span>
            <span className="slash">/</span>
            <span className="gold">4.9★ · 133 Reviews</span>
          </Reveal>
          <Reveal as="h1" className="hero-title" delay={60}>
            ROAR MMA
            <span className="hero-h1-sub">Lahore&apos;s Best MMA, Martial Arts &amp; Weight-Loss Club</span>
          </Reveal>
          <Reveal as="p" className="hero-tagline" delay={120}>
            One Club · One Family · One Roar
          </Reveal>
          <Reveal as="p" className="hero-lead" delay={180}>
            Boxing, Kickboxing, Muay Thai, MMA, Wushu, Self-Defense. Train with Lahore&apos;s most decorated combat
            coach — one club, one family, one Roar.
          </Reveal>
          <Reveal className="hero-actions" delay={240}>
            <Link href="/contact#trial" className="btn btn-red btn-lg">Book a Free Trial</Link>
            <a href={waLink("Hi ROAR, I'd like to know more about your classes.")} target="_blank" rel="noopener" className="btn btn-ghost btn-lg">
              WhatsApp Us
            </a>
          </Reveal>
        </div>
        <div className="hero-footer">
          <span>Combat Sports Club</span>
          <span className="hero-footer-mid">Boxing · Kickboxing · Muay Thai · MMA · Wushu · Self-Defense</span>
          <span className="scroll-hint">Scroll ↓</span>
        </div>
      </section>

      {/* ============ SOCIAL PROOF BAND ============ */}
      <section className="proof-band">
        <div className="container proof-inner">
          <Reveal className="proof-item"><span className="proof-num">4.9★</span><span className="proof-label">Google Rating</span></Reveal>
          <Reveal className="proof-item" delay={70}><span className="proof-num">133+</span><span className="proof-label">5-Star Reviews</span></Reveal>
          <Reveal className="proof-item" delay={140}><span className="proof-num">14+</span><span className="proof-label">Years Since 2011</span></Reveal>
          <Reveal className="proof-item" delay={210}><span className="proof-num">8+</span><span className="proof-label">Disciplines</span></Reveal>
          <Reveal className="proof-item" delay={280}><span className="proof-num">1</span><span className="proof-label">Federation-Certified Coach</span></Reveal>
        </div>
      </section>

      {/* ============ ABOUT + STATS ============ */}
      <section className="section" id="about">
        <span className="ghost-word" aria-hidden="true">ROAR</span>
        <div className="container">
          <div className="about-grid">
            <Reveal className="about-head">
              <span className="eyebrow">Est. 2011</span>
              <h2 className="section-title">Built for Fighters.</h2>
            </Reveal>
            <div className="about-body">
              <Reveal as="p">
                ROAR Mixed Martial Arts has been forging fighters and transforming everyday athletes in Lahore since
                2011. Led by federation-certified head coach Azhar Hussain, we train across Boxing, Kickboxing, Muay
                Thai, MMA, Wushu, and Self-Defense — alongside strength, conditioning, and weight-loss programs for
                every age and level.
              </Reveal>
              <Reveal as="p" delay={80}>
                Located in Block G, Canal Gardens, our facility is a fully-equipped combat sports floor — matted
                training areas, heavy bags, speed bags, a dedicated strength &amp; conditioning zone, and a women&apos;s
                self-defense space. Train in-club five days a week, join special weekend sessions, or book one-on-one
                and home personal training.
              </Reveal>
            </div>
          </div>
          <Reveal className="stats mt-stats">
            {site.stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ WHY ROAR / BEST IN LAHORE (AEO) ============ */}
      <section className="section why" id="why-roar">
        <span className="ghost-word" aria-hidden="true">BEST</span>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why ROAR</span>
            <h2 className="section-title">One of Lahore&apos;s Best Combat&nbsp;Sports &amp; Weight-Loss Clubs</h2>
            <p className="section-sub section-sub--wide">{aeoSummary}</p>
          </Reveal>
          <div className="why-grid">
            {whyRoar.map((w, idx) => (
              <Reveal key={w.title} className="why-card" delay={(idx % 4) * 70}>
                <span className="why-icon" aria-hidden="true">{w.icon}</span>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-text">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS GRID ============ */}
      <section className="section" id="programs">
        <span className="ghost-word" aria-hidden="true">Train</span>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The Card</span>
            <h2 className="section-title">Our Programs</h2>
            <p className="section-sub">8 disciplines · every session runs Mon–Fri</p>
          </Reveal>
          <div className="programs-grid">
            {disciplines.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <ProgramCard program={p} index={i} />
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/programs" className="btn btn-outline">View All Programs</Link>
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHTS SLIDER ============ */}
      <section className="section" id="highlights">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">In Action</span>
            <h2 className="section-title">ROAR In Motion</h2>
            <p className="section-sub">Real training, real fighters, real results</p>
          </Reveal>
          <Reveal>
            <Slider slides={highlightSlides} />
          </Reveal>
        </div>
      </section>

      {/* ============ COACH TEASER ============ */}
      <section className="section" id="coach">
        <span className="ghost-word" aria-hidden="true">Coach</span>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Tale of the Tape</span>
            <h2 className="section-title">The Head Coach</h2>
          </Reveal>
          <div className="detail-grid">
            <Reveal className="prose">
              <h3 className="coach-name">Azhar Hussain</h3>
              <p className="coach-role">Head Coach &amp; Founder</p>
              <p className="lede" style={{ marginTop: 22 }}>
                15 years of coaching. A Master of Sports Science, a professional stunt fighter, and a federation-certified
                coach across nearly every discipline he teaches.
              </p>
              <p>
                Azhar Hussain has led ROAR since 2011 and brings experience from the highest levels of combat sport —
                including the last 7 years coaching at The University of Lahore. Whether you&apos;re a beginner or
                preparing to compete, you train under a coach who has genuinely done it.
              </p>
              <Link href="/coach" className="btn btn-red" style={{ marginTop: 10 }}>
                Meet Coach Azhar
              </Link>
            </Reveal>
            <Reveal className="detail-media" delay={100}>
              <Image
                src={site.coach.image}
                alt="Head Coach Azhar Hussain at ROAR MMA, Canal Gardens Lahore"
                width={720}
                height={720}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TRAINING OPTIONS ============ */}
      <section className="section" id="training">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How We Train</span>
            <h2 className="section-title">Training Options</h2>
            <p className="section-sub section-sub--wide">
              Group classes five days a week, special weekend sessions, and fully personal coaching — at the club or in
              your home.
            </p>
          </Reveal>
          <Reveal className="train-grid">
            {trainingOptions.map((t) => (
              <div className="train-card" key={t.title}>
                <span className="train-when">{t.when}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="disciplines">
            <span className="disc-label">Disciplines Available</span>
            <div className="disc-tags">
              {disciplines.map((d) => (
                <Link key={d.slug} href={d.route}>{d.name}</Link>
              ))}
            </div>
            <p className="disc-note">{site.schedule.note}</p>
          </Reveal>
        </div>
      </section>

      {/* ============ VIDEO / VSL ============ */}
      <section className="section video-section" id="video">
        <div className="container">
          <div className="video-grid">
            <Reveal className="video-copy">
              <span className="eyebrow">See For Yourself</span>
              <h2 className="section-title">Step Inside ROAR</h2>
              <p className="section-sub section-sub--wide">
                One free trial is all it takes. Watch a session, feel the energy, and meet the team — then come train
                with us at Canal Gardens.
              </p>
              <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact#trial" className="btn btn-red">Book a Free Trial</Link>
                <a href={site.socials.instagram} target="_blank" rel="noopener" className="btn btn-outline">Follow on Instagram</a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <VideoEmbed url={site.media.reelUrl || undefined} poster="/images/mma-knee-clinch-sparring-lahore.jpg" label="Watch ROAR in action" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRICING TEASER ============ */}
      <section className="section" id="pricing">
        <span className="ghost-word" aria-hidden="true">Invest</span>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Membership Plans</span>
            <h2 className="section-title">Invest in Yourself</h2>
            <p className="section-sub section-sub--wide">
              All prices in PKR, billed monthly per discipline. Home personal training also available — message us for a
              custom quote.
            </p>
          </Reveal>
          <Reveal className="plans">
            {plans.slice(0, 3).map((p) => (
              <article key={p.name} className={`plan${p.featured ? " plan--featured" : ""}`}>
                {p.featured && <span className="plan-badge">Most Popular</span>}
                <h3 className="plan-name">{p.name}</h3>
                <p className="plan-desc">{p.desc}</p>
                <p className="plan-price">PKR <strong>{p.price}</strong><span>{p.period}</span></p>
                <ul className="plan-feat">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <Link href="/contact#trial" className={`btn ${p.featured ? "btn-red" : "btn-outline"} plan-cta`}>
                  {p.cta}
                </Link>
              </article>
            ))}
          </Reveal>
          <div style={{ marginTop: 40 }}>
            <Link href="/pricing" className="btn btn-outline">See All Membership Plans</Link>
          </div>
        </div>
      </section>

      {/* ============ AEO FAQ ============ */}
      <section className="section faq-section" id="faq">
        <span className="ghost-word" aria-hidden="true">FAQ</span>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">People Also Ask</span>
            <h2 className="section-title">Lahore&apos;s Martial Arts, Answered</h2>
            <p className="section-sub">The questions members and search engines ask most</p>
          </Reveal>
          <div className="faq-list">
            {aeoFaqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
