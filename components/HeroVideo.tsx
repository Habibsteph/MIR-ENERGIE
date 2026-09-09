"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (preference.matches) video.current?.pause();
      else video.current?.play().catch(() => { /* Keep the poster if autoplay is unavailable. */ });
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  return <>
    <video
      ref={video}
      className="hero-background-video"
      muted
      loop
      playsInline
      preload="metadata"
      poster="/import-ship.jpg"
      aria-hidden="true"
    >
      <source src="/home-hero-ship.mp4?v=20260908-2044" type="video/mp4" />
    </video>

  </>;
}
