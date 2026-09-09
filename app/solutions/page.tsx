import Image from "next/image";
import { NativeLink as Link } from "@/components/NativeLink";
import { SolutionCards } from "@/components/SolutionCards";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Energy Solutions | MIR ENERGY", "Explore proposed MIR ENERGY services across oil, LNG, LPG, gas, energy infrastructure and electrification.", "/solutions");

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
        <p>Three complementary domains: Oil, LNG / LPG / Gas, and Energy / Electrification. Explore the proposed services within each domain, from supply and logistics to infrastructure planning.</p>
        <Link className="btn gold" href="/contact">DISCUSS YOUR PROJECT <span>↗</span></Link>
      </div>
    </section>
    <section className="page-pad solutions-overview"><p className="overline">Our solutions</p><h2>Three energy domains. One coordinated approach.</h2><SolutionCards /></section>
    <section className="services-why page-pad">
      <header className="services-why-heading"><p className="overline">How we work</p><h2>Understand. Structure. Execute.</h2></header>
      <div className="services-steps" aria-label="Our three-step process">{steps.map(([title, copy], i) => <div key={title}><b>0{i + 1}</b><span>{title}</span><p>{copy}</p></div>)}</div>
      <div className="services-benefit">
        <div className="services-benefit-media"><span className="media-accent media-accent-back" /><span className="media-accent media-accent-front" /><div className="services-benefit-image"><Image src="/field-worker-branded.png" alt="Energy infrastructure professional on site" fill className="cover-img" /></div><div className="services-benefit-badge editorial-badge"><b>MIR</b><span>Operational coordination</span></div></div>
        <div className="services-benefit-copy"><p className="overline">End-to-end coordination</p><h3>One coordinated process.</h3><p className="services-benefit-lead">Clear visibility from source to destination.</p><p>We connect supply, logistics, market intelligence and local execution to build dependable energy pathways from source to end user.</p><ul><li>Clear responsibilities and documented milestones</li><li>Technical and commercial partners aligned with each project</li><li>Structured documentation and operational follow-up</li></ul><Link className="text-link" href="/about">DISCOVER MIR ENERGY <span>↗</span></Link></div>
      </div>
    </section>
    <section className="services-capabilities page-pad">
      <div className="services-capabilities-intro"><p className="overline">Our value added</p><h2>A clearer path from opportunity to operation.</h2><p>Global sourcing. Commercial structuring. Logistics orchestration. Compliance and visibility.</p></div>
      <div className="capability-grid">{capabilities.map(([title, copy], i) => <article className="capability-card" key={title}><b>0{i + 1}</b><div><h3>{title}</h3><p>{copy}</p></div><span aria-hidden="true">↗</span></article>)}</div>
    </section>
    <section className="home-cta page-pad"><div><p className="overline">Ready to move forward?</p><h2>Let’s build the energy pathway your market needs.</h2></div><Link className="btn gold" href="/contact">START A PROJECT <span>↗</span></Link></section>
    <SiteFooter />
  </main>;
}
