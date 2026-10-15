"use client";

import { useRef, useState } from "react";

export function CopyEmail({ email, label = "Copy email", showAddress = false, addressClass = "email" }: {
  email: string; label?: string; showAddress?: boolean; addressClass?: string;
}) {
  const [text, setText] = useState(label);
  const addr = useRef<HTMLAnchorElement>(null);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setText("Copied");
    } catch {
      if (addr.current) {
        const r = document.createRange();
        r.selectNodeContents(addr.current);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(r);
      }
      setText("Selected");
    }
    window.setTimeout(() => setText(label), 1600);
  };
  return (
    <>
      {showAddress && (
        <a className={addressClass} href={`mailto:${email}`} ref={addr}>
          {email}
        </a>
      )}
      <button className="copy" onClick={copy}>{text}</button>
    </>
  );
}
