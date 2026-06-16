import { colorsTuple } from '../colors-tuple/colors-tuple';
import { DEFAULT_THEME } from '../../default-theme';
import { defaultCssVariablesResolver } from '../../MantineCssVariables/default-css-variables-resolver';
import { virtualColor } from '../../MantineCssVariables/virtual-color/virtual-color';
import { mergeMantineTheme } from '../../merge-mantine-theme/merge-mantine-theme';
import { defaultVariantColorsResolver } from '../default-variant-colors-resolver/default-variant-colors-resolver';

const theme = mergeMantineTheme(DEFAULT_THEME, {
  autoContrast: true,
  primaryColor: 'primary',
  colors: {
    white: colorsTuple('#FFFFFF'),
    black: colorsTuple('#000000'),
    primary: virtualColor({ name: 'primary', dark: 'white', light: 'black' }),
  },
});

describe('@mantine/core/get-contrast-color (virtual colors)', () => {
  it('generates per-scheme contrast variable for virtual colors', () => {
    const variables = defaultCssVariablesResolver(theme);
    // light scheme: primary resolves to black background -> white text
    expect(variables.light['--mantine-color-primary-contrast']).toBe('var(--mantine-color-white)');
    // dark scheme: primary resolves to white background -> black text
    expect(variables.dark['--mantine-color-primary-contrast']).toBe('var(--mantine-color-black)');
  });

  it('fixes --mantine-primary-color-contrast for virtual primary colors', () => {
    const variables = defaultCssVariablesResolver(theme);
    expect(variables.light['--mantine-primary-color-contrast']).toBe('var(--mantine-color-white)');
    expect(variables.dark['--mantine-primary-color-contrast']).toBe('var(--mantine-color-black)');
  });

  it('filled variant references the contrast variable for virtual colors when autoContrast is set', () => {
    const colors = defaultVariantColorsResolver({
      color: 'primary',
      theme,
      variant: 'filled',
      autoContrast: true,
    });

    expect(colors.color).toBe('var(--mantine-color-primary-contrast)');
  });

  it('does not use the contrast variable for explicit virtual shades', () => {
    const colors = defaultVariantColorsResolver({
      color: 'primary.9',
      theme,
      variant: 'filled',
      autoContrast: true,
    });

    expect(colors.color).toBe('var(--mantine-color-white)');
  });

  it('does not use the contrast variable when autoContrast is disabled', () => {
    const colors = defaultVariantColorsResolver({
      color: 'primary',
      theme,
      variant: 'filled',
      autoContrast: false,
    });

    expect(colors.color).toBe('var(--mantine-color-white)');
  });
});
