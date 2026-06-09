const items = [
  "ISO 9001:2015 CERTIFIED",
  "ZERO-SLUMP SEMI-DRY TECH",
  "3,500 TONS / DAY",
  "ASTM C748-M",
  "VISION 2030 ALIGNED",
  "100% SAUDI-OWNED",
  "70+ PROJECTS DELIVERED",
  "TRENCHLESS-READY",
];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="force-dark relative border-y border-[var(--line)] bg-surface py-4">
      <div className="marquee-track gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="mono whitespace-nowrap text-[0.72rem] uppercase tracking-[0.2em] text-mute">
              {t}
            </span>
            <span className="text-ember">◆</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
    </div>
  );
}
