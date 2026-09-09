import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NativeLink as Link } from "@/components/NativeLink";
import { solutions } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return solutions.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = solutions.find(s => s.slug === slug);
  if (!s) notFound();
  return pageMetadata(`${s.title} | MIR ENERGY`, s.summary, `/solutions/${s.slug}`);
}
export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const s = solutions.find(s => s.slug === slug);
  if (!s) notFound();
  return <main id="top">
    <section className="services-cover"><Image src={s.image} alt={s.alt} fill priority sizes="100vw" className="cover-img" /><div className="services-cover-shade" /><SiteHeader overlay />
      <div className="services-cover-content"><nav className="solution-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/solutions">Solutions</Link></nav><p className="overline">MIR ENERGY Solutions</p><h1>{s.title}</h1><p>{s.summary}</p><Link className="btn gold" href="/contact">DISCUSS YOUR PROJECT <span>↗</span></Link></div>
    </section>
    <section className="page-pad solution-detail-intro"><p className="overline">{s.subtitle}</p><h2>{s.headline}</h2><p>{s.description}</p></section>
    <section className="services-capabilities page-pad"><div className="services-capabilities-intro"><p className="overline">Scope of support</p><h2>Expertise shaped around your project.</h2></div><div className="solution-scope">{s.scope.map((item,i) => <article key={item}><span>0{i+1}</span><h3>{item}</h3></article>)}</div></section>
    <section className="page-pad solution-client-grid"><div><p className="overline">Who we support</p><h2>Built around your operating needs.</h2><p>{s.audience}</p></div><div><p className="overline">Start the conversation</p><h2>Tell us about your project.</h2><p>{s.inputs}</p><Link className="btn gold" href="/contact">START A PROJECT <span>↗</span></Link></div></section>
    <section className="page-pad solution-related"><p className="overline">Explore our other solutions</p><div>{solutions.filter(other => other.slug !== s.slug).map(other => <Link href={`/solutions/${other.slug}`} key={other.slug}>{other.title}<span aria-hidden="true">↗</span></Link>)}</div><Link className="text-link" href="/solutions">ALL SOLUTIONS <span>↗</span></Link></section>
    <SiteFooter />
  </main>;
}
