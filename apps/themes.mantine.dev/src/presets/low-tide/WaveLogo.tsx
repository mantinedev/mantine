export function WaveLogo() {
  return (
    <svg viewBox="0 0 32 32" width={30} height={30} aria-hidden>
      <circle cx="16" cy="16" r="15" fill="var(--mantine-primary-color-filled)" />
      <path
        d="M6 17c2.5-3 5-3 7.5 0s5 3 7.5 0 4-2.4 5-1.5"
        stroke="var(--mantine-primary-color-contrast)"
        strokeWidth="2.2"
        fill="none"
      />
      <path
        d="M8 22c2-2 4-2 6 0s4 2 6 0 3.5-1.8 4.5-1"
        stroke="var(--mantine-primary-color-contrast)"
        strokeWidth="2.2"
        fill="none"
        opacity=".6"
      />
    </svg>
  );
}
