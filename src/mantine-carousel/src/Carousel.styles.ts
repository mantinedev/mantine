import {
  createStyles,
  getSortedBreakpoints,
  MantineNumberSize,
  rem,
  getBreakpointValue,
  getSize,
} from '@mantine/core';
import { CarouselBreakpoint } from './types';

export interface CarouselStylesParams {
  controlSize: number | string;
  controlsOffset: MantineNumberSize;
  orientation: 'vertical' | 'horizontal';
  height: React.CSSProperties['height'];
  includeGapInSize: boolean;
  breakpoints: CarouselBreakpoint[];
  slideGap: MantineNumberSize;
}

export default createStyles(
  (
    theme,
    {
      controlSize,
      controlsOffset,
      orientation,
      height,
      includeGapInSize,
      breakpoints = [],
      slideGap,
    }: CarouselStylesParams
  ) => {
    const horizontal = orientation === 'horizontal';

    // Container styles by slideGap (for includeGapInSize case)
    const getContainerStyles = (gap: MantineNumberSize) => {
      if (!includeGapInSize) return {};

      const slideGapValue = getSize({ size: gap, sizes: theme.spacing });

      return {
        [orientation === 'horizontal'
          ? 'marginRight'
          : 'marginBottom']: `calc(${slideGapValue} * -1)`,
      };
    };

    const hasDiff = breakpoints.some(
      (v) => typeof v.slideGap !== 'undefined' || typeof v.slideSize !== 'undefined'
    );

    // Apply styles for breakpoints only if has different gap or size
    const containerBreakpoints = !hasDiff
      ? null
      : getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
          const property = 'maxWidth' in breakpoint ? 'max-width' : 'min-width';
          const breakpointSize = getSize({
            size: (property === 'max-width' ? breakpoint.maxWidth : breakpoint.minWidth)!,
            sizes: theme.breakpoints,
          });

          const breakpointSlideGap =
            typeof breakpoint.slideGap === 'undefined' ? undefined : rem(breakpoint.slideGap);

          const breakpointValue =
            getBreakpointValue(breakpointSize) - (property === 'max-width' ? 1 : 0);

          acc[`@media (${property}: ${rem(breakpointValue)})`] =
            getContainerStyles(breakpointSlideGap);

          return acc;
        }, {} as any);

    return {
      root: {
        position: 'relative',
      },

      viewport: {
        height: rem(height),
        overflow: 'hidden',
      },

      container: {
        display: 'flex',
        flexDirection: horizontal ? 'row' : 'column',
        height: rem(height),
        ...getContainerStyles(slideGap),
        ...containerBreakpoints,
      },

      controls: {
        position: 'absolute',
        zIndex: 1,
        left: horizontal ? 0 : `calc(50% - ${rem(controlSize)} / 2)`,
        right: horizontal ? 0 : undefined,
        top: horizontal ? `calc(50% - ${rem(controlSize)} / 2)` : 0,
        bottom: horizontal ? undefined : 0,
        display: 'flex',
        flexDirection: horizontal ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: horizontal
          ? getSize({ size: controlsOffset, sizes: theme.spacing })
          : undefined,
        paddingRight: horizontal
          ? getSize({ size: controlsOffset, sizes: theme.spacing })
          : undefined,
        paddingTop: !horizontal
          ? getSize({ size: controlsOffset, sizes: theme.spacing })
          : undefined,
        paddingBottom: !horizontal
          ? getSize({ size: controlsOffset, sizes: theme.spacing })
          : undefined,
        pointerEvents: 'none',
      },

      control: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: rem(controlSize),
        minHeight: rem(controlSize),
        borderRadius: rem(controlSize),
        pointerEvents: 'all',
        backgroundColor: theme.white,
        color: theme.black,
        boxShadow: theme.shadows.md,
        opacity: theme.colorScheme === 'dark' ? 0.65 : 0.85,
        border: `${rem(1)} solid ${theme.colors.gray[3]}`,
        transition: `opacity 150ms ${theme.transitionTimingFunction}`,
        ...theme.fn.hover({ opacity: 1 }),
        '&:active': theme.activeStyles,
      },

      indicators: {
        position: 'absolute',
        bottom: horizontal ? theme.spacing.md : 0,
        top: horizontal ? undefined : 0,
        left: horizontal ? 0 : undefined,
        right: horizontal ? 0 : theme.spacing.md,
        display: 'flex',
        flexDirection: horizontal ? 'row' : 'column',
        justifyContent: 'center',
        gap: rem(8),
        pointerEvents: 'none',
      },

      indicator: {
        pointerEvents: 'all',
        width: horizontal ? rem(25) : rem(5),
        height: horizontal ? rem(5) : rem(25),
        borderRadius: theme.radius.xl,
        backgroundColor: theme.white,
        boxShadow: theme.shadows.sm,
        opacity: 0.6,
        transition: `opacity 150ms ${theme.transitionTimingFunction}`,

        '&[data-active]': {
          opacity: 1,
        },
      },
    };
  }
);
