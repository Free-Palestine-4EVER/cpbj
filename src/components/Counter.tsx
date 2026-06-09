"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

export function Counter({
  to,
  duration = 1.8,
  decimals = 0,
  separator = true,
  className,
}: {
  to: number;
  duration?: number;
  decimals?: number;
  separator?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-18% 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        const fixed = v.toFixed(decimals);
        node.textContent = separator
          ? Number(fixed).toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          : fixed;
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, decimals, separator]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
