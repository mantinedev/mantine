import { useMemo } from 'react';
import { MantineProvider, MantineThemeOverride, mergeThemeOverrides } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import {
  DEFAULT_THEME_SETTINGS,
  getDarkColors,
  ThemeSettings,
  ThemeSettingsContext,
  ThemeSettingsContextValue,
} from './theme-settings';

interface ThemeSettingsProviderProps {
  theme: MantineThemeOverride;
  children: React.ReactNode;
}

export function ThemeSettingsProvider({ theme, children }: ThemeSettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage<ThemeSettings>({
    key: 'mantine-docs-theme-settings',
    defaultValue: DEFAULT_THEME_SETTINGS,
  });

  const mergedTheme = useMemo(
    () =>
      mergeThemeOverrides(theme, {
        primaryColor: settings.primaryColor,
        colors: { dark: getDarkColors(settings) },
      }),
    [theme, settings]
  );

  const value = useMemo<ThemeSettingsContextValue>(
    () => ({
      settings,
      setPrimaryColor: (primaryColor) => setSettings((prev) => ({ ...prev, primaryColor })),
      setDarkTint: (darkTint) => setSettings((prev) => ({ ...prev, darkTint })),
      setMixWithPrimary: (mixWithPrimary) => setSettings((prev) => ({ ...prev, mixWithPrimary })),
      reset: () => setSettings(DEFAULT_THEME_SETTINGS),
    }),
    [settings, setSettings]
  );

  return (
    <ThemeSettingsContext.Provider value={value}>
      <MantineProvider theme={mergedTheme} defaultColorScheme="light">
        {children}
      </MantineProvider>
    </ThemeSettingsContext.Provider>
  );
}
