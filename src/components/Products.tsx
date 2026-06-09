"use client";

import { products, sectors, type SectorKey } from "@/lib/content";
import { SectionHead } from "./ui";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const sectorLabel = Object.fromEntries(
  sectors.map((s) => [s.key, s.label])
) as Record<SectorKey, string>;

function Glyph({ id, className = "" }: { id: string; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
  } as const;
  if (id === "box-culverts")
    return (
      <svg viewBox="0 0 64 64" className={className} {...common}>
        <rect x="6" y="14" width="52" height="36" />
        <rect x="14" y="22" width="36" height="20" />
        <path d="M6 14l8-8h52l-8 8M58 50l8-8V6" opacity="0.5" />
      </svg>
    );
  if (id === "manholes")
    return (
      <svg viewBox="0 0 64 64" className={className} {...common}>
        <circle cx="32" cy="32" r="24" />
        <circle cx="32" cy="32" r="15" opacity="0.6" />
        <path d="M32 8v8M32 48v8M8 32h8M48 32h8" opacity="0.6" />
        <path d="M27 22v20M37 22v20" opacity="0.4" />
      </svg>
    );
  // rc-pipes default — pipe end
  return (
    <svg viewBox="0 0 64 64" className={className} {...common}>
      <circle cx="32" cy="32" r="25" />
      <circle cx="32" cy="32" r="16" opacity="0.6" />
      <ellipse cx="32" cy="32" rx="25" ry="25" opacity="0.25" />
      <circle cx="32" cy="32" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative scroll-mt-24 bg-bg py-28 md:py-36">
      <div className="shell">
        <SectionHead
          index={products.index}
          kicker={products.kicker}
          title={
            <>
              A complete range,{" "}
              <span className="text-mute">engineered underground.</span>
            </>
          }
          intro={products.intro}
        />

        {/* product cards */}
        <RevealGroup className="mt-16 grid gap-4 md:grid-cols-3" stagger={0.1}>
          {products.items.map((p, i) => (
            <RevealItem key={p.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-surface p-8 transition-colors duration-500 hover:border-[var(--line-strong)]">
                {/* faint glyph backdrop */}
                <Glyph
                  id={p.id}
                  className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 text-blueprint opacity-[0.07] transition-all duration-700 group-hover:opacity-[0.14] group-hover:rotate-12"
                />
                <div className="relative flex items-center justify-between">
                  <Glyph id={p.id} className="h-11 w-11 text-ember" />
                  <span className="numeral text-[1.6rem] text-ghost">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="display relative mt-8 text-[1.55rem] font-bold text-fg">
                  {p.name}
                </h3>
                <div className="mono relative mt-1 text-[0.66rem] uppercase tracking-[0.18em] text-ember">
                  {p.heading}
                </div>
                <p className="relative mt-4 text-[0.95rem] font-light leading-relaxed text-mute">
                  {p.blurb}
                </p>

                {/* specs */}
                <dl className="relative mt-7 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-[var(--line)] pt-6">
                  {p.specs.map((s) => (
                    <div key={s.k}>
                      <dt className="mono text-[0.6rem] uppercase tracking-[0.14em] text-steel">
                        {s.k}
                      </dt>
                      <dd className="mt-1 text-[0.92rem] font-medium text-fg-soft tnum">
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* sector tags */}
                <div className="relative mt-7 flex flex-wrap gap-1.5">
                  {p.sectors.map((k) => (
                    <span
                      key={k}
                      className="mono rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.1em] text-mute"
                    >
                      {sectorLabel[k]}
                    </span>
                  ))}
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* application matrix */}
        <Reveal delay={0.05}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--line)] bg-surface">
            <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-4">
              <span className="mono text-[0.66rem] uppercase tracking-[0.2em] text-mute">
                Product / Application Matrix
              </span>
              <span className="mono text-[0.6rem] uppercase tracking-[0.16em] text-steel">
                ◆ = approved use
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left mono text-[0.62rem] uppercase tracking-[0.14em] text-steel">
                      Product
                    </th>
                    {sectors.map((s) => (
                      <th
                        key={s.key}
                        className="px-4 py-4 text-center mono text-[0.62rem] uppercase tracking-[0.12em] text-mute"
                      >
                        {s.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {products.matrix.map((row) => (
                    <tr
                      key={row.product}
                      className="border-t border-[var(--line)] transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-4 text-[0.92rem] font-medium text-fg-soft">
                        {row.product}
                      </td>
                      {sectors.map((s) => {
                        const on = row.sectors.includes(s.key);
                        return (
                          <td key={s.key} className="px-4 py-4 text-center">
                            {on ? (
                              <span className="text-ember">◆</span>
                            ) : (
                              <span className="text-ghost">·</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
