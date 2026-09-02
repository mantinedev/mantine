import { DEFAULT_THEME } from '../../default-theme';
import { mergeMantineTheme } from '../../merge-mantine-theme/merge-mantine-theme';
import { getContrastColor } from './get-contrast-color';

describe('@mantine/core/get-contrast-color', () => {
  it('returns correct contrast color', () => {
    expect(getContrastColor({ color: 'blue', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--mantine-color-white)'
    );
    expect(getContrastColor({ color: 'red', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--mantine-color-white)'
    );
    expect(getContrastColor({ color: 'yellow.4', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--mantine-color-black)'
    );
    expect(getContrastColor({ color: 'blue.1', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--mantine-color-black)'
    );
    expect(getContrastColor({ color: 'lime.5', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--mantine-color-black)'
    );
  });

  it('always returns white when autoContrast is false', () => {
    expect(getContrastColor({ color: 'blue', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--mantine-color-white)'
    );
    expect(getContrastColor({ color: 'red', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--mantine-color-white)'
    );
    expect(getContrastColor({ color: 'yellow.4', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--mantine-color-white)'
    );
    expect(getContrastColor({ color: 'blue.1', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--mantine-color-white)'
    );
    expect(getContrastColor({ color: 'lime.5', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--mantine-color-white)'
    );
  });
});

describe('Phase 4 – autoContrast pipeline handles oklch colors (luminance Phase 0)', () => {
  const lightOklch = 'oklch(0.92 0.05 130)';
  const darkOklch = 'oklch(0.22 0.12 260)';

  const themeWithOklch = mergeMantineTheme(DEFAULT_THEME, {
    colors: {
      lightOklchColor: [
        lightOklch,
        lightOklch,
        lightOklch,
        lightOklch,
        lightOklch,
        lightOklch,
        lightOklch,
        lightOklch,
        lightOklch,
        lightOklch,
      ] as any,
      darkOklchColor: [
        darkOklch,
        darkOklch,
        darkOklch,
        darkOklch,
        darkOklch,
        darkOklch,
        darkOklch,
        darkOklch,
        darkOklch,
        darkOklch,
      ] as any,
    },
  });

  it('returns black for a light oklch background when autoContrast is true', () => {
    expect(
      getContrastColor({ color: 'lightOklchColor.6', theme: themeWithOklch, autoContrast: true })
    ).toBe('var(--mantine-color-black)');
  });

  it('returns white for a dark oklch background when autoContrast is true', () => {
    expect(
      getContrastColor({ color: 'darkOklchColor.6', theme: themeWithOklch, autoContrast: true })
    ).toBe('var(--mantine-color-white)');
  });

  it('always returns white for oklch colors when autoContrast is false', () => {
    expect(
      getContrastColor({ color: 'lightOklchColor.6', theme: themeWithOklch, autoContrast: false })
    ).toBe('var(--mantine-color-white)');
    expect(
      getContrastColor({ color: 'darkOklchColor.6', theme: themeWithOklch, autoContrast: false })
    ).toBe('var(--mantine-color-white)');
  });
});
