import { createStyles, MantineNumberSize } from '@mantine/styles';

export interface SimpleGridBreakpoint {
  maxWidth?: MantineNumberSize;
  minWidth?: MantineNumberSize;
  cols: number;
  spacing?: MantineNumberSize;
}

interface SimpleGridStyles {
  spacing: MantineNumberSize;
  breakpoints: SimpleGridBreakpoint[];
  cols: number;
}

export default createStyles((theme, { spacing, breakpoints, cols }: SimpleGridStyles) => {
  const gridBreakpoints = breakpoints.reduce((acc, breakpoint) => {
    const property = 'maxWidth' in breakpoint ? 'max-width' : 'min-width';
    const breakpointSize = theme.fn.size({
      size: property === 'max-width' ? breakpoint.maxWidth : breakpoint.minWidth,
      sizes: theme.breakpoints,
    });

    acc[`@media (${property}: ${breakpointSize}px)`] = {
      gridTemplateColumns: `repeat(${breakpoint.cols}, minmax(0, 1fr))`,
      gap: theme.fn.size({
        size: breakpoint.spacing || spacing,
        sizes: theme.spacing,
      }),
    };

    return acc;
  }, {});

  return {
    root: {
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gap: theme.fn.size({ size: spacing, sizes: theme.spacing }),
      ...gridBreakpoints,
    },
  };
});
