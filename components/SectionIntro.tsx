export function SectionIntro({eyebrow,title,copy,light=false}:{eyebrow:string;title:string;copy?:string;light?:boolean}){
  return <div className={`section-intro ${light ? "light" : ""}`}><p className="overline">{eyebrow}</p><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></div>;
}
