import { isLightColor, luminance } from './luminance';

describe('@mantine/core/luminance', () => {
  it('correctly calculates luminosity', () => {
    expect(luminance('#fff')).toBe(1);
    expect(luminance('#000')).toBe(0);
    expect(luminance('#f00')).toBe(0.2126);
    expect(luminance('#0f0')).toBe(0.7152);
    expect(luminance('#00f')).toBe(0.0722);
    expect(luminance('#ff0')).toBe(0.9278);
    expect(luminance('#0ff')).toBe(0.7874);
    expect(luminance('#f0f')).toBe(0.2848);
    expect(luminance('#fff000')).toBe(0.8358017636509798);
    expect(luminance('#fff000ff')).toBe(0.8358017636509798);
    expect(luminance('#fff00000')).toBe(0.8358017636509798);
    expect(luminance('rgb(255, 255, 0)')).toBe(0.9278);
    expect(luminance('rgba(255, 255, 0, 0.5)')).toBe(0.9278);
    expect(luminance('hsl(60, 100%, 50%)')).toBe(0.9278);
    expect(luminance('hsla(60, 100%, 50%, 0.5)')).toBe(0.9278);
    expect(luminance('oklch(100% 100 0 0)')).toBe(1);
    expect(luminance('oklch(0% 100 0 0)')).toBe(0);
    expect(luminance('oklch(55.88% 100 0 0)')).toBe(55.88 / 100);
  });
});

describe('@mantine/core/is-light-color', () => {
  it('correctly detects light colors', () => {
    expect(isLightColor('#fff')).toBe(true);
    expect(isLightColor('#000')).toBe(false);
    expect(isLightColor('var(--mantine-color-blue-3)')).toBe(false);
  });
});
