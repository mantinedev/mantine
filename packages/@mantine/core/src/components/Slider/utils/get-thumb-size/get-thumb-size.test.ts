import { getThumbSize } from './get-thumb-size';

describe('@mantine/core/Slider/get-thumb-size', () => {
  it('returns thumbSize converted to rem when it is set', () => {
    expect(getThumbSize('md', 30)).toBe('calc(1.875rem * var(--mantine-scale))');
    expect(getThumbSize('xl', '2rem')).toBe('2rem');
  });

  it('returns per-size css variable for named sizes', () => {
    expect(getThumbSize('xs', undefined)).toBe('var(--slider-thumb-size-xs)');
    expect(getThumbSize('xl', undefined)).toBe('var(--slider-thumb-size-xl)');
  });

  it('derives thumb size from track size for custom sizes', () => {
    expect(getThumbSize(20, undefined)).toBe(
      'calc(var(--slider-size) + calc(0.625rem * var(--mantine-scale)))'
    );
    expect(getThumbSize('2rem', undefined)).toBe(
      'calc(var(--slider-size) + calc(0.625rem * var(--mantine-scale)))'
    );
    expect(getThumbSize(undefined, undefined)).toBe(
      'calc(var(--slider-size) + calc(0.625rem * var(--mantine-scale)))'
    );
  });
});
