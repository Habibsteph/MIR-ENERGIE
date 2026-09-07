import Image from "next/image";
import { NativeLink as Link } from "@/components/NativeLink";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About MIR ENERGY | Global LNG & Energy Infrastructure", "Discover how MIR ENERGY connects global LNG supply, African market intelligence and energy infrastructure development.", "/about");
const pillars = [
  ["Market intelligence", "A practical understanding of energy demand, local constraints and commercial realities."],
  ["Global connectivity", "International relationships across supply, logistics, infrastructure and finance."],
  ["Execution discipline", "Clear roles, structured processes and accountable project coordination."],
];
const drivers = [
  ["Connect", "Bring the right supply, technical and commercial partners around a shared objective."],
  ["Structure", "Turn complex energy requirements into clear, executable pathways."],
  ["Deliver", "Coordinate the steps, responsibilities and information required to move projects forward."],
];
const principles = [
  ["Precision", "Clear information, disciplined execution and attention to critical details."],
  ["Integrity", "Transparent relationships, responsible commitments and respect for counterparties."],
  ["Agility", "Fast adaptation to changing market, logistics and project conditions."],
  ["Long-term impact", "Energy solutions designed to support sustainable industrial and economic growth."],
];
export default function AboutPage() {
  return <main id="top" className="about-page">
    <section className="services-cover about-cover"><Image src="/field-worker-branded.png" alt="Energy infrastructure professional on site" fill priority className="cover-img" /><div className="services-cover-shade" /><SiteHeader overlay /><div className="services-cover-content about-cover-content"><p className="overline">About MIR ENERGY</p><h1>Built to connect energy, infrastructure and opportunity.</h1><p>MIR ENERGY brings together international LNG supply, local market intelligence and infrastructure development to help high-growth markets build more reliable energy systems.</p><Link className="btn gold" href="/contact">BUILD A PARTNERSHIP <span>↗</span></Link></div></section>
    <div className="about-pillars-wrap page-pad-x"><div className="about-pillars">{pillars.map(([title, copy], i) => <article className="about-pillar" key={title}><b>0{i + 1}</b><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div></div>
    <section className="about-mission page-pad">
      <header className="editorial-heading"><p className="overline">Our mission</p><div><h2>Make reliable LNG more accessible to the markets that need it most.</h2><p>Our mission is to connect global energy resources with the infrastructure and execution capabilities required to serve governments, utilities and industry across Africa and emerging markets. We focus on practical, scalable solutions that improve energy security and support long-term industrial development.</p></div></header>
      <div className="about-mission-showcase"><div className="about-mission-media"><Image src="/energy-grid.jpg" alt="Energy infrastructure and industrial equipment" fill className="cover-img" /><div className="about-mission-badge editorial-badge"><b>LNG</b><span>Energy infrastructure</span></div></div><div className="about-mission-copy"><p className="overline">What drives us</p><p className="about-mission-lead">LNG Supply. Energy Infrastructure. Global Connectivity.</p><p>We connect global LNG supply with the logistics, infrastructure and market expertise required to serve Africa and emerging markets.</p><div className="about-mission-points">{drivers.map(([title, copy], i) => <article key={title}><b>0{i + 1}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></div></div>
    </section>
    <section className="vision-banner about-vision"><Image src="/industrial-site.jpg" alt="Industrial infrastructure supporting energy demand" fill className="cover-img" /><div /><article><p className="overline">Our vision</p><h2>A future where energy constraints no longer limit growth.</h2><p className="vision-copy">We believe reliable energy infrastructure can unlock industrial capacity, strengthen competitiveness and create new possibilities for communities and economies.</p><Link className="btn gold" href="/contact">DISCUSS YOUR PROJECT <span>↗</span></Link></article></section>
    <section className="services-capabilities about-principles page-pad"><div className="services-capabilities-intro"><p className="overline">Our principles</p><h2>Precision. Integrity. Agility. Long-term impact.</h2><p>Four principles guide our decisions and the relationships we build with every partner.</p></div><div className="capability-grid">{principles.map(([title, copy], i) => <article className="capability-card" key={title}><b>0{i + 1}</b><div><h3>{title}</h3><p>{copy}</p></div><span aria-hidden="true">↗</span></article>)}</div></section>
    <SiteFooter />
  </main>;
}
