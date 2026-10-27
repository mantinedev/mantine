import {
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  DEFAULT_THEME,
  isVirtualColor,
  type MantineColorShade,
  type MantineColorsTuple,
  type MantineTheme,
  type MantineThemeOverride,
  type MantineThemeSurfaceValues,
  mergeMantineTheme,
  mergeThemeOverrides,
  rem,
} from '@mantine/core';
import { generateNeutralPalette, generatePalette, toHexColor } from './colors';
import { getFontStack, type GoogleFont, SYSTEM_FONT } from './fonts';
import {
  type CURSOR_TYPES,
  type FOCUS_RINGS,
  type HEADING_WRAPS,
  SHADOW_PRESETS,
  type ThemeOverrides,
} from './params';
import { type PresetScales, SCALE_GROUPS, type ScaleGroup, type ScaleValue } from './scales';

export interface PrimaryShade {
  light: MantineColorShade;
  dark: MantineColorShade;
}

export interface PresetColorSwatch {
  name: string;
  value: string;
  shades: string[];
  custom: boolean;
}

export const SURFACE_KEYS = ['page', 'panel', 'panel2', 'sunken', 'muted', 'input'] as const;

export type SurfaceKey = (typeof SURFACE_KEYS)[number];

export type SchemeSurfaces = Record<SurfaceKey, string>;

export interface PresetSurfaces {
  light: SchemeSurfaces;
  dark: SchemeSurfaces;
}

export interface PresetThemeInfo {
  primaryColor: string;
  primaryShade: PrimaryShade;
  swatches: PresetColorSwatch[];
  gray: string[];
  dark: string[];
  surfaces: { light: SchemeSurfaces; dark: SchemeSurfaces };
  scales: PresetScales;
  white: string;
  black: string;
  fontWeights: { regular: number; medium: number; bold: number };
  headingsWeight: number;
  headingsWrap: (typeof HEADING_WRAPS)[number];
  defaultRadius: string;
  fontSmoothing: boolean;
  focusRing: (typeof FOCUS_RINGS)[number];
  cursorType: (typeof CURSOR_TYPES)[number];
  disabledOpacity: number;
}

const NEUTRAL_COLORS = ['gray', 'dark'];

const SURFACE_VARIABLES: Record<SurfaceKey, string> = {
  page: '--mantine-color-surface-page',
  panel: '--mantine-color-surface-panel',
  panel2: '--mantine-color-surface-panel-2',
  sunken: '--mantine-color-surface-sunken',
  muted: '--mantine-color-surface-muted',
  input: '--mantine-color-surface-input',
};

function createShadows(alpha: number, size: number) {
  const steps = { xs: [1, 3], sm: [2, 6], md: [4, 12], lg: [8, 24], xl: [16, 40] };
  return Object.fromEntries(
    Object.entries(steps).map(([key, [y, blur]]) => [
      key,
      `0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, ${alpha / 2}), 0 ${rem(y * size)} ${rem(blur * size)} rgba(0, 0, 0, ${alpha})`,
    ])
  );
}

const SHADOWS: Record<(typeof SHADOW_PRESETS)[number], MantineTheme['shadows']> = {
  none: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
  subtle: createShadows(0.06, 0.6) as MantineTheme['shadows'],
  mantine: DEFAULT_THEME.shadows,
  strong: createShadows(0.18, 1.4) as MantineTheme['shadows'],
};

function hasKey<T extends object>(object: T, key: string | null): key is Extract<keyof T, string> {
  return key !== null && Object.hasOwn(object, key);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function toWeight(value: number) {
  return String(clamp(Math.round(value / 100) * 100, 100, 900));
}

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

function resolveSurfaces(theme: MantineTheme, resolver: CSSVariablesResolver | undefined) {
  const base = defaultCssVariablesResolver(theme);
  const custom = resolver?.(theme);
  const variables = { ...base.variables, ...custom?.variables };

  const resolveScheme = (scheme: 'light' | 'dark'): SchemeSurfaces => {
    const values: Record<string, string> = {
      ...variables,
      ...base[scheme],
      ...custom?.[scheme],
    };

    const resolve = (value: string, depth = 0): string =>
      depth > 12
        ? value
        : value.replace(/var\((--[a-z0-9-]+)(?:,[^)]*)?\)/gi, (match, name: string) =>
            values[name] !== undefined ? resolve(values[name], depth + 1) : match
          );

    return Object.fromEntries(
      Object.entries(SURFACE_VARIABLES).map(([key, variable]) => [
        key,
        toHexColor(resolve(values[variable] ?? '')),
      ])
    ) as SchemeSurfaces;
  };

  return { light: resolveScheme('light'), dark: resolveScheme('dark') };
}

function getScaleSource(theme: MantineTheme, group: ScaleGroup): Record<string, string> {
  const headings = Object.entries(theme.headings.sizes);
  switch (group) {
    case 'spacing':
      return theme.spacing;
    case 'radius':
      return theme.radius;
    case 'fontSizes':
      return theme.fontSizes;
    case 'lineHeights':
      return theme.lineHeights;
    case 'headingSizes':
      return Object.fromEntries(headings.map(([key, value]) => [key, value.fontSize]));
    case 'headingLineHeights':
      return Object.fromEntries(
        headings.map(([key, value]) => [key, String(value.lineHeight ?? '1.3')])
      );
  }
}
function readScale(
  values: Record<string, string>,
  unit: 'px' | '',
  measure: (value: string) => number
): ScaleValue[] {
  return Object.entries(values)
    .map(([key, value]) => {
      const number = unit === 'px' ? measure(value) : Number.parseFloat(value);
      return { key, value: Number.isFinite(number) ? Math.round(number * 100) / 100 : 0 };
    })
    .sort((a, b) => (unit === 'px' ? a.value - b.value : 0));
}
function toNumber(value: string | number | undefined, fallback: number) {
  const number = typeof value === 'number' ? value : Number.parseFloat(value ?? '');
  return Number.isFinite(number) ? number : fallback;
}
function toCssValue(value: number, unit: 'px' | '') {
  return unit === 'px' ? rem(value) : String(value);
}
function resolveScale(
  source: Record<string, string>,
  group: ScaleGroup,
  overrides: ThemeOverrides
): Record<string, string> | null {
  const config = SCALE_GROUPS[group];
  const values = overrides[`${group}Values`];

  if (values) {
    return Object.fromEntries(
      Object.entries(source).map(([key, value]) =>
        hasKey(values, key)
          ? [key, toCssValue(clamp(values[key], config.min, config.max), config.unit)]
          : [key, value]
      )
    );
  }

  const percent = clamp(overrides[group], config.scaleMin, config.scaleMax);
  if (percent === 100) {
    return null;
  }

  return Object.fromEntries(
    Object.entries(source).map(([key, value]) => [
      key,
      config.unit === 'px'
        ? `calc(${value} * ${percent / 100})`
        : String(Math.round(toNumber(value, 1.5) * percent) / 100),
    ])
  );
}
function getFont(family: string | null, fonts: Map<string, GoogleFont>) {
  if (family === SYSTEM_FONT) {
    return getFontStack(SYSTEM_FONT, undefined);
  }

  const font = family ? fonts.get(family) : undefined;
  return font ? getFontStack(font.family, font) : undefined;
}

export function getPresetThemeInfo(
  themeOverride: MantineThemeOverride,
  measure: (value: string) => number,
  resolver?: CSSVariablesResolver
): PresetThemeInfo {
  const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
  const primaryShade = normalizePrimaryShade(theme);

  const swatches = Object.keys(theme.colors)
    .filter((name) => !NEUTRAL_COLORS.includes(name))
    .map((name) => ({
      name,
      value: resolveTuple(theme, name)[primaryShade.light],
      shades: [...resolveTuple(theme, name)],
      custom: !(name in DEFAULT_THEME.colors),
    }))
    .sort((a, b) => Number(b.custom) - Number(a.custom));

  const scales = Object.fromEntries(
    (Object.keys(SCALE_GROUPS) as ScaleGroup[]).map((group) => [
      group,
      readScale(getScaleSource(theme, group), SCALE_GROUPS[group].unit, measure),
    ])
  ) as PresetScales;

  return {
    primaryColor: theme.primaryColor,
    primaryShade,
    swatches,
    gray: [...theme.colors.gray],
    dark: [...theme.colors.dark],
    surfaces: resolveSurfaces(theme, resolver),
    scales,
    white: toHexColor(theme.white) || theme.white,
    black: toHexColor(theme.black) || theme.black,
    fontWeights: {
      regular: toNumber(theme.fontWeights.regular, 400),
      medium: toNumber(theme.fontWeights.medium, 500),
      bold: toNumber(theme.fontWeights.bold, 700),
    },
    headingsWeight: toNumber(theme.headings.fontWeight, 700),
    headingsWrap: theme.headings.textWrap,
    defaultRadius: typeof theme.defaultRadius === 'string' ? theme.defaultRadius : '',
    fontSmoothing: theme.fontSmoothing,
    focusRing: theme.focusRing,
    cursorType: theme.cursorType,
    disabledOpacity: theme.disabledOpacity,
  };
}

export function getThemeSurfaces(
  themeOverride: MantineThemeOverride,
  resolver?: CSSVariablesResolver
) {
  return resolveSurfaces(mergeMantineTheme(DEFAULT_THEME, themeOverride), resolver);
}

function getSurfaces(values: Record<string, string> | null): MantineThemeSurfaceValues | undefined {
  if (!values) {
    return undefined;
  }

  return Object.fromEntries(
    SURFACE_KEYS.filter((key) => hasKey(values, key)).map((key) => [key, values[key]])
  );
}

export function getOverrideSurfaces(
  overrides: Pick<ThemeOverrides, 'surfacesLight' | 'surfacesDark'>
) {
  return { light: getSurfaces(overrides.surfacesLight), dark: getSurfaces(overrides.surfacesDark) };
}

export function getOverrideShadows(shadows: ThemeOverrides['shadows']) {
  return shadows && SHADOW_PRESETS.includes(shadows) ? SHADOWS[shadows] : null;
}

export function getCustomPalettes(overrides: ThemeOverrides) {
  return (overrides.customColors ?? []).flatMap((color) => {
    const reserved =
      NEUTRAL_COLORS.includes(color.name) || Object.hasOwn(DEFAULT_THEME.colors, color.name);
    const palette = reserved ? null : generatePalette(color.value);
    return palette ? [{ ...color, ...palette }] : [];
  });
}

export function applyThemeOverrides(
  themeOverride: MantineThemeOverride,
  overrides: ThemeOverrides,
  fonts: Map<string, GoogleFont>
): MantineThemeOverride {
  const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
  const patch: MantineThemeOverride = {};
  const headings: Partial<MantineTheme['headings']> = {};
  const colors: Record<string, MantineColorsTuple> = {};

  const customPalettes = getCustomPalettes(overrides);
  customPalettes.forEach((palette) => {
    colors[palette.name] = palette.shades as unknown as MantineColorsTuple;
  });

  const gray = generateNeutralPalette(overrides.grayColor, theme.colors.gray);
  if (gray) {
    colors.gray = gray as unknown as MantineColorsTuple;
  }

  const dark = generateNeutralPalette(overrides.darkColor, theme.colors.dark);
  if (dark) {
    colors.dark = dark as unknown as MantineColorsTuple;
  }

  if (Object.keys(colors).length > 0) {
    patch.colors = colors;
  }

  const customPrimary = customPalettes.find((palette) => palette.name === overrides.primaryColor);
  if (customPrimary || hasKey(theme.colors, overrides.primaryColor)) {
    patch.primaryColor = overrides.primaryColor!;
  }

  if (
    customPrimary ||
    overrides.primaryShadeLight !== null ||
    overrides.primaryShadeDark !== null
  ) {
    const primaryShade = customPrimary
      ? { light: customPrimary.baseColorIndex, dark: customPrimary.baseColorIndex }
      : normalizePrimaryShade(theme);
    patch.primaryShade = {
      light: clamp(overrides.primaryShadeLight ?? primaryShade.light, 0, 9) as MantineColorShade,
      dark: clamp(overrides.primaryShadeDark ?? primaryShade.dark, 0, 9) as MantineColorShade,
    };
  }

  if (overrides.white) {
    patch.white = overrides.white;
  }

  if (overrides.black) {
    patch.black = overrides.black;
  }

  const surfaces = getOverrideSurfaces(overrides);
  if (surfaces.light || surfaces.dark) {
    patch.surfaces = {
      ...(surfaces.light && { light: surfaces.light }),
      ...(surfaces.dark && { dark: surfaces.dark }),
    };
  }

  const fontFamily = getFont(overrides.font, fonts);
  if (fontFamily) {
    patch.fontFamily = fontFamily;
  }

  const monoFont = getFont(overrides.monoFont, fonts);
  if (monoFont) {
    patch.fontFamilyMonospace = monoFont;
  }

  if (overrides.fontSmoothing !== null) {
    patch.fontSmoothing = overrides.fontSmoothing;
  }

  const fontWeights = {
    ...(overrides.fontWeightRegular !== null && { regular: toWeight(overrides.fontWeightRegular) }),
    ...(overrides.fontWeightMedium !== null && { medium: toWeight(overrides.fontWeightMedium) }),
    ...(overrides.fontWeightBold !== null && { bold: toWeight(overrides.fontWeightBold) }),
  };
  if (Object.keys(fontWeights).length > 0) {
    patch.fontWeights = fontWeights;
  }

  const headingsFont = getFont(overrides.headingsFont, fonts);
  if (headingsFont) {
    headings.fontFamily = headingsFont;
  }

  if (overrides.headingsWeight !== null) {
    headings.fontWeight = toWeight(overrides.headingsWeight);
  }

  if (overrides.headingsWrap) {
    headings.textWrap = overrides.headingsWrap;
  }

  const spacing = resolveScale(theme.spacing, 'spacing', overrides);
  if (spacing) {
    patch.spacing = spacing;
  }

  const radius = resolveScale(theme.radius, 'radius', overrides);
  if (radius) {
    patch.radius = radius;
  }

  const fontSizes = resolveScale(theme.fontSizes, 'fontSizes', overrides);
  if (fontSizes) {
    patch.fontSizes = fontSizes;
  }

  const lineHeights = resolveScale(theme.lineHeights, 'lineHeights', overrides);
  if (lineHeights) {
    patch.lineHeights = lineHeights;
  }

  const headingSizes = resolveScale(
    getScaleSource(theme, 'headingSizes'),
    'headingSizes',
    overrides
  );
  const headingLineHeights = resolveScale(
    getScaleSource(theme, 'headingLineHeights'),
    'headingLineHeights',
    overrides
  );
  if (headingSizes || headingLineHeights) {
    headings.sizes = Object.fromEntries(
      Object.entries(theme.headings.sizes).map(([key, value]) => [
        key,
        {
          ...value,
          fontSize: headingSizes?.[key] ?? value.fontSize,
          lineHeight: headingLineHeights?.[key] ?? value.lineHeight,
        },
      ])
    ) as MantineTheme['headings']['sizes'];
  }

  if (Object.keys(headings).length > 0) {
    patch.headings = headings;
  }

  if (hasKey(theme.radius, overrides.defaultRadius)) {
    patch.defaultRadius = overrides.defaultRadius;
  }

  if (overrides.shadows && SHADOW_PRESETS.includes(overrides.shadows)) {
    patch.shadows = SHADOWS[overrides.shadows];
  }

  if (overrides.focusRing) {
    patch.focusRing = overrides.focusRing;
  }

  if (overrides.cursorType) {
    patch.cursorType = overrides.cursorType;
  }

  if (overrides.disabledOpacity !== null) {
    patch.disabledOpacity = clamp(overrides.disabledOpacity, 0, 1);
  }

  return mergeThemeOverrides(themeOverride, patch);
}
