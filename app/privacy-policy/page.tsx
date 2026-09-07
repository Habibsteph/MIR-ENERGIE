import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { company } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = { ...pageMetadata("Privacy Policy | MIR ENERGY", "Information about the MIR ENERGY project inquiry form.", "/privacy-policy"), robots: { index: false, follow: true } };
export default function PrivacyPolicyPage() {
  return <main id="top"><SiteHeader /><article className="legal-content page-pad"><p className="overline">MIR ENERGY</p><h1>Privacy Policy</h1><p>This notice describes the current inquiry form. The complete privacy policy, including the responsible legal entity, contact details and retention arrangements, is pending confirmation.</p><h2>Project inquiry details</h2><p>The form includes your name, company, business email, phone number, area of interest, project location, volume or capacity, timeline and project details.</p><h2>How the current form works</h2><p>{company.email ? "The form prepares an email in your own email application. You review and send it yourself. This website does not submit or store the inquiry on a server." : "Submission is currently disabled. Entering details does not send an inquiry to MIR ENERGY. The form does not save your details to a database or browser storage."}</p><h2>Website access</h2><p>The website’s hosting service may process technical information required to deliver the pages. This notice will be completed with the applicable hosting and privacy information before inquiries are enabled.</p>{company.email && <><h2>Contact</h2><p><a href={`mailto:${company.email}`}>{company.email}</a></p></>}</article><SiteFooter /></main>;
}
