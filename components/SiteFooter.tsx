import Image from "next/image";
import { NativeLink as Link } from "./NativeLink";
import { brand, solutions } from "@/lib/content";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand"><Image src="/logo-mir.png" alt="MIR ENERGY" width={130} height={72} /><p>{brand.tagline}</p></div>
      <div><h4>Navigation</h4><Link href="/">Home</Link><Link href="/solutions">Solutions</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
      <div><h4>Solutions</h4>{solutions.map(s => <Link href={`/solutions/${s.slug}`} key={s.id}>{s.title}</Link>)}</div>
      <div><h4>Market reach</h4><span>West Africa</span><span>Central Africa</span><span>Dubai</span><span>United States</span><Link className="footer-contact" href="/contact">DISCUSS YOUR PROJECT ↗</Link></div>
    </div>
    <div className="footer-bottom"><span>© 2026 MIR ENERGY. All rights reserved.</span><span><Link href="/legal-notice">Legal Notice</Link> · <Link href="/privacy-policy">Privacy Policy</Link></span><a href="#top">BACK TO TOP ↑</a></div>
  </footer>;
}
