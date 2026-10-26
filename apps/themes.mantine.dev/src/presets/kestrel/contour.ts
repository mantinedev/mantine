export interface ContourMap {
  width: number;
  height: number;
  lake: { cx: number; cy: number; rx: number; ry: number };
  lines: { d: string; index: boolean }[];
  route: { d: string; start: [number, number]; end: [number, number] } | null;
}

function random(seed: number) {
  let state = seed * 9301 + 49297;
  return () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
}

const round = (value: number) => Number(value.toFixed(1));
const point = ([x, y]: [number, number]) => `${x.toFixed(1)} ${y.toFixed(1)}`;

export function generateContourMap(
  seed: number,
  withRoute: boolean,
  width: number,
  height: number
): ContourMap {
  const r = random(seed);
  const peaks = [0, 1, 2].map(() => ({
    x: width * (0.2 + r() * 0.6),
    y: height * (0.2 + r() * 0.6),
    s: 0.6 + r() * 0.6,
  }));

  const field = (x: number, y: number) =>
    peaks.reduce((acc, peak) => {
      const dx = (x - peak.x) / (width * 0.32 * peak.s);
      const dy = (y - peak.y) / (height * 0.42 * peak.s);
      return acc + peak.s * Math.exp(-(dx * dx + dy * dy));
    }, 0);

  const levels = 14;
  const samples = 72;
  const lines: ContourMap['lines'] = [];

  for (let level = 1; level < levels; level += 1) {
    const threshold = (level / levels) * 1.25;
    let d = '';

    peaks.forEach((peak, peakIndex) => {
      const points: [number, number][] = [];
      for (let k = 0; k <= samples; k += 1) {
        const angle = (k / samples) * Math.PI * 2;
        let lo = 0;
        let hi = Math.max(width, height);
        for (let iteration = 0; iteration < 18; iteration += 1) {
          const mid = (lo + hi) / 2;
          const value = field(peak.x + Math.cos(angle) * mid, peak.y + Math.sin(angle) * mid);
          if (value > threshold) {
            lo = mid;
          } else {
            hi = mid;
          }
        }
        if (lo < 2) {
          points.length = 0;
          break;
        }
        points.push([peak.x + Math.cos(angle) * lo, peak.y + Math.sin(angle) * lo]);
      }

      if (points.length < 3) {
        return;
      }

      const own = points.every(([x, y]) =>
        peaks.every(
          (other) =>
            other === peak ||
            Math.hypot(x - other.x, y - other.y) > Math.hypot(x - peak.x, y - peak.y) * 0.9
        )
      );

      if (!own && peakIndex > 0) {
        return;
      }

      d += `M${points.map(point).join(' L')} Z `;
    });

    if (d) {
      lines.push({ d, index: level % 5 === 0 });
    }
  }

  let route: ContourMap['route'] = null;
  if (withRoute) {
    const points: [number, number][] = [];
    for (let i = 0; i <= 8; i += 1) {
      points.push([width * (0.04 + i * 0.115), height * (0.85 - i * 0.07 + (r() - 0.5) * 0.12)]);
    }
    route = {
      d: `M${points.map(point).join(' L')}`,
      start: [round(points[0][0]), round(points[0][1])],
      end: [round(points[8][0]), round(points[8][1])],
    };
  }

  const lake = {
    cx: round(width * (0.1 + r() * 0.2)),
    cy: round(height * (0.15 + r() * 0.15)),
    rx: round(width * 0.07),
    ry: round(height * 0.05),
  };

  return { width, height, lake, lines, route };
}
