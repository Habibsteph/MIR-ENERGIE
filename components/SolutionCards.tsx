import Image from "next/image";
import { solutions } from "@/lib/content";
import { NativeLink as Link } from "./NativeLink";

type CardItem = { id: string; slug: string; number: string; title: string; summary: string; image: string; alt: string };
export function SolutionCards({ light = false, items = solutions }: { light?: boolean; items?: CardItem[] }) {
  return <div className={`solution-equal-grid${items.length === 3 ? " solution-domain-grid" : ""}${light ? " on-dark" : ""}`}>
    {items.map(s => <Link id={s.id} href={`/solutions/${s.slug}`} className="solution-equal-card" key={s.id}>
      <div className="solution-card-image"><Image src={s.image} alt={s.alt} fill sizes={items.length === 3 ? "(max-width: 900px) 100vw, 33vw" : "(max-width: 700px) 100vw, 50vw"} className="cover-img" /><span>{s.number}</span></div>
      <div className="solution-card-copy"><h3>{s.title}</h3><p>{s.summary}</p><span className="solution-card-link">EXPLORE THIS SOLUTION <span aria-hidden="true">↗</span></span></div>
    </Link>)}
  </div>;
}
