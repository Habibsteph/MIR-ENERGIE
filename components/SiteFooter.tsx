import Image from "next/image";
import { NativeLink as Link } from "./NativeLink";

export function SiteFooter(){
  return <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand"><Image src="/logo-mir.png" alt="MIR Energie" width={130} height={72}/><p>Des solutions énergétiques fiables, des territoires connectés et des projets qui durent.</p></div>
      <div><h4>Navigation</h4><Link href="/">Accueil</Link><Link href="/a-propos">À propos</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link></div>
      <div><h4>Expertises</h4><span>Import-export de gaz</span><span>Forage & infrastructures</span><span>Logistique énergétique</span><span>Projets à impact</span></div>
      <div><h4>Présence</h4><span>Côte d’Ivoire</span><span>Afrique de l’Ouest</span><span>Dubaï · USA</span><Link className="footer-contact" href="/contact">Nous écrire ↗</Link></div>
    </div>
    <div className="footer-bottom"><span>© 2026 MIR Energie</span><span>Mentions légales · Confidentialité</span><a href="#top">Retour en haut ↑</a></div>
  </footer>;
}
