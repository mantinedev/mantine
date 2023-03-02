import React, { createContext, useContext } from 'react';
import type { EmotionCache } from '@emotion/cache';
import { ThemeProvider, Global } from '@emotion/react';
import { DEFAULT_THEME } from './default-theme';
import { GlobalStyles } from './GlobalStyles';
import { MantineCssVariables } from './MantineCssVariables';
import type { MantineThemeOverride, MantineTheme } from './types';
import { mergeThemeWithFunctions } from './utils/merge-theme/merge-theme';
import { filterProps } from './utils/filter-props/filter-props';
import { NormalizeCSS } from './NormalizeCSS';

interface MantineProviderContextType {
  theme: MantineTheme;
  emotionCache?: EmotionCache;
}

const MantineProviderContext = createContext<MantineProviderContextType>({
  theme: DEFAULT_THEME,
});

export function useMantineTheme() {
  return useContext(MantineProviderContext)?.theme || DEFAULT_THEME;
}

export function useMantineProviderStyles(component: string | string[]) {
  const theme = useMantineTheme();

  const getStyles = (name: string) => ({
    styles: theme.components[name]?.styles || {},
    classNames: theme.components[name]?.classNames || {},
    variants: theme.components[name]?.variants,
    sizes: theme.components[name]?.sizes,
  });

  if (Array.isArray(component)) {
    return component.map(getStyles);
  }

  return [getStyles(component)];
}

export function useMantineEmotionCache() {
  return useContext(MantineProviderContext)?.emotionCache;
}

export function useComponentDefaultProps<T extends Record<string, any>, U extends Partial<T> = {}>(
  component: string,
  defaultProps: U,
  props: T
): T & {
  [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
} {
  const theme = useMantineTheme();
  const contextPropsPayload = theme.components[component]?.defaultProps;
  const contextProps =
    typeof contextPropsPayload === 'function' ? contextPropsPayload(theme) : contextPropsPayload;

  return { ...defaultProps, ...contextProps, ...filterProps(props) };
}

export interface MantineProviderProps {
  theme?: MantineThemeOverride;
  emotionCache?: EmotionCache;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  withCSSVariables?: boolean;
  children: React.ReactNode;
  inherit?: boolean;
}

export function MantineProvider({
  theme,
  emotionCache,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  withCSSVariables = false,
  inherit = false,
  children,
}: MantineProviderProps) {
  const ctx = useContext(MantineProviderContext);
  const mergedTheme = mergeThemeWithFunctions(
    DEFAULT_THEME,
    inherit ? { ...ctx.theme, ...theme } : theme
  );

  return (
    <ThemeProvider theme={mergedTheme}>
      <MantineProviderContext.Provider value={{ theme: mergedTheme, emotionCache }}>
        {withNormalizeCSS && <NormalizeCSS />}
        {withGlobalStyles && <GlobalStyles theme={mergedTheme} />}
        {withCSSVariables && <MantineCssVariables theme={mergedTheme} />}
        {typeof mergedTheme.globalStyles === 'function' && (
          <Global styles={mergedTheme.globalStyles(mergedTheme) as any} />
        )}
        {children}
      </MantineProviderContext.Provider>
    </ThemeProvider>
  );
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
