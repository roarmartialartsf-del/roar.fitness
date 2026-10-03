import Link from "next/link";
import { waLink } from "@/content/site";

interface CTAProps {
  heading?: string;
  text?: string;
  /** Pre-filled WhatsApp message for this page. */
  whatsappMessage?: string;
}

/** Closing call-to-action block used at the end of pages. */
export default function CTASection({
  heading = "Ready to Start?",
  text = "Book a free trial — no commitment, no pressure. Kids and adults, all levels, 8+ disciplines.",
  whatsappMessage = "Hi ROAR, I'd like to book a free trial.",
}: CTAProps) {
  return (
    <section className="section cta-band">
      <span className="ghost-word" aria-hidden="true">ROAR</span>
      <div className="container cta-inner">
        <h2 className="cta-heading">{heading}</h2>
        <p className="cta-text">{text}</p>
        <div className="cta-actions">
          <Link href="/contact#trial" className="btn btn-red">
            Book a Free Trial
          </Link>
          <a href={waLink(whatsappMessage)} target="_blank" rel="noopener" className="btn btn-ghost">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
