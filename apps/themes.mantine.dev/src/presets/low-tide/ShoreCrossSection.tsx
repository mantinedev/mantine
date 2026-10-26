import classes from './LowTide.module.css';

export function ShoreCrossSection() {
  return (
    <svg
      viewBox="0 0 1000 420"
      role="img"
      aria-labelledby="lt-hero-title"
      className={classes.heroSvg}
    >
      <title id="lt-hero-title">
        Cross-section of a rocky shore at Wembury, from the splash zone at the top to the lower
        shore under the low-water mark
      </title>
      <rect x="0" y="0" width="1000" height="420" fill="var(--mantine-color-surface-muted)" />
      <path
        d="M0 150 C 160 140 260 160 400 150 S 700 140 1000 150 L1000 420 L0 420 Z"
        fill="var(--lt-sea-1)"
      />
      <path
        d="M0 255 C 180 248 320 262 480 255 S 780 248 1000 255 L1000 420 L0 420 Z"
        fill="var(--lt-sea-2)"
      />
      <path
        d="M0 340 C 160 334 330 346 500 340 S 820 334 1000 340 L1000 420 L0 420 Z"
        fill="var(--lt-sea-3)"
      />
      <path
        d="M0 70 L 120 80 L 210 120 L 300 135 L 360 175 L 470 205 L 540 250 L 640 270 L 700 300 L 800 322 L 860 360 L 1000 380 L1000 420 L0 420 Z"
        fill="var(--lt-rock)"
      />
      <path
        d="M210 120 L 300 135 L 330 160 L 250 150 Z M 540 250 L 640 270 L 660 290 L 570 280 Z M 800 322 L 860 360 L 820 365 L 780 340 Z"
        fill="var(--lt-rock-dark)"
      />
      <ellipse cx="505" cy="232" rx="44" ry="10" fill="var(--lt-sea-2)" />
      <ellipse cx="745" cy="314" rx="38" ry="8" fill="var(--lt-sea-3)" />
      <ellipse cx="315" cy="160" rx="30" ry="7" fill="var(--lt-sea-1)" />
      <path
        d="M620 268 q 6 -16 2 -30 M 632 270 q 8 -14 4 -28 M 840 352 q 4 -18 -2 -32 M 852 356 q 8 -16 4 -30 M 870 362 q 2 -14 -4 -26"
        stroke="var(--lt-weed)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="498" cy="232" r="6" fill="var(--lt-critical)" />
      <circle cx="514" cy="233" r="5" fill="var(--lt-critical)" opacity=".8" />
      {[150, 340].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="1000"
          y2={y}
          stroke="var(--mantine-color-bright)"
          strokeWidth="1"
          strokeDasharray="4 5"
          opacity=".45"
        />
      ))}
      <text x="24" y="40">
        Splash zone
      </text>
      <text x="24" y="140">
        Mean high water, 4.9 m
      </text>
      <text x="24" y="200">
        Upper shore
      </text>
      <text x="24" y="290">
        Middle shore, most survey pools
      </text>
      <text x="24" y="330">
        Mean low water, 0.6 m
      </text>
      <text x="24" y="390" className={classes.heroOnSea}>
        Lower shore, uncovered on spring tides
      </text>
      <text x="560" y="216">
        Pool 7, beadlet anemones
      </text>
    </svg>
  );
}
