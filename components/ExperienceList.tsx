import { roles } from "@/content/site";

export function ExperienceList() {
  return (
    <ul className="xp">
      {roles.map((r) => (
        <li key={r.org}>
          <span className="r">
            {r.title}
            {r.note && <span className="muted" style={{ fontWeight: 400 }}> ({r.note})</span>}
          </span>
          <span className="o">{r.org}</span>
          <span className="l mono">{r.dates ? `${r.dates} · ` : ""}{r.place}</span>
        </li>
      ))}
    </ul>
  );
}
