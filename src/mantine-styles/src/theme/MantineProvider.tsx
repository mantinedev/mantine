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
  | Record<string, CSSObject>
  | ((theme: MantineTheme, params: Record<string, any>) => Record<string, CSSObject>)
>;

type MantineDefaultProps = Record<string, Record<string, any>>;

interface MantineProviderContextType {
  theme: MantineTheme;
  styles: ProviderStyles;
  emotionOptions: EmotionCacheOptions;
  defaultProps: MantineDefaultProps;
}

const MantineProviderContext = createContext<MantineProviderContextType>({
  theme: DEFAULT_THEME,
  styles: {},
  emotionOptions: { key: 'mantine', prepend: true },
  defaultProps: {},
});

export function useMantineTheme() {
  return useContext(MantineProviderContext)?.theme || DEFAULT_THEME;
}

export function useMantineThemeStyles() {
  return useContext(MantineProviderContext)?.styles || {};
}

export function useMantineEmotionOptions(): EmotionCacheOptions {
  return useContext(MantineProviderContext)?.emotionOptions || { key: 'mantine', prepend: true };
}

export function useMantineDefaultProps<T extends Record<string, any>>(
  component: string,
  defaultProps: Partial<T>,
  props: T
): T {
  const contextProps = useContext(MantineProviderContext)?.defaultProps?.[component] || {};
  return { ...defaultProps, ...contextProps, ...props };
}

export interface MantineProviderProps {
  theme?: MantineThemeOverride;
  styles?: ProviderStyles;
  defaultProps?: MantineDefaultProps;
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
          ...(theme.fn.fontStyles() as any),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
          fontSizes: theme.fontSizes.md,
        },
      }}
    />
  );
}

export function MantineProvider({
  theme,
  styles = {},
  defaultProps = {},
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  children,
}: MantineProviderProps) {
  return (
    <MantineProviderContext.Provider
      value={{ theme: mergeTheme(DEFAULT_THEME, theme), styles, emotionOptions, defaultProps }}
    >
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles />}
      {children}
    </MantineProviderContext.Provider>
  );
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
