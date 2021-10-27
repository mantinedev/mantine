import React, { createContext, useContext } from 'react';
import type { Options as EmotionCacheOptions } from '@emotion/cache';
import { SsrProvider } from './SsrProvider';
import { DEFAULT_THEME } from './default-theme';
import type { MantineThemeOverride, MantineTheme } from './types';
import type { CSSObject } from '../tss';
import { mergeTheme } from './utils/merge-theme/merge-theme';

type ProviderStyles = Record<
  string,
  Record<string, CSSObject> | ((theme: MantineTheme) => Record<string, CSSObject>)
>;

interface MantineThemeContextType {
  theme: MantineTheme;
  styles: ProviderStyles;
  emotionCacheOptions: EmotionCacheOptions;
}

const MantineThemeContext = createContext<MantineThemeContextType>({
  theme: DEFAULT_THEME,
  styles: {},
  emotionCacheOptions: { key: 'mantine', prepend: true },
});

export function useMantineTheme() {
  return useContext(MantineThemeContext)?.theme || DEFAULT_THEME;
}

export function useMantineThemeStyles() {
  return useContext(MantineThemeContext)?.styles || {};
}

export function useMantineEmotionCacheOptions(): EmotionCacheOptions {
  return useContext(MantineThemeContext)?.emotionCacheOptions || { key: 'mantine', prepend: true };
}

interface MantineProviderProps {
  theme?: MantineThemeOverride;
  styles?: ProviderStyles;
  emotionCacheOptions?: EmotionCacheOptions;
  children: React.ReactNode;
}

export function MantineProvider({
  theme,
  styles = {},
  emotionCacheOptions,
  children,
}: MantineProviderProps) {
  return (
    <SsrProvider>
      <MantineThemeContext.Provider
        value={{ theme: mergeTheme(DEFAULT_THEME, theme), styles, emotionCacheOptions }}
      >
        {children}
      </MantineThemeContext.Provider>
    </SsrProvider>
  );
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
