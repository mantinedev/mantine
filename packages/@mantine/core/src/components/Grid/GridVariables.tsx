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
import type { GridProps } from './Grid';

interface GridVariablesProps extends GridProps {
  selector: string;
}

export function GridVariables({ gutter, selector }: GridVariablesProps) {
  const theme = useMantineTheme();

  const baseStyles: Record<string, string | undefined> = filterProps({
    '--grid-gutter': getSpacing(getBaseValue(gutter)),
  });

  const queries = keys(theme.breakpoints).reduce<Record<string, Record<string, any>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }

      if (typeof gutter === 'object' && gutter[breakpoint] !== undefined) {
        acc[breakpoint]['--grid-gutter'] = getSpacing(gutter[breakpoint]);
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
