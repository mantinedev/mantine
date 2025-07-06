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
    expect(luminance('oklch(100% 100 0 0)').toFixed(2)).toBe('1.00');
    expect(luminance('oklch(0% 100 0 0)').toFixed(2)).toBe('0.00');
    expect(luminance('oklch(55.88% 100 0 0)').toFixed(2)).toBe('0.56');
  });
});

describe('@mantine/core/is-light-color', () => {
  it('correctly detects light colors', () => {
    expect(isLightColor('#fff')).toBe(true);
    expect(isLightColor('#000')).toBe(false);
    expect(isLightColor('var(--mantine-color-blue-3)')).toBe(false);
  });
});
