"use client";

import { useState } from "react";
import type { Decision, Figure } from "@/content/projects";

/**
 * Screens with numbered pins. Hovering or focusing a pin highlights its decision, and vice versa.
 * This is the part of each case study that shows the product thinking, not just the pixels.
 */
export function Annotated({ figures, decisions }: { figures: Figure[]; decisions: Decision[] }) {
  const [active, setActive] = useState<number | null>(null);
  let n = 0;
  return (
    <>
      {figures.map((f) => {
        const start = n;
        n += f.pins.length;
        return (
          <div className={"anno" + (f.wide ? " wide" : "")} data-reveal key={f.src}>
            <figure className="fig">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.src} alt={`${f.alt}, annotated with numbered design decisions`} loading="lazy" />
              {f.pins.map((pt, j) => {
                const i = start + j;
                return (
                  <button key={i} className={"pin" + (active === i ? " is-on" : "")}
                    style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                    aria-label={`Decision ${i + 1}: ${decisions[i]?.title}`}
                    onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(i)} onBlur={() => setActive(null)}
                    onClick={() => {
                      setActive(i);
                      if (window.innerWidth < 761) document.getElementById(`dec-${i}`)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
                    }}>
                    {i + 1}
                  </button>
                );
              })}
              <figcaption className="mono">{f.caption}</figcaption>
            </figure>
            <ol className="decs">
              {f.pins.map((_, j) => {
                const i = start + j;
                const d = decisions[i];
                if (!d) return null;
                return (
                  <li key={i} id={`dec-${i}`} className={"dec" + (active === i ? " is-on" : "")} tabIndex={0}
                    onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(i)} onBlur={() => setActive(null)}>
                    <span className="num">{i + 1}</span>
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </>
  );
}

export function DecisionList({ decisions }: { decisions: Decision[] }) {
  return (
    <ol className="decs decs-2">
      {decisions.map((d, i) => (
        <li className="dec" key={d.title}>
          <span className="num">{i + 1}</span>
          <h3>{d.title}</h3>
          <p>{d.body}</p>
        </li>
      ))}
    </ol>
  );
}
