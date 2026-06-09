"use client";

import { process } from "@/lib/content";
import { Kicker } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export default function Process() {
  return (
    <section className="relative bg-bg py-28 md:py-36">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* sticky head */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Reveal>
            <Kicker index={process.index}>{process.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.06} variant="wipe">
            <h2 className="display mt-6 max-w-[12ch] text-[clamp(2rem,4.5vw,3.4rem)] text-fg">
              {process.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mono mt-7 max-w-sm text-[0.8rem] leading-relaxed text-steel">
              // From aggregate to dispatch, every JDCO unit passes through six
              automated, monitored stages — engineered for repeatable precision
              at volume.
            </p>
          </Reveal>
        </div>

        {/* steps */}
        <RevealGroup className="relative" stagger={0.07}>
          <div className="absolute bottom-2 left-[27px] top-2 w-px bg-[var(--line)] md:left-[31px]" />
          {process.steps.map((s) => (
            <RevealItem key={s.n}>
              <div className="group relative flex gap-6 pb-9 last:pb-0 md:gap-8">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-surface md:h-16 md:w-16">
                  <span className="mono text-[0.92rem] font-semibold text-ember">
                    {s.n}
                  </span>
                  <span className="absolute inset-0 rounded-full ring-1 ring-ember/0 transition-all duration-500 group-hover:ring-ember/50" />
                </div>
                <div className="pt-2.5">
                  <h3 className="display text-[1.22rem] font-bold text-fg">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[0.96rem] font-light leading-relaxed text-mute">
                    {s.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
