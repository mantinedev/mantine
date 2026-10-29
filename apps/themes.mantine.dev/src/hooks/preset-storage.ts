import {
  type CustomColor,
  type CustomNeutral,
  DEFAULT_OVERRIDES,
  loadThemeParams,
  serializeThemeParams,
  type ThemeOverrides,
} from '@/preview';

const SHARED_KEYS = ['customColors', 'grayCustom', 'darkCustom'] as const;
const SHARED_STORAGE_KEY = 'mantine-themes:colors';

type SharedKey = (typeof SHARED_KEYS)[number];

export type SharedValues = Pick<ThemeOverrides, SharedKey>;
export type PresetValues = Omit<ThemeOverrides, SharedKey>;

function getPresetStorageKey(presetId: string) {
  return `mantine-themes:preset:${presetId}`;
}

function readStorage(key: string) {
  try {
    return window.localStorage.getItem(key) ?? '';
  } catch {
    return '';
  }
}

function writeStorage(key: string, value: string) {
  try {
    if (value) {
      window.localStorage.setItem(key, value);
    } else {
      window.localStorage.removeItem(key);
    }
    return true;
  } catch {
    return false;
  }
}

function toQuery(values: Partial<ThemeOverrides>) {
  return serializeThemeParams(values).replace(/^\?/, '');
}

function fromQuery(query: string) {
  return loadThemeParams(new URLSearchParams(query)) as ThemeOverrides;
}

export function getSharedValues(overrides: ThemeOverrides): SharedValues {
  return {
    customColors: overrides.customColors,
    grayCustom: overrides.grayCustom,
    darkCustom: overrides.darkCustom,
  };
}

export function getPresetValues(overrides: ThemeOverrides): PresetValues {
  const { customColors: _colors, grayCustom: _gray, darkCustom: _dark, ...values } = overrides;
  return values;
}

export const DEFAULT_PRESET_VALUES = getPresetValues(DEFAULT_OVERRIDES);

export function hasPresetValues(overrides: ThemeOverrides) {
  return JSON.stringify(getPresetValues(overrides)) !== JSON.stringify(DEFAULT_PRESET_VALUES);
}

export function readPresetValues(presetId: string) {
  return getPresetValues(fromQuery(readStorage(getPresetStorageKey(presetId))));
}

export function writePresetValues(presetId: string, overrides: ThemeOverrides) {
  writeStorage(getPresetStorageKey(presetId), toQuery(getPresetValues(overrides)));
}

export function readSharedValues() {
  return getSharedValues(fromQuery(readStorage(SHARED_STORAGE_KEY)));
}

export function writeSharedValues(overrides: ThemeOverrides) {
  writeStorage(SHARED_STORAGE_KEY, toQuery(getSharedValues(overrides)));
}

function mergeByName<T extends CustomColor | CustomNeutral>(
  primary: T[] | null,
  secondary: T[] | null
) {
  const merged = [...(primary ?? [])];
  (secondary ?? []).forEach((item) => {
    if (!merged.some((current) => current.name === item.name)) {
      merged.push(item);
    }
  });
  return merged.length > 0 ? merged : null;
}

export function mergeSharedValues(primary: SharedValues, secondary: SharedValues): SharedValues {
  return {
    customColors: mergeByName(primary.customColors, secondary.customColors),
    grayCustom: mergeByName(primary.grayCustom, secondary.grayCustom),
    darkCustom: mergeByName(primary.darkCustom, secondary.darkCustom),
  };
}
