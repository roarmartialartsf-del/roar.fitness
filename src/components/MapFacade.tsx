"use client";

import { useState } from "react";
import { site } from "@/content/site";

/** Shows a lightweight facade; loads the Google Maps iframe only on click. */
export default function MapFacade() {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&output=embed`;

  if (loaded) {
    return (
      <div className="map">
        <iframe
          title={`Map to ${site.name}, ${site.address.locality}`}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="map">
      <button className="map-facade" onClick={() => setLoaded(true)} aria-label="Load map">
        <span className="eyebrow">Find Us</span>
        <span style={{ fontFamily: "var(--disp)", fontWeight: 900, fontSize: "1.8rem" }}>
          Canal Gardens, Lahore
        </span>
        <span className="btn btn-outline" style={{ pointerEvents: "none" }}>Load Map</span>
      </button>
    </div>
  );
}
