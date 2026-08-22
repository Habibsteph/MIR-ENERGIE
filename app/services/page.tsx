import Image from "next/image";
import { NativeLink as Link } from "@/components/NativeLink";
import { Factory, Fuel, HeartHandshake, Ship } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const expertiseTabs = [
  { icon: Fuel, title: "Approvisionnement", subtitle: "Gaz & énergie" },
  { icon: Ship, title: "Logistique", subtitle: "Flux internationaux" },
  { icon: Factory, title: "Infrastructures", subtitle: "Forage & projets" },
  { icon: HeartHandshake, title: "Impact social", subtitle: "Territoires & communautés" },
];

const capabilities = [
  {
    number: "01",
    title: "Sourcing international",
    copy: "Identifier les sources fiables, comparer les offres et sécuriser les conditions d’achat.",
  },
  {
    number: "02",
    title: "Coordination logistique",
    copy: "Organiser les flux, les documents et les partenaires jusqu’à la destination finale.",
  },
  {
    number: "03",
    title: "Pilotage technique",
    copy: "Cadrer les besoins et superviser les intervenants sur les projets d’infrastructure.",
  },
  {
    number: "04",
    title: "Suivi & conformité",
    copy: "Maintenir une visibilité claire sur l’avancement, les risques et les engagements.",
  },
];

export default function ServicesPage() {
  return (
    <main id="top" className="services-page">
      <section className="services-cover">
        <Image
          src="/industrial-site.jpg"
          alt="Installations énergétiques et industrielles"
          fill
          priority
          className="cover-img"
        />
        <div className="services-cover-shade" />
        <SiteHeader overlay />
        <div className="services-cover-content">
          <p className="overline">Expertises MIR Energie</p>
          <h1>
            Maîtriser l’énergie.<br />
            Sécuriser chaque <em>opération.</em>
          </h1>
          <p>
            De l’approvisionnement à la réalisation, nous coordonnons les
            expertises, les partenaires et les flux qui font avancer vos projets.
          </p>
          <Link className="btn gold" href="/contact">
            Parler de votre projet <span>↗</span>
          </Link>
        </div>
      </section>

      <div className="services-tabs-wrap page-pad-x">
        <nav className="services-tabs" aria-label="Domaines d’expertise">
          {expertiseTabs.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                className={`services-tab${index === 0 ? " is-active" : ""}`}
                href="#nos-solutions"
                key={item.title}
              >
                <i aria-hidden="true"><Icon strokeWidth={1.7} /></i>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
                {index === 0 && <b aria-hidden="true">↓</b>}
              </a>
            );
          })}
        </nav>
      </div>

      <section className="services-why page-pad">
        <header className="services-why-heading">
          <p className="overline">Notre méthode</p>
          <h2>Pourquoi travailler avec nous&nbsp;?</h2>
        </header>

        <div className="services-steps" aria-label="Les trois étapes de notre méthode">
          <div><b>01</b><span>Comprendre</span></div>
          <div><b>02</b><span>Structurer</span></div>
          <div><b>03</b><span>Exécuter</span></div>
        </div>

        <div className="services-benefit">
          <div className="services-benefit-media">
            <span className="media-accent media-accent-back" />
            <span className="media-accent media-accent-front" />
            <div className="services-benefit-image">
              <Image
                src="/field-worker.jpg"
                alt="Professionnel de l’énergie intervenant sur le terrain"
                fill
                className="cover-img"
              />
            </div>
            <div className="services-benefit-badge">
              <b>24/7</b>
              <span>Suivi opérationnel</span>
            </div>
          </div>

          <div className="services-benefit-copy">
            <p className="overline">Une exécution maîtrisée</p>
            <h3>Du besoin initial au suivi terrain.</h3>
            <p className="services-benefit-lead">
              MIR Energie transforme une opération complexe en un parcours clair,
              piloté et documenté.
            </p>
            <p>
              Nous réunissons compréhension des marchés régionaux, réseau de
              partenaires internationaux et coordination locale pour réduire les
              zones d’incertitude à chaque étape.
            </p>
            <ul>
              <li>Un interlocuteur responsable de bout en bout</li>
              <li>Des partenaires sélectionnés selon le besoin réel</li>
              <li>Une information opérationnelle lisible et continue</li>
            </ul>
            <Link className="text-link" href="/a-propos">
              Découvrir MIR Energie <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="nos-solutions" className="services-offers page-pad">
        <div className="services-offers-intro">
          <p className="overline">Nos solutions</p>
          <h2>Une réponse adaptée à chaque réalité terrain.</h2>
          <p>
            Des expertises complémentaires, mobilisées seules ou ensemble selon
            votre projet, votre calendrier et vos contraintes.
          </p>
          <Link className="text-link" href="/contact">
            Étudier votre besoin <span>↗</span>
          </Link>
        </div>

        <div className="service-offer-grid">
          <article className="service-offer-card">
            <div className="service-offer-image">
              <Image
                src="/import-ship.jpg"
                alt="Navire assurant un transport international"
                fill
                className="cover-img"
              />
              <span>01</span>
            </div>
            <div>
              <p>Énergie & commerce</p>
              <h3>Approvisionnement et logistique</h3>
              <span>
                Sourcing, négociation, coordination documentaire et suivi des
                flux jusqu’à destination.
              </span>
            </div>
          </article>

          <article className="service-offer-card">
            <div className="service-offer-image">
              <Image
                src="/energy-grid.jpg"
                alt="Équipements techniques d’une installation énergétique"
                fill
                className="cover-img"
              />
              <span>02</span>
            </div>
            <div>
              <p>Industrie & territoires</p>
              <h3>Infrastructures et projets à impact</h3>
              <span>
                Études préparatoires, coordination des prestataires et projets
                utiles aux communautés locales.
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="services-capabilities page-pad">
        <div className="services-capabilities-intro">
          <p className="overline">Notre valeur ajoutée</p>
          <h2>
            Des opérations claires.<br />
            Un impact <em>durable.</em>
          </h2>
          <p>
            Une même exigence de lisibilité, de responsabilité et d’efficacité
            sur toute la chaîne de valeur.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <b>{item.number}</b>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta page-pad">
        <div>
          <p className="overline">Votre prochain projet</p>
          <h2>Construisons une solution à la hauteur de vos contraintes.</h2>
        </div>
        <Link className="btn gold" href="/contact">
          Demander un devis <span>↗</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
