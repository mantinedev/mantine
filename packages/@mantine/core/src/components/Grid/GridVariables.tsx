import {
  filterProps,
  getBaseValue,
  getSortedBreakpoints,
  getSpacing,
  InlineStyles,
  keys,
  useMantineTheme,
} from '../../core';
import type { GridProps } from './Grid';
import type { GridBreakpoints } from './Grid.context';

interface GridVariablesProps extends GridProps {
  selector: string;
}

export function GridVariables({ gutter, selector, breakpoints, type }: GridVariablesProps) {
  const theme = useMantineTheme();
  const _breakpoints = breakpoints || theme.breakpoints;

  const baseStyles: Record<string, string | undefined> = filterProps({
    '--grid-gutter': getSpacing(getBaseValue(gutter)),
  });

  const queries = keys(_breakpoints).reduce<Record<string, Record<string, any>>>(
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

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), _breakpoints).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );

  const values = sortedBreakpoints.map((breakpoint) => ({
    query:
      type === 'container'
        ? `mantine-grid (min-width: ${_breakpoints[breakpoint.value as keyof GridBreakpoints]})`
        : `(min-width: ${_breakpoints[breakpoint.value as keyof GridBreakpoints]})`,
    styles: queries[breakpoint.value],
  }));

  return (
    <InlineStyles
      styles={baseStyles}
      media={type === 'container' ? undefined : values}
      container={type === 'container' ? values : undefined}
      selector={selector}
    />
  );
}
