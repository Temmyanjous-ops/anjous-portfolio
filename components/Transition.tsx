"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import gsap from "gsap";

type Go = (href: string, label?: string) => void;
const TransitionContext = createContext<Go>(() => {});

const norm = (p: string) => (p.split(/[?#]/)[0].replace(/\/+$/, "") || "/");

/** Full-screen cobalt curtain between pages. */
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const curtain = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const pending = useRef(false);

  const go = useCallback<Go>(
    (href, text) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !curtain.current) return router.push(href);
      if (pending.current) return;
      pending.current = true;
      if (label.current) label.current.textContent = text || "";
      gsap
        .timeline()
        .set(curtain.current, { yPercent: 100, visibility: "visible" })
        .to(curtain.current, { yPercent: 0, duration: 0.55, ease: "power3.inOut", onComplete: () => router.push(href) });
    },
    [router]
  );

  useEffect(() => {
    if (!pending.current || !curtain.current) return;
    pending.current = false;
    gsap.to(curtain.current, {
      yPercent: -100,
      duration: 0.65,
      delay: 0.12,
      ease: "power3.inOut",
      onComplete: () => {
        if (curtain.current) gsap.set(curtain.current, { visibility: "hidden" });
      },
    });
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <TransitionContext.Provider value={go}>
      {children}
      <div className="curtain" ref={curtain} aria-hidden="true">
        <span ref={label} />
      </div>
    </TransitionContext.Provider>
  );
}

type TLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & { href: string; label?: string };

/** Internal link that plays the page transition. */
export function TLink({ href, label, onClick, children, ...rest }: TLinkProps) {
  const go = useContext(TransitionContext);
  const pathname = usePathname();
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        if (norm(href) === norm(pathname)) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        go(href, label);
      }}
    >
      {children}
    </Link>
  );
}
