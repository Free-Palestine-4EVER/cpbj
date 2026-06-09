"use client";

import {
  Children,
  createElement,
  isValidElement,
  type ReactNode,
  type ElementType,
} from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/** split a ReactNode into animated "units": strings → words, elements → kept whole */
function buildUnits(node: ReactNode): { content: ReactNode; key: string }[] {
  const units: { content: ReactNode; key: string }[] = [];
  let k = 0;
  Children.toArray(node).forEach((child) => {
    if (typeof child === "string") {
      child
        .split(/(\s+)/)
        .filter((s) => s.trim().length > 0)
        .forEach((word) => units.push({ content: word, key: `w${k++}` }));
    } else if (isValidElement(child)) {
      units.push({ content: child, key: `e${k++}` });
    }
  });
  return units;
}

export function KineticText({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const units = buildUnits(children);
  return createElement(
    Tag,
    { className },
    units.map((u, i) => (
      <span
        key={u.key}
        className="mr-[0.24em] inline-flex overflow-hidden align-bottom"
        style={{ paddingBottom: "0.08em" }}
      >
        <motion.span
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once, margin: "-8% 0px -8% 0px" }}
          transition={{ duration: 0.7, ease: EASE, delay: delay + i * 0.045 }}
        >
          {u.content}
        </motion.span>
      </span>
    ))
  );
}
