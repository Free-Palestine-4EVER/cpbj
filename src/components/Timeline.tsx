"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/lib/content";
import { Kicker } from "./ui";
import { Reveal } from "./Reveal";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-80%"]);
  const fill = useTransform(scrollYProgress, [0, 1], ["6%", "100%"]);

  return (
    <section className="relative bg-bg">
      {/* mobile / tablet: vertical */}
      <div className="shell py-24 lg:hidden">
        <Kicker index={timeline.index}>{timeline.kicker}</Kicker>
        <h2 className="display mt-6 text-[clamp(1.9rem,7vw,2.6rem)] text-fg">
          {timeline.title}
        </h2>
        <div className="relative mt-10 pl-6">
          <div className="absolute bottom-2 left-[3px] top-2 w-px bg-[var(--line)]" />
          {timeline.steps.map((s) => (
            <Reveal key={s.year} className="relative pb-8 last:pb-0">
              <span className="absolute -left-6 top-1.5 h-2 w-2 rounded-full bg-ember" />
              <div className="display text-[1.5rem] font-extrabold text-ember">
                {s.year}
              </div>
              <div className="mt-1 text-[0.95rem] font-light text-mute">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* desktop: pinned horizontal */}
      <div ref={ref} className="hidden lg:block" style={{ height: "320vh" }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="shell">
            <Kicker index={timeline.index}>{timeline.kicker}</Kicker>
            <h2 className="display mt-5 max-w-[16ch] text-[clamp(2.2rem,4vw,3.6rem)] text-fg">
              {timeline.title}
            </h2>
          </div>

          <div className="relative mt-20">
            {/* baseline */}
            <div className="absolute left-0 right-0 top-[78px] h-px bg-[var(--line)]" />
            <motion.div
              style={{ scaleX: fill }}
              className="absolute left-0 right-0 top-[78px] h-px origin-left bg-ember"
            />

            <motion.div style={{ x }} className="flex gap-0 pl-[var(--gut)]">
              {timeline.steps.map((s, i) => (
                <div
                  key={s.year}
                  className="relative w-[340px] shrink-0 pr-12"
                >
                  {/* node */}
                  <div className="relative flex h-[78px] items-end pb-0">
                    <span className="display text-[2.6rem] font-extrabold leading-none text-fg">
                      {s.year}
                    </span>
                  </div>
                  <span className="absolute left-0 top-[72px] h-3 w-3 -translate-y-1/2 rounded-full border-2 border-ember bg-bg" />
                  <p className="mt-8 max-w-[260px] text-[0.98rem] font-light leading-relaxed text-mute">
                    {s.label}
                  </p>
                  <span className="mono mt-4 block text-[0.6rem] uppercase tracking-[0.16em] text-steel">
                    {String(i + 1).padStart(2, "0")} / {timeline.steps.length}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="shell mt-12">
            <span className="mono text-[0.62rem] uppercase tracking-[0.2em] text-steel">
              ↓ Scroll to advance the timeline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
