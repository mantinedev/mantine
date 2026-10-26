export function TernLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width={26} height={26} aria-hidden className={className}>
      <rect width="32" height="32" rx="7" fill="var(--mantine-primary-color-filled)" />
      <path
        d="M5 18c4-1 7-4 10-9 1 4 3 6 7 7l5-2-4 4c-4 2-9 2-13 1z"
        fill="var(--mantine-primary-color-contrast)"
      />
    </svg>
  );
}
