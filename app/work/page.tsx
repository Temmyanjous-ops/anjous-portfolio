import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { archive } from "@/content/site";
import { WorkGrid } from "@/components/WorkGrid";
import { Cta, Split } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description: "Product design case studies across fintech, retail, AI, media and sport, for web and mobile.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <div className="page">
      <section className="phead wrap">
        <p className="eyebrow mono">Work</p>
        <h1 className="display split" data-split><Split text="Selected work" /></h1>
        <div className="sub">
          <p className="lede muted">
            {projects.length} products across fintech, hospitality, retail, AI, media and sport. Each one starts with the problem it solves.
          </p>
        </div>
      </section>
      <section className="wrap" aria-label="Projects">
        <WorkGrid projects={projects} />
      </section>
      <section className="section wrap" aria-labelledby="archH">
        <div className="sec-head"><div><p className="eyebrow mono">Archive</p><h2 className="h3" id="archH">More on Behance</h2></div></div>
        <ul className="arch">
          {archive.map((a) => (
            <li key={a.url}>
              <a href={a.url} target="_blank" rel="noopener noreferrer">
                <span className="t">{a.title}</span>
                <span className="c mono muted">{a.kind}</span>
                <span className="mono">Behance ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <Cta />
    </div>
  );
}
