interface IconProps {
  size?: number;
  className?: string;
}

export function SparkIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
    </svg>
  );
}

export function BrandMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 30 30" width={30} height={30} className={className} aria-hidden>
      <path d="M15 2 27 9v12l-12 7-12-7V9z" fill="var(--mantine-color-bright)" />
      <path
        d="M15 2v13l12 6M15 15 3 21"
        stroke="var(--mantine-primary-color-filled)"
        strokeWidth={2.2}
        fill="none"
      />
    </svg>
  );
}
