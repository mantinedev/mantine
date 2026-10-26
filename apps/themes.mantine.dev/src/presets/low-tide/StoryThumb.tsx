import type { ThumbKind } from './data';

export function StoryThumb({ kind }: { kind: ThumbKind }) {
  return (
    <svg viewBox="0 0 400 300" aria-hidden>
      {kind === 'estuary' && (
        <>
          <rect width="400" height="300" fill="var(--lt-sea-1)" />
          <path d="M0 190 C 120 170 260 210 400 185 L400 300 L0 300 Z" fill="var(--lt-sea-3)" />
          <path d="M0 230 C 140 215 260 245 400 228 L400 300 L0 300 Z" fill="var(--lt-sea-2)" />
          <circle cx="300" cy="90" r="34" fill="var(--mantine-color-body)" opacity=".8" />
        </>
      )}
      {kind === 'bay' && (
        <>
          <rect width="400" height="300" fill="var(--lt-sand)" />
          <path d="M0 120 L400 90 L400 300 L0 300 Z" fill="var(--lt-sea-2)" />
          <path d="M40 260 l30 -60 l30 60 Z M150 270 l22 -44 l22 44 Z" fill="var(--lt-rock-dark)" />
        </>
      )}
      {kind === 'cliffs' && (
        <>
          <rect width="400" height="300" fill="var(--lt-spray-strong)" />
          <path
            d="M0 210 L80 150 L160 190 L250 120 L330 170 L400 140 L400 300 L0 300 Z"
            fill="var(--lt-rock)"
          />
          <path d="M0 250 C 130 238 270 262 400 246 L400 300 L0 300 Z" fill="var(--lt-sea-3)" />
        </>
      )}
    </svg>
  );
}
