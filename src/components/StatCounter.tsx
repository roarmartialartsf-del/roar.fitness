"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

/** Counts up to `value` when scrolled into view. */
export default function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState("0");
  const decimals = (String(value).split(".")[1] || "").length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setDisplay(value.toFixed(decimals) + suffix);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const dur = 1300;
          let start: number | null = null;
          const step = (ts: number) => {
            if (start === null) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay((value * eased).toFixed(decimals) + suffix);
            if (p < 1) requestAnimationFrame(step);
            else setDisplay(value.toFixed(decimals) + suffix);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix, decimals]);

  return (
    <div className="stat">
      <span className="stat-num" ref={ref}>
        {display}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
