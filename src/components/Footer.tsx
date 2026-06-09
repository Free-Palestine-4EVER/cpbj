import { brand, nav } from "@/lib/content";
import { Wordmark } from "./Logo";

export default function Footer() {
  return (
    <footer className="force-dark bg-bg pb-10 pt-20">
      <div className="shell">
        <div className="grid gap-12 border-b border-[var(--line)] pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="text-fg">
              <Wordmark />
            </span>
            <p className="mt-6 max-w-xs text-[0.92rem] font-light leading-relaxed text-mute">
              {brand.legal}. Engineering certainty for the region&apos;s most
              critical infrastructure since {brand.established}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["ISO 9001:2015", "Vision 2030", "ASTM C748-M"].map((b) => (
                <span
                  key={b}
                  className="mono rounded-full border border-[var(--line)] px-3 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-steel"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="mono text-[0.6rem] uppercase tracking-[0.2em] text-steel">
              Navigate
            </div>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="link-sweep text-[0.92rem] text-mute transition-colors hover:text-fg"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mono text-[0.6rem] uppercase tracking-[0.2em] text-steel">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-[0.92rem] text-mute">
              <li>
                <a href={`mailto:${brand.email}`} className="link-sweep hover:text-fg">
                  {brand.email}
                </a>
              </li>
              <li>{brand.phone}</li>
              <li>{brand.location}</li>
              <li className="text-ember">{brand.web}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-7 md:flex-row md:items-center">
          <span className="mono text-[0.62rem] uppercase tracking-[0.14em] text-steel">
            © {brand.established}–2026 {brand.short}. All rights reserved.
          </span>
          <span className="mono text-[0.62rem] uppercase tracking-[0.14em] text-steel">
            Concept design · Not an official JDCO website
          </span>
        </div>
      </div>
    </footer>
  );
}
