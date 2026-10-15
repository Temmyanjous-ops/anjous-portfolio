import { site, workProcess, capabilities } from "@/content/site";
import { projects, featuredProjects } from "@/content/projects";
import { TLink } from "@/components/Transition";
import { Arrow, CapCol, Cta, Tags, pad } from "@/components/ui";
import { ExperienceList } from "@/components/ExperienceList";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const loop = [...projects, ...projects];
  return (
    <div className="page">
      <section className="hero wrap" aria-labelledby="heroName">
        <div className="hero-top mono muted" data-intro>
          <span>Product UI/UX Designer <span className="plus">+</span> Product Manager</span>
          <span>Portfolio · {new Date().getFullYear()}</span>
        </div>
        <h1 className="hero-name" id="heroName">
          <span className="line"><span className="l1">{site.lastName}</span></span>
          <span className="line"><span className="l2">{site.firstName}</span></span>
        </h1>
        <div className="grid hero-foot">
          <div className="hero-state" data-intro>
            <p>{site.statement}</p>
            <div className="ctas">
              <TLink className="btn btn--solid" href="/work/" label="Work">See the work <Arrow /></TLink>
              <TLink className="btn" href="/contact/" label="Contact">Get in touch</TLink>
            </div>
          </div>
          <figure className="hero-photo" data-intro>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img id="heroPhoto" src="/img/me.webp" alt={`Portrait of ${site.name}`} fetchPriority="high" />
            <figcaption className="mono">{site.location}</figcaption>
          </figure>
          <dl className="spec" data-intro>
            <div><dt>Role</dt><dd>{site.role}</dd></div>
            <div><dt>Platforms</dt><dd>Web · Mobile</dd></div>
            <div><dt>Background</dt><dd>Computer Science</dd></div>
            <div><dt>Base</dt><dd>{site.location} · {site.timezone}</dd></div>
            <div><dt>Open to</dt><dd>{site.openTo}</dd></div>
          </dl>
        </div>
      </section>

      <div className="marquee" id="marquee" aria-label="Project previews">
        <div className="mq-track" id="mqTrack">
          {loop.map((p, i) => (
            <TLink className="mq-item" key={i} href={`/work/${p.slug}/`} label={p.name} data-cursor="View"
              aria-hidden={i >= projects.length ? true : undefined} tabIndex={i >= projects.length ? -1 : undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.cover} alt="" />
              <span>{p.name}</span>
            </TLink>
          ))}
        </div>
      </div>

      <section className="section wrap" aria-labelledby="selH">
        <div className="sec-head">
          <div>
            <p className="eyebrow mono">Selected work</p>
            <h2 className="display h2" id="selH" data-reveal>Problems first.<br />Then screens.</h2>
          </div>
          <TLink className="more" href="/work/" label="Work">All work ({pad(projects.length)}) <Arrow /></TLink>
        </div>
        {featuredProjects.map((p, i) => (
          <article className={"prow grid" + (i % 2 ? " flip" : "")} key={p.slug}>
            <TLink className="media" href={`/work/${p.slug}/`} label={p.name} data-cursor="View case" aria-label={`${p.name} case study`}>
              <div className="in">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img data-zoom src={p.cover} alt={p.coverAlt} loading="lazy" />
              </div>
            </TLink>
            <div className="ptext">
              <div className="pidx mono"><span>{pad(i + 1)} / {pad(featuredProjects.length)}</span><span>{p.category}</span></div>
              <h3 className="pname">{p.name}</h3>
              <div className="pprob"><span className="mono">The problem</span><p>{p.problem}</p></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <Tags p={p} />
                <TLink className="more" href={`/work/${p.slug}/`} label={p.name}>Read the case <Arrow /></TLink>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }} aria-labelledby="introH">
        <div className="grid intro">
          <div className="k">
            <p className="eyebrow mono">Introduction</p>
            <h2 className="h3" id="introH">Design and product, from the same desk.</h2>
          </div>
          <div className="v">
            <p className="big" data-reveal>
              I studied Computer Science, then moved into product design and product management. I ask about{" "}
              <em>the problem, the user and the constraint</em> before I open Figma, and I can talk to engineers in their terms.
            </p>
            <div className="cols" data-reveal>
              <p>On the design side I cover UX flows, interface design and visual systems for web and mobile.</p>
              <p>On the product side I frame problems, write requirements, set priorities and stay with the team through delivery.</p>
            </div>
            <p style={{ marginTop: 32 }}><TLink className="more" href="/about/" label="About">More about me <Arrow /></TLink></p>
          </div>
        </div>
      </section>

      <section className="hs" id="hs" aria-labelledby="hsH">
        <div className="wrap head">
          <div>
            <p className="eyebrow mono" style={{ color: "inherit", opacity: 0.7 }}>How I work</p>
            <h2 className="display" id="hsH">From problem<br />to product.</h2>
          </div>
          <p>Four stages. The order matters more than the names, and each one hands something concrete to the next.</p>
        </div>
        <div className="hs-scroller">
          <div className="hs-track" id="hsTrack">
            {workProcess.map((s) => (
              <article className="step" key={s.n}>
                <span className="n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul>{s.outputs.map((o) => <li key={o}>{o}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="capH">
        <div className="sec-head">
          <div>
            <p className="eyebrow mono">Capabilities</p>
            <h2 className="display h2" id="capH" data-reveal>Two toolkits,<br />one process.</h2>
          </div>
        </div>
        <div className="grid caps">
          {Object.entries(capabilities).map(([k, v]) => <CapCol key={k} title={k} items={v} />)}
        </div>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }} aria-labelledby="xpH">
        <div className="sec-head">
          <div>
            <p className="eyebrow mono">Experience</p>
            <h2 className="h3" id="xpH">Where I&rsquo;ve worked</h2>
          </div>
          <TLink className="more" href="/experience/" label="Experience">Full experience <Arrow /></TLink>
        </div>
        <ExperienceList />
      </section>

      <Cta />
    </div>
  );
}
