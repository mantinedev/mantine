import { createStyles, MantineNumberSize, getBreakpointValue, rem } from '@mantine/styles';
import { getSortedBreakpoints } from './get-sorted-breakpoints/get-sorted-breakpoints';

export interface SimpleGridBreakpoint {
  maxWidth?: MantineNumberSize;
  minWidth?: MantineNumberSize;
  cols: number;
  spacing?: MantineNumberSize;
  verticalSpacing?: MantineNumberSize;
}

export interface SimpleGridStylesParams {
  spacing: MantineNumberSize;
  verticalSpacing: MantineNumberSize;
  breakpoints: SimpleGridBreakpoint[];
  cols: number;
}

export default createStyles(
  (theme, { spacing, breakpoints, cols, verticalSpacing }: SimpleGridStylesParams) => {
    const hasVerticalSpacing = verticalSpacing != null;

    const gridBreakpoints = getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
      const property = 'maxWidth' in breakpoint ? 'max-width' : 'min-width';
      const breakpointSize = theme.fn.size({
        size: property === 'max-width' ? breakpoint.maxWidth : breakpoint.minWidth,
        sizes: theme.breakpoints,
      });

      const breakpointValue =
        getBreakpointValue(breakpointSize) - (property === 'max-width' ? 1 : 0);

      acc[`@media (${property}: ${rem(breakpointValue)})`] = {
        gridTemplateColumns: `repeat(${breakpoint.cols}, minmax(0, 1fr))`,
        gap: `${rem(
          theme.fn.size({
            size: breakpoint.verticalSpacing || (hasVerticalSpacing ? verticalSpacing : spacing),
            sizes: theme.spacing,
          })
        )} ${rem(
          theme.fn.size({
            size: breakpoint.spacing || spacing,
            sizes: theme.spacing,
          })
        )}`,
      };

      return acc;
    }, {});

    return {
      root: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: `${rem(
          theme.fn.size({
            size: hasVerticalSpacing ? verticalSpacing : spacing,
            sizes: theme.spacing,
          })
        )} ${rem(
          theme.fn.size({
            size: spacing,
            sizes: theme.spacing,
          })
        )}`,
        ...gridBreakpoints,
      },
    };
  }
);
