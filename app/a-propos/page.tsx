import Image from "next/image";
import { NativeLink as Link } from "@/components/NativeLink";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const pillars = [
  {
    number: "01",
    title: "Ancrage local",
    copy: "Une lecture concrète des marchés et des réalités opérationnelles.",
  },
  {
    number: "02",
    title: "Portée internationale",
    copy: "Un réseau de partenaires mobilisable au-delà des frontières.",
  },
  {
    number: "03",
    title: "Exécution responsable",
    copy: "Des engagements suivis avec clarté, méthode et exigence.",
  },
];

const principles = [
  {
    number: "01",
    title: "Exigence",
    copy: "Chaque opération est conduite avec méthode, précision et sens des responsabilités.",
  },
  {
    number: "02",
    title: "Proximité",
    copy: "Nous restons proches des partenaires, des équipes et des réalités locales.",
  },
  {
    number: "03",
    title: "Intégrité",
    copy: "La confiance repose sur la transparence et le respect des engagements.",
  },
  {
    number: "04",
    title: "Impact",
    copy: "Nous recherchons une valeur économique, humaine et durable pour les territoires.",
  },
];

export default function AboutPage() {
  return (
    <main id="top" className="about-page">
      <section className="services-cover about-cover">
        <Image
          src="/field-worker.jpg"
          alt="Professionnel du secteur énergétique sur le terrain"
          fill
          priority
          className="cover-img"
        />
        <div className="services-cover-shade" />
        <SiteHeader overlay />
        <div className="services-cover-content about-cover-content">
          <p className="overline">À propos de MIR Energie</p>
          <h1>
            Une ambition énergétique.<br />
            Ancrée dans le <em>réel.</em>
          </h1>
          <p>
            Nous connectons les compétences, les marchés et les infrastructures
            pour faire émerger des projets fiables, utiles et durables.
          </p>
          <Link className="btn gold" href="/contact">
            Construire un partenariat <span>↗</span>
          </Link>
        </div>
      </section>

      <div className="about-pillars-wrap page-pad-x">
        <div className="about-pillars">
          {pillars.map((pillar) => (
            <article className="about-pillar" key={pillar.number}>
              <b>{pillar.number}</b>
              <div>
                <h2>{pillar.title}</h2>
                <p>{pillar.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="about-mission page-pad">
        <header className="editorial-heading">
          <p className="overline">Notre mission</p>
          <div>
            <h2>Rendre l’énergie plus accessible, plus sûre et plus utile.</h2>
            <p>
              Organiser la rencontre entre les besoins des territoires africains
              et les ressources capables d’y répondre durablement.
            </p>
          </div>
        </header>

        <div className="about-mission-showcase">
          <div className="about-mission-media">
            <Image
              src="/energy-grid.jpg"
              alt="Infrastructure et équipements énergétiques"
              fill
              className="cover-img"
            />
            <div className="about-mission-badge">
              <b>+30</b>
              <span>Projets menés avec exigence</span>
            </div>
          </div>
          <div className="about-mission-copy">
            <p className="overline">Ce qui nous anime</p>
            <p className="about-mission-lead">
              Les territoires ont besoin de partenaires capables de comprendre
              leurs réalités tout en mobilisant des ressources internationales.
            </p>
            <p>
              Notre rôle est d’organiser cette rencontre. Nous intervenons sur
              l’approvisionnement énergétique, la logistique, le forage, les
              infrastructures et les projets à fort impact social.
            </p>
            <div className="about-mission-points">
              <article>
                <b>01</b>
                <h3>Relier</h3>
                <p>Les bons acteurs autour d’un objectif commun.</p>
              </article>
              <article>
                <b>02</b>
                <h3>Clarifier</h3>
                <p>Les responsabilités, les étapes et les décisions.</p>
              </article>
              <article>
                <b>03</b>
                <h3>Accompagner</h3>
                <p>L’exécution jusqu’au résultat attendu sur le terrain.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="services-capabilities about-principles page-pad">
        <div className="services-capabilities-intro">
          <p className="overline">Nos principes</p>
          <h2>
            Une manière d’agir.<br />
            Des engagements <em>concrets.</em>
          </h2>
          <p>
            Quatre principes guident nos décisions et la relation construite
            avec chaque partenaire.
          </p>
        </div>
        <div className="capability-grid">
          {principles.map((principle) => (
            <article className="capability-card" key={principle.number}>
              <b>{principle.number}</b>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="vision-banner about-vision">
        <Image
          src="/industrial-site.jpg"
          alt="Infrastructure industrielle au service des territoires"
          fill
          className="cover-img"
        />
        <div />
        <article>
          <p className="overline">Notre vision</p>
          <h2>Devenir un partenaire énergétique de référence entre l’Afrique et le monde.</h2>
          <Link className="btn gold" href="/contact">
            Échanger avec notre équipe <span>↗</span>
          </Link>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
