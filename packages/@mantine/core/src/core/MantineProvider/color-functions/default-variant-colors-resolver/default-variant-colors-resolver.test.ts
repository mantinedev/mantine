import { DEFAULT_THEME } from '../../default-theme';
import { defaultVariantColorsResolver } from './default-variant-colors-resolver';

describe('@mantine/core/default-variant-colors-resolver', () => {
  it('uses subtle-color for subtle and transparent variants', () => {
    ['subtle', 'transparent'].forEach((variant) => {
      expect(
        defaultVariantColorsResolver({ color: 'blue', theme: DEFAULT_THEME, variant }).color
      ).toBe('var(--mantine-color-blue-subtle-color)');
    });
  });

  it('keeps light-color for light variant', () => {
    expect(
      defaultVariantColorsResolver({ color: 'blue', theme: DEFAULT_THEME, variant: 'light' }).color
    ).toBe('var(--mantine-color-blue-light-color)');
  });
});
