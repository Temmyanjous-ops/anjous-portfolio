"use client";

import { useEffect, useRef, useState } from "react";

/** A small dot that grows into a labelled disc over [data-cursor] elements. Desktop pointers only. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("View");
  const [big, setBig] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let mx = -100, my = -100, cx = -100, cy = -100, raf = 0;
    const move = (e: PointerEvent) => { mx = e.clientX; my = e.clientY; };
    const over = (e: PointerEvent) => {
      const t = (e.target as Element | null)?.closest?.("[data-cursor]");
      if (t) { setLabel(t.getAttribute("data-cursor") || "View"); setBig(true); } else setBig(false);
    };
    const leave = () => { mx = my = -100; };
    const loop = () => {
      cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2;
      if (dot.current) dot.current.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className={"cursor" + (big ? " is-big" : "")} ref={dot} aria-hidden="true">
      <em>{label}</em>
    </div>
  );
}
