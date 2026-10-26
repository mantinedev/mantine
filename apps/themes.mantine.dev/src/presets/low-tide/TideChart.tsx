import classes from './LowTide.module.css';

const W = 640;
const H = 240;
const PAD = { l: 44, r: 20, t: 24, b: 34 };
const IW = W - PAD.l - PAD.r;
const IH = H - PAD.t - PAD.b;
const LOW_A = 7.8;
const HIGH = 14.03;
const LOW_B = 20.25;

const x = (hour: number) => PAD.l + (hour / 24) * IW;
const y = (metres: number) => PAD.t + IH - (metres / 5.5) * IH;

function tideHeight(hour: number) {
  if (hour <= LOW_A) {
    const t = (LOW_A - hour) / (LOW_A - (HIGH - 12.42));
    return 0.6 + ((4.7 - 0.6) * (1 - Math.cos(Math.PI * Math.min(1, t)))) / 2;
  }
  if (hour <= HIGH) {
    const t = (hour - LOW_A) / (HIGH - LOW_A);
    return 0.6 + ((4.9 - 0.6) * (1 - Math.cos(Math.PI * t))) / 2;
  }
  if (hour <= LOW_B) {
    const t = (hour - HIGH) / (LOW_B - HIGH);
    return 4.9 - ((4.9 - 0.8) * (1 - Math.cos(Math.PI * t))) / 2;
  }
  const t = (hour - LOW_B) / 6.2;
  return 0.8 + ((4.6 - 0.8) * (1 - Math.cos(Math.PI * Math.min(1, t)))) / 2;
}

const curve = Array.from(
  { length: 97 },
  (_, index) =>
    `${index ? 'L' : 'M'}${x(index / 4).toFixed(1)} ${y(tideHeight(index / 4)).toFixed(1)}`
).join(' ');

const area = `${curve} L${x(24)} ${y(0)} L${x(0)} ${y(0)} Z`;

const metres = [0, 1, 2, 3, 4, 5];
const hours = [0, 6, 12, 18, 24];

const extremes = [
  {
    hour: LOW_A,
    metres: 0.6,
    label: 'Low 07:48, 0.6 m',
    anchor: 'start',
    dy: 14,
  },
  {
    hour: HIGH,
    metres: 4.9,
    label: 'High 14:02, 4.9 m',
    anchor: 'middle',
    dy: -12,
  },
  {
    hour: LOW_B,
    metres: 0.8,
    label: 'Low 20:15, 0.8 m',
    anchor: 'middle',
    dy: 18,
  },
] as const;

export function TideChart() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-labelledby="lt-tide-title"
      className={classes.chart}
    >
      <title id="lt-tide-title">
        Tide height at Wembury on 17 October 2026: low water 0.6 metres at 07:48, high water 4.9
        metres at 14:02, low water 0.8 metres at 20:15
      </title>
      <rect x={x(7.33)} y={PAD.t} width={x(8.33) - x(7.33)} height={IH} fill="var(--lt-sea-1)" />
      <text x={x(7.83)} y={PAD.t - 8} textAnchor="middle" className={classes.chartStrong}>
        Survey
      </text>
      {metres.map((value) => (
        <g key={value}>
          <line
            x1={PAD.l}
            x2={W - PAD.r}
            y1={y(value)}
            y2={y(value)}
            stroke={
              value === 0 ? 'var(--mantine-color-border-input)' : 'var(--mantine-color-border)'
            }
            strokeWidth="1"
          />
          <text x={PAD.l - 10} y={y(value) + 4} textAnchor="end">
            {value} m
          </text>
        </g>
      ))}
      {hours.map((hour) => (
        <text key={hour} x={x(hour)} y={H - 10} textAnchor="middle">
          {String(hour % 24).padStart(2, '0')}:00
        </text>
      ))}
      <path d={area} fill="var(--mantine-primary-color-filled)" fillOpacity="0.1" />
      <path
        d={curve}
        fill="none"
        stroke="var(--mantine-primary-color-filled)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {extremes.map((point) => (
        <g key={point.label}>
          <circle
            cx={x(point.hour)}
            cy={y(point.metres)}
            r="4.5"
            fill="var(--mantine-primary-color-filled)"
            stroke="var(--mantine-color-surface-muted)"
            strokeWidth="2"
          />
          <text
            x={x(point.hour) + (point.anchor === 'start' ? 10 : 0)}
            y={y(point.metres) + point.dy}
            textAnchor={point.anchor}
            className={classes.chartStrong}
          >
            {point.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
