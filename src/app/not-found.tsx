import Link from "next/link";
import { waLink } from "@/content/site";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <span className="page-hero-watermark" aria-hidden="true">404</span>
      <div className="container">
        <span className="eyebrow">Off the mat</span>
        <h1>Page Not Found</h1>
        <p className="lead">
          This page took one too many hits. Let&apos;s get you back to training — explore our programs or message us
          on WhatsApp.
        </p>
        <div className="hero-actions" style={{ marginTop: 32 }}>
          <Link href="/" className="btn btn-red">Back to Home</Link>
          <Link href="/programs" className="btn btn-ghost">View Programs</Link>
          <a href={waLink("Hi ROAR, I have a question.")} target="_blank" rel="noopener" className="btn btn-outline">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
