import { V9_DEFAULT_COLORS } from '../default-colors.v9';
import { DEFAULT_THEME } from '../default-theme';
import { v9Theme } from '../v9-theme';
import { defaultCssVariablesResolver } from './default-css-variables-resolver';
import { v9CssVariablesResolver } from './v9-css-variables-resolver';

describe('v9CssVariablesResolver', () => {
  it('preserves the v9 dark light behavior (darken, not color-mix)', () => {
    const result = v9CssVariablesResolver({ ...DEFAULT_THEME, colors: V9_DEFAULT_COLORS });
    const blueLight = result.dark['--mantine-color-blue-light'];
    expect(blueLight).toMatch(/^rgba?\(/);
    expect(blueLight).not.toMatch(/color-mix/);
    expect(blueLight).not.toBe('rgba(0, 0, 0, 1)');
  });

  it('dark light-color points to shade 0 (v9 behavior)', () => {
    const result = v9CssVariablesResolver(DEFAULT_THEME);
    expect(result.dark['--mantine-color-blue-light-color']).toBe('var(--mantine-color-blue-0)');
  });

  it('subtle-color matches light-color in both color schemes (v9 behavior)', () => {
    const result = v9CssVariablesResolver(DEFAULT_THEME);
    expect(result.light['--mantine-color-blue-subtle-color']).toBe('var(--mantine-color-blue-9)');
    expect(result.dark['--mantine-color-blue-subtle-color']).toBe('var(--mantine-color-blue-0)');
  });

  it('v9 and v10 resolvers differ only in the light vars and the dark error/success colors', () => {
    const v9 = v9CssVariablesResolver(DEFAULT_THEME);
    const v10 = defaultCssVariablesResolver(DEFAULT_THEME);

    const expectedSuffixes = ['-light', '-light-hover', '-light-color', '-subtle-color'];

    const v9Dark = v9.dark as Record<string, string>;
    const v10Dark = v10.dark as Record<string, string>;
    const allDarkKeys = new Set([...Object.keys(v9Dark), ...Object.keys(v10Dark)]);
    const darkDiffKeys = [...allDarkKeys].filter((k) => v9Dark[k] !== v10Dark[k]);
    const expectedDarkKeys = [
      '--mantine-color-error',
      '--mantine-color-success',
      '--mantine-color-surface-page',
      '--mantine-color-surface-panel',
      '--mantine-color-surface-muted',
      '--mantine-color-border-subtle',
      '--mantine-color-hover-strong',
      '--mantine-color-active',
      '--mantine-color-selected',
      '--mantine-color-neutral-0',
      '--mantine-color-neutral-1',
      '--mantine-color-neutral-2',
      '--mantine-color-neutral-3',
    ];
    darkDiffKeys.forEach((k) => {
      expect(
        expectedDarkKeys.includes(k) || expectedSuffixes.some((suffix) => k.endsWith(suffix))
      ).toBe(true);
    });
    expect(v9Dark['--mantine-color-error']).toBe('var(--mantine-color-red-8)');
    expect(v10Dark['--mantine-color-error']).toBe('var(--mantine-color-red-5)');
    expect(v9Dark['--mantine-color-success']).toBe('var(--mantine-color-teal-8)');
    expect(v10Dark['--mantine-color-success']).toBe('var(--mantine-color-teal-5)');

    const v9Light = v9.light as Record<string, string>;
    const v10Light = v10.light as Record<string, string>;
    const allLightKeys = new Set([...Object.keys(v9Light), ...Object.keys(v10Light)]);
    const lightDiffKeys = [...allLightKeys].filter((k) => v9Light[k] !== v10Light[k]);
    lightDiffKeys.forEach((k) => {
      expect(expectedSuffixes.some((suffix) => k.endsWith(suffix))).toBe(true);
    });

    expect(v9.variables).toEqual(v10.variables);
  });
});

describe('V9_DEFAULT_COLORS', () => {
  it('blue[6] is the v9 open-color hex #228be6', () => {
    expect(V9_DEFAULT_COLORS.blue[6]).toBe('#228be6');
  });

  it('preserves v9 hex colors (not oklch)', () => {
    expect(V9_DEFAULT_COLORS.blue[0]).toBe('#e7f5ff');
  });
});

describe('v9Theme', () => {
  it('has autoContrast === false', () => {
    expect(v9Theme.autoContrast).toBe(false);
  });

  it('restores the v9 dark primary shade ({ light: 6, dark: 8 })', () => {
    expect(v9Theme.primaryShade).toEqual({ light: 6, dark: 8 });
  });

  it('colors match V9_DEFAULT_COLORS', () => {
    expect(v9Theme.colors).toEqual(V9_DEFAULT_COLORS);
  });
});
