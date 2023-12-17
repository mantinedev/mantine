import { lighten } from './lighten';

const HEX = '#228BE6';
const RGB = 'rgb(46, 149, 11)';
const RGBA = 'rgba(219, 91, 17, 0.6)';

describe('@mantine/core/lighten', () => {
  it('correctly lightens a color by 10%', () => {
    expect(lighten(HEX, 0.1)).toBe('rgba(56, 151, 233, 1)');
    expect(lighten(RGB, 0.1)).toBe('rgba(67, 160, 35, 1)');
    expect(lighten(RGBA, 0.1)).toBe('rgba(223, 107, 41, 0.6)');
  });

  it('correctly lightens a color by 50%', () => {
    expect(lighten(HEX, 0.5)).toBe('rgba(145, 197, 243, 1)');
    expect(lighten(RGB, 0.5)).toBe('rgba(151, 202, 133, 1)');
    expect(lighten(RGBA, 0.5)).toBe('rgba(237, 173, 136, 0.6)');
  });

  it('returns white whenever 1 is passed as alpha', () => {
    expect(lighten(HEX, 1)).toBe('rgba(255, 255, 255, 1)');
    expect(lighten(RGB, 1)).toBe('rgba(255, 255, 255, 1)');
    expect(lighten(RGBA, 1)).toBe('rgba(255, 255, 255, 0.6)');
  });

  it('supports css variables', () => {
    expect(lighten('var(--color-primary)', 0.1)).toBe(
      'color-mix(in srgb, var(--color-primary), white 10%)'
    );
  });
});
