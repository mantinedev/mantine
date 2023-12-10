import React from 'react';
import {
  filterProps,
  getBaseValue,
  getSortedBreakpoints,
  getSpacing,
  InlineStyles,
  keys,
  MantineBreakpoint,
  useMantineTheme,
} from '../../core';
import type { SimpleGridProps } from './SimpleGrid';

interface SimpleGridVariablesProps extends SimpleGridProps {
  selector: string;
}

export function SimpleGridVariables({
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

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );

  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value as MantineBreakpoint]})`,
    styles: queries[breakpoint.value],
  }));

  return <InlineStyles styles={baseStyles} media={media} selector={selector} />;
}
