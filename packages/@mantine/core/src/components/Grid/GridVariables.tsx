import { filterProps, getBaseValue, getSpacing, InlineStyles, useMantineTheme } from '../../core';
import { getGridQueries } from './get-grid-queries';
import type { GridProps } from './Grid';

interface GridVariablesProps extends Pick<
  GridProps,
  'gap' | 'rowGap' | 'columnGap' | 'breakpoints' | 'type'
> {
  selector: string;
}

export function GridVariables({
  gap,
  rowGap,
  columnGap,
  selector,
  breakpoints,
  type,
}: GridVariablesProps) {
  const theme = useMantineTheme();

  const baseStyles: Record<string, string | undefined> = filterProps({
    '--grid-gap': getSpacing(getBaseValue(gap)),
    '--grid-row-gap': getSpacing(getBaseValue(rowGap)),
    '--grid-column-gap': getSpacing(getBaseValue(columnGap)),
  });

  const queries = getGridQueries({
    breakpoints: breakpoints || theme.breakpoints,
    type,
    getBreakpointStyles: (breakpoint) => {
      const styles: Record<string, string | undefined> = {};

      if (typeof gap === 'object' && gap[breakpoint] !== undefined) {
        styles['--grid-gap'] = getSpacing(gap[breakpoint]);
      }

      if (typeof rowGap === 'object' && rowGap[breakpoint] !== undefined) {
        styles['--grid-row-gap'] = getSpacing(rowGap[breakpoint]);
      }

      if (typeof columnGap === 'object' && columnGap[breakpoint] !== undefined) {
        styles['--grid-column-gap'] = getSpacing(columnGap[breakpoint]);
      }

      return styles;
    },
  });

  return <InlineStyles styles={baseStyles} selector={selector} {...queries} />;
}
