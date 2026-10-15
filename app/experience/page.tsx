import type { Metadata } from "next";
import { focusAreas } from "@/content/site";
import { projects } from "@/content/projects";
import { TLink } from "@/components/Transition";
import { ExperienceList } from "@/components/ExperienceList";
import { Arrow, CapCol, Cta, Split } from "@/components/ui";

export const metadata: Metadata = {
  title: "Experience",
  description: "Product design roles and independent product work for web and mobile.",
  alternates: { canonical: "/experience/" },
};

export default function Experience() {
  return (
    <div className="page">
      <section className="phead wrap">
        <p className="eyebrow mono">Experience</p>
        <h1 className="display split" data-split><Split text="Experience" /></h1>
        <div className="sub">
          <p className="lede muted">Product management and product design roles in Lagos, plus freelance design work for clients in Canada and the US.</p>
          <TLink className="btn" href="/contact/" label="Contact">Request my CV <Arrow /></TLink>
        </div>
      </section>
      <section className="wrap" aria-labelledby="rolesH">
        <h2 className="mono muted" id="rolesH" style={{ marginBottom: 16 }}>Roles</h2>
        <ExperienceList />
      </section>
      <section className="section wrap" aria-labelledby="focusH">
        <div className="sec-head">
          <div>
            <p className="eyebrow mono">Focus areas</p>
            <h2 className="display h2" id="focusH" data-reveal>What I bring<br />to a team.</h2>
          </div>
        </div>
        <div className="grid caps">
          {Object.entries(focusAreas).map(([k, v]) => <CapCol key={k} title={k} items={v} />)}
          <div className="col">
            <h3 className="h3">Education <span className="mono muted">01</span></h3>
            <ul><li>Computer Science<span>Degree</span></li></ul>
            <h3 className="h3" style={{ marginTop: 40 }}>Project work <span className="mono muted">2022–2025</span></h3>
            <ul>
              {projects.map((p) => (
                <li key={p.slug}><TLink href={`/work/${p.slug}/`} label={p.name}>{p.name}</TLink><span>{p.category}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Cta />
    </div>
  );
}
