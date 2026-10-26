export function RoundaboutLogo() {
  return (
    <svg viewBox="0 0 28 28" width={28} height={28} aria-hidden="true">
      <circle
        cx="14"
        cy="14"
        r="12"
        fill="none"
        stroke="var(--mantine-primary-color-filled)"
        strokeWidth="3.2"
        strokeDasharray="56 20"
        strokeLinecap="round"
        transform="rotate(-40 14 14)"
      />
      <circle cx="14" cy="14" r="4" fill="var(--roundabout-coral)" />
    </svg>
  );
}
