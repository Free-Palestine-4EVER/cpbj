"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: "rise" | "wipe" | "fade";
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  variant = "rise",
  once = true,
}: Props) {
  const variants: Variants =
    variant === "wipe"
      ? {
          hidden: { opacity: 0, y: y * 0.6, clipPath: "inset(0 0 100% 0)" },
          show: {
            opacity: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0)",
            transition: { duration: 0.9, ease: EASE, delay },
          },
        }
      : variant === "fade"
      ? {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.9, ease: EASE, delay } },
        }
      : {
          hidden: { opacity: 0, y },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: EASE, delay },
          },
        };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container — children animate in sequence */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
