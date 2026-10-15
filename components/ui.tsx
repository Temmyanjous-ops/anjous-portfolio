import { TLink } from "./Transition";
import { CopyEmail } from "./CopyEmail";
import { site } from "@/content/site";
import type { Project } from "@/content/projects";

export const pad = (n: number) => String(n).padStart(2, "0");
export const Arrow = () => <span className="arr" aria-hidden="true">→</span>;

/** Words wrapped for the masked line reveal. */
export function Split({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <span className="w"><span>{w}</span></span>{" "}
        </span>
      ))}
    </>
  );
}

export function Tags({ p }: { p: Project }) {
  const items = [p.category, p.platform, p.role, p.year].filter(Boolean);
  return (
    <div className="tags">
      {items.map((t) => <span className="tag" key={t}>{t}</span>)}
    </div>
  );
}

export function Cta() {
  return (
    <section className="cta wrap" aria-labelledby="ctaH">
      <p className="eyebrow mono">Next step</p>
      <h2 className="display" id="ctaH">
        <span className="l1">Have a product</span>
        <span className="l2">in mind?</span>
      </h2>
      <div className="cta-row">
        <CopyEmail email={site.email} showAddress />
        <TLink className="btn btn--solid" href="/contact/" label="Contact">Get in touch <Arrow /></TLink>
      </div>
    </section>
  );
}

export function CapCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="col">
      <h3 className="h3">{title} <span className="mono muted">{pad(items.length)}</span></h3>
      <ul>
        {items.map((t, i) => <li key={t}>{t}<span>{pad(i + 1)}</span></li>)}
      </ul>
    </div>
  );
}
