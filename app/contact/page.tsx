import Image from "next/image";
import { Mail, MapPin, Phone, Workflow } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectInquiryForm } from "@/components/ProjectInquiryForm";
import { company } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact MIR ENERGY | Start an LNG or Energy Project", "Contact MIR ENERGY to discuss LNG supply, logistics, storage, regasification, infrastructure or strategic energy partnerships.", "/contact");
const contactPoints = [
  { icon: Phone, label: "Phone", value: company.phone || "Contact channel opening soon", href: company.phone ? `tel:${company.phone.replace(/[^+\d]/g, "")}` : null },
  { icon: Mail, label: "Email", value: company.email || "Contact channel opening soon", href: company.email ? `mailto:${company.email}` : null },
  { icon: MapPin, label: "Market reach", value: "West Africa · Central Africa · Dubai · United States", href: null },
];
const steps = [
  ["Share the opportunity", "We review your market, demand, timeline and key requirements."],
  ["Define the scope", "We clarify commercial, technical, logistical and infrastructure priorities."],
  ["Build the roadmap", "We identify the next steps, information required and potential project structure."],
];
export default function ContactPage() {
  return <main id="top" className="contact-site-page">
    <section className="services-cover contact-cover"><Image src="/hero-energy.jpg" alt="Industrial energy infrastructure supporting large-scale demand" fill priority className="cover-img" /><div className="services-cover-shade" /><SiteHeader overlay /><div className="services-cover-content contact-cover-content"><p className="overline">Start a conversation</p><h1>Bring us the challenge. We’ll structure the path forward.</h1><p>Tell us about your market, project, volume, timeline and infrastructure requirements. Our team will review the opportunity and identify the most relevant next steps.</p><a className="btn gold" href="#contact-form">START YOUR INQUIRY <span>↓</span></a></div></section>
    <div className="contact-points-wrap page-pad-x"><div className="contact-points">{contactPoints.map(point => { const Icon = point.icon; const content = <><i aria-hidden="true"><Icon strokeWidth={1.7} /></i><div><span>{point.label}</span><strong>{point.value}</strong></div>{point.href && <b aria-hidden="true">↗</b>}</>; return point.href ? <a className="contact-point" href={point.href} key={point.label}>{content}</a> : <div className="contact-point" key={point.label}>{content}</div>; })}</div></div>
    <section id="contact-form" className="contact-conversation page-pad">
      <header className="editorial-heading"><p className="overline">Your inquiry</p><div><h2>A simple process. A structured response.</h2><p>Share your market, demand, timeline and key requirements.</p></div></header>
      <div className="contact-workspace"><aside className="contact-brief"><p className="overline">What happens next</p><h2>A clear path from opportunity to next steps.</h2><ol>{steps.map(([title, copy], i) => <li key={title}><b>0{i + 1}</b><div><strong>{title}</strong><span>{copy}</span></div></li>)}</ol><div className="contact-response-time"><Workflow aria-hidden="true" strokeWidth={1.7} /><div><strong>Project-focused coordination</strong><span>Clear priorities. Relevant next steps.</span></div></div></aside><ProjectInquiryForm /></div>
    </section>
    <section className="contact-closing page-pad"><div><p className="overline">Direct contact</p><h2>Operating between global supply markets and African demand centers.</h2></div><div className="contact-closing-links">
      {company.email ? <a href={`mailto:${company.email}`}><span>EMAIL OUR TEAM</span><strong>{company.email}</strong><b>↗</b></a> : <div className="contact-channel-pending"><span>Email</span><strong>Contact channel opening soon</strong></div>}
      {company.phone ? <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}><span>CALL MIR ENERGY</span><strong>{company.phone}</strong><b>↗</b></a> : <div className="contact-channel-pending"><span>Phone</span><strong>Contact channel opening soon</strong></div>}
    </div></section>
    <SiteFooter />
  </main>;
}
