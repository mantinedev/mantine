/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { useComponentDefaultProps, Box, DefaultProps } from '@mantine/core';
import useEmblaCarousel from 'embla-carousel-react';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { CarouselSlide } from './CarouselSlide/CarouselSlide';
import useStyles from './Carousel.styles';

export interface CarouselProps extends DefaultProps {
  /** <Carousel.Slide /> components */
  children: React.ReactNode;
}

const defaultProps: Partial<CarouselProps> = {};

export const _Carousel = forwardRef<HTMLDivElement, CarouselProps>((props, ref) => {
  const { children, className, ...others } = useComponentDefaultProps(
    'Carousel',
    defaultProps,
    props
  );
  const [emblaRef] = useEmblaCarousel();
  const { classes, cx } = useStyles();

  return (
    <Box className={cx(classes.root, className)} ref={useMergedRef(emblaRef, ref)} {...others}>
      <div className={classes.container}>{children}</div>
    </Box>
  );
}) as any;

_Carousel.Slide = CarouselSlide;
_Carousel.displayName = '@mantine/carousel/Carousel';

export const Carousel: ForwardRefWithStaticComponents<
  CarouselProps,
  { Slide: typeof CarouselSlide }
> = _Carousel;
