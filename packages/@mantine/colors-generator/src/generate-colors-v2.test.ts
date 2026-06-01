import { inGamut, oklch } from 'culori';
import { generateColorsMapV2 } from './generate-colors-v2';

const srgb = inGamut('rgb');

describe('@mantine/colors-generator/generate-colors-v2', () => {
  it('produces 10 in-gamut shades with monotonic lightness', () => {
    const { colors } = generateColorsMapV2('#1971c2');
    expect(colors).toHaveLength(10);
    colors.forEach((c) => expect(srgb(oklch(c)!)).toBe(true));
    const ls = colors.map((c) => oklch(c)!.l);
    for (let i = 1; i < 10; i += 1) {
      expect(ls[i]).toBeLessThan(ls[i - 1]);
    }
  });

  it('input color is preserved exactly at its natural slot', () => {
    const { colors, baseColorIndex } = generateColorsMapV2('#1971c2');
    const got = oklch(colors[baseColorIndex])!;
    const want = oklch('#1971c2')!;
    expect(got.l).toBeCloseTo(want.l, 4);
    expect(got.c).toBeCloseTo(want.c, 4);
    expect(got.h).toBeCloseTo(want.h!, 2);
  });

  it('keeps every shade in sRGB gamut for seeds with a channel at 0 or 1', () => {
    const { colors } = generateColorsMapV2('#f59f00');
    colors.forEach((c) => expect(srgb(oklch(c)!)).toBe(true));
  });

  it('near-gray input yields a neutral ramp (chroma ~0)', () => {
    const { colors } = generateColorsMapV2('#6b6b6b');
    colors.forEach((c) => expect(oklch(c)!.c ?? 0).toBeLessThan(0.02));
  });

  it('throws for an invalid color input', () => {
    expect(() => generateColorsMapV2('not-a-color')).toThrow('Invalid color: not-a-color');
  });

  it('yellow seed index-6 lightness is higher than blue seed index-6 lightness', () => {
    const yellowResult = generateColorsMapV2('oklch(0.76 0.15 95)');
    const blueResult = generateColorsMapV2('#1971c2');
    const yellowL6 = oklch(yellowResult.colors[6])!.l;
    const blueL6 = oklch(blueResult.colors[6])!.l;
    expect(yellowL6).toBeGreaterThan(blueL6);
  });
});
