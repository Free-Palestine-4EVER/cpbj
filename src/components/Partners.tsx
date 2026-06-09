"use client";

import { partners } from "@/lib/content";
import { SectionHead } from "./ui";
import { RevealGroup, RevealItem } from "./Reveal";

export default function Partners() {
  return (
    <section className="relative bg-paper py-28 text-ink md:py-36">
      <div className="shell">
        <SectionHead
          index={partners.index}
          kicker={partners.kicker}
          title={
            <>
              Approved where{" "}
              <span className="text-mute-paper">it matters most.</span>
            </>
          }
          intro={partners.intro}
          tone="paper"
          max="max-w-3xl"
        />

        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--line-paper)] bg-[var(--line-paper)] sm:grid-cols-3"
          stagger={0.05}
        >
          {partners.names.map((n) => (
            <RevealItem
              key={n}
              className="group flex min-h-[120px] items-center justify-center bg-[#f4f2eb] px-6 py-10 text-center transition-colors duration-300 hover:bg-[#efece4]"
            >
              <span className="display text-[1.15rem] font-bold leading-tight text-[#2a2722] transition-colors duration-300 group-hover:text-ember">
                {n}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
