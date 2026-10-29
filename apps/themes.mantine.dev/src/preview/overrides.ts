import {
  DEFAULT_THEME,
  isVirtualColor,
  type MantineColorShade,
  type MantineColorsTuple,
  type MantineTheme,
  type MantineThemeOverride,
  mergeMantineTheme,
  mergeThemeOverrides,
  rem,
} from '@mantine/core';
import { generatePalette, toHexColor } from './colors';
import { getFontStack, type GoogleFont, SYSTEM_FONT } from './fonts';
import { NEUTRALS, resolveNeutral } from './neutrals';
import { type HEADING_WRAPS, type SHADOW_COLORS, type ThemeOverrides } from './params';
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

export interface PresetThemeInfo {
  primaryColor: string;
  primaryShade: PrimaryShade;
  swatches: PresetColorSwatch[];
  gray: string[];
  dark: string[];
  scales: PresetScales;
  white: string;
  black: string;
  fontWeights: { regular: number; medium: number; bold: number };
  headingsWeight: number;
  headingsWrap: (typeof HEADING_WRAPS)[number];
  defaultRadius: string;
  fonts: { body: string; headings: string; mono: string };
  shadows: MantineTheme['shadows'];
  disabledOpacity: number;
}

const NEUTRAL_COLORS = ['gray', 'dark'];

export type ShadowColor = (typeof SHADOW_COLORS)[number];

export interface ShadowSettings {
  strength: number;
  size: number;
  distance: number;
  color: ShadowColor;
}

export const SHADOW_DEFAULTS: ShadowSettings = {
  strength: 12,
  size: 100,
  distance: 50,
  color: 'black',
};

const SHADOW_BLUR = { xs: 3, sm: 6, md: 12, lg: 24, xl: 40 };

const SHADOW_COLOR_VARIABLES: Record<ShadowColor, string> = {
  black: '#000',
  gray: 'var(--mantine-color-gray-9)',
  primary: 'var(--mantine-primary-color-9)',
};

function round(value: number) {
  return Math.round(value * 100) / 100;
}

export function hasShadowOverrides(overrides: ThemeOverrides) {
  return (
    overrides.shadowStrength !== null ||
    overrides.shadowSize !== null ||
    overrides.shadowDistance !== null ||
    overrides.shadowColor !== null
  );
}

export function getShadowSettings(overrides: ThemeOverrides): ShadowSettings {
  return {
    strength: clamp(overrides.shadowStrength ?? SHADOW_DEFAULTS.strength, 0, 40),
    size: clamp(overrides.shadowSize ?? SHADOW_DEFAULTS.size, 25, 250),
    distance: clamp(overrides.shadowDistance ?? SHADOW_DEFAULTS.distance, 0, 100),
    color: overrides.shadowColor ?? SHADOW_DEFAULTS.color,
  };
}

export function createShadows(
  { strength, size, distance }: ShadowSettings,
  color: string
): MantineTheme['shadows'] {
  const mix = (alpha: number) =>
    `color-mix(in srgb, ${color} ${round(alpha * strength)}%, transparent)`;

  return Object.fromEntries(
    Object.entries(SHADOW_BLUR).map(([key, base]) => {
      if (strength === 0) {
        return [key, 'none'];
      }

      const blur = (base * size) / 100;
      const lift = distance / 100;
      const contact = `0 ${rem(round(Math.max(1, blur * lift * 0.1)))} ${rem(round(Math.max(2, blur * 0.15)))} ${mix(0.5)}`;
      const ambient = `0 ${rem(round(blur * lift * 0.5))} ${rem(round(blur))} ${rem(round(-blur * lift * 0.25))} ${mix(1)}`;
      return [key, `${contact}, ${ambient}`];
    })
  ) as MantineTheme['shadows'];
}

function hasKey<T extends object>(object: T, key: string | null): key is Extract<keyof T, string> {
  return key !== null && Object.hasOwn(object, key);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function toWeight(value: number) {
  return String(clamp(Math.round(value / 100) * 100, 100, 900));
}

const SYSTEM_FAMILIES = ['-apple-system', 'system-ui'];

function getFirstFamily(stack: string) {
  const family = (stack.split(',')[0] ?? '').trim().replace(/^['"]|['"]$/g, '');
  return SYSTEM_FAMILIES.includes(family) ? SYSTEM_FONT : family;
}

function measureStatic(value: string) {
  const rem = value.match(/([\d.]+)rem/);
  if (rem) {
    return Number.parseFloat(rem[1]) * 16;
  }
  const px = value.match(/([\d.]+)px/);
  return px ? Number.parseFloat(px[1]) : Number.parseFloat(value) || 0;
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
  measure: (value: string) => number
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
    fonts: {
      body: getFirstFamily(theme.fontFamily),
      headings: getFirstFamily(theme.headings.fontFamily ?? theme.fontFamily),
      mono: getFirstFamily(theme.fontFamilyMonospace),
    },
    shadows: theme.shadows,
    disabledOpacity: theme.disabledOpacity,
  };
}

export const DEFAULT_PRESET_INFO = getPresetThemeInfo({}, measureStatic);

export function getOverrideShadows(overrides: ThemeOverrides) {
  if (!hasShadowOverrides(overrides)) {
    return null;
  }

  const settings = getShadowSettings(overrides);
  return createShadows(settings, SHADOW_COLOR_VARIABLES[settings.color]);
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

  const customPrimary = customPalettes.find((palette) => palette.name === overrides.primaryColor);

  NEUTRALS.forEach((neutral) => {
    const ramp = resolveNeutral(
      neutral,
      overrides[`${neutral}Neutral`],
      overrides[`${neutral}Custom`]
    );
    if (ramp) {
      colors[neutral] = ramp as unknown as MantineColorsTuple;
    }
  });

  if (Object.keys(colors).length > 0) {
    patch.colors = colors;
  }

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

  const fontFamily = getFont(overrides.font, fonts);
  if (fontFamily) {
    patch.fontFamily = fontFamily;
  }

  const monoFont = getFont(overrides.monoFont, fonts);
  if (monoFont) {
    patch.fontFamilyMonospace = monoFont;
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

  const shadows = getOverrideShadows(overrides);
  if (shadows) {
    patch.shadows = shadows;
  }

  if (overrides.disabledOpacity !== null) {
    patch.disabledOpacity = clamp(overrides.disabledOpacity, 0, 1);
  }

  return mergeThemeOverrides(themeOverride, patch);
}
