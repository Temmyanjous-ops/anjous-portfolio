"use client";

import { useEffect, useState } from "react";

export function Clock({ className }: { className?: string }) {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" });
    const tick = () => setT(fmt.format(new Date()) + " WAT");
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);
  return <span className={className} suppressHydrationWarning>{t}</span>;
}
