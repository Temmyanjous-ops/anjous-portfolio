"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TLink } from "./Transition";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

const links = [
  { href: "/work/", label: "Work", hint: String(projects.length).padStart(2, "0") },
  { href: "/about/", label: "About", hint: "CS · Design · PM" },
  { href: "/experience/", label: "Experience", hint: "Roles" },
  { href: "/contact/", label: "Contact", hint: "Say hello" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setHidden(y > last.current && y > 300);
      last.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [open]);

  const isOn = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header className={"nav" + (scrolled ? " is-scrolled" : "") + (hidden && !open ? " is-hidden" : "")}>
        <div className="wrap">
          <TLink className="brand" href="/" label="Home" aria-label={`${site.name}, home`}>
            <i aria-hidden="true" />
            {site.name}
          </TLink>
          <nav aria-label="Primary">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <TLink href={l.href} label={l.label} aria-current={isOn(l.href) ? "page" : undefined}>
                    {l.label}
                  </TLink>
                </li>
              ))}
            </ul>
          </nav>
          <span className="status"><b aria-hidden="true" />Open to roles &amp; projects</span>
          <button className="menu-btn" aria-expanded={open} aria-controls="mmenu" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <div className={"mmenu" + (open ? " is-open" : "")} id="mmenu" aria-hidden={!open}>
        {links.map((l) => (
          <TLink key={l.href} className="big" href={l.href} label={l.label} tabIndex={open ? 0 : -1}>
            {l.label} <span>{l.hint}</span>
          </TLink>
        ))}
        <div className="mfoot mono muted">
          <span>{site.location.split(",")[0]} · {site.timezone}</span>
          <span className="status"><b aria-hidden="true" />Open to roles</span>
        </div>
      </div>
    </>
  );
}
