"use client";

import { useEffect, useRef, useState } from "react";

/** true while the element is on (or near) screen — used to pause offscreen 3D */
export function useVisible<T extends HTMLElement>(rootMargin = "300px") {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return [ref, visible] as const;
}
