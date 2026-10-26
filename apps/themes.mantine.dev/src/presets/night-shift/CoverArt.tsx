import { useId } from 'react';

interface CoverArtProps {
  label?: string;
}

export function CoverArt({ label }: CoverArtProps) {
  const glowId = useId();

  return (
    <svg
      viewBox="0 0 300 300"
      width="100%"
      height="100%"
      style={{ display: 'block' }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <radialGradient id={glowId} cx="50%" cy="85%" r="70%">
          <stop offset="0" stopColor="#ffd8a8" stopOpacity=".9" />
          <stop offset="1" stopColor="#ff6a1a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="300" fill="var(--ns-sky)" />
      <rect y="0" width="300" height="140" fill="var(--ns-sky-2)" opacity=".6" />
      <circle cx="238" cy="58" r="20" fill="var(--ns-star)" opacity=".9" />
      <circle cx="246" cy="52" r="18" fill="var(--ns-sky-2)" />
      <circle cx="40" cy="40" r="1.6" fill="var(--ns-star)" />
      <circle cx="96" cy="26" r="1.2" fill="var(--ns-star)" />
      <circle cx="150" cy="54" r="1.4" fill="var(--ns-star)" />
      <circle cx="190" cy="22" r="1" fill="var(--ns-star)" />
      <circle cx="70" cy="80" r="1" fill="var(--ns-star)" />
      <path d="M0 120 h70 v-30 h50 v40 h40 v-60 h60 v50 h80 V300 H0 Z" fill="var(--ns-brick)" />
      <rect x="30" y="150" width="240" height="150" fill="var(--ns-brick-2)" />
      <rect x="50" y="176" width="200" height="96" rx="6" fill="#ff8a3d" />
      <rect x="50" y="176" width="200" height="96" rx="6" fill={`url(#${glowId})`} />
      <path
        d="M70 250 q20 -24 40 0 Z M118 250 q22 -28 44 0 Z M170 250 q20 -22 40 0 Z"
        fill="#7a3a12"
      />
      <path
        d="M78 245 l6 -6 M90 245 l6 -6 M128 244 l7 -7 M142 244 l7 -7 M180 245 l6 -6 M194 245 l6 -6"
        stroke="#ffcf9e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="50" y="250" width="200" height="6" fill="#5a2a0c" opacity=".7" />
      <path
        d="M86 168 q-6 -14 0 -26 q6 -12 0 -24 M150 166 q-6 -16 0 -30 q6 -12 0 -26 M212 168 q-6 -14 0 -26"
        stroke="var(--ns-star)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity=".35"
      />
      <rect x="30" y="150" width="240" height="14" fill="var(--ns-sky)" opacity=".5" />
      <text
        x="150"
        y="146"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="800"
        fontSize="15"
        fill="var(--ns-star)"
        letterSpacing="1"
      >
        LEITH BAKEHOUSE
      </text>
    </svg>
  );
}
