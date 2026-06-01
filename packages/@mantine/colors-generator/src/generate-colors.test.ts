import { generateColorFormats, generateColors } from './generate-colors';

describe('@mantine/colors-generator/generate-colors', () => {
  it('generateColors returns a 10-item tuple of oklch strings', () => {
    const colors = generateColors('#1971c2');
    expect(colors).toHaveLength(10);
    colors.forEach((color) => expect(color).toMatch(/^oklch\(/));
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
