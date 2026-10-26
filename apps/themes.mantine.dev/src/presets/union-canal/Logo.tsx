export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 38" aria-hidden>
      <circle cx="19" cy="19" r="18" fill="none" stroke="var(--uc-chrome)" strokeWidth="2" />
      <path
        d="M8 22c3-2.5 6-2.5 9 0s6 2.5 9 0 4-2 5-1.4"
        fill="none"
        stroke="var(--uc-chrome)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M12 16h14l-2 3H14z" fill="var(--uc-chrome)" />
    </svg>
  );
}
