import {
  DEFAULT_THEME,
  isVirtualColor,
  type MantineColorShade,
  type MantineColorsTuple,
  type MantineTheme,
  type MantineThemeOverride,
  mergeMantineTheme,
  mergeThemeOverrides,
} from '@mantine/core';
import { getFontOption } from './fonts';

export interface PrimaryShade {
  light: MantineColorShade;
  dark: MantineColorShade;
}

export interface ThemeOverrides {
  primaryColor: string | null;
  primaryShade: PrimaryShade | null;
  radiusScale: number;
  spacingScale: number;
  fontSizeScale: number;
  scale: number;
  fontFamily: string | null;
  headingsFontFamily: string | null;
}

export const DEFAULT_OVERRIDES: ThemeOverrides = {
  primaryColor: null,
  primaryShade: null,
  radiusScale: 1,
  spacingScale: 1,
  fontSizeScale: 1,
  scale: 1,
  fontFamily: null,
  headingsFontFamily: null,
};

export interface PresetColorSwatch {
  name: string;
  value: string;
  custom: boolean;
}

export interface PresetThemeInfo {
  primaryColor: string;
  primaryShade: PrimaryShade;
  swatches: PresetColorSwatch[];
}

const NEUTRAL_COLORS = ['gray', 'dark'];

function normalizePrimaryShade(theme: MantineTheme): PrimaryShade {
  return typeof theme.primaryShade === 'number'
    ? { light: theme.primaryShade, dark: theme.primaryShade }
    : theme.primaryShade;
}

function resolveTuple(theme: MantineTheme, name: string): MantineColorsTuple {
  const tuple = theme.colors[name];
  if (isVirtualColor(tuple)) {
    const light = (tuple as MantineColorsTuple & { light: string }).light;
    return theme.colors[light] ?? tuple;
  }
  return tuple;
}

export function getPresetThemeInfo(themeOverride: MantineThemeOverride): PresetThemeInfo {
  const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
  const primaryShade = normalizePrimaryShade(theme);

  const swatches = Object.keys(theme.colors)
    .filter((name) => !NEUTRAL_COLORS.includes(name))
    .map((name) => ({
      name,
      value: resolveTuple(theme, name)[primaryShade.light],
      custom: !(name in DEFAULT_THEME.colors),
    }))
    .sort((a, b) => Number(b.custom) - Number(a.custom));

  return { primaryColor: theme.primaryColor, primaryShade, swatches };
}

function scaleValues<T extends Record<string, string>>(values: T, factor: number) {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, `calc(${value} * ${factor})`])
  ) as T;
}

export function applyThemeOverrides(
  themeOverride: MantineThemeOverride,
  overrides: ThemeOverrides
): MantineThemeOverride {
  const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
  const patch: MantineThemeOverride = {};

  if (overrides.primaryColor && overrides.primaryColor in theme.colors) {
    patch.primaryColor = overrides.primaryColor;
  }

  if (overrides.primaryShade) {
    patch.primaryShade = overrides.primaryShade;
  }

  if (overrides.radiusScale !== 1) {
    patch.radius = scaleValues(theme.radius, overrides.radiusScale);
  }

  if (overrides.spacingScale !== 1) {
    patch.spacing = scaleValues(theme.spacing, overrides.spacingScale);
  }

  if (overrides.fontSizeScale !== 1) {
    patch.fontSizes = scaleValues(theme.fontSizes, overrides.fontSizeScale);
    patch.headings = {
      sizes: Object.fromEntries(
        Object.entries(theme.headings.sizes).map(([key, value]) => [
          key,
          { ...value, fontSize: `calc(${value.fontSize} * ${overrides.fontSizeScale})` },
        ])
      ),
    };
  }

  if (overrides.scale !== 1) {
    patch.scale = overrides.scale;
  }

  const fontFamily = getFontOption(overrides.fontFamily);
  if (fontFamily) {
    patch.fontFamily = fontFamily.stack;
  }

  const headingsFontFamily = getFontOption(overrides.headingsFontFamily);
  if (headingsFontFamily) {
    patch.headings = { ...patch.headings, fontFamily: headingsFontFamily.stack };
  }

  return mergeThemeOverrides(themeOverride, patch);
}
