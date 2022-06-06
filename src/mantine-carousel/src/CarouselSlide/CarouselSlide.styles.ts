import { createStyles, MantineNumberSize, getSortedBreakpoints } from '@mantine/core';
import { CarouselOrientation, CarouselBreakpoint } from '../types';

export interface CarouselSlideStylesParams {
  size: string | number;
  gap: MantineNumberSize;
  orientation: CarouselOrientation;
  includeGapInSize: boolean;
  breakpoints: CarouselBreakpoint[];
}

export default createStyles(
  (
    theme,
    { size, gap, orientation, includeGapInSize, breakpoints = [] }: CarouselSlideStylesParams
  ) => {
    const slideBreakpoints = getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
      const property = 'maxWidth' in breakpoint ? 'max-width' : 'min-width';
      const breakpointSize = theme.fn.size({
        size: property === 'max-width' ? breakpoint.maxWidth : breakpoint.minWidth,
        sizes: theme.breakpoints,
      });

      acc[`@media (${property}: ${breakpointSize + (property === 'max-width' ? 0 : 1)}px)`] = {
        flex: `0 0 calc(${
          typeof breakpoint.slideSize === 'number'
            ? `${breakpoint.slideSize}px`
            : breakpoint.slideSize
        } - ${
          includeGapInSize
            ? theme.fn.size({
                size: breakpoint.slideGap || gap,
                sizes: theme.spacing,
              }) / 2
            : 0
        }px)`,

        [orientation === 'horizontal' ? 'marginRight' : 'marginBottom']: theme.fn.size({
          size: breakpoint.slideGap || gap,
          sizes: theme.spacing,
        }),
      };

      return acc;
    }, {});

    return {
      slide: {
        position: 'relative',
        flex: `0 0 calc(${typeof size === 'number' ? `${size}px` : size} - ${
          includeGapInSize
            ? theme.fn.size({
                size: gap,
                sizes: theme.spacing,
              }) / 2
            : 0
        }px)`,
        [orientation === 'horizontal' ? 'marginRight' : 'marginBottom']: theme.fn.size({
          size: gap,
          sizes: theme.spacing,
        }),

        ...slideBreakpoints,
      },
    };
  }
);
