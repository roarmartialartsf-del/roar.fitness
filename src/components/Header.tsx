"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progOpen, setProgOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setProgOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" onClick={close} aria-label="ROAR MMA home">
          <span className="brand-name">ROAR MMA</span>
          <span className="brand-est">EST. 2011</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <div className="nav-dd" key={item.href}>
                <Link href={item.href} className="nav-dd-trigger">
                  {item.label} <span aria-hidden="true">▾</span>
                </Link>
                <div className="nav-dd-menu" role="menu">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} role="menuitem">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link href="/contact#trial" className="btn btn-red btn-sm nav-cta">
          Book a Free Trial
        </Link>

        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {nav.map((item) =>
          item.children ? (
            <div key={item.href} className="mm-group">
              <button
                className="mm-group-trigger"
                aria-expanded={progOpen}
                onClick={() => setProgOpen((v) => !v)}
              >
                {item.label} <span aria-hidden="true">{progOpen ? "–" : "+"}</span>
              </button>
              {progOpen && (
                <div className="mm-sub">
                  <Link href={item.href} onClick={close}>
                    All Programs
                  </Link>
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} onClick={close}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={item.href} key={item.href} onClick={close}>
              {item.label}
            </Link>
          )
        )}
        <Link href="/contact#trial" className="btn btn-red" onClick={close}>
          Book a Free Trial
        </Link>
      </div>
    </header>
  );
}
