import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const contactPoints = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+225 00 00 00 00 00",
    href: "tel:+2250000000000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contact@mirenergie.com",
    href: "mailto:contact@mirenergie.com",
  },
  {
    icon: MapPin,
    label: "Présence",
    value: "Abidjan · Afrique de l’Ouest · Dubaï",
  },
];

export default function ContactPage() {
  return (
    <main id="top" className="contact-site-page">
      <section className="services-cover contact-cover">
        <Image
          src="/hero-energy.jpg"
          alt="Installation énergétique et équipements industriels"
          fill
          priority
          className="cover-img"
        />
        <div className="services-cover-shade" />
        <SiteHeader overlay />
        <div className="services-cover-content contact-cover-content">
          <p className="overline">Entrons en contact</p>
          <h1>
            Faisons avancer votre<br />
            prochain <em>projet.</em>
          </h1>
          <p>
            Présentez-nous votre besoin, votre contexte et vos priorités. Notre
            équipe vous répondra avec une première orientation claire.
          </p>
          <a className="btn gold" href="#contact-form">
            Démarrer un échange <span>↓</span>
          </a>
        </div>
      </section>

      <div className="contact-points-wrap page-pad-x">
        <div className="contact-points">
          {contactPoints.map((point) => {
            const Icon = point.icon;
            const content = (
              <>
                <i aria-hidden="true"><Icon strokeWidth={1.7} /></i>
                <div>
                  <span>{point.label}</span>
                  <strong>{point.value}</strong>
                </div>
                {point.href && <b aria-hidden="true">↗</b>}
              </>
            );
            return point.href ? (
              <a className="contact-point" href={point.href} key={point.label}>
                {content}
              </a>
            ) : (
              <div className="contact-point" key={point.label}>{content}</div>
            );
          })}
        </div>
      </div>

      <section id="contact-form" className="contact-conversation page-pad">
        <header className="editorial-heading">
          <p className="overline">Votre demande</p>
          <div>
            <h2>Un échange simple. Une réponse structurée.</h2>
            <p>
              Donnez-nous les éléments essentiels. Nous préparerons le premier
              échange autour de votre réalité opérationnelle.
            </p>
          </div>
        </header>

        <div className="contact-workspace">
          <aside className="contact-brief">
            <p className="overline">Ce qui se passe ensuite</p>
            <h2>Votre besoin est pris en charge avec méthode.</h2>
            <ol>
              <li>
                <b>01</b>
                <div><strong>Lecture du besoin</strong><span>Nous étudions votre contexte et vos priorités.</span></div>
              </li>
              <li>
                <b>02</b>
                <div><strong>Premier échange</strong><span>Nous clarifions le périmètre et les contraintes.</span></div>
              </li>
              <li>
                <b>03</b>
                <div><strong>Orientation</strong><span>Nous proposons les prochaines étapes adaptées.</span></div>
              </li>
            </ol>
            <div className="contact-response-time">
              <Clock3 aria-hidden="true" strokeWidth={1.7} />
              <div><strong>Réponse rapide</strong><span>Retour initial sous 1 à 2 jours ouvrés.</span></div>
            </div>
          </aside>

          <form className="contact-form contact-form-modern">
            <div className="contact-form-heading">
              <p className="overline">Parlez-nous de votre projet</p>
              <h2>Comment pouvons-nous vous accompagner&nbsp;?</h2>
            </div>
            <div className="contact-form-row">
              <label>
                Nom complet
                <input name="name" placeholder="Votre nom" autoComplete="name" required />
              </label>
              <label>
                Entreprise
                <input name="company" placeholder="Nom de l’entreprise" autoComplete="organization" />
              </label>
            </div>
            <div className="contact-form-row">
              <label>
                E-mail
                <input name="email" type="email" placeholder="vous@entreprise.com" autoComplete="email" required />
              </label>
              <label>
                Téléphone
                <input name="phone" type="tel" placeholder="+225 …" autoComplete="tel" />
              </label>
            </div>
            <label>
              Service recherché
              <select name="service" defaultValue="" required>
                <option value="" disabled>Sélectionner un service</option>
                <option>Import & export de gaz</option>
                <option>Logistique énergétique</option>
                <option>Forage & infrastructures</option>
                <option>Projet à impact social</option>
              </select>
            </label>
            <label>
              Votre message
              <textarea name="message" rows={6} placeholder="Décrivez votre besoin, vos délais et vos priorités…" required />
            </label>
            <button className="btn gold" type="submit">
              Envoyer la demande <Send aria-hidden="true" size={17} strokeWidth={1.8} />
            </button>
            <small>
              Les coordonnées affichées sont provisoires et seront remplacées
              par celles du client avant la mise en ligne.
            </small>
          </form>
        </div>
      </section>

      <section className="contact-closing page-pad">
        <div>
          <p className="overline">Un échange direct</p>
          <h2>Disponible entre l’Afrique de l’Ouest et les marchés internationaux.</h2>
        </div>
        <div className="contact-closing-links">
          <Link href="mailto:contact@mirenergie.com">
            <span>Écrire à notre équipe</span><strong>contact@mirenergie.com</strong><b>↗</b>
          </Link>
          <Link href="tel:+2250000000000">
            <span>Nous appeler</span><strong>+225 00 00 00 00 00</strong><b>↗</b>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
