import React, { createContext, useContext } from 'react';
import type { Options as EmotionCacheOptions } from '@emotion/cache';
import { DEFAULT_THEME } from './default-theme';
import { GlobalStyles } from './GlobalStyles';
import { MantineCssVariables } from './MantineCssVariables';
import type { MantineThemeOverride, MantineTheme } from './types';
import { mergeThemeWithFunctions } from './utils/merge-theme/merge-theme';
import { filterProps } from './utils/filter-props/filter-props';
import { NormalizeCSS } from './NormalizeCSS';

interface MantineProviderContextType {
  theme: MantineTheme;
  emotionOptions: EmotionCacheOptions;
}

const MantineProviderContext = createContext<MantineProviderContextType>({
  theme: DEFAULT_THEME,
  emotionOptions: { key: 'mantine', prepend: true },
});

export function useMantineTheme() {
  return useContext(MantineProviderContext)?.theme || DEFAULT_THEME;
}

export function useMantineProviderStyles(component: string | string[]) {
  const theme = useMantineTheme();

  const getStyles = (name: string) => ({
    styles: theme.components[name]?.styles || {},
    classNames: theme.components[name]?.classNames || {},
  });

  if (Array.isArray(component)) {
    return component.map(getStyles);
  }

  return [getStyles(component)];
}

export function useMantineEmotionOptions(): EmotionCacheOptions {
  return useContext(MantineProviderContext)?.emotionOptions || { key: 'mantine', prepend: true };
}

export function useMantineDefaultProps<T extends Record<string, any>>(
  component: string,
  defaultProps: Partial<T>,
  props: T
): T {
  const theme = useMantineTheme();
  const contextProps = theme.components[component]?.defaultProps;
  return { ...defaultProps, ...contextProps, ...filterProps(props) };
}

export interface MantineProviderProps {
  theme?: MantineThemeOverride;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  withCSSVariables?: boolean;
  children: React.ReactNode;
  inherit?: boolean;
}

export function MantineProvider({
  theme,
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  withCSSVariables = false,
  inherit = false,
  children,
}: MantineProviderProps) {
  const ctx = useContext(MantineProviderContext);
  const overrides = {
    themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
    emotionOptions: inherit ? { ...ctx.emotionOptions, ...emotionOptions } : emotionOptions,
  };

  const mergedTheme = mergeThemeWithFunctions(DEFAULT_THEME, overrides.themeOverride);

  return (
    <MantineProviderContext.Provider
      value={{
        theme: mergedTheme,
        emotionOptions: overrides.emotionOptions,
      }}
    >
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles theme={mergedTheme} />}
      {withCSSVariables && <MantineCssVariables theme={mergedTheme} />}
      {children}
    </MantineProviderContext.Provider>
  );
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
