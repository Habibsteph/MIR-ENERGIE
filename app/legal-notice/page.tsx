import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { company } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = { ...pageMetadata("Legal Notice | MIR ENERGY", "Website publisher information for MIR ENERGY.", "/legal-notice"), robots: { index: false, follow: true } };
export default function LegalNoticePage() {
  return <main id="top"><SiteHeader /><article className="legal-content page-pad"><p className="overline">MIR ENERGY</p><h1>Legal Notice</h1><h2>Website publisher</h2>{company.legalName && company.registeredAddress ? <p>{company.legalName}<br />{company.registeredAddress}</p> : <p>The publisher’s legal identity and registered address are being finalized. This notice is incomplete and will be updated before the website begins accepting inquiries.</p>}<h2>Marketing identity</h2><p>MIR ENERGY is the marketing brand used on this website. The legal entity identified in a contract or other formal document governs that relationship.</p><h2>Website information</h2><p>This website presents LNG supply, logistics, storage, regasification and energy infrastructure solutions. Market reach describes the markets addressed and does not indicate an office in every location.</p>{company.email && <><h2>Contact</h2><p><a href={`mailto:${company.email}`}>{company.email}</a></p></>}</article><SiteFooter /></main>;
}
