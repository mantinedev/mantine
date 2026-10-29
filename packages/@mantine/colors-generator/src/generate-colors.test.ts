import { formatHex, inGamut, oklch } from 'culori';
import {
  DEFAULT_GENERATE_COLORS_OPTIONS,
  generateColorFormats,
  generateColors,
  generateColorsMap,
} from './generate-colors';

const srgb = inGamut('rgb');

function lightness(colors: readonly string[]) {
  return colors.map((color) => oklch(color)!.l);
}

function chroma(colors: readonly string[]) {
  return colors.map((color) => oklch(color)!.c ?? 0);
}

function expectDecreasing(values: number[]) {
  for (let i = 1; i < values.length; i += 1) {
    expect(values[i]).toBeLessThan(values[i - 1]);
  }
}

describe('@mantine/colors-generator/generate-colors', () => {
  it('generateColors returns a 10-item tuple of oklch strings', () => {
    const colors = generateColors('#1971c2');
    expect(colors).toHaveLength(10);
    colors.forEach((color) => expect(color).toMatch(/^oklch\(/));
  });

  it('produces in-gamut shades with monotonic lightness', () => {
    const { colors } = generateColorsMap('#1971c2');
    colors.forEach((color) => expect(srgb(oklch(color)!)).toBe(true));
    expectDecreasing(lightness(colors));
  });

  it('preserves the input color at the base shade', () => {
    const { colors, baseColorIndex } = generateColorsMap('#1971c2');
    expect(formatHex(oklch(colors[baseColorIndex])!)).toBe('#1971c2');
    expect(generateColorFormats('#1971c2').formats.hex[baseColorIndex]).toBe('#1971c2');
  });

  it('uses the default lightness ends', () => {
    const l = lightness(generateColors('#1971c2'));
    expect(l[0]).toBeCloseTo(DEFAULT_GENERATE_COLORS_OPTIONS.lightest, 4);
    expect(l[9]).toBeCloseTo(DEFAULT_GENERATE_COLORS_OPTIONS.darkest, 4);
  });

  it('keeps every shade in sRGB gamut for seeds with a channel at 0 or 1', () => {
    generateColors('#f59f00').forEach((color) => expect(srgb(oklch(color)!)).toBe(true));
    generateColors('#00ff00', { darkestChroma: 1.5 }).forEach((color) =>
      expect(srgb(oklch(color)!)).toBe(true)
    );
  });

  it('near-gray input yields a neutral ramp', () => {
    chroma(generateColors('#6b6b6b')).forEach((value) => expect(value).toBeLessThan(0.02));
  });

  it('throws for an invalid color input', () => {
    expect(() => generateColors('not-a-color')).toThrow('Invalid color: not-a-color');
  });

  it('places bright hues on lighter shades than cool hues in auto mode', () => {
    const yellow = generateColorsMap('oklch(0.82 0.17 80)');
    const blue = generateColorsMap('#1971c2');
    expect(yellow.baseColorIndex).toBe(6);
    expect(blue.baseColorIndex).toBe(6);
    expect(lightness(yellow.colors)[7]).toBeGreaterThan(lightness(blue.colors)[7]);
  });

  it('respects baseShade option', () => {
    const { colors, baseColorIndex } = generateColorsMap('#1971c2', { baseShade: 8 });
    expect(baseColorIndex).toBe(8);
    expect(formatHex(oklch(colors[8])!)).toBe('#1971c2');
    expectDecreasing(lightness(colors));
  });

  it('supports base shade at the ends of the scale', () => {
    const first = generateColorsMap('#e7f5ff', { baseShade: 0 });
    expect(first.baseColorIndex).toBe(0);
    expect(formatHex(oklch(first.colors[0])!)).toBe('#e7f5ff');
    expectDecreasing(lightness(first.colors));

    const last = generateColorsMap('#1b2a4a', { baseShade: 9 });
    expect(last.baseColorIndex).toBe(9);
    expect(formatHex(oklch(last.colors[9])!)).toBe('#1b2a4a');
    expectDecreasing(lightness(last.colors));
  });

  it('keeps lightness monotonic when the input is lighter than lightest', () => {
    const { colors } = generateColorsMap('#f8f9fa', { baseShade: 4, lightest: 0.9 });
    expectDecreasing(lightness(colors));
    colors.forEach((color) => expect(srgb(oklch(color)!)).toBe(true));
  });

  it('applies lightest and darkest options', () => {
    const l = lightness(generateColors('#1971c2', { lightest: 0.99, darkest: 0.2 }));
    expect(l[0]).toBeCloseTo(0.99, 4);
    expect(l[9]).toBeCloseTo(0.2, 4);
  });

  it('applies chroma options relative to the input color', () => {
    const vivid = chroma(generateColors('#1971c2', { darkestChroma: 1, lightestChroma: 0.5 }));
    const muted = chroma(generateColors('#1971c2', { darkestChroma: 0.2, lightestChroma: 0 }));
    expect(vivid[9]).toBeGreaterThan(muted[9]);
    expect(vivid[1]).toBeGreaterThan(muted[1]);
    expect(muted[0]).toBe(0);
  });

  it('rotates hue across the scale with hueShift', () => {
    const { colors, baseColorIndex } = generateColorsMap('#1971c2', { hueShift: 30 });
    const hues = colors.map((color) => oklch(color)!.h!);
    const base = hues[baseColorIndex];
    expect(hues[9] - base).toBeCloseTo((30 * (9 - baseColorIndex)) / 9, 1);
    expect(hues[0] - base).toBeCloseTo((-30 * baseColorIndex) / 9, 1);
  });

  it('generateColorFormats returns all formats with a numeric baseColorIndex', () => {
    const result = generateColorFormats('#1971c2');

    expect(typeof result.baseColorIndex).toBe('number');
    expect(result.colors).toHaveLength(10);
    expect(result.formats.oklch).toHaveLength(10);
    expect(result.formats.hex).toHaveLength(10);
    expect(result.formats.rgb).toHaveLength(10);
    expect(result.formats.hsl).toHaveLength(10);

    result.formats.hex.forEach((color) => expect(color).toMatch(/^#[0-9a-f]{6}$/i));
    result.formats.rgb.forEach((color) => expect(color).toMatch(/^rgb\(/));
    result.formats.hsl.forEach((color) => expect(color).toMatch(/^hsl\(/));
  });
});
