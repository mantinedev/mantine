import classes from './Plan.module.css';

export function CanalMap() {
  return (
    <figure className={classes.map}>
      <svg viewBox="0 0 520 330" role="img" aria-labelledby="map-title">
        <title id="map-title">
          Map of the Union Canal from Kingsknowe to Fountainbridge. The Kingsknowe stretch is done,
          the Wester Hailes towpath is funded, and the Leamington lift bridge still needs funding.
        </title>
        <rect
          x="0"
          y="0"
          width="520"
          height="330"
          rx="8"
          fill="var(--mantine-color-surface-panel)"
        />
        <path
          d="M30 70 h70 v40 h-70z M140 40 h90 v50 h-90z M300 230 h80 v50 h-80z M400 60 h80 v60 h-80z"
          fill="var(--mantine-color-surface-muted)"
        />
        <path
          d="M24 270 C 90 260 120 210 170 200 S 260 210 300 170 S 380 110 440 90 S 490 60 500 50"
          fill="none"
          stroke="var(--uc-water)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d="M24 270 C 90 260 120 210 170 200"
          fill="none"
          stroke="var(--mantine-primary-color-filled)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M170 200 S 260 210 300 170 S 350 132 372 120"
          fill="none"
          stroke="var(--uc-funded)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M372 120 S 420 98 440 90 S 490 60 500 50"
          fill="none"
          stroke="var(--uc-need)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="2 9"
        />
        <g transform="translate(440 90)">
          <circle
            r="15"
            fill="var(--mantine-color-surface-panel)"
            stroke="var(--mantine-color-bright)"
            strokeWidth="2"
          />
          <path
            d="M-7 4 h14 M-5 4 l2 -9 M5 4 l-2 -9"
            stroke="var(--mantine-color-bright)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <circle cx="24" cy="270" r="6" fill="var(--mantine-color-bright)" />
        <circle cx="500" cy="50" r="6" fill="var(--mantine-color-bright)" />
        <text x="34" y="300" className={classes.place}>
          Kingsknowe
        </text>
        <text x="170" y="236" className={classes.place}>
          Wester Hailes
        </text>
        <text x="190" y="252">
          1.2 miles of towpath
        </text>
        <text x="340" y="70" className={classes.place}>
          Leamington lift bridge
        </text>
        <text x="388" y="30" className={classes.place}>
          Fountainbridge
        </text>
      </svg>
      <figcaption className={classes.legend}>
        <span>
          <i data-status="done" />
          Done
        </span>
        <span>
          <i data-status="funded" />
          Funded
        </span>
        <span>
          <i data-status="need" />
          Needs funding
        </span>
      </figcaption>
    </figure>
  );
}
