import { createContext, useContext } from 'react';
import { ConvertCSSVariablesInput } from './convert-css-variables';
import type { MantineColorScheme, MantineTheme } from './theme.types';

export interface MantineStylesTransform {
  sx?: () => (sx: any) => string;
  styles?: () => (styles: any, payload: any) => Record<string, string>;
}

interface MantineContextValue {
  colorScheme: MantineColorScheme;
  setColorScheme: (colorScheme: MantineColorScheme) => void;
  clearColorScheme: () => void;
  getRootElement: () => HTMLElement | undefined;
  classNamesPrefix: string;
  getStyleNonce?: () => string | undefined;
  cssVariablesResolver?: (theme: MantineTheme) => ConvertCSSVariablesInput;
  cssVariablesSelector: string;
  withStaticClasses: boolean;
  headless?: boolean;
  stylesTransform?: MantineStylesTransform;
}

export const MantineContext = createContext<MantineContextValue | null>(null);

export function useMantineContext() {
  const ctx = useContext(MantineContext);

  if (!ctx) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  return ctx;
}

export function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}

export function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}

export function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}

export function useMantineWithStaticClasses() {
  return useMantineContext().withStaticClasses;
}

export function useMantineIsHeadless() {
  return useMantineContext().headless;
}

export function useMantineSxTransform() {
  return useMantineContext().stylesTransform?.sx;
}

export function useMantineStylesTransform() {
  return useMantineContext().stylesTransform?.styles;
}
