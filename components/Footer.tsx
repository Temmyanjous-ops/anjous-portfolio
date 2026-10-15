import { site } from "@/content/site";
import { Clock } from "./Clock";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.location} · <Clock className="mono" />
        </span>
        <nav aria-label="Social">
          {site.socials.map((s) => (
            <a key={s.label} className="link" href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
