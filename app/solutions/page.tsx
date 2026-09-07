import Image from "next/image";
import { NativeLink as Link } from "@/components/NativeLink";
import { Factory, Fuel, Warehouse, Ship } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { solutions } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("LNG Solutions | MIR ENERGY", "Explore MIR ENERGY solutions for LNG supply, marine logistics, storage, regasification and energy infrastructure development.", "/solutions");
const icons = [Fuel, Ship, Warehouse, Factory];
const steps = [
  ["Understand", "We define the market need, demand profile, infrastructure constraints and commercial priorities."],
  ["Structure", "We align supply, logistics, technical partners, compliance requirements and commercial terms."],
  ["Execute", "We coordinate the pathway from agreed strategy to operational delivery with clear milestones and accountability."],
];
const capabilities = [
  ["Global sourcing", "Access to international market relationships and supply channels."],
  ["Commercial structuring", "Supply models aligned with volume, duration, infrastructure and financing realities."],
  ["Logistics orchestration", "Coordination across vessels, terminals, transport interfaces and delivery schedules."],
  ["Compliance & visibility", "Structured documentation, counterparty review and transparent execution milestones."],
];

export default function SolutionsPage() {
  return <main id="top" className="services-page">
    <section className="services-cover">
      <Image src="/services-offshore-hero.png" alt="Offshore energy infrastructure" fill priority className="cover-img" />
      <div className="services-cover-shade" /><SiteHeader overlay />
      <div className="services-cover-content">
        <p className="overline">MIR ENERGY Solutions</p>
        <h1>Energy security,<br />engineered end to end.</h1>
        <p>From LNG sourcing to storage, regasification and delivery, MIR ENERGY coordinates the commercial, logistical and infrastructure layers required to move energy reliably across markets.</p>
        <Link className="btn gold" href="/contact">DISCUSS YOUR PROJECT <span>↗</span></Link>
      </div>
    </section>
    <div className="services-tabs-wrap page-pad-x">
      <nav className="services-tabs" aria-label="Energy solutions">
        {solutions.map((s, i) => { const Icon = icons[i]; return <a className={`services-tab${i === 0 ? " is-active" : ""}`} href={`#${s.id}`} key={s.id}><i aria-hidden="true"><Icon strokeWidth={1.7} /></i><strong>{s.tab}</strong><span>{s.subtitle}</span>{i === 0 && <b aria-hidden="true">↓</b>}</a>; })}
      </nav>
    </div>
    <section className="services-why page-pad">
      <header className="services-why-heading"><p className="overline">How we work</p><h2>Understand. Structure. Execute.</h2></header>
      <div className="services-steps" aria-label="Our three-step process">{steps.map(([title, copy], i) => <div key={title}><b>0{i + 1}</b><span>{title}</span><p>{copy}</p></div>)}</div>
      <div className="services-benefit">
        <div className="services-benefit-media"><span className="media-accent media-accent-back" /><span className="media-accent media-accent-front" /><div className="services-benefit-image"><Image src="/field-worker-branded.png" alt="Energy infrastructure professional on site" fill className="cover-img" /></div><div className="services-benefit-badge editorial-badge"><b>LNG</b><span>Operational coordination</span></div></div>
        <div className="services-benefit-copy"><p className="overline">End-to-end coordination</p><h3>One coordinated process.</h3><p className="services-benefit-lead">Clear visibility from source to destination.</p><p>We connect supply, logistics, market intelligence and local execution to build dependable energy pathways from source to end user.</p><ul><li>Clear responsibilities and documented milestones</li><li>Technical and commercial partners aligned with each project</li><li>Structured documentation and operational follow-up</li></ul><Link className="text-link" href="/about">DISCOVER MIR ENERGY <span>↗</span></Link></div>
      </div>
    </section>
    <section id="our-solutions" className="services-offers page-pad">
      <div className="services-offers-intro"><p className="overline">Our solutions</p><h2>From global supply to local infrastructure.</h2><p>MIR ENERGY combines LNG sourcing, logistics, infrastructure development and commercial structuring to build reliable energy supply chains for governments, utilities and industrial clients.</p><Link className="text-link" href="/contact">DISCUSS YOUR PROJECT <span>↗</span></Link></div>
      <div className="service-offer-grid">{solutions.map(s => <article id={s.id} className="service-offer-card" key={s.id}><div className="service-offer-image"><Image src={s.image} alt={s.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 30vw" className="cover-img" /><span>{s.number}</span></div><div><p>{s.subtitle}</p><h3>{s.detailTitle || s.title}</h3><span>{s.description}</span></div></article>)}</div>
    </section>
    <section className="services-capabilities page-pad">
      <div className="services-capabilities-intro"><p className="overline">Our value added</p><h2>A clearer path from opportunity to operation.</h2><p>Global sourcing. Commercial structuring. Logistics orchestration. Compliance and visibility.</p></div>
      <div className="capability-grid">{capabilities.map(([title, copy], i) => <article className="capability-card" key={title}><b>0{i + 1}</b><div><h3>{title}</h3><p>{copy}</p></div><span aria-hidden="true">↗</span></article>)}</div>
    </section>
    <section className="home-cta page-pad"><div><p className="overline">Ready to move forward?</p><h2>Let’s build the energy pathway your market needs.</h2></div><Link className="btn gold" href="/contact">START A PROJECT <span>↗</span></Link></section>
    <SiteFooter />
  </main>;
}
