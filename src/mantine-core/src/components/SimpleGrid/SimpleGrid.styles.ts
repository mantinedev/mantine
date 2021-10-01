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
  const gridBreakpoints = breakpoints.reduce((acc, breakpoint) => {
    const breakpointSize = getSizeValue({ size: breakpoint.maxWidth, sizes: theme.breakpoints });
    acc[`@media (max-width: ${breakpointSize}px)`] = {
      gridTemplateColumns: `repeat(${breakpoint.cols}, minmax(auto, ${100 / breakpoint.cols}%))`,
      gap: getSizeValue({
        size: breakpoint.spacing || spacing,
        sizes: theme.spacing,
      }),
    };

    return acc;
  }, {});

  return {
    grid: {
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, minmax(auto, ${100 / cols}%))`,
      gap: getSizeValue({ size: spacing, sizes: theme.spacing }),
      ...gridBreakpoints,
    },
  };
});
