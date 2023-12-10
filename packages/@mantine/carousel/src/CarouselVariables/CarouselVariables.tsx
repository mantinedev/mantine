import React from 'react';
import {
  filterProps,
  getBaseValue,
  getSortedBreakpoints,
  getSpacing,
  InlineStyles,
  keys,
  MantineBreakpoint,
  rem,
  useMantineTheme,
} from '@mantine/core';
import type { CarouselProps } from '../Carousel';

interface CarouselVariablesProps extends CarouselProps {
  selector: string;
}

export function CarouselVariables({ slideGap, slideSize, selector }: CarouselVariablesProps) {
  const theme = useMantineTheme();

  const baseStyles: Record<string, string | undefined> = filterProps({
    '--carousel-slide-gap': getSpacing(getBaseValue(slideGap)),
    '--carousel-slide-size': rem(getBaseValue(slideSize)),
  });

  const queries = keys(theme.breakpoints).reduce<Record<string, Record<string, any>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }

      if (typeof slideGap === 'object' && slideGap[breakpoint] !== undefined) {
        acc[breakpoint]['--carousel-slide-gap'] = getSpacing(slideGap[breakpoint]);
      }

      if (typeof slideSize === 'object' && slideSize[breakpoint] !== undefined) {
        acc[breakpoint]['--carousel-slide-size'] = getSpacing(slideSize[breakpoint]);
      }

      return acc;
    },
    {}
  );

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );

  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value as MantineBreakpoint]})`,
    styles: queries[breakpoint.value],
  }));

  return <InlineStyles styles={baseStyles} media={media} selector={selector} />;
}
