import { darken } from './darken';

const HEX = '#12B886';
const RGB = 'rgb(245, 159, 0)';
const RGBA = 'rgba(214, 51, 108, 0.6)';

describe('@mantine/core/darken', () => {
  it('correctly lightens a color by 10%', () => {
    expect(darken(HEX, 0.1)).toBe('rgba(16, 166, 121, 1)');
    expect(darken(RGB, 0.1)).toBe('rgba(221, 143, 0, 1)');
    expect(darken(RGBA, 0.1)).toBe('rgba(193, 46, 97, 0.6)');
  });

  it('correctly lightens a color by 50%', () => {
    expect(darken(HEX, 0.5)).toBe('rgba(9, 92, 67, 1)');
    expect(darken(RGB, 0.5)).toBe('rgba(123, 80, 0, 1)');
    expect(darken(RGBA, 0.5)).toBe('rgba(107, 26, 54, 0.6)');
  });

  it('returns black whenever 1 is passed as alpha', () => {
    expect(darken(HEX, 1)).toBe('rgba(0, 0, 0, 1)');
    expect(darken(RGB, 1)).toBe('rgba(0, 0, 0, 1)');
    expect(darken(RGBA, 1)).toBe('rgba(0, 0, 0, 0.6)');
  });

  it('supports css variables', () => {
    expect(darken('var(--color-primary)', 0.1)).toBe(
      'color-mix(in srgb, var(--color-primary), black 10%)'
    );
  });
});
