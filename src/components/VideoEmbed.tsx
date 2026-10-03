"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Click-to-load video (keeps the page fast). Supports YouTube and Instagram.
 * Pass a YouTube or Instagram Reel URL. If no URL is set yet, shows a
 * tasteful placeholder so you can drop your reel link in later.
 */
function toEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace("www.", "");
    if (host.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
    }
    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}?autoplay=1`;
    }
    if (host.includes("instagram.com")) {
      // /reel/CODE/ or /p/CODE/ or /tv/CODE/
      const m = u.pathname.match(/\/(reel|p|tv)\/([^/]+)/);
      return m ? `https://www.instagram.com/${m[1]}/${m[2]}/embed` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export default function VideoEmbed({
  url,
  poster,
  label = "Watch ROAR in action",
}: {
  url?: string;
  poster: string;
  label?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const embed = url ? toEmbed(url) : null;

  if (playing && embed) {
    return (
      <div className="video-frame">
        <iframe
          src={embed}
          title={label}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      className="video-facade"
      onClick={() => embed && setPlaying(true)}
      aria-label={embed ? label : "Video coming soon"}
      disabled={!embed}
    >
      <Image src={poster} alt="" fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: "cover" }} />
      <span className="video-scrim" aria-hidden="true" />
      <span className="video-play" aria-hidden="true">▶</span>
      <span className="video-label">{embed ? label : "Reel coming soon — add your Instagram link"}</span>
    </button>
  );
}
