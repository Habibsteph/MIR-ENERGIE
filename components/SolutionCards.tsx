import Image from "next/image";
import { solutions } from "@/lib/content";
import { NativeLink as Link } from "./NativeLink";

export function SolutionCards({ light = false }: { light?: boolean }) {
  return <div className={`solution-equal-grid${light ? " on-dark" : ""}`}>
    {solutions.map(s => <Link id={s.id} href={`/solutions/${s.slug}`} className="solution-equal-card" key={s.id}>
      <div className="solution-card-image"><Image src={s.image} alt={s.alt} fill sizes="(max-width: 700px) 100vw, 50vw" className="cover-img" /><span>{s.number}</span></div>
      <div className="solution-card-copy"><h3>{s.title}</h3><p>{s.summary}</p><span className="solution-card-link">EXPLORE THIS SOLUTION <span aria-hidden="true">↗</span></span></div>
    </Link>)}
  </div>;
}
