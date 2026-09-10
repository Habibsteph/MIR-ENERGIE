"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NativeLink as Link } from "./NativeLink";
import { solutions } from "@/lib/content";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const pathname = usePathname();
  const submenu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    let previousY = window.scrollY;
    setScrollVisible(false);
    setOpen(false);
    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      if (y <= 12) setScrollVisible(false);
      else if (Math.abs(y - previousY) > 4) setScrollVisible(y > previousY);
      else return;
      previousY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  useEffect(() => {
    const menu = submenu.current;
    let closeTimer: ReturnType<typeof setTimeout> | undefined;
    const clearClose = () => { if (closeTimer) clearTimeout(closeTimer); };
    const canHover = () => window.matchMedia("(min-width: 901px) and (hover: hover) and (pointer: fine)").matches;
    const enter = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !canHover() || !menu) return;
      clearClose();
      menu.open = true;
    };
    const leave = () => {
      if (!canHover()) return;
      clearClose();
      closeTimer = setTimeout(() => {
        if (menu && !menu.contains(document.activeElement)) menu.open = false;
      }, 180);
    };
    const blur = (event: FocusEvent) => {
      if (menu && !menu.contains(event.relatedTarget as Node) && !menu.matches(":hover")) menu.open = false;
    };
    menu?.addEventListener("pointerenter", enter);
    menu?.addEventListener("pointerleave", leave);
    menu?.addEventListener("focusout", blur);
    const close = (event: PointerEvent) => {
      if (submenu.current && !submenu.current.contains(event.target as Node)) submenu.current.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && submenu.current?.open) {
        submenu.current.open = false;
        submenu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      clearClose();
      menu?.removeEventListener("pointerenter", enter);
      menu?.removeEventListener("pointerleave", leave);
      menu?.removeEventListener("focusout", blur);
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  function closeMenus() { setOpen(false); if (submenu.current) submenu.current.open = false; }
  const links = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  return <header className={`main-header ${overlay ? "is-overlay" : ""} ${scrollVisible || open ? "mobile-scroll-visible" : ""}`}>
    <Link className="main-logo" href="/"><Image src="/logo-mir-white.png" alt="MIR ENERGY" width={190} height={94} priority /></Link>
    <nav id="main-navigation" className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
      {links.map((link) => {
        const active = pathname === link.href;
        if (link.href === "/solutions") return <details ref={submenu} className="solutions-menu" key={link.href}>
          <summary className={pathname?.startsWith("/solutions") ? "is-active" : undefined}>Solutions <ChevronDown className="solutions-chevron" size={14} strokeWidth={1.8} aria-hidden="true" /></summary>
          <div className="solutions-dropdown"><Link href="/solutions" onClick={closeMenus} aria-current={active ? "page" : undefined}>All solutions</Link>{solutions.map(s => <Link href={`/solutions/${s.slug}`} key={s.id} onClick={closeMenus} aria-current={pathname === `/solutions/${s.slug}` ? "page" : undefined}>{s.title}</Link>)}</div>
        </details>;
        return <Link
          key={link.href}
          href={link.href}
          className={active ? "is-active" : undefined}
          aria-current={active ? "page" : undefined}
          onClick={closeMenus}
        >{link.label}</Link>;
      })}
    </nav>
    <Link className="nav-cta" href="/contact">START A PROJECT <span>↗</span></Link>
    <button className="mobile-toggle" onClick={()=>{setOpen(!open); if (submenu.current) submenu.current.open = false;}} aria-label={open ? "Close menu" : "Open menu"} aria-controls="main-navigation" aria-expanded={open}><i/><i/></button>
  </header>;
}
