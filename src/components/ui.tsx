"use client";

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { KineticText } from "./Kinetic";

export function Kicker({
  index,
  children,
  tone = "dark",
}: {
  index?: string;
  children: ReactNode;
  tone?: "dark" | "paper";
}) {
  const mute = tone === "paper" ? "text-mute-paper" : "text-mute";
  return (
    <div className="flex items-center gap-3">
      {index && (
        <span className="mono text-ember text-[0.72rem] font-medium tracking-[0.1em]">
          /{index}
        </span>
      )}
      <span className="h-px w-7 bg-ember/70" />
      <span className={`eyebrow ${mute}`}>{children}</span>
    </div>
  );
}

export function SectionHead({
  index,
  kicker,
  title,
  intro,
  tone = "dark",
  className = "",
  max = "max-w-3xl",
}: {
  index?: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "paper";
  className?: string;
  max?: string;
}) {
  const titleColor = tone === "paper" ? "text-ink" : "text-fg";
  const introColor = tone === "paper" ? "text-mute-paper" : "text-mute";
  return (
    <div className={className}>
      <Reveal>
        <Kicker index={index} tone={tone}>
          {kicker}
        </Kicker>
      </Reveal>
      <KineticText
        as="h2"
        className={`display ${titleColor} mt-6 text-[clamp(2.1rem,5vw,4.1rem)] ${max}`}
      >
        {title}
      </KineticText>
      {intro && (
        <Reveal delay={0.12}>
          <p
            className={`mt-6 ${introColor} text-[1.05rem] leading-relaxed ${max} font-light`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** decorative crosshair tick */
export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M12 2v8M12 14v8M2 12h8M14 12h8" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  );
}

export function Divider({ tone = "dark" }: { tone?: "dark" | "paper" }) {
  return (
    <div
      className={`h-px w-full ${
        tone === "paper" ? "bg-[var(--line-paper)]" : "bg-[var(--line)]"
      }`}
    />
  );
}
