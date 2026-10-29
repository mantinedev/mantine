import {
  type CSSVariablesResolver,
  DEFAULT_THEME,
  defaultCssVariablesResolver,
  isVirtualColor,
  type MantineTheme,
  type MantineThemeOverride,
  mergeMantineTheme,
} from '@mantine/core';

export interface VirtualColorExport {
  name: string;
  light: string;
  dark: string;
}

export type ThemeExportValue =
  | string
  | number
  | boolean
  | ThemeExportValue[]
  | { [key: string]: ThemeExportValue };

export type ThemeExportColors = Record<string, string[] | { virtual: VirtualColorExport }>;

export interface ThemeExportVariables {
  variables: Record<string, string>;
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface ThemeExport {
  theme: Record<string, ThemeExportValue>;
  colors: ThemeExportColors;
  variables: ThemeExportVariables;
  components: string[];
}

const SCALAR_KEYS = [
  'primaryColor',
  'autoContrast',
  'luminanceThreshold',
  'white',
  'black',
  'fontFamily',
  'fontFamilyMonospace',
  'defaultRadius',
  'scale',
  'fontSmoothing',
  'focusRing',
  'cursorType',
  'respectReducedMotion',
  'disabledOpacity',
] as const;

const RECORD_KEYS = [
  'fontSizes',
  'lineHeights',
  'fontWeights',
  'radius',
  'spacing',
  'breakpoints',
  'shadows',
] as const;

const OBJECT_KEYS = [
  'primaryShade',
  'defaultGradient',
  'overlayStack',
  'surfaces',
  'other',
] as const;

function isSameJson(a: unknown, b: unknown) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function toJson<T>(value: T): T | undefined {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch {
    return undefined;
  }
}

function isEmptyObject(value: unknown) {
  return typeof value === 'object' && value !== null && Object.keys(value).length === 0;
}

function diffRecord(current: Record<string, unknown>, base: Record<string, unknown>) {
  const result: Record<string, ThemeExportValue> = {};
  Object.entries(current).forEach(([key, value]) => {
    if (!isSameJson(value, base[key])) {
      result[key] = value as ThemeExportValue;
    }
  });
  return Object.keys(result).length > 0 ? result : undefined;
}

function diffColors(theme: MantineTheme): ThemeExportColors {
  const colors: ThemeExportColors = {};

  Object.entries(theme.colors).forEach(([name, tuple]) => {
    if (isVirtualColor(tuple)) {
      colors[name] = { virtual: { name: tuple.name, light: tuple.light, dark: tuple.dark } };
    } else if (!isSameJson(tuple, DEFAULT_THEME.colors[name])) {
      colors[name] = [...tuple];
    }
  });

  return colors;
}

function diffHeadings(theme: MantineTheme) {
  const base = DEFAULT_THEME.headings;
  const headings: Record<string, ThemeExportValue> = {};

  if (theme.headings.fontFamily !== base.fontFamily) {
    headings.fontFamily = theme.headings.fontFamily;
  }

  if (theme.headings.fontWeight !== base.fontWeight) {
    headings.fontWeight = theme.headings.fontWeight;
  }

  if (theme.headings.textWrap !== base.textWrap) {
    headings.textWrap = theme.headings.textWrap;
  }

  const sizes = diffRecord(theme.headings.sizes, base.sizes);
  if (sizes) {
    headings.sizes = sizes;
  }

  return Object.keys(headings).length > 0 ? headings : undefined;
}

function diffVariables(
  current: Record<string, string>,
  ...bases: Record<string, string>[]
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(current).filter(
      ([key, value]) => key.startsWith('--mantine-') && bases.every((base) => base[key] !== value)
    )
  );
}

export function getThemeExport(
  themeOverride: MantineThemeOverride,
  resolver: CSSVariablesResolver | undefined
): ThemeExport {
  const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
  const result: Record<string, ThemeExportValue> = {};

  SCALAR_KEYS.forEach((key) => {
    if (theme[key] !== DEFAULT_THEME[key]) {
      result[key] = theme[key];
    }
  });

  OBJECT_KEYS.forEach((key) => {
    const value = toJson(theme[key]);
    if (value !== undefined && !isEmptyObject(value) && !isSameJson(value, DEFAULT_THEME[key])) {
      result[key] = value as ThemeExportValue;
    }
  });

  RECORD_KEYS.forEach((key) => {
    const value = diffRecord(theme[key], DEFAULT_THEME[key]);
    if (value) {
      result[key] = value;
    }
  });

  const headings = diffHeadings(theme);
  if (headings) {
    result.headings = headings;
  }

  const defaults = defaultCssVariablesResolver(theme);
  const resolved = resolver?.(theme) ?? defaults;

  return {
    theme: result,
    colors: diffColors(theme),
    variables: {
      variables: diffVariables(resolved.variables, defaults.variables),
      light: diffVariables(resolved.light, defaults.light, defaults.variables),
      dark: diffVariables(resolved.dark, defaults.dark, defaults.variables),
    },
    components: Object.keys(theme.components),
  };
}
