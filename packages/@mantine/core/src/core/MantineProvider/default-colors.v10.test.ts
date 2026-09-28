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

const PALETTES: [string, readonly string[]][] = [
  ...COLOR_NAMES.map((name): [string, readonly string[]] => [name, V10_DEFAULT_COLORS[name]]),
  ['darkColdColors', darkColdColors],
  ['darkWarmColors', darkWarmColors],
  ['darkTintedColors', darkTintedColors],
];

describe('@mantine/core/V10_DEFAULT_COLORS', () => {
  it.each(PALETTES)('every shade of %s matches oklch() format', (_, shades) => {
    for (const shade of shades) {
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
});

describe('@mantine/core/dark-colors', () => {
  it('darkColors is neutral (chroma 0)', () => {
    for (const shade of darkColors) {
      expect(shade).toMatch(/oklch\([\d.]+ 0 /);
    }
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
