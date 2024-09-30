import {
  filterProps,
  getBaseValue,
  getSortedBreakpoints,
  getSpacing,
  InlineStyles,
  keys,
  MantineBreakpoint,
  px,
  useMantineTheme,
} from '../../core';
import type { SimpleGridProps } from './SimpleGrid';

interface SimpleGridVariablesProps extends SimpleGridProps {
  selector: string;
}

export function SimpleGridMediaVariables({
  spacing,
  verticalSpacing,
  cols,
  selector,
}: SimpleGridVariablesProps) {
  const theme = useMantineTheme();
  const _verticalSpacing = verticalSpacing === undefined ? spacing : verticalSpacing;

  const baseStyles: Record<string, string | undefined> = filterProps({
    '--sg-spacing-x': getSpacing(getBaseValue(spacing)),
    '--sg-spacing-y': getSpacing(getBaseValue(_verticalSpacing)),
    '--sg-cols': getBaseValue(cols)?.toString(),
  });

  const queries = keys(theme.breakpoints).reduce<Record<string, Record<string, any>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }

      if (typeof spacing === 'object' && spacing[breakpoint] !== undefined) {
        acc[breakpoint]['--sg-spacing-x'] = getSpacing(spacing[breakpoint]);
      }

      if (typeof _verticalSpacing === 'object' && _verticalSpacing[breakpoint] !== undefined) {
        acc[breakpoint]['--sg-spacing-y'] = getSpacing(_verticalSpacing[breakpoint]);
      }

      if (typeof cols === 'object' && cols[breakpoint] !== undefined) {
        acc[breakpoint]['--sg-cols'] = cols[breakpoint];
      }

      return acc;
    },
    {}
  );

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme.breakpoints).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );

  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value as MantineBreakpoint]})`,
    styles: queries[breakpoint.value],
  }));

  return <InlineStyles styles={baseStyles} media={media} selector={selector} />;
}

function getBreakpoints(values: unknown) {
  if (typeof values === 'object' && values !== null) {
    return keys(values);
  }

  return [];
}

function sortBreakpoints(breakpoints: string[]) {
  return breakpoints.sort((a, b) => (px(a) as number) - (px(b) as number));
}

function getUniqueBreakpoints({
  spacing,
  verticalSpacing,
  cols,
}: Omit<SimpleGridVariablesProps, 'selector'>) {
  const breakpoints = Array.from(
    new Set([
      ...getBreakpoints(spacing),
      ...getBreakpoints(verticalSpacing),
      ...getBreakpoints(cols),
    ])
  );

  return sortBreakpoints(breakpoints);
}

export function SimpleGridContainerVariables({
  spacing,
  verticalSpacing,
  cols,
  selector,
}: SimpleGridVariablesProps) {
  const _verticalSpacing = verticalSpacing === undefined ? spacing : verticalSpacing;

  const baseStyles: Record<string, string | undefined> = filterProps({
    '--sg-spacing-x': getSpacing(getBaseValue(spacing)),
    '--sg-spacing-y': getSpacing(getBaseValue(_verticalSpacing)),
    '--sg-cols': getBaseValue(cols)?.toString(),
  });

  const uniqueBreakpoints = getUniqueBreakpoints({ spacing, verticalSpacing, cols });

  const queries = uniqueBreakpoints.reduce<Record<string, Record<string, any>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }

      if (typeof spacing === 'object' && spacing[breakpoint] !== undefined) {
        acc[breakpoint]['--sg-spacing-x'] = getSpacing(spacing[breakpoint]);
      }

      if (typeof _verticalSpacing === 'object' && _verticalSpacing[breakpoint] !== undefined) {
        acc[breakpoint]['--sg-spacing-y'] = getSpacing(_verticalSpacing[breakpoint]);
      }

      if (typeof cols === 'object' && cols[breakpoint] !== undefined) {
        acc[breakpoint]['--sg-cols'] = cols[breakpoint];
      }

      return acc;
    },
    {}
  );

  const media = uniqueBreakpoints.map((breakpoint) => ({
    query: `simple-grid (min-width: ${breakpoint})`,
    styles: queries[breakpoint],
  }));

  return <InlineStyles styles={baseStyles} container={media} selector={selector} />;
}
