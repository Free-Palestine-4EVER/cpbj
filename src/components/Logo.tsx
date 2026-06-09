export function LogoMark({ className = "" }: { className?: string }) {
  // precast pipe cross-section as the monogram
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden>
      <circle cx="16" cy="16" r="14.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="8.4" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      <circle cx="16" cy="16" r="2.1" fill="var(--color-ember)" />
      <path d="M16 1.8v3.6M16 26.6v3.6M1.8 16h3.6M26.6 16h3.6" stroke="var(--color-ember)" strokeWidth="1.2" />
    </svg>
  );
}

export function Wordmark({
  className = "",
  sub = true,
}: {
  className?: string;
  sub?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-7 text-current shrink-0" />
      <span className="leading-none">
        <span className="display text-[1.18rem] font-extrabold tracking-[-0.02em]">
          JDCO
        </span>
        {sub && (
          <span className="mono block text-[0.5rem] tracking-[0.34em] text-mute mt-0.5">
            PRECAST · RIYADH
          </span>
        )}
      </span>
    </span>
  );
}
