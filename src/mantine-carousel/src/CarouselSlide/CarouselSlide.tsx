import React, { forwardRef } from 'react';
import { Box, DefaultProps, Selectors, MantineNumberSize } from '@mantine/core';
import { useCarouselContext } from '../Carousel.context';
import useStyles from './CarouselSlide.styles';

export type CarouselSlideStylesNames = Selectors<typeof useStyles>;

export interface CarouselSlideProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Slide content */
  children?: React.ReactNode;

  /** Slide width, defaults to 100%, examples: 40rem, 50% */
  size?: string | number;

  /** Key of theme.spacing or number to set gap between slides */
  gap?: MantineNumberSize;
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ children, className, size, gap, ...others }, ref) => {
    const ctx = useCarouselContext();
    const { classes, cx } = useStyles(
      {
        gap: typeof gap === 'undefined' ? ctx.slideGap : gap,
        size: typeof size === 'undefined' ? ctx.slideSize : size,
        orientation: ctx.orientation,
        includeGapInSize: ctx.includeGapInSize,
        breakpoints: ctx.breakpoints,
      },
      {
        name: 'Carousel',
        classNames: ctx.classNames,
        styles: ctx.styles,
        unstyled: ctx.unstyled,
        variant: ctx.variant,
      }
    );

    return (
      <Box className={cx(classes.slide, className)} ref={ref} {...others}>
        {children}
      </Box>
    );
  }
);

CarouselSlide.displayName = '@mantine/carousel/CarouselSlide';
