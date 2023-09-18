import './global.css';
import React from 'react';
import { suppressNextjsWarning } from './suppress-nextjs-warning';
import { MantineCssVariables, CSSVariablesResolver } from './MantineCssVariables';
import { MantineThemeProvider } from './MantineThemeProvider';
import type { MantineColorScheme, MantineThemeOverride } from './theme.types';
import { MantineClasses } from './MantineClasses';
import { localStorageColorSchemeManager, MantineColorSchemeManager } from './color-scheme-managers';
import { MantineContext } from './Mantine.context';
import { useProviderColorScheme } from './use-mantine-color-scheme';
import { useRespectReduceMotion } from './use-respect-reduce-motion';

suppressNextjsWarning();

export interface MantineProviderProps {
  /** Theme override object */
  theme?: MantineThemeOverride;

  /** Used to retrieve/set color scheme value in external storage, by default uses `window.localStorage` */
  colorSchemeManager?: MantineColorSchemeManager;

  /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `light` by default */
  defaultColorScheme?: MantineColorScheme;

  /** Forces color scheme value, if set, MantineProvider ignores `colorSchemeManager` and `defaultColorScheme` */
  forceColorScheme?: 'light' | 'dark';

  /** CSS selector to which CSS variables should be added, `:root` by default */
  cssVariablesSelector?: string;

  /** Determines whether theme CSS variables should be added to given `cssVariablesSelector`, `true` by default */
  withCssVariables?: boolean;

  /** Function to resolve root element to set `data-mantine-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
  getRootElement?(): HTMLElement | undefined;

  /** A prefix for components static classes (for example {selector}-Text-root), `mantine` by default */
  classNamesPrefix?: string;

  /** Function to generate nonce attribute added to all generated `<style />` tags */
  getStyleNonce?(): string;

  /** Function to generate CSS variables based on theme object */
  cssVariablesResolver?: CSSVariablesResolver;

  /** Your application */
  children?: React.ReactNode;
}

export function MantineProvider({
  theme,
  children,
  getStyleNonce,
  withCssVariables = true,
  cssVariablesSelector = ':root',
  classNamesPrefix = 'mantine',
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = 'light',
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme,
}: MantineProviderProps) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement,
  });

  useRespectReduceMotion({
    respectReducedMotion: theme?.respectReducedMotion || false,
    getRootElement,
  });

  return (
    <MantineContext.Provider
      value={{
        colorSchemeManager,
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector,
      }}
    >
      <MantineThemeProvider theme={theme}>
        {withCssVariables && <MantineCssVariables cssVariablesSelector={cssVariablesSelector} />}
        <MantineClasses />
        {children}
      </MantineThemeProvider>
    </MantineContext.Provider>
  );
}

MantineProvider.displayName = '@mantine/core/MantineProvider';
