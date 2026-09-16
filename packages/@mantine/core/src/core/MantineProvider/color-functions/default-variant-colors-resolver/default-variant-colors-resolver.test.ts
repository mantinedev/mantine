import { DEFAULT_THEME } from '../../default-theme';
import { defaultVariantColorsResolver } from './default-variant-colors-resolver';

describe('defaultVariantColorsResolver', () => {
  it('resolves subtle variant color using -text css variable', () => {
    const result = defaultVariantColorsResolver({
      color: 'orange',
      theme: DEFAULT_THEME,
      variant: 'subtle',
    });
    expect(result.color).toBe('var(--mantine-color-orange-text)');
  });

  it('resolves transparent variant color using -text css variable', () => {
    const result = defaultVariantColorsResolver({
      color: 'orange',
      theme: DEFAULT_THEME,
      variant: 'transparent',
    });
    expect(result.color).toBe('var(--mantine-color-orange-text)');
  });
});
