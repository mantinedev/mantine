import {
  createLoader,
  createParser,
  createSerializer,
  type inferParserType,
  parseAsFloat,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
} from 'nuqs';

const KEY_PATTERN = /^[a-z0-9-]{1,12}$/i;
const COLOR_PATTERN = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

export function isHexColor(value: string) {
  return COLOR_PATTERN.test(value);
}

const OKLCH_PATTERN = /^oklch\(\s*(?:0|1|0?\.\d+|1\.0+)\s+(?:0|0?\.\d+)\s+\d{1,3}(?:\.\d+)?\s*\)$/i;

const OPAQUE_HEX_PATTERN = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;

export function isBaseColor(value: string) {
  return OPAQUE_HEX_PATTERN.test(value) || OKLCH_PATTERN.test(value);
}

const parseAsNumberRecord = createParser<Record<string, number>>({
  parse: (query) => {
    const entries = query.split(',').flatMap((item) => {
      const [key, raw] = item.split(':');
      const value = Number(raw);
      return KEY_PATTERN.test(key ?? '') && Number.isFinite(value) ? [[key, value] as const] : [];
    });
    return entries.length > 0 ? Object.fromEntries(entries) : null;
  },
  serialize: (value) =>
    Object.entries(value)
      .map(([key, item]) => `${key}:${Math.round(item * 100) / 100}`)
      .join(','),
});

const parseAsHexColor = createParser<string>({
  parse: (query) => (isHexColor(query) ? query : null),
  serialize: (value) => value,
});

const COLOR_NAME_PATTERN = /^[a-z][a-z0-9-]{0,31}$/;

export function isColorName(value: string) {
  return COLOR_NAME_PATTERN.test(value);
}

export interface CustomColor {
  name: string;
  value: string;
}

const parseAsCustomColors = createParser<CustomColor[]>({
  parse: (query) => {
    const names = new Set<string>();
    const colors = query.split(',').flatMap((item) => {
      const separator = item.indexOf(':');
      const name = item.slice(0, separator);
      const value = item.slice(separator + 1);
      if (separator === -1 || !isColorName(name) || !isBaseColor(value) || names.has(name)) {
        return [];
      }
      names.add(name);
      return [{ name, value }];
    });
    return colors.length > 0 ? colors : null;
  },
  serialize: (value) => value.map((color) => `${color.name}:${color.value}`).join(','),
  eq: (a, b) => JSON.stringify(a) === JSON.stringify(b),
});

export interface CustomNeutral {
  name: string;
  shades: string[];
}

const parseAsRampList = createParser<CustomNeutral[]>({
  parse: (query) => {
    const ramps = query.split('~').map((item) => {
      const separator = item.indexOf(':');
      return { name: item.slice(0, separator), shades: item.slice(separator + 1).split(',') };
    });
    return ramps.length > 0 &&
      ramps.every(
        (ramp) =>
          isColorName(ramp.name) && ramp.shades.length === 10 && ramp.shades.every(isHexColor)
      )
      ? ramps
      : null;
  },
  serialize: (value) => value.map((ramp) => `${ramp.name}:${ramp.shades.join(',')}`).join('~'),
  eq: (a, b) => JSON.stringify(a) === JSON.stringify(b),
});

export const SHADOW_PRESETS = ['none', 'subtle', 'mantine', 'strong'] as const;
export const HEADING_WRAPS = ['wrap', 'nowrap', 'balance', 'pretty', 'stable'] as const;
export const FOCUS_RINGS = ['auto', 'always', 'never'] as const;
export const CURSOR_TYPES = ['default', 'pointer'] as const;

export const themeParsers = {
  primaryColor: parseAsString,
  customColors: parseAsCustomColors,
  grayNeutral: parseAsString,
  grayCustom: parseAsRampList,
  darkNeutral: parseAsString,
  darkCustom: parseAsRampList,
  primaryShadeLight: parseAsInteger,
  primaryShadeDark: parseAsInteger,
  white: parseAsHexColor,
  black: parseAsHexColor,

  font: parseAsString,
  monoFont: parseAsString,
  fontWeightRegular: parseAsInteger,
  fontWeightMedium: parseAsInteger,
  fontWeightBold: parseAsInteger,
  headingsFont: parseAsString,
  headingsWeight: parseAsInteger,
  headingsWrap: parseAsStringLiteral(HEADING_WRAPS),

  spacing: parseAsInteger.withDefault(100),
  spacingValues: parseAsNumberRecord,
  radius: parseAsInteger.withDefault(100),
  radiusValues: parseAsNumberRecord,
  fontSizes: parseAsInteger.withDefault(100),
  fontSizesValues: parseAsNumberRecord,
  lineHeights: parseAsInteger.withDefault(100),
  lineHeightsValues: parseAsNumberRecord,
  headingSizes: parseAsInteger.withDefault(100),
  headingSizesValues: parseAsNumberRecord,
  headingLineHeights: parseAsInteger.withDefault(100),
  headingLineHeightsValues: parseAsNumberRecord,
  defaultRadius: parseAsString,
  shadows: parseAsStringLiteral(SHADOW_PRESETS),

  focusRing: parseAsStringLiteral(FOCUS_RINGS),
  cursorType: parseAsStringLiteral(CURSOR_TYPES),
  disabledOpacity: parseAsFloat,
};

export const themeUrlKeys = {
  primaryColor: 'primary',
  customColors: 'colors',
  grayNeutral: 'gray',
  grayCustom: 'gray-custom',
  darkNeutral: 'dark',
  darkCustom: 'dark-custom',
  primaryShadeLight: 'shade-light',
  primaryShadeDark: 'shade-dark',
  white: 'white',
  black: 'black',
  font: 'font',
  monoFont: 'mono-font',
  fontWeightRegular: 'weight-regular',
  fontWeightMedium: 'weight-medium',
  fontWeightBold: 'weight-bold',
  headingsFont: 'headings-font',
  headingsWeight: 'headings-weight',
  headingsWrap: 'headings-wrap',
  spacing: 'spacing',
  spacingValues: 'spacing-values',
  radius: 'radius',
  radiusValues: 'radius-values',
  fontSizes: 'font-size',
  fontSizesValues: 'font-sizes',
  lineHeights: 'line-height',
  lineHeightsValues: 'line-heights',
  headingSizes: 'heading-size',
  headingSizesValues: 'heading-sizes',
  headingLineHeights: 'heading-line-height',
  headingLineHeightsValues: 'heading-line-heights',
  defaultRadius: 'default-radius',
  shadows: 'shadows',
  focusRing: 'focus-ring',
  cursorType: 'cursor',
  disabledOpacity: 'disabled-opacity',
};

export type ThemeOverrides = inferParserType<typeof themeParsers>;

export const DEFAULT_OVERRIDES = Object.fromEntries(
  Object.entries(themeParsers).map(([key, parser]) => [
    key,
    'defaultValue' in parser ? parser.defaultValue : null,
  ])
) as ThemeOverrides;

export const serializeThemeParams = createSerializer(themeParsers, { urlKeys: themeUrlKeys });

export const loadThemeParams = createLoader(themeParsers, { urlKeys: themeUrlKeys });

export function getPresetUrl(presetId: string, overrides: ThemeOverrides) {
  return serializeThemeParams(`/${presetId}/`, overrides);
}
