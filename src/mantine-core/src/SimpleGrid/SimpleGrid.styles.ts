import { createStyles, MantineNumberSize } from '@mantine/styles';
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

      acc[`@media (${property}: ${breakpointSize + (property === 'max-width' ? 0 : 1)}px)`] = {
        gridTemplateColumns: `repeat(${breakpoint.cols}, minmax(0, 1fr))`,
        gap: `${theme.fn.size({
          size: breakpoint.verticalSpacing || (hasVerticalSpacing ? verticalSpacing : spacing),
          sizes: theme.spacing,
        })}px ${theme.fn.size({
          size: breakpoint.spacing || spacing,
          sizes: theme.spacing,
        })}px`,
      };

      return acc;
    }, {});

    return {
      root: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: `${theme.fn.size({
          size: hasVerticalSpacing ? verticalSpacing : spacing,
          sizes: theme.spacing,
        })}px ${theme.fn.size({
          size: spacing,
          sizes: theme.spacing,
        })}px`,
        ...gridBreakpoints,
      },
    };
  }
);
