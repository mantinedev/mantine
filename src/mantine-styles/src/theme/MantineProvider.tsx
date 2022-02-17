import React, { createContext, useContext } from 'react';
import type { Options as EmotionCacheOptions } from '@emotion/cache';
import { Global } from '@emotion/react';
import { DEFAULT_THEME } from './default-theme';
import type { MantineThemeOverride, MantineTheme } from './types';
import type { CSSObject } from '../tss';
import { mergeTheme } from './utils/merge-theme/merge-theme';
import { NormalizeCSS } from './NormalizeCSS';

type ProviderStyles = Record<
  string,
  Record<string, CSSObject> | ((theme: MantineTheme) => Record<string, CSSObject>)
>;

interface MantineThemeContextType {
  theme: MantineTheme;
  styles: ProviderStyles;
  emotionOptions: EmotionCacheOptions;
}

const MantineThemeContext = createContext<MantineThemeContextType>({
  theme: DEFAULT_THEME,
  styles: {},
  emotionOptions: { key: 'mantine', prepend: true },
});

export function useMantineTheme() {
  return useContext(MantineThemeContext)?.theme || DEFAULT_THEME;
}

export function useMantineThemeStyles() {
  return useContext(MantineThemeContext)?.styles || {};
}

export function useMantineEmotionOptions(): EmotionCacheOptions {
  return useContext(MantineThemeContext)?.emotionOptions || { key: 'mantine', prepend: true };
}

export interface MantineProviderProps {
  theme?: MantineThemeOverride;
  styles?: ProviderStyles;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  children: React.ReactNode;
}

function GlobalStyles() {
  const theme = useMantineTheme();
  return (
    <Global
      styles={{
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
          fontSize: theme.fontSizes.md,
        } as any,
      }}
    />
  );
}

export function MantineProvider({
  theme,
  styles = {},
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  children,
}: MantineProviderProps) {
  return (
    <MantineThemeContext.Provider
      value={{ theme: mergeTheme(DEFAULT_THEME, theme), styles, emotionOptions }}
    >
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles />}
      {children}
    </MantineThemeContext.Provider>
  );
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
