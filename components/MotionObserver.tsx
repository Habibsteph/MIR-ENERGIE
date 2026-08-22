"use client";
import { useEffect } from "react";

export function MotionObserver(){
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const selectors=[
      "main > section:not(.home-hero):not(.services-cover)",
      ".section-intro",
      ".service-grid article",
      ".service-feature",
      ".service-card-row",
      ".about-values article",
      ".benefit-grid > div",
      ".market-card",
      ".value-grid article",
      ".service-rows article",
      ".process-grid > div",
      ".services-tab",
      ".services-benefit",
      ".service-offer-card",
      ".capability-card",
      ".about-pillar",
      ".about-mission-showcase",
      ".contact-point",
      ".contact-workspace",
      ".footer-top > div"
    ];
    const elements=Array.from(document.querySelectorAll<HTMLElement>(selectors.join(",")));
    document.body.classList.add("motion-ready");
    elements.forEach((element,index)=>{
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay",`${Math.min(index%4,3)*70}ms`);
    });
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -6% 0px"});
    elements.forEach(element=>observer.observe(element));
    return()=>observer.disconnect();
  },[]);
  return null;
}
