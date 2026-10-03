import { site, waLink } from "@/content/site";

/** Mobile-only sticky bottom bar: one-tap WhatsApp + Call. */
export default function StickyMobileBar() {
  return (
    <div className="sticky-bar" role="navigation" aria-label="Quick contact">
      <a
        href={waLink("Hi ROAR, I'd like to book a free trial.")}
        target="_blank"
        rel="noopener"
        className="sticky-btn sticky-wa"
      >
        <span aria-hidden="true">💬</span> WhatsApp
      </a>
      <a href={`tel:${site.phone.e164}`} className="sticky-btn sticky-call">
        <span aria-hidden="true">📞</span> Call
      </a>
    </div>
  );
}
