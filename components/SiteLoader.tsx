"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let disposed = false;
    const previousOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const unlock = () => {
      document.documentElement.style.overflow = previousOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
    let removalTimer: ReturnType<typeof setTimeout>;
    const started = performance.now();
    let revealTimer: ReturnType<typeof setTimeout>;
    const reveal = () => {
      clearTimeout(revealTimer);
      revealTimer = setTimeout(() => {
        if (disposed) return;
        setLeaving(true);
        unlock();
        removalTimer = setTimeout(() => setRemoved(true), 500);
      }, Math.max(0, 900 - (performance.now() - started)));
    };
    const ready = () => { void document.fonts.ready.then(() => { if (!disposed) reveal(); }); };
    if (document.readyState === "complete") ready();
    else window.addEventListener("load", ready, { once: true });
    // Never hold the site behind a slow video or unavailable resource.
    const deadline = setTimeout(reveal, 3500);
    return () => {
      disposed = true;
      unlock();
      window.removeEventListener("load", ready);
      clearTimeout(deadline);
      clearTimeout(revealTimer);
      clearTimeout(removalTimer);
    };
  }, []);

  if (removed) return null;
  return <div className={`site-loader${leaving ? " is-leaving" : ""}`} role="status" aria-label="Loading MIR ENERGY">
    <div className="site-loader-logo">
      {/* Preserve the original artwork; crop only its surrounding white space. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-mir.png" alt="MIR energy" width={3509} height={2481} fetchPriority="high" />
    </div>
    <span className="site-loader-line" aria-hidden="true" />
  </div>;
}
