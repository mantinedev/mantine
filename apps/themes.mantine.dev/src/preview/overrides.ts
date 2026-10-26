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
import { getFontStack, type GoogleFont } from './fonts';
import type { ThemeOverrides } from './params';

export interface PrimaryShade {
  light: MantineColorShade;
  dark: MantineColorShade;
}

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

function toShade(value: number | null, fallback: MantineColorShade) {
  return value === null ? fallback : (Math.min(9, Math.max(0, value)) as MantineColorShade);
}

function scaleValues<T extends Record<string, string>>(values: T, percent: number) {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, `calc(${value} * ${percent / 100})`])
  ) as T;
}

export function applyThemeOverrides(
  themeOverride: MantineThemeOverride,
  overrides: ThemeOverrides,
  fonts: Map<string, GoogleFont>
): MantineThemeOverride {
  const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
  const patch: MantineThemeOverride = {};

  if (overrides.primaryColor && overrides.primaryColor in theme.colors) {
    patch.primaryColor = overrides.primaryColor;
  }

  if (overrides.primaryShadeLight !== null || overrides.primaryShadeDark !== null) {
    const primaryShade = normalizePrimaryShade(theme);
    patch.primaryShade = {
      light: toShade(overrides.primaryShadeLight, primaryShade.light),
      dark: toShade(overrides.primaryShadeDark, primaryShade.dark),
    };
  }

  if (overrides.radius !== 100) {
    patch.radius = scaleValues(theme.radius, overrides.radius);
  }

  if (overrides.spacing !== 100) {
    patch.spacing = scaleValues(theme.spacing, overrides.spacing);
  }

  if (overrides.fontSize !== 100) {
    patch.fontSizes = scaleValues(theme.fontSizes, overrides.fontSize);
    patch.headings = {
      sizes: Object.fromEntries(
        Object.entries(theme.headings.sizes).map(([key, value]) => [
          key,
          { ...value, fontSize: `calc(${value.fontSize} * ${overrides.fontSize / 100})` },
        ])
      ),
    };
  }

  if (overrides.font) {
    patch.fontFamily = getFontStack(overrides.font, fonts.get(overrides.font));
  }

  if (overrides.headingsFont) {
    patch.headings = {
      ...patch.headings,
      fontFamily: getFontStack(overrides.headingsFont, fonts.get(overrides.headingsFont)),
    };
  }

  return mergeThemeOverrides(themeOverride, patch);
}
