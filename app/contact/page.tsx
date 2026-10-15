import type { Metadata } from "next";
import { site } from "@/content/site";
import { CopyEmail } from "@/components/CopyEmail";
import { Clock } from "@/components/Clock";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about product design and product management roles or projects.`,
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <div className="page contact">
      <section className="phead wrap">
        <p className="eyebrow mono">Contact</p>
        <h1 className="display">
          <span className="line" style={{ display: "block", overflow: "hidden" }}><span className="l1" data-lift>Let&rsquo;s build</span></span>
          <span className="line" style={{ display: "block", overflow: "hidden" }}><span className="l2" data-lift>something useful.</span></span>
        </h1>
        <div className="sub">
          <p className="lede muted">Hiring for a product design or product management role, or have a product that needs shaping? I reply to every message.</p>
        </div>
      </section>
      <section className="wrap" style={{ paddingBottom: "clamp(72px,10vw,140px)" }}>
        <ul className="clinks">
          <li className="row">
            <span className="k mono muted">Email</span>
            <CopyEmail email={site.email} label="Copy" showAddress addressClass="v" />
          </li>
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                <span className="k mono muted">{s.label}</span>
                <span className="v">{s.handle}</span>
                <span className="mono">↗</span>
              </a>
            </li>
          ))}
          <li className="row">
            <span className="k mono muted">Local time</span>
            <Clock className="v" />
            <span className="mono muted">Lagos</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
