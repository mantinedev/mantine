import { getSortedBreakpoints, InlineStylesMediaQuery, keys } from '../../core';
import type { GridBreakpoints } from './Grid.context';

type GridQueryStyles = Record<string, string | undefined>;

interface GetGridQueriesInput {
  breakpoints: GridBreakpoints;
  type: 'media' | 'container' | undefined;
  getBreakpointStyles: (breakpoint: keyof GridBreakpoints) => GridQueryStyles;
}

export function getGridQueries({ breakpoints, type, getBreakpointStyles }: GetGridQueriesInput): {
  media?: InlineStylesMediaQuery[];
  container?: InlineStylesMediaQuery[];
} {
  const queries = keys(breakpoints).reduce<Record<string, GridQueryStyles>>((acc, breakpoint) => {
    acc[breakpoint] = getBreakpointStyles(breakpoint);
    return acc;
  }, {});

  const isContainer = type === 'container';

  const values = getSortedBreakpoints(keys(queries), breakpoints)
    .filter((breakpoint) => keys(queries[breakpoint.value]).length > 0)
    .map((breakpoint) => ({
      query: `${isContainer ? 'mantine-grid ' : ''}(min-width: ${breakpoints[breakpoint.value as keyof GridBreakpoints]})`,
      styles: queries[breakpoint.value],
    }));

  return isContainer ? { container: values } : { media: values };
}
