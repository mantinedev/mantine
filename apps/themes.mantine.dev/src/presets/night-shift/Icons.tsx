interface IconProps {
  size?: number;
  className?: string;
}

export function CrescentIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.5 3.5a8.5 8.5 0 1 0 5 13.6A7 7 0 0 1 15.5 3.5z" fill="currentColor" />
    </svg>
  );
}

function SkipIcon({ path }: { path: string }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export function BackIcon() {
  return <SkipIcon path="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4" />;
}

export function ForwardIcon() {
  return <SkipIcon path="M20 12a8 8 0 1 1-2.4-5.7M20 4v4h-4" />;
}
