import Image from "next/image";
import { homeServices } from "@/lib/home-services";
import { HeroVideo } from "@/components/HeroVideo";
import { NativeLink as Link } from "@/components/NativeLink";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/SectionIntro";
import { SolutionCards } from "@/components/SolutionCards";

const proof = [
  ["Global supply network", "Connecting international LNG markets with African demand."],
  ["End-to-end coordination", "From LNG sourcing to infrastructure deployment."],
  ["Africa-focused execution", "Market understanding built around real operating environments."],
  ["Operational follow-up", "Coordination across international energy operations."],
];
const benefits = [
  ["Market intelligence", "We combine local market understanding with international supply intelligence."],
  ["Execution discipline", "Clear responsibilities, documented milestones and continuous operational coordination."],
  ["Compliance first", "Commercial, banking and operational processes structured around applicable compliance requirements."],
  ["Long-term alignment", "Solutions designed around sustainable supply relationships and infrastructure that can scale with demand."],
];
const sectors = [
  ["Governments & Utilities", "/tank-storage-final.png", "Industrial storage tank with MIR branding"],
  ["Mining & Heavy Industry", "/industrial-site.jpg", "Industrial infrastructure"],
  ["Manufacturing & Industrial Zones", "/import-ship.jpg", "International maritime logistics"],
  ["Energy & Infrastructure Partners", "/field-worker-branded.png", "Energy infrastructure professional on site"],
];

export default function Home() {
  return <main id="top">
    <div className="home-hero-shell">
      <section className="home-hero">
        <SiteHeader overlay />
        <HeroVideo />
        <div className="home-hero-shade" />
        <div className="hero-main">
          <p className="hero-kicker">Supply · Logistics · Storage & Regasification · Infrastructure</p>
          <h1>Integrated energy solutions for the markets shaping tomorrow.</h1>
          <p>MIR ENERGY brings together LNG supply and trading, logistics, storage and regasification, and energy infrastructure development to support governments, utilities and industry across Africa and emerging markets.</p>
        </div>
        <div className="hero-metrics hero-proof-cards">
          {proof.map(([title, copy]) => <div key={title}><b>{title}</b><small>{copy}</small></div>)}
        </div>
      </section>
    </div>
    <section className="home-about page-pad">
      <div className="editorial-heading"><p className="overline">Who we are</p><div><h2>Global reach. Local execution.</h2><p>MIR ENERGY develops and coordinates energy solutions designed to strengthen supply security and unlock long-term industrial growth.</p></div></div>
      <div className="about-showcase">
        <div className="about-image"><Image src="/field-worker-branded.png" alt="Energy infrastructure professional on site" fill sizes="(max-width: 900px) 100vw, 55vw" className="cover-img" /><div className="image-badge editorial-badge"><b>MIR</b><span>Global reach.<br />Local execution.</span></div></div>
        <div className="about-content">
          <p className="about-lead">From international LNG sourcing to infrastructure delivery, we connect supply, logistics, market intelligence and local execution to build dependable energy pathways from source to end user.</p>
          <div className="about-values"><article><b>01</b><h3>Regional intelligence</h3><p>Deep understanding of African energy markets, infrastructure needs and operating environments.</p></article><article><b>02</b><h3>Global network</h3><p>International supply, technical and commercial relationships mobilized around each project.</p></article></div>
          <Link className="text-link" href="/about">DISCOVER MIR ENERGY <span>↗</span></Link>
        </div>
      </div>
    </section>
    <section className="services-block page-pad">
      <SectionIntro light eyebrow="Our solutions" title="Integrated energy solutions. From global supply to local infrastructure." copy="MIR ENERGY combines LNG sourcing, logistics, infrastructure development and commercial structuring to build reliable energy supply chains for governments, utilities and industrial clients." />
      <SolutionCards light items={homeServices} />
    </section>
    <section className="why-us">
      <div className="why-image"><Image src="/tank-storage.jpg" alt="Industrial energy storage tank" fill sizes="(max-width: 800px) 100vw, 50vw" className="cover-img" /></div>
      <div className="why-copy"><p className="overline">Why MIR ENERGY</p><h2>Market intelligence. Execution discipline.</h2><div className="benefit-grid">{benefits.map(([title, copy], i) => <div key={title}><b>0{i + 1}</b><h3>{title}</h3><p>{copy}</p></div>)}</div></div>
    </section>
    <section className="markets page-pad">
      <SectionIntro eyebrow="Sectors we serve" title="Reliable energy for the industries building tomorrow." />
      <div className="market-grid market-grid-four">{sectors.map(([title, src, alt], i) => <Link href="/solutions" className="market-card" key={title}><Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 25vw" className="cover-img" /><span>0{i + 1}</span><div><h3>{title}</h3></div></Link>)}</div>
    </section>
    <section className="countries"><p>Connecting global supply hubs to high-growth African markets.</p><div><span>NORTH AMERICA</span><i>→</i><span>MIDDLE EAST</span><i>→</i><span>WEST & CENTRAL AFRICA</span></div><p>Market reach</p></section>
    <section className="home-cta page-pad"><div><p className="overline">Ready to move forward?</p><h2>Let’s build the energy pathway your market needs.</h2></div><Link className="btn gold" href="/contact">DISCUSS YOUR PROJECT <span>↗</span></Link></section>
    <SiteFooter />
  </main>;
}
