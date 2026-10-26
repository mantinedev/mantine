import classes from './Chat.module.css';

export function HamnoyMap() {
  return (
    <svg
      viewBox="0 0 460 150"
      className={classes.map}
      role="img"
      aria-label="Map showing the Hamnøy bridge between two islands"
    >
      <rect width="460" height="150" fill="var(--mantine-color-hover-strong)" />
      <path
        d="M0 0h190c-10 30 10 48-6 74-14 22-6 48-24 76H0z"
        fill="var(--mantine-color-surface-panel)"
        stroke="var(--mantine-color-default-border)"
      />
      <path
        d="M260 0h200v150H300c-8-30 16-50 0-78-12-22-46-40-40-72z"
        fill="var(--mantine-color-surface-panel)"
        stroke="var(--mantine-color-default-border)"
      />
      <path
        d="M40 120 C 90 104 140 98 182 92 L 282 84 C 330 80 380 60 440 30"
        fill="none"
        stroke="var(--mantine-color-default-border)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M182 92 L 282 84"
        stroke="var(--mantine-primary-color-filled)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="232" cy="66" r="15" fill="var(--roundabout-coral)" />
      <circle cx="232" cy="66" r="5.5" fill="#fff" />
      <path d="M232 81v8" stroke="var(--roundabout-coral)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
