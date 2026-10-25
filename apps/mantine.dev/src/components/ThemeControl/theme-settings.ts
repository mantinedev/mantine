import { createContext, useContext } from 'react';
import {
  darkColdColors,
  darkColors,
  darkWarmColors,
  DEFAULT_THEME,
  MantineColorsTuple,
} from '@mantine/core';

export type DarkTint = 'default' | 'warm' | 'cold';

export interface ThemeSettings {
  primaryColor: string;
  darkTint: DarkTint;
  mixWithPrimary: boolean;
}

export const DEFAULT_THEME_SETTINGS: ThemeSettings = {
  primaryColor: 'blue',
  darkTint: 'default',
  mixWithPrimary: false,
};

export const PRIMARY_COLOR_OPTIONS = Object.keys(DEFAULT_THEME.colors).filter(
  (color) => color !== 'dark' && color !== 'gray'
);

const DARK_TINT_COLORS: Record<DarkTint, MantineColorsTuple> = {
  default: darkColors,
  warm: darkWarmColors,
  cold: darkColdColors,
};

const MIX_STRENGTH = 8;
const MIX_DARKEN = 0.02;

function mixKeepingLightness(tuple: MantineColorsTuple, tint: string) {
  return tuple.map((shade) => {
    const lightness = shade.match(/oklch\(\s*([\d.]+)/)?.[1];
    const mixed = `color-mix(in oklab, ${shade}, ${tint} ${MIX_STRENGTH}%)`;
    if (!lightness) {
      return mixed;
    }
    const darkened = Math.max(0, Number(lightness) - MIX_DARKEN).toFixed(3);
    return `oklch(from ${mixed} ${darkened} c h)`;
  }) as unknown as MantineColorsTuple;
}

export function getDarkColors({ darkTint, mixWithPrimary, primaryColor }: ThemeSettings) {
  const base = DARK_TINT_COLORS[darkTint];
  const tint = DEFAULT_THEME.colors[primaryColor]?.[6];
  return mixWithPrimary && tint ? mixKeepingLightness(base, tint) : base;
}

export interface ThemeSettingsContextValue {
  settings: ThemeSettings;
  setPrimaryColor: (color: string) => void;
  setDarkTint: (tint: DarkTint) => void;
  setMixWithPrimary: (value: boolean) => void;
  reset: () => void;
}

export const ThemeSettingsContext = createContext<ThemeSettingsContextValue | null>(null);

export function useThemeSettings() {
  const ctx = useContext(ThemeSettingsContext);
  if (!ctx) {
    throw new Error('useThemeSettings must be used within ThemeSettingsProvider');
  }
  return ctx;
}
