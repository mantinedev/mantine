import { useCallback } from 'react';
import { parse } from 'culori';
import {
  createParser,
  type inferParserType,
  parseAsBoolean,
  parseAsInteger,
  parseAsStringLiteral,
  throttle,
  useQueryStates,
} from 'nuqs';
import {
  DEFAULT_GENERATE_COLORS_OPTIONS,
  type GenerateColorsOptions,
} from '@mantine/colors-generator';
import { isColorName } from '@/preview';

export const OUTPUT_FORMATS = ['oklch', 'hex', 'rgb', 'hsl'] as const;
export type OutputFormat = (typeof OUTPUT_FORMATS)[number];

export const DEFAULT_COLOR = '#5474b4';
export const DEFAULT_NAME = 'brand';

const HEX_PATTERN = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;

export function isValidColor(value: string) {
  return value.trim() !== '' && parse(value) !== undefined;
}

export function normalizeColor(value: string) {
  const trimmed = value.trim();
  return HEX_PATTERN.test(trimmed) ? `#${trimmed.replace('#', '')}`.toLowerCase() : trimmed;
}

const parseAsColor = createParser<string>({
  parse: (query) => {
    const value = normalizeColor(query);
    return isValidColor(value) ? value : null;
  },
  serialize: (value) => (HEX_PATTERN.test(value) ? value.replace('#', '') : value),
});

const parseAsColorName = createParser<string>({
  parse: (query) => (isColorName(query) ? query : null),
  serialize: (value) => value,
});

export interface SchemeParams {
  shade: number | null;
  lightest: number;
  darkest: number;
  lightChroma: number;
  darkChroma: number;
  hueShift: number;
}

export const SCHEME_PARAM_KEYS = [
  'shade',
  'lightest',
  'darkest',
  'lightChroma',
  'darkChroma',
  'hueShift',
] as const;

export const SCHEME_RANGES = {
  lightest: { min: 85, max: 99 },
  darkest: { min: 10, max: 60 },
  lightChroma: { min: 0, max: 100 },
  darkChroma: { min: 0, max: 150 },
  hueShift: { min: -60, max: 60 },
} as const;

export const SCHEME_DEFAULTS: SchemeParams = {
  shade: null,
  lightest: Math.round(DEFAULT_GENERATE_COLORS_OPTIONS.lightest * 100),
  darkest: Math.round(DEFAULT_GENERATE_COLORS_OPTIONS.darkest * 100),
  lightChroma: Math.round(DEFAULT_GENERATE_COLORS_OPTIONS.lightestChroma * 100),
  darkChroma: Math.round(DEFAULT_GENERATE_COLORS_OPTIONS.darkestChroma * 100),
  hueShift: DEFAULT_GENERATE_COLORS_OPTIONS.hueShift,
};

const generatorParsers = {
  color: parseAsColor.withDefault(DEFAULT_COLOR),
  name: parseAsColorName,
  format: parseAsStringLiteral(OUTPUT_FORMATS).withDefault('oklch'),
  virtual: parseAsBoolean.withDefault(false),
  darkColor: parseAsColor,

  shade: parseAsInteger,
  lightest: parseAsInteger.withDefault(SCHEME_DEFAULTS.lightest),
  darkest: parseAsInteger.withDefault(SCHEME_DEFAULTS.darkest),
  lightChroma: parseAsInteger.withDefault(SCHEME_DEFAULTS.lightChroma),
  darkChroma: parseAsInteger.withDefault(SCHEME_DEFAULTS.darkChroma),
  hueShift: parseAsInteger.withDefault(SCHEME_DEFAULTS.hueShift),

  darkShade: parseAsInteger,
  darkLightest: parseAsInteger.withDefault(SCHEME_DEFAULTS.lightest),
  darkDarkest: parseAsInteger.withDefault(SCHEME_DEFAULTS.darkest),
  darkLightChroma: parseAsInteger.withDefault(SCHEME_DEFAULTS.lightChroma),
  darkDarkChroma: parseAsInteger.withDefault(SCHEME_DEFAULTS.darkChroma),
  darkHueShift: parseAsInteger.withDefault(SCHEME_DEFAULTS.hueShift),
};

const generatorUrlKeys = {
  virtual: 'dark',
  darkColor: 'dark-color',
  lightChroma: 'light-chroma',
  darkChroma: 'dark-chroma',
  hueShift: 'hue-shift',
  darkShade: 'dark-shade',
  darkLightest: 'dark-lightest',
  darkDarkest: 'dark-darkest',
  darkLightChroma: 'dark-light-chroma',
  darkDarkChroma: 'dark-dark-chroma',
  darkHueShift: 'dark-hue-shift',
};

export type GeneratorParams = inferParserType<typeof generatorParsers>;

export type Scheme = 'light' | 'dark';

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function schemeKey(scheme: Scheme, key: (typeof SCHEME_PARAM_KEYS)[number]) {
  return (scheme === 'light' ? key : `dark${capitalize(key)}`) as keyof GeneratorParams;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function getSchemeParams(params: GeneratorParams, scheme: Scheme): SchemeParams {
  const read = (key: (typeof SCHEME_PARAM_KEYS)[number]) =>
    params[schemeKey(scheme, key)] as number | null;
  const shade = read('shade');

  return {
    shade: shade === null ? null : clamp(Math.round(shade), 0, 9),
    lightest: clamp(read('lightest') ?? SCHEME_DEFAULTS.lightest, 85, 99),
    darkest: clamp(read('darkest') ?? SCHEME_DEFAULTS.darkest, 10, 60),
    lightChroma: clamp(read('lightChroma') ?? SCHEME_DEFAULTS.lightChroma, 0, 100),
    darkChroma: clamp(read('darkChroma') ?? SCHEME_DEFAULTS.darkChroma, 0, 150),
    hueShift: clamp(read('hueShift') ?? SCHEME_DEFAULTS.hueShift, -60, 60),
  };
}

export function toSchemeUpdate(scheme: Scheme, update: Partial<SchemeParams>) {
  return Object.fromEntries(
    Object.entries(update).map(([key, value]) => [
      schemeKey(scheme, key as (typeof SCHEME_PARAM_KEYS)[number]),
      value,
    ])
  ) as Partial<GeneratorParams>;
}

export function toGeneratorOptions(params: SchemeParams): GenerateColorsOptions {
  return {
    baseShade: params.shade ?? 'auto',
    lightest: params.lightest / 100,
    darkest: params.darkest / 100,
    lightestChroma: params.lightChroma / 100,
    darkestChroma: params.darkChroma / 100,
    hueShift: params.hueShift,
  };
}

export function isDefaultScheme(params: SchemeParams) {
  return SCHEME_PARAM_KEYS.every((key) => params[key] === SCHEME_DEFAULTS[key]);
}

export function useGeneratorParams() {
  const [params, setParams] = useQueryStates(generatorParsers, {
    urlKeys: generatorUrlKeys,
    history: 'replace',
    limitUrlUpdates: throttle(200),
  });

  const setScheme = useCallback(
    (scheme: Scheme, update: Partial<SchemeParams>) => setParams(toSchemeUpdate(scheme, update)),
    [setParams]
  );

  return { params, setParams, setScheme };
}
