"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Runs once per page (mounted from app/template.tsx).
 * Everything is visible without JavaScript; motion is layered on top.
 */
export function PageAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const main = document.getElementById("main");
    if (!main) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.05 });
      const lines = main.querySelectorAll(".hero-name .line > span, [data-lift]");
      if (lines.length) tl.from(lines, { yPercent: 105, duration: 1.1, ease: "power4.out", stagger: 0.09 }, 0);
      const words = main.querySelectorAll("[data-split] .w > span");
      if (words.length) tl.from(words, { yPercent: 110, duration: 1, ease: "power4.out", stagger: 0.05 }, 0);
      const intro = main.querySelectorAll("[data-intro]");
      if (intro.length) tl.from(intro, { y: 24, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 }, 0.35);

      main.querySelectorAll("[data-reveal]").forEach((el) => {
        gsap.from(el, { y: 36, opacity: 0.35, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });

      main.querySelectorAll<HTMLImageElement>("img[data-zoom]").forEach((img) => {
        gsap.fromTo(img, { scale: 1.14 }, {
          scale: 1, ease: "none",
          scrollTrigger: { trigger: img.closest(".media") || img, start: "top bottom", end: "bottom 35%", scrub: true },
        });
      });

      const parallax: [string, gsap.TweenVars, gsap.TweenVars, string][] = [
        ["#cover img", { scale: 1.12, yPercent: -4 }, { scale: 1, yPercent: 4 }, "top bottom"],
        ["#heroPhoto", { yPercent: 0 }, { yPercent: -8 }, "top 80%"],
        ["#portrait", { yPercent: -8 }, { yPercent: 0 }, "top bottom"],
      ];
      parallax.forEach(([sel, from, to, start]) => {
        const el = main.querySelector(sel);
        if (el) gsap.fromTo(el, from, { ...to, ease: "none", scrollTrigger: { trigger: el.parentElement, start, end: "bottom top", scrub: true } });
      });

      const track = main.querySelector("#mqTrack");
      if (track) {
        const loop = gsap.to(track, { xPercent: -50, duration: 55, ease: "none", repeat: -1 });
        ScrollTrigger.create({
          trigger: "#marquee", start: "top bottom", end: "bottom top",
          onUpdate: (s) => {
            const v = Math.min(Math.abs(s.getVelocity()) / 300, 6);
            gsap.to(loop, { timeScale: 1 + v, duration: 0.25, overwrite: true, onComplete: () => { gsap.to(loop, { timeScale: 1, duration: 1.2 }); } });
          },
        });
      }
    }, main);

    const hs = main.querySelector<HTMLElement>("#hs");
    const ht = main.querySelector<HTMLElement>("#hsTrack");
    if (hs && ht) {
      mm.add("(min-width: 1081px)", () => {
        const dist = () => Math.max(0, ht.scrollWidth - window.innerWidth);
        gsap.to(ht, {
          x: () => -dist(), ease: "none",
          scrollTrigger: { trigger: hs, start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 },
        });
        gsap.from(ht.querySelectorAll(".step .n"), { yPercent: 40, opacity: 0.3, stagger: 0.1, scrollTrigger: { trigger: hs, start: "top 70%", once: true } });
      });
    }

    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 400);
    window.addEventListener("load", refresh);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      mm.revert();
      ctx.revert();
    };
  }, []);
  return null;
}
