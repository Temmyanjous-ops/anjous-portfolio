import type { Metadata } from "next";
import { site } from "@/content/site";
import { TLink } from "@/components/Transition";
import { Arrow, Cta, Split } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name}: Computer Science, product design and product management, based in Lagos.`,
  alternates: { canonical: "/about/" },
};

function Pillar({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <div className="pillar" data-reveal>
      <span className="mono muted">{kicker}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="page">
      <section className="phead wrap">
        <p className="eyebrow mono">About</p>
        <h1 className="display split" data-split><Split text={`Hello, I'm ${site.firstName}.`} /></h1>
      </section>
      <section className="wrap">
        <div className="grid about-hero">
          <div className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img id="portrait" src="/img/me.webp" alt={`Portrait of ${site.name} in a light blue suit and blue glasses`} />
          </div>
          <div className="about-intro">
            <p className="pull" data-reveal>I care about the <em>product behind the interface</em>, not only how it looks.</p>
            <div className="prose">
              <p>I&rsquo;m a product UI/UX designer and product manager based in Lagos, Nigeria. I design digital products for web and mobile, and I work on the thinking that comes before the screens: the problem, the people, the requirements and the trade-offs.</p>
              <p>My background is Computer Science. That training still shapes how I work. I want to understand how a system behaves before deciding how it should look, and it makes the conversation with engineers faster and more honest.</p>
              <p>The rest of my path has been brand, communication and leadership. Together they taught me that a good product decision only matters if you can explain it to the people who have to build it and the people who have to use it.</p>
            </div>
            <div><TLink className="btn btn--solid" href="/contact/" label="Contact">Work with me <Arrow /></TLink></div>
          </div>
        </div>
      </section>
      <section className="section wrap" aria-labelledby="mixH">
        <div className="sec-head">
          <div>
            <p className="eyebrow mono">Why the mix works</p>
            <h2 className="display h2" id="mixH" data-reveal>One person,<br />three lenses.</h2>
          </div>
        </div>
        <div className="pillars">
          <Pillar kicker="How it works" title="Computer Science" body="I think in systems, states and data. I can read a technical constraint and design around it instead of against it." />
          <Pillar kicker="How it feels" title="Product design" body="Flows, structure and interface for web and mobile, built so every screen has a job and every choice has a reason." />
          <Pillar kicker="Why it exists" title="Product management" body="Framing the problem, defining requirements, setting priorities and keeping the team pointed at the outcome." />
        </div>
        <div className="also">
          <Pillar kicker="How it's explained" title="Brand & communication" body="Clear writing and a feel for brand make products easier to understand, and decisions easier to agree on." />
          <Pillar kicker="How it gets done" title="Leadership" body="Getting people with different jobs to agree on what matters and move in the same direction." />
        </div>
      </section>
      <section className="section wrap" style={{ paddingTop: 0 }} aria-labelledby="toolH">
        <div className="grid intro">
          <div className="k"><p className="eyebrow mono">Tools</p><h2 className="h3" id="toolH">What I design with</h2></div>
          <div className="v"><p className="big">Figma for product and interface design. Photoshop for imagery and presentation.</p></div>
        </div>
      </section>
      <Cta />
    </div>
  );
}
