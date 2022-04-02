import React, { createContext, useContext } from 'react';
import type { Options as EmotionCacheOptions } from '@emotion/cache';
import { DEFAULT_THEME } from './default-theme';
import { GlobalStyles } from './GlobalStyles';
import { MantineCssVariables } from './MantineCssVariables';
import type { MantineThemeOverride, MantineTheme } from './types';
import type { CSSObject } from '../tss';
import { mergeThemeWithFunctions } from './utils/merge-theme/merge-theme';
import { filterProps } from './utils/filter-props/filter-props';
import { NormalizeCSS } from './NormalizeCSS';

type ProviderStyles = Record<
  string,
  Record<string, CSSObject> | ((theme: MantineTheme, params: any) => Record<string, CSSObject>)
>;

type ProviderClassNames = Record<string, Record<string, string>>;
type MantineDefaultProps = Record<string, Record<string, any>>;

interface MantineProviderContextType {
  theme: MantineTheme;
  styles: ProviderStyles;
  classNames: ProviderClassNames;
  emotionOptions: EmotionCacheOptions;
  defaultProps: MantineDefaultProps;
}

const MantineProviderContext = createContext<MantineProviderContextType>({
  theme: DEFAULT_THEME,
  styles: {},
  classNames: {},
  emotionOptions: { key: 'mantine', prepend: true },
  defaultProps: {},
});

export function useMantineTheme() {
  return useContext(MantineProviderContext)?.theme || DEFAULT_THEME;
}

export function useMantineThemeStyles(component: string) {
  const ctx = useContext(MantineProviderContext);
  return { styles: ctx.styles[component] || {}, classNames: ctx.classNames[component] || {} };
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
  return { ...defaultProps, ...contextProps, ...filterProps(props) };
}

export interface MantineProviderProps {
  theme?: MantineThemeOverride;
  styles?: ProviderStyles;
  classNames?: ProviderClassNames;
  defaultProps?: MantineDefaultProps;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  withCSSVariables?: boolean;
  children: React.ReactNode;
  inherit?: boolean;
}

export function MantineProvider({
  theme,
  styles = {},
  classNames = {},
  defaultProps = {},
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
    styles: inherit ? { ...ctx.styles, ...styles } : styles,
    classNames: inherit ? { ...ctx.classNames, ...classNames } : classNames,
    defaultProps: inherit ? { ...ctx.defaultProps, ...defaultProps } : defaultProps,
  };

  const mergedTheme = mergeThemeWithFunctions(DEFAULT_THEME, overrides.themeOverride);

  return (
    <MantineProviderContext.Provider
      value={{
        theme: mergedTheme,
        styles: overrides.styles,
        classNames: overrides.classNames,
        emotionOptions: overrides.emotionOptions,
        defaultProps: overrides.defaultProps,
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
