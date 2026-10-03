"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryItems, type GalleryItem } from "@/content/gallery";

const categories = ["all", "boxing", "kickboxing", "mma", "gymnastics", "fitness", "kids", "competition"] as const;
type Cat = (typeof categories)[number];

const labels: Record<Cat, string> = {
  all: "All",
  boxing: "Boxing",
  kickboxing: "Kickboxing",
  mma: "MMA",
  gymnastics: "Gymnastics",
  fitness: "Fitness",
  kids: "Kids",
  competition: "Competitions",
};

export default function Gallery() {
  const [filter, setFilter] = useState<Cat>("all");
  const [active, setActive] = useState<number | null>(null);

  const shown: GalleryItem[] =
    filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % shown.length)),
    [shown.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + shown.length) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="gallery-filters" role="tablist" aria-label="Filter gallery">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            className={`gallery-filter${filter === c ? " active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {labels[c]}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {shown.map((item, i) => (
          <figure key={item.src} className="shot">
            <button
              className="shot-btn"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${item.caption}`}
            >
              <span className="shot-no">{String(i + 1).padStart(2, "0")}</span>
              <Image
                src={item.src}
                alt={item.alt}
                width={900}
                height={675}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <figcaption>{item.caption}</figcaption>
            </button>
          </figure>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shown[active].caption} onClick={close}>
          <button className="lb-close" onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            className="lb-nav lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <Image
              src={shown[active].src}
              alt={shown[active].alt}
              width={1400}
              height={1050}
              sizes="100vw"
              priority
            />
            <figcaption>{shown[active].caption}</figcaption>
          </figure>
          <button
            className="lb-nav lb-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
