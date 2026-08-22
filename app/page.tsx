import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionIntro } from "@/components/SectionIntro";

const services = [
  ["01","Import & export de gaz","Approvisionnement, négoce et acheminement sécurisé de produits énergétiques entre marchés internationaux."],
  ["02","Logistique énergétique","Coordination des flux, suivi opérationnel et solutions de transport adaptées aux contraintes du secteur."],
  ["03","Forage & infrastructures","Pilotage de projets techniques et d’infrastructures conçus pour les besoins réels des territoires."],
  ["04","Projets à impact social","Construction et accompagnement d’initiatives durables au service des communautés locales."],
];

export default function Home(){
  return <main id="top">
    <div className="home-hero-shell">
      <section className="home-hero">
        <SiteHeader overlay />
        <Image src="/import-ship.jpg" alt="Navire de commerce transportant des conteneurs" fill priority sizes="100vw" className="cover-img"/>
        <div className="home-hero-shade"/>
        <div className="hero-main">
          <p className="hero-kicker">Énergie · Commerce · Infrastructures</p>
          <h1>Connecter l’énergie.<br/>Accélérer les <em>territoires.</em></h1>
          <p>MIR Energie sécurise l’approvisionnement, la logistique et les infrastructures qui relient l’Afrique aux marchés internationaux.</p>
          <div className="hero-buttons"><Link className="btn gold" href="/contact">Parler de votre projet <span>↗</span></Link><Link className="btn darkglass" href="/services">Explorer nos services</Link></div>
        </div>
        <div className="hero-metrics">
          <div><span>Clients accompagnés</span><b>20<sup>+</sup></b><small>Une relation fondée sur la confiance.</small></div>
          <div><span>Projets réalisés</span><b>30<sup>+</sup></b><small>De l’étude au déploiement terrain.</small></div>
          <div><span>Réseau international</span><b>7</b><small>Pays connectés à nos opérations.</small></div>
          <div><span>Disponibilité</span><b>24<sup>/7</sup></b><small>Un suivi continu des opérations.</small></div>
        </div>
      </section>
    </div>

    <section className="home-about page-pad">
      <div className="editorial-heading">
        <p className="overline">Qui sommes-nous</p>
        <div><h2>Une expertise qui relie le terrain aux marchés internationaux.</h2><p>Nous simplifions les opérations énergétiques complexes pour les rendre plus fiables, plus lisibles et plus performantes.</p></div>
      </div>
      <div className="about-showcase">
        <div className="about-image"><Image src="/field-worker.jpg" alt="Professionnel du secteur énergétique" fill sizes="(max-width: 900px) 100vw, 55vw" className="cover-img"/><div className="image-badge"><b>30<sup>+</sup></b><span>projets menés<br/>avec exigence</span></div></div>
        <div className="about-content">
          <p className="about-lead">MIR Energie accompagne les entreprises, institutions et territoires sur toute la chaîne de valeur : sourcing, transport, coordination technique et réalisation.</p>
          <p className="about-body">Notre force repose sur une connaissance concrète des environnements africains, un réseau international fiable et une culture de la responsabilité opérationnelle.</p>
          <div className="about-values"><article><b>01</b><h3>Maîtrise régionale</h3><p>Une lecture précise des réalités du terrain et des marchés.</p></article><article><b>02</b><h3>Réseau international</h3><p>Des partenaires qualifiés mobilisés selon chaque projet.</p></article></div>
          <Link className="text-link" href="/a-propos">Découvrir MIR Energie <span>↗</span></Link>
        </div>
      </div>
    </section>

    <section className="services-block page-pad">
      <SectionIntro light eyebrow="Nos expertises" title="Des solutions intégrées pour chaque étape du projet." copy="Une offre structurée pour faire circuler l’énergie, bâtir les infrastructures et créer une valeur durable."/>
      <div className="service-showcase">
        <Link href="/services" className="service-feature"><Image src="/industrial-site.jpg" alt="Installation énergétique industrielle" fill sizes="(max-width: 900px) 100vw, 52vw" className="cover-img"/><div className="service-feature-shade"/><span>01 — Expertise principale</span><div><h3>{services[0][1]}</h3><p>{services[0][2]}</p><b>Découvrir le service ↗</b></div></Link>
        <div className="service-card-list">{services.slice(1).map(([n,t,d])=><Link href="/services" className="service-card-row" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></Link>)}</div>
      </div>
    </section>

    <section className="why-us">
      <div className="why-image"><Image src="/industrial-site.jpg" alt="Installation industrielle énergétique" fill sizes="(max-width: 800px) 100vw, 50vw" className="cover-img"/></div>
      <div className="why-copy"><p className="overline">Pourquoi MIR Energie</p><h2>La maîtrise du terrain, portée par une vision globale.</h2><div className="benefit-grid"><div><b>01</b><h3>Fiabilité</h3><p>Des partenaires sélectionnés et un suivi documenté des opérations.</p></div><div><b>02</b><h3>Réactivité</h3><p>Une organisation agile capable de répondre aux réalités du terrain.</p></div><div><b>03</b><h3>Conformité</h3><p>Une exigence constante sur la sécurité et les standards applicables.</p></div><div><b>04</b><h3>Impact</h3><p>Des projets pensés pour produire une valeur économique et sociale durable.</p></div></div></div>
    </section>

    <section className="markets page-pad">
      <SectionIntro eyebrow="Secteurs accompagnés" title="Une énergie utile là où elle compte le plus."/>
      <div className="market-grid">
        <Link href="/services" className="market-card large"><Image src="/energy-grid.jpg" alt="Infrastructure énergétique" fill sizes="50vw" className="cover-img"/><span>01</span><div><h3>Énergie & industrie</h3><p>Approvisionnement et solutions pour les sites à forts enjeux.</p></div></Link>
        <Link href="/services" className="market-card"><Image src="/import-ship.jpg" alt="Transport maritime" fill sizes="25vw" className="cover-img"/><span>02</span><div><h3>Commerce & logistique</h3></div></Link>
        <Link href="/services" className="market-card"><Image src="/field-worker.jpg" alt="Projet d'infrastructure" fill sizes="25vw" className="cover-img"/><span>03</span><div><h3>Infrastructures</h3></div></Link>
      </div>
    </section>

    <section className="countries"><p>Une présence qui relie les opportunités</p><div><span>États-Unis</span><i>→</i><span>Dubaï</span><i>→</i><span>Afrique de l’Ouest</span></div><p>Côte d’Ivoire · Mali · Burkina Faso · Guinée · Liberia</p></section>

    <section className="home-cta page-pad"><div><p className="overline">Votre prochain projet commence ici</p><h2>Construisons des solutions qui font avancer les territoires.</h2></div><Link className="btn gold" href="/contact">Échanger avec notre équipe <span>↗</span></Link></section>
    <SiteFooter/>
  </main>;
}
