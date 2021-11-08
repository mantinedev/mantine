import { createStyles, MantineNumberSize } from '@mantine/styles';

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
  const gridBreakpoints = breakpoints.reduce((acc, breakpoint) => {
    const breakpointSize = theme.fn.size({ size: breakpoint.maxWidth, sizes: theme.breakpoints });
    acc[`@media (max-width: ${breakpointSize}px)`] = {
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
