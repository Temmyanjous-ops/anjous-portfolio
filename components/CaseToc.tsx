"use client";

import { useEffect, useState } from "react";
import { useLenis } from "./SmoothScroll";
import { pad } from "./ui";

export function CaseToc({ sections }: { sections: { id: string; title: string }[] }) {
  const [on, setOn] = useState(sections[0]?.id);
  const lenis = useLenis();

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setOn(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [sections]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    if (lenis) lenis.scrollTo(y);
    else window.scrollTo({ top: y, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <nav className="toc" aria-label="Case study sections">
      {sections.map((s, i) => (
        <a key={s.id} href={`#${s.id}`} className={"mono" + (on === s.id ? " is-on" : "")}
          onClick={(e) => { e.preventDefault(); jump(s.id); }}>
          <b />{pad(i + 1)} {s.title}
        </a>
      ))}
    </nav>
  );
}
