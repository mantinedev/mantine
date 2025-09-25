import type { MantineTheme } from '../../MantineProvider';
import type { StyleProp } from '../../Box';
import { keys } from '../keys/keys';
import { getSortedBreakpoints } from '../get-sorted-breakpoints/get-sorted-breakpoints';
import { getSize, getFontSize, getSpacing, getRadius, getShadow, getLineHeight } from '../get-size/get-size';
import { getBaseValue } from '../get-base-value/get-base-value';

type SizeGetter = (size: unknown) => string | undefined;

interface ResponsiveSizeOptions {
  size: StyleProp<any>;
  property: string;
  getter?: SizeGetter;
  theme: MantineTheme;
}

/**
 * Creates CSS variables for responsive size properties
 */
export function createResponsiveSizeVariables({
  size,
  property,
  getter = getSize,
  theme,
}: ResponsiveSizeOptions) {
  // If not a responsive object, return simple base variable
  if (typeof size !== 'object' || size === null) {
    return {
      base: { [property]: getter(size) },
      media: [],
    };
  }

  const baseValue = getBaseValue(size);
  const breakpointKeys = keys(size).filter((key) => key !== 'base');

  if (breakpointKeys.length === 0) {
    return {
      base: { [property]: getter(baseValue) },
      media: [],
    };
  }

  const base = { [property]: getter(baseValue) };
  const sortedBreakpoints = getSortedBreakpoints(breakpointKeys, theme.breakpoints);

  const media = sortedBreakpoints.map(({ value }) => ({
    query: `(min-width: ${getBreakpointValue(value, theme.breakpoints)}em)`,
    styles: {
      [property]: getter(size[value as keyof typeof size]),
    },
  }));

  return { base, media };
}

function getBreakpointValue(breakpoint: string, breakpoints: Record<string, string>): string {
  return breakpoints[breakpoint] || breakpoint;
}

/**
 * Convenience functions for common size properties
 */
export const createResponsiveFontSizeVariables = (size: StyleProp<any>, property: string, theme: MantineTheme) =>
  createResponsiveSizeVariables({ size, property, getter: getFontSize, theme });

export const createResponsiveSpacingVariables = (size: StyleProp<any>, property: string, theme: MantineTheme) =>
  createResponsiveSizeVariables({ size, property, getter: getSpacing, theme });

export const createResponsiveRadiusVariables = (size: StyleProp<any>, property: string, theme: MantineTheme) =>
  createResponsiveSizeVariables({ size, property, getter: getRadius, theme });