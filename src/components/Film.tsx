"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Kicker } from "./ui";
import { KineticText } from "./Kinetic";
import { Reveal } from "./Reveal";

/* JDCO's own vertical factory reel (scraped from jdco.com.sa, compressed
   48MB→2.8MB, muted). Plays only while on screen. */
export default function Film() {
  const ref = useRef<HTMLElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3.2, -1.8]);

  useEffect(() => {
    const v = vid.current;
    if (!v) return;
    if (!("IntersectionObserver" in window)) {
      v.play().catch(() => {});
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="force-dark relative overflow-hidden border-y border-[var(--line)] bg-bg py-24 md:py-36"
    >
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="glow-ember pointer-events-none absolute right-[-10%] top-1/2 h-[60vh] w-[60vh] -translate-y-1/2 opacity-40" />

      <div className="shell relative grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div>
          <Kicker>The JDCO Reel — Official Footage</Kicker>
          <KineticText
            as="h2"
            className="display mt-6 max-w-[14ch] text-[clamp(2.1rem,5vw,4.1rem)] text-fg"
          >
            29 seconds inside the plant.
          </KineticText>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[1.05rem] font-light leading-relaxed text-mute">
              Shot on the floor in Riyadh — JDCO&apos;s own footage. Steel cages,
              planetary mixers, zero-slump casting, and the yard that ships
              3,500 tons a day.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mono mt-9 flex flex-wrap gap-x-8 gap-y-3 text-[0.64rem] uppercase tracking-[0.18em] text-steel">
              <span>Format — Vertical 9:16</span>
              <span>Location — Othman bin Affan</span>
              <span className="text-ember">◆ jdco.com.sa</span>
            </div>
          </Reveal>
        </div>

        <motion.div
          style={{ y, rotate }}
          className="justify-self-center will-change-transform"
        >
          <div className="ticks relative w-[min(74vw,330px)] overflow-hidden rounded-[1.6rem] border border-[var(--line-strong)] bg-black shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)]">
            <video
              ref={vid}
              className="aspect-[9/16] w-full object-cover"
              src="/video/jdco-reel.mp4"
              poster="/video/reel-poster.jpg"
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
              <span className="mono flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.18em] text-white/90">
                <motion.span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-ember"
                  animate={{ opacity: [1, 0.15, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                On the floor · Riyadh
              </span>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
              <span className="mono text-[0.56rem] uppercase tracking-[0.18em] text-white/85">
                JDCO official reel ◆ semi-dry precast
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
