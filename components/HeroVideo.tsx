"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (preference.matches) video.current?.pause();
      else video.current?.play().catch(() => setPlaying(false));
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
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
    >
      <source src="/home-hero-ship.mp4" type="video/mp4" />
    </video>
    <button
      type="button"
      className="hero-video-toggle"
      aria-label={playing ? "Pause background video" : "Play background video"}
      onClick={() => {
        if (playing) video.current?.pause();
        else video.current?.play().catch(() => setPlaying(false));
      }}
    >{playing ? "Pause video" : "Play video"}</button>
  </>;
}
