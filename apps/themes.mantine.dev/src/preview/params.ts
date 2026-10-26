import {
  createLoader,
  createSerializer,
  type inferParserType,
  parseAsInteger,
  parseAsString,
} from 'nuqs';

export const themeParsers = {
  primaryColor: parseAsString,
  primaryShadeLight: parseAsInteger,
  primaryShadeDark: parseAsInteger,
  radius: parseAsInteger.withDefault(100),
  spacing: parseAsInteger.withDefault(100),
  fontSize: parseAsInteger.withDefault(100),
  font: parseAsString,
  headingsFont: parseAsString,
};

export const themeUrlKeys = {
  primaryColor: 'primary',
  primaryShadeLight: 'shade-light',
  primaryShadeDark: 'shade-dark',
  radius: 'radius',
  spacing: 'spacing',
  fontSize: 'font-size',
  font: 'font',
  headingsFont: 'headings-font',
};

export type ThemeOverrides = inferParserType<typeof themeParsers>;

export const DEFAULT_OVERRIDES: ThemeOverrides = {
  primaryColor: null,
  primaryShadeLight: null,
  primaryShadeDark: null,
  radius: 100,
  spacing: 100,
  fontSize: 100,
  font: null,
  headingsFont: null,
};

export const serializeThemeParams = createSerializer(themeParsers, { urlKeys: themeUrlKeys });

export const loadThemeParams = createLoader(themeParsers, { urlKeys: themeUrlKeys });

export function getPresetUrl(presetId: string, overrides: ThemeOverrides) {
  return serializeThemeParams(`/${presetId}/`, overrides);
}
