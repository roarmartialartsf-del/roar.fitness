"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export interface Slide {
  src: string;
  alt: string;
  caption: string;
  tag?: string;
}

/** Auto-advancing image slider with dots, arrows, swipe and pause-on-hover. */
export default function Slider({ slides, interval = 4200 }: { slides: Slide[]; interval?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = slides.length;

  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);
  const to = useCallback((idx: number) => setI(idx), []);

  useEffect(() => {
    if (paused || n <= 1) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), interval);
    return () => clearInterval(t);
  }, [paused, n, interval]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
      aria-roledescription="carousel"
    >
      <div className="slider-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((s) => (
          <figure className="slide" key={s.src} aria-hidden={slides[i].src !== s.src}>
            <Image src={s.src} alt={s.alt} fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: "cover" }} />
            <figcaption className="slide-cap">
              {s.tag && <span className="slide-tag">{s.tag}</span>}
              <span>{s.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <button className="slider-arrow slider-prev" onClick={() => go(-1)} aria-label="Previous slide">‹</button>
      <button className="slider-arrow slider-next" onClick={() => go(1)} aria-label="Next slide">›</button>

      <div className="slider-dots" role="tablist">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            role="tab"
            aria-selected={idx === i}
            aria-label={`Go to slide ${idx + 1}`}
            className={`slider-dot${idx === i ? " active" : ""}`}
            onClick={() => to(idx)}
          />
        ))}
      </div>
    </div>
  );
}
