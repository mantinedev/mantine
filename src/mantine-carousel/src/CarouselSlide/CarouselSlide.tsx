import React, { forwardRef } from 'react';
import { Box, DefaultProps, Selectors } from '@mantine/core';
import useStyles from './CarouselSlide.styles';

export type CarouselSlideStylesNames = Selectors<typeof useStyles>;

export interface CarouselSlideProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Slide content */
  children?: React.ReactNode;
}

export const CarouselSlide = forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ children, className, ...others }, ref) => {
    const { classes, cx } = useStyles();
    return (
      <Box className={cx(classes.slide, className)} ref={ref} {...others}>
        {children}
      </Box>
    );
  }
);

CarouselSlide.displayName = '@mantine/carousel/CarouselSlide';
