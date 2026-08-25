"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NativeLink as Link } from "./NativeLink";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];
  return <header className={`main-header ${overlay ? "is-overlay" : ""}`}>
    <Link className="main-logo" href="/"><Image src="/logo-mir-white.png" alt="MIR Energie" width={190} height={94} priority /></Link>
    <nav className={open ? "main-nav open" : "main-nav"} aria-label="Navigation principale">
      {links.map((link) => {
        const active = pathname === link.href;
        return <Link
          key={link.href}
          href={link.href}
          className={active ? "is-active" : undefined}
          aria-current={active ? "page" : undefined}
          onClick={()=>setOpen(false)}
        >{link.label}</Link>;
      })}
    </nav>
    <Link className="nav-cta" href="/contact">Demander un devis <span>↗</span></Link>
    <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Ouvrir le menu" aria-expanded={open}><i/><i/></button>
  </header>;
}
