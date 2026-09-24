import { darkColors, darkColdColors, darkTintedColors, darkWarmColors } from './dark-colors';
import { V10_DEFAULT_COLORS } from './default-colors.v10';

const OKLCH_RE = /^oklch\(/;
const COLOR_NAMES = [
  'dark',
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
] as const;

describe('@mantine/core/V10_DEFAULT_COLORS', () => {
  it('contains exactly 14 color keys', () => {
    expect(Object.keys(V10_DEFAULT_COLORS)).toHaveLength(14);
  });

  it.each(COLOR_NAMES)('%s has exactly 10 shades', (name) => {
    expect(V10_DEFAULT_COLORS[name]).toHaveLength(10);
  });

  it.each(COLOR_NAMES)('every shade of %s matches oklch() format', (name) => {
    for (const shade of V10_DEFAULT_COLORS[name]) {
      expect(shade).toMatch(OKLCH_RE);
    }
  });

  it('yellow[6] is near oklch(0.820 0.170… 80)', () => {
    const shade = V10_DEFAULT_COLORS.yellow[6];
    expect(shade).toMatch(OKLCH_RE);
    const match = shade.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/);
    expect(match).not.toBeNull();
    expect(Number(match![1])).toBeCloseTo(0.82, 2);
    expect(Number(match![3])).toBeCloseTo(80, 0);
  });

  it('teal shades all have hue ~168', () => {
    for (const shade of V10_DEFAULT_COLORS.teal) {
      const match = shade.match(/oklch\([\d.]+\s+[\d.]+\s+([\d.]+)\)/);
      expect(match).not.toBeNull();
      expect(Number(match![1])).toBeCloseTo(168, 0);
    }
  });

  it('dark[8] is near-black (lightness ≤ 0.18)', () => {
    const shade = V10_DEFAULT_COLORS.dark[8];
    const match = shade.match(/oklch\(([\d.]+)/);
    expect(match).not.toBeNull();
    expect(Number(match![1])).toBeLessThanOrEqual(0.18);
  });

  it('dark uses darkColors', () => {
    expect(V10_DEFAULT_COLORS.dark).toBe(darkColors);
  });
});

describe('@mantine/core/dark-colors', () => {
  it('darkColors has 10 oklch entries', () => {
    expect(darkColors).toHaveLength(10);
    for (const shade of darkColors) {
      expect(shade).toMatch(OKLCH_RE);
    }
  });

  it('darkColdColors has 10 oklch entries', () => {
    expect(darkColdColors).toHaveLength(10);
    for (const shade of darkColdColors) {
      expect(shade).toMatch(OKLCH_RE);
    }
  });

  it('darkWarmColors has 10 oklch entries', () => {
    expect(darkWarmColors).toHaveLength(10);
    for (const shade of darkWarmColors) {
      expect(shade).toMatch(OKLCH_RE);
    }
  });

  it('darkTintedColors has 10 oklch entries', () => {
    expect(darkTintedColors).toHaveLength(10);
    for (const shade of darkTintedColors) {
      expect(shade).toMatch(OKLCH_RE);
    }
  });

  it('darkColors is neutral (chroma 0)', () => {
    for (const shade of darkColors) {
      expect(shade).toMatch(/oklch\([\d.]+ 0 /);
    }
  });

  it('darkColdColors and darkWarmColors differ', () => {
    expect(darkColdColors).not.toEqual(darkWarmColors);
  });

  it('darkColdColors has hue 255', () => {
    for (const shade of darkColdColors) {
      const match = shade.match(/oklch\([\d.]+\s+[\d.]+\s+([\d.]+)\)/);
      expect(match).not.toBeNull();
      expect(Number(match![1])).toBeCloseTo(255, 0);
    }
  });

  it('darkWarmColors has hue 65', () => {
    for (const shade of darkWarmColors) {
      const match = shade.match(/oklch\([\d.]+\s+[\d.]+\s+([\d.]+)\)/);
      expect(match).not.toBeNull();
      expect(Number(match![1])).toBeCloseTo(65, 0);
    }
  });

  it('darkTintedColors has higher chroma than darkColdColors', () => {
    const tintedC = Number(darkTintedColors[0].match(/oklch\([\d.]+\s+([\d.]+)/)![1]);
    const coldC = Number(darkColdColors[0].match(/oklch\([\d.]+\s+([\d.]+)/)![1]);
    expect(tintedC).toBeGreaterThan(coldC);
  });

  it('darkColors follows DARK_LIGHTNESS_RAMP', () => {
    const ramp = [0.83, 0.74, 0.65, 0.5, 0.34, 0.27, 0.24, 0.2, 0.18, 0.16];
    for (const [i, expected] of ramp.entries()) {
      const match = darkColors[i].match(/oklch\(([\d.]+)/);
      expect(match).not.toBeNull();
      expect(Number(match![1])).toBeCloseTo(expected, 4);
    }
  });
});
