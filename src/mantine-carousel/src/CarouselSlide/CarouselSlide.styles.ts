import {
  createStyles,
  MantineNumberSize,
  getSortedBreakpoints,
  rem,
  getBreakpointValue,
  getSize,
} from '@mantine/core';
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
    // Slide styles by slideGap and slideSize
    const getSlideStyles = (slideGap: MantineNumberSize, slideSize: string | number) => {
      const slideGapValue = getSize({
        size: slideGap,
        sizes: theme.spacing,
      });

      const flexBasisValue = rem(slideSize);

      const marginStyles = includeGapInSize
        ? {
            [orientation === 'horizontal' ? 'paddingRight' : 'paddingBottom']: slideGapValue,
          }
        : {
            [orientation === 'horizontal' ? 'marginRight' : 'marginBottom']: slideGapValue,
          };

      return {
        flex: `0 0 ${flexBasisValue}`,
        ...marginStyles,
      };
    };

    const hasDiff = breakpoints.some(
      (v) => typeof v.slideGap !== 'undefined' || typeof v.slideSize !== 'undefined'
    );

    // Apply styles for breakpoints only if has different gap or size
    const slideBreakpoints = !hasDiff
      ? null
      : getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
          const property = 'maxWidth' in breakpoint ? 'max-width' : 'min-width';
          const breakpointSize = getSize({
            size: property === 'max-width' ? breakpoint.maxWidth : breakpoint.minWidth,
            sizes: theme.breakpoints,
          });

          const breakpointGap =
            typeof breakpoint.slideGap === 'undefined' ? gap : breakpoint.slideGap;

          const breakpointValue =
            getBreakpointValue(breakpointSize) - (property === 'max-width' ? 1 : 0);

          acc[`@media (${property}: ${rem(breakpointValue)})`] = getSlideStyles(
            breakpointGap,
            breakpoint.slideSize
          );

          return acc;
        }, {});

    return {
      slide: {
        position: 'relative',
        ...getSlideStyles(gap, size),
        ...slideBreakpoints,
      },
    };
  }
);
