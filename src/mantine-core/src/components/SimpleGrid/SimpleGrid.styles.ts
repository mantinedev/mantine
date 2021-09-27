import { createStyles, MantineNumberSize, getSizeValue } from '@mantine/styles';

export interface SimpleGridBreakpoint {
  maxWidth: MantineNumberSize;
  cols: number;
  spacing?: MantineNumberSize;
}

interface SimpleGridStyles {
  spacing: MantineNumberSize;
  breakpoints: SimpleGridBreakpoint[];
  cols: number;
}

export default createStyles((theme, { spacing, breakpoints, cols }: SimpleGridStyles) => {
  const baseSpacing = getSizeValue({ size: spacing, sizes: theme.spacing });

  const gridBreakpoints = breakpoints.reduce(
    (acc, breakpoint) => {
      const breakpointSpacing = getSizeValue({
        size: breakpoint.spacing || spacing,
        sizes: theme.spacing,
      });

      const query = `@media (max-width: ${getSizeValue({
        size: breakpoint.maxWidth,
        sizes: theme.breakpoints,
      })}px)`;

      acc.grid[query] = {
        margin: -breakpointSpacing / 2,
      };

      acc.col[query] = {
        margin: breakpointSpacing / 2,
        maxWidth: `calc(${100 / breakpoint.cols}% - ${breakpointSpacing}px)`,
      };

      return acc;
    },
    { grid: {}, col: {} }
  );

  return {
    grid: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      margin: -baseSpacing / 2,
      ...gridBreakpoints.grid,
    },

    col: {
      boxSizing: 'border-box',
      width: '100%',
      margin: `${baseSpacing / 2}px`,
      maxWidth: `calc(${100 / cols}% - ${baseSpacing}px)`,
      ...gridBreakpoints.col,
    },
  };
});
