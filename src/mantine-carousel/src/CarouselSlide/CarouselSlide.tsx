import React, { forwardRef } from 'react';
import {
  Box,
  DefaultProps,
  Selectors,
  MantineNumberSize,
  useContextStylesApi,
} from '@mantine/core';
import { useCarouselContext } from '../Carousel.context';
import useStyles from './CarouselSlide.styles';

export type CarouselSlideStylesNames = Selectors<typeof useStyles>;

export interface CarouselSlideProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Slide content */
  children?: React.ReactNode;

  /** Slide width, defaults to 100%, examples: 200px, 50% */
  size?: string | number;

  /** Key of theme.spacing or number to set gap between slides in px */
  gap?: MantineNumberSize;
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ children, className, size, gap, ...others }, ref) => {
    const ctx = useCarouselContext();
    const { classNames, styles, unstyled } = useContextStylesApi();
    const { classes, cx } = useStyles(
      {
        gap: typeof gap === 'undefined' ? ctx.slideGap : gap,
        size: typeof size === 'undefined' ? ctx.slideSize : size,
      },
      { name: 'Carousel', classNames, styles, unstyled }
    );

    return (
      <Box className={cx(classes.slide, className)} ref={ref} {...others}>
        {children}
      </Box>
    );
  }
);

CarouselSlide.displayName = '@mantine/carousel/CarouselSlide';
