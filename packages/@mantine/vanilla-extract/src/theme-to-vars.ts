import {
  DEFAULT_THEME,
  em,
  MantineTheme,
  MantineThemeOverride,
  mergeMantineTheme,
} from '@mantine/core';
import {
  Colors,
  FontSizes,
  Heading,
  Headings,
  LineHeights,
  MantineVars,
  Radius,
  Shadows,
  Spacing,
} from './types';

function getSizesVariables<Result>(theme: any, themeKey: string, name: string): Result {
  return Object.keys(theme[themeKey]).reduce((acc: any, size) => {
    acc[size] = `var(--mantine-${name}-${size})`;
    return acc;
  }, {});
}

function getBreakpointValue(value: string | number, theme: MantineTheme) {
  return value in theme.breakpoints ? (theme.breakpoints as any)[value] : em(value);
}

export function themeToVars(theme: MantineThemeOverride): MantineVars {
  const mergedTheme = mergeMantineTheme(DEFAULT_THEME, theme);

  const fontSizes = getSizesVariables<FontSizes>(mergedTheme, 'fontSizes', 'font-size');

  const lineHeights = getSizesVariables<LineHeights>(mergedTheme, 'lineHeights', 'line-height');

  const shadows = getSizesVariables<Shadows>(mergedTheme, 'shadows', 'shadow');
  const radius = getSizesVariables<Radius>(mergedTheme, 'radius', 'radius');
  const spacing = getSizesVariables<Spacing>(mergedTheme, 'spacing', 'spacing');

  const headings = Object.keys(mergedTheme.headings.sizes).reduce(
    (acc: Record<string, Heading>, heading) => {
      acc[heading] = {
        fontSize: `var(--mantine-${heading}-font-size)`,
        lineHeight: `var(--mantine-${heading}-line-height)`,
        fontWeight: `var(--mantine-${heading}-font-weight)`,
      };
      return acc;
    },
    {}
  ) as Headings;

  const colors = Object.keys(mergedTheme.colors).reduce(
    (acc: any, color) => {
      acc[color] = {
        0: `var(--mantine-color-${color}-0)`,
        1: `var(--mantine-color-${color}-1)`,
        2: `var(--mantine-color-${color}-2)`,
        3: `var(--mantine-color-${color}-3)`,
        4: `var(--mantine-color-${color}-4)`,
        5: `var(--mantine-color-${color}-5)`,
        6: `var(--mantine-color-${color}-6)`,
        7: `var(--mantine-color-${color}-7)`,
        8: `var(--mantine-color-${color}-8)`,
        9: `var(--mantine-color-${color}-9)`,
        filled: `var(--mantine-color-${color}-filled)`,
        filledHover: `var(--mantine-color-${color}-filled-hover)`,
        light: `var(--mantine-color-${color}-light)`,
        lightHover: `var(--mantine-color-${color}-light-hover)`,
        lightColor: `var(--mantine-color-${color}-light-color)`,
        outline: `var(--mantine-color-${color}-outline)`,
        outlineHover: `var(--mantine-color-${color}-outline-hover)`,
      };

      return acc;
    },
    {
      primary: 'var(--mantine-primary-color-filled)',
      primaryColors: {
        0: 'var(--mantine-primary-color-0)',
        1: 'var(--mantine-primary-color-1)',
        2: 'var(--mantine-primary-color-2)',
        3: 'var(--mantine-primary-color-3)',
        4: 'var(--mantine-primary-color-4)',
        5: 'var(--mantine-primary-color-5)',
        6: 'var(--mantine-primary-color-6)',
        7: 'var(--mantine-primary-color-7)',
        8: 'var(--mantine-primary-color-8)',
        9: 'var(--mantine-primary-color-9)',
        filled: 'var(--mantine-primary-color-filled)',
        filledHover: 'var(--mantine-primary-color-filled-hover)',
        light: 'var(--mantine-primary-color-light)',
        lightHover: 'var(--mantine-primary-color-light-hover)',
        lightColor: 'var(--mantine-primary-color-light-color)',
        outline: 'var(--mantine-primary-color-outline)',
        outlineHover: 'var(--mantine-primary-color-outline-hover)',
      },
      white: 'var(--mantine-color-white)',
      black: 'var(--mantine-color-black)',
      text: 'var(--mantine-color-text)',
      body: 'var(--mantine-color-body)',
      error: 'var(--mantine-color-error)',
      placeholder: 'var(--mantine-color-placeholder)',
      anchor: 'var(--mantine-color-anchor)',
      default: 'var(--mantine-color-default)',
      defaultHover: 'var(--mantine-color-default-hover)',
      defaultColor: 'var(--mantine-color-default-color)',
      defaultBorder: 'var(--mantine-color-default-border)',
      dimmed: 'var(--mantine-color-dimmed)',
    }
  ) as Colors;

  return {
    scale: 'var(--mantine-scale)',
    cursorType: 'var(--mantine-cursor-type)',
    webkitFontSmoothing: 'var(--mantine-webkit-font-smoothing)',
    mozFontSmoothing: 'var(--mantine-moz-font-smoothing)',
    lineHeight: 'var(--mantine-line-height)',
    fontFamily: 'var(--mantine-font-family)',
    fontFamilyMonospace: 'var(--mantine-font-family-monospace)',
    fontFamilyHeadings: 'var(--mantine-font-family-headings)',
    headingFontWeight: 'var(--mantine-heading-font-weight)',
    radiusDefault: 'var(--mantine-radius-default)',
    breakpoints: mergedTheme.breakpoints,
    fontSizes,
    lineHeights,
    shadows,
    radius,
    headings,
    spacing,
    colors,

    rtlSelector: '[dir="rtl"] &',
    darkSelector: '[data-mantine-color-scheme="dark"] &',
    lightSelector: '[data-mantine-color-scheme="light"] &',

    smallerThan: (breakpoint) => `(max-width: ${getBreakpointValue(breakpoint, mergedTheme)})`,
    largerThan: (breakpoint) => `(min-width: ${getBreakpointValue(breakpoint, mergedTheme)})`,
  };
}
