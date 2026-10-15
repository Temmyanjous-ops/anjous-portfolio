"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/content/projects";
import { TLink } from "./Transition";
import { Tags } from "./ui";

type Filter = "all" | "mobile" | "web";

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [f, setF] = useState<Filter>("all");
  useEffect(() => { ScrollTrigger.refresh(); }, [f]);
  const shown = projects.filter((p) => f === "all" || p.platformTags.includes(f));
  return (
    <>
      <div className="filters" role="group" aria-label="Filter by platform">
        {(["all", "mobile", "web"] as Filter[]).map((k) => (
          <button key={k} className="chip" aria-pressed={f === k} onClick={() => setF(k)}>
            {k === "all" ? "All" : k === "mobile" ? "Mobile" : "Web"}
          </button>
        ))}
      </div>
      <div className="wgrid" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
        {shown.map((p) => (
          <article className="wcard" key={p.slug}>
            <TLink className="media" href={`/work/${p.slug}/`} label={p.name} data-cursor="View case" aria-label={`${p.name} case study`}>
              <div className="in" style={{ aspectRatio: "3/2" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img data-zoom src={p.cover} alt={p.coverAlt} loading="lazy" />
              </div>
            </TLink>
            <div className="top">
              <h2 className="pname">{p.name}</h2>
              <span className="mono muted">{p.category}</span>
            </div>
            <p className="d">{p.line} {p.problem}</p>
            <Tags p={p} />
            <div className="wlinks">
              <TLink className="more" href={`/work/${p.slug}/`} label={p.name}>Read the case <span className="arr" aria-hidden="true">→</span></TLink>
              {p.links.find((l) => /behance\.net/i.test(l.url)) && (
                <a className="more" href={p.links.find((l) => /behance\.net/i.test(l.url))!.url} target="_blank" rel="noopener noreferrer">Full project on Behance ↗</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
