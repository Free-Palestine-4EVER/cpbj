"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { technology } from "@/lib/content";
import { SectionHead } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

function Cross() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0 text-[#a39d8e]" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-ember" fill="none" stroke="currentColor" strokeWidth="2.2">
      <motion.path
        d="M3 8.5l3.5 3.5L13 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      />
    </svg>
  );
}

export default function Technology() {
  const duelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: duelRef,
    offset: ["start 0.85", "end 0.55"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section
      id="technology"
      className="relative scroll-mt-24 overflow-hidden bg-paper py-28 text-ink md:py-36"
    >
      {/* faint blueprint on paper */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line-paper) 1px, transparent 1px), linear-gradient(to bottom, var(--line-paper) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(80% 60% at 50% 0%, black, transparent 80%)",
        }}
      />
      <div className="shell relative">
        <SectionHead
          index={technology.index}
          kicker={technology.kicker}
          title={
            <>
              Semi-dry technology vs.{" "}
              <span className="text-mute-paper">traditional wet mix.</span>
            </>
          }
          intro={technology.intro}
          tone="paper"
        />

        {/* the duel — two engineering plates around a scroll-drawn center rail */}
        <div ref={duelRef} className="relative mt-16">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[var(--line-paper)] md:block" />
          <motion.div
            style={{ scaleY: draw }}
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 origin-top bg-ember md:block"
          />
          <div className="absolute left-1/2 top-1/2 z-10 hidden h-13 w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ember bg-paper p-4 md:flex">
            <span className="mono text-[0.72rem] font-bold tracking-[0.1em] text-ember">
              VS
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-12">
            {/* legacy plate */}
            <Reveal variant="wipe">
              <div className="h-full rounded-2xl border border-[var(--line-paper)] bg-[#eae7df] p-7 md:p-9">
                <div className="mono text-[0.6rem] uppercase tracking-[0.24em] text-mute-paper">
                  Legacy Method
                </div>
                <h3 className="display mt-3 text-[1.6rem] font-bold text-[#5b574c]">
                  Traditional Wet Mix
                </h3>
                <RevealGroup className="mt-8" stagger={0.07}>
                  {technology.rows.map((r, i) => (
                    <RevealItem
                      key={r.metric}
                      y={16}
                      className="border-t border-[var(--line-paper)] py-5"
                    >
                      <div className="mono flex items-center justify-between text-[0.58rem] uppercase tracking-[0.18em] text-[#a39d8e]">
                        <span>
                          M-{String(i + 1).padStart(2, "0")} · {r.metric}
                        </span>
                        <Cross />
                      </div>
                      <div className="mt-2 text-[1rem] font-light text-mute-paper">
                        {r.traditional}
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </Reveal>

            {/* JDCO plate */}
            <Reveal variant="wipe" delay={0.12}>
              <div className="relative h-full rounded-2xl border-2 border-ember bg-[#f7f5ee] p-7 shadow-[0_36px_80px_-36px_rgba(199,157,6,0.55)] md:p-9">
                <span className="mono absolute -top-3 right-7 rotate-2 rounded-full border border-ember bg-ember px-3.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#131313]">
                  Field-proven ◆ 3,500 T/Day
                </span>
                <div className="mono text-[0.6rem] uppercase tracking-[0.24em] text-ember">
                  The JDCO Standard
                </div>
                <h3 className="display mt-3 text-[1.6rem] font-bold text-ink">
                  Semi-Dry Technology
                </h3>
                <RevealGroup className="mt-8" stagger={0.07}>
                  {technology.rows.map((r, i) => (
                    <RevealItem
                      key={r.metric}
                      y={16}
                      className="border-t border-[#e3d9b8] py-5"
                    >
                      <div className="mono flex items-center justify-between text-[0.58rem] uppercase tracking-[0.18em] text-[#8a7c45]">
                        <span>
                          M-{String(i + 1).padStart(2, "0")} · {r.metric}
                        </span>
                        <Check />
                      </div>
                      <div className="mt-2 text-[1rem] font-semibold text-ink">
                        {r.jdco}
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mono mt-8 text-[0.74rem] leading-relaxed text-mute-paper">
            // Zero-slump, end-pressed units leave the mold structurally rigid —
            enabling immediate reuse and the throughput that traditional wet-cast
            lines cannot match.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
