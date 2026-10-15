import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { TLink } from "@/components/Transition";
import { CaseToc } from "@/components/CaseToc";
import { Annotated, DecisionList } from "@/components/Annotated";
import { Split, pad } from "@/components/ui";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.line}`,
    description: `${p.problem} ${p.overview[0]}`.slice(0, 300),
    alternates: { canonical: `/work/${p.slug}/` },
    openGraph: { title: `${p.name} · Case study`, description: p.line, images: [{ url: p.cover, alt: p.coverAlt }] },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  const behance = p.links.find((l) => /behance\.net/i.test(l.url))?.url;

  const sections: { id: string; title: string; body: React.ReactNode }[] = [
    { id: "overview", title: "Overview", body: <div className="prose">{p.overview.map((t) => <p key={t}>{t}</p>)}</div> },
    {
      id: "problem", title: "The problem",
      body: <><p className="big-p" data-reveal>{p.problem}</p><div className="prose muted"><p>{p.problemLong}</p></div></>,
    },
    { id: "users", title: "Who it's for", body: <div className="prose"><p>{p.users}</p></div> },
    { id: "requirements", title: "What it had to do", body: <ul className="reqs">{p.requirements.map((r) => <li key={r}>{r}</li>)}</ul> },
    {
      id: "decisions", title: "Product decisions",
      body: (
        <>
          <p className="muted" style={{ maxWidth: "56ch" }}>
            The reasoning behind the screens.{p.figures.length ? " Hover or tap a number to find it on the screen." : ""}
          </p>
          {p.figures.length ? <Annotated figures={p.figures} decisions={p.decisions} /> : <DecisionList decisions={p.decisions} />}
        </>
      ),
    },
    {
      id: "interface", title: "The interface",
      body: (
        <>
          <div className={"screens" + (p.landscapeScreens ? " land" : "")} style={{ "--n": p.screens.length } as React.CSSProperties}>
            {p.screens.map((s) => (
              <figure data-reveal key={s.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={`${p.name}: ${s.caption} screen`} loading="lazy" />
                <figcaption className="mono">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
          {p.extra.length > 0 && (
            <div className="screens extra" style={{ "--n": 2 } as React.CSSProperties}>
              {p.extra.map((s) => (
                <figure data-reveal key={s.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={`${p.name}: ${s.caption || "screen"}`} loading="lazy" />
                  {s.caption && <figcaption className="mono">{s.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}
        </>
      ),
    },
  ];
  if (p.outcome) {
    sections.push({
      id: "outcome", title: "Outcome",
      body: <><p className="big-p" data-reveal>{p.outcome.takeaway}</p><div className="prose muted"><p>{p.outcome.body}</p></div></>,
    });
  }
  if (p.nextQuestions.length) {
    sections.push({
      id: "next", title: "What I'd test next",
      body: (
        <ol className="nexts">
          {p.nextQuestions.map((q, i) => <li key={q}><span className="mono">Question {pad(i + 1)}</span><p>{q}</p></li>)}
        </ol>
      ),
    });
  }

  const meta = [["Role", p.role], ["Platform", p.platform], ["Duration", p.duration], ["Year", p.year], ["Tools", p.tools]].filter(([, v]) => v);

  return (
    <div className="page">
      <section className="chero wrap">
        <p className="eyebrow mono">Case study · {p.category}</p>
        <h1 className="display split" data-split><Split text={p.name} /></h1>
        <p className="tl" data-intro>{p.line}</p>
        <dl className="meta">
          {meta.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}
        </dl>
        {p.links.length > 0 && (
          <div className="refs">
            <span className="mono muted">References</span>
            {p.links.map((l) => (
              <a className="ref" key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">{l.label} <span aria-hidden="true">↗</span></a>
            ))}
          </div>
        )}
      </section>
      <div className="wrap">
        <div className="cover" id="cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.cover} alt={p.coverAlt} fetchPriority="high" />
        </div>
      </div>
      <div className="wrap">
        <div className="grid cbody">
          <CaseToc sections={sections.map(({ id, title }) => ({ id, title }))} />
          <div className="ccontent">
            {sections.map((s, i) => (
              <section className="cs" id={s.id} key={s.id} aria-labelledby={`h-${s.id}`}>
                <div className="cs-h"><span className="mono">{pad(i + 1)}</span><h2 id={`h-${s.id}`}>{s.title}</h2></div>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </div>
      {behance && (
        <section className="bh wrap" aria-labelledby="bhH">
          <div>
            <p className="eyebrow mono">Full project</p>
            <h2 id="bhH">See every screen of {p.name} <em>on Behance.</em></h2>
          </div>
          <div>
            <p>The full presentation: wireframes, mockups, flows and the complete set of screens.</p>
            <div className="tags"><span className="tag">Wireframes</span><span className="tag">Mockups</span><span className="tag">All screens</span></div>
            <a className="btn btn--solid" href={behance} target="_blank" rel="noopener noreferrer">View on Behance <span className="arr" aria-hidden="true">↗</span></a>
          </div>
        </section>
      )}
      <TLink className="nextp wrap" href={`/work/${next.slug}/`} label={next.name} data-cursor="Next">
        <p className="mono muted">Next project</p>
        <p className="display">{next.name} →</p>
      </TLink>
    </div>
  );
}
