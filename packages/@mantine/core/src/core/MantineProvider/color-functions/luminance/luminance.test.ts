import { isLightColor, luminance } from './luminance';

describe('@mantine/core/luminance', () => {
  it('correctly calculates luminosity', () => {
    expect(luminance('#fff').toFixed(2)).toBe('1.00');
    expect(luminance('#000').toFixed(2)).toBe('0.00');
    expect(luminance('#f00').toFixed(2)).toBe('0.21');
    expect(luminance('#0f0').toFixed(2)).toBe('0.72');
    expect(luminance('#00f').toFixed(2)).toBe('0.07');
    expect(luminance('#ff0').toFixed(2)).toBe('0.93');
    expect(luminance('#0ff').toFixed(2)).toBe('0.79');
    expect(luminance('#f0f').toFixed(2)).toBe('0.28');
    expect(luminance('#fff000').toFixed(2)).toBe('0.84');
    expect(luminance('#fff000ff').toFixed(2)).toBe('0.84');
    expect(luminance('#fff00000').toFixed(2)).toBe('0.84');
    expect(luminance('rgb(255, 255, 0)').toFixed(2)).toBe('0.93');
    expect(luminance('rgba(255, 255, 0, 0.5)').toFixed(2)).toBe('0.93');
    expect(luminance('hsl(60, 100%, 50%)').toFixed(2)).toBe('0.93');
    expect(luminance('hsla(60, 100%, 50%, 0.5)').toFixed(2)).toBe('0.93');
  });

  it('calculates WCAG relative luminance for white/black in oklch', () => {
    expect(luminance('oklch(1 0 0)').toFixed(2)).toBe('1.00');
    expect(luminance('oklch(0 0 0)').toFixed(2)).toBe('0.00');
  });

  it('returns a non-zero, sensible luminance for the decimal oklch syntax (guards the decimal bug)', () => {
    const value = luminance('oklch(0.55 0.15 130)');
    expect(value).toBeGreaterThan(0);
    // equivalent sRGB color (#538200) computed via the rgb path is ~0.178
    expect(value).toBeCloseTo(0.178, 2);
  });

  it('matches the rgb-path luminance of the equivalent sRGB color (fixtures derived via culori)', () => {
    // Fixtures: hex -> oklch(...) string and luminance(hex) via the existing rgb path.
    // Derived with culori (oklch decimal form rounded to 4 dp), not imported here to keep core culori-free.
    expect(luminance('oklch(0.5426 0.1485 251.6658)')).toBeCloseTo(0.1591, 2); // #1971c2
    expect(luminance('oklch(0.7702 0.1658 71.0221)')).toBeCloseTo(0.4421, 2); // #f59f00
    expect(luminance('oklch(0.6396 0.1968 3.1869)')).toBeCloseTo(0.2315, 2); // #e64980
  });

  it('distinguishes light vs dark oklch colors for autoContrast', () => {
    const lightYellow = luminance('oklch(0.98 0.02 100)');
    const darkBlue = luminance('oklch(0.30 0.10 260)');
    expect(lightYellow).toBeGreaterThan(0.6);
    expect(darkBlue).toBeLessThan(0.25);
    expect(isLightColor('oklch(0.98 0.02 100)')).toBe(true);
    expect(isLightColor('oklch(0.30 0.10 260)')).toBe(false);
  });

  it('handles oklch alpha and percent lightness', () => {
    expect(luminance('oklch(1 0 0 / 0.5)').toFixed(2)).toBe('1.00');
    expect(luminance('oklch(100% 0 0)').toFixed(2)).toBe('1.00');
  });
});

describe('@mantine/core/is-light-color', () => {
  it('correctly detects light colors', () => {
    expect(isLightColor('#fff')).toBe(true);
    expect(isLightColor('#000')).toBe(false);
    expect(isLightColor('var(--mantine-color-blue-3)')).toBe(false);
  });
});
