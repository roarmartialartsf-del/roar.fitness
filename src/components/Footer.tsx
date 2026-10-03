import Link from "next/link";
import { nav, site, waLink } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-name">ROAR MMA</span>
            <p className="footer-tag">{site.tagline}</p>
            <p className="footer-note">{site.supportingLine}</p>
            <div className="footer-social">
              <a href={site.socials.instagram} target="_blank" rel="noopener">
                Instagram
              </a>
              <a href={site.socials.facebook} target="_blank" rel="noopener">
                Facebook
              </a>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-k">Explore</span>
            <ul>
              {nav
                .filter((n) => n.href !== "/")
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-k">Programs</span>
            <ul>
              <li><Link href="/programs/mma">MMA</Link></li>
              <li><Link href="/programs/boxing">Boxing</Link></li>
              <li><Link href="/programs/kickboxing">Kickboxing</Link></li>
              <li><Link href="/programs/muay-thai">Muay Thai</Link></li>
              <li><Link href="/programs/self-defense">Self-Defense</Link></li>
              <li><Link href="/programs/wushu-kung-fu">Wushu &amp; Kung Fu</Link></li>
              <li><Link href="/kids">Kids Martial Arts</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-k">Visit / Contact</span>
            <address className="footer-address">{site.address.full}</address>
            <p>
              <a href={`tel:${site.phone.e164}`}>{site.phone.display}</a>
            </p>
            <p>
              <a href={waLink("Hi ROAR, I'd like to know more.")} target="_blank" rel="noopener">
                WhatsApp us
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bar">
          <span className="copy">
            © {year} {site.legalName} · Canal Gardens, Lahore
          </span>
          <Link href="#top" className="back-top">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
