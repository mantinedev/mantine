/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef, useEffect, useCallback } from 'react';
import { assignRef } from '@mantine/hooks';
import {
  useComponentDefaultProps,
  Box,
  DefaultProps,
  UnstyledButton,
  ChevronIcon,
  MantineNumberSize,
} from '@mantine/core';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { CarouselSlide } from './CarouselSlide/CarouselSlide';
import useStyles from './Carousel.styles';

export interface CarouselProps extends DefaultProps {
  /** <Carousel.Slide /> components */
  children: React.ReactNode;

  /** Called when user clicks next button */
  onNextSlide?(): void;

  /** Called when user clicks previous button */
  onPreviousSlide?(): void;

  /** Get embla API as ref */
  emblaApiRef?: React.ForwardedRef<EmblaCarouselType>;

  /** Next control aria-label */
  nextControlLabel?: string;

  /** Previous control aria-label */
  previousControlLabel?: string;

  /** Previous/next controls size in px */
  controlSize?: number;

  /** Key of theme.spacing or number to set space between next/previous control and carousel boundary */
  controlsOffset?: MantineNumberSize;
}

const defaultProps: Partial<CarouselProps> = {
  controlSize: 30,
  controlsOffset: 'sm',
};

export const _Carousel = forwardRef<HTMLDivElement, CarouselProps>((props, ref) => {
  const {
    children,
    className,
    emblaApiRef,
    onNextSlide,
    onPreviousSlide,
    nextControlLabel,
    previousControlLabel,
    controlSize,
    controlsOffset,
    classNames,
    styles,
    unstyled,
    ...others
  } = useComponentDefaultProps('Carousel', defaultProps, props);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { classes, cx, theme } = useStyles(
    { controlSize, controlsOffset },
    { name: 'Carousel', classNames, styles, unstyled }
  );

  const handlePrevious = useCallback(() => {
    emblaApi?.scrollPrev();
    onPreviousSlide?.();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    emblaApi?.scrollNext();
    onNextSlide?.();
  }, [emblaApi]);

  useEffect(() => {
    assignRef(emblaApiRef, emblaApi);
  }, [emblaApi]);

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      <div className={classes.viewport} ref={emblaRef}>
        <div className={classes.container}>{children}</div>
      </div>
      <div className={classes.controls}>
        <UnstyledButton
          onClick={handlePrevious}
          className={classes.control}
          aria-label={previousControlLabel}
        >
          <ChevronIcon style={{ transform: `rotate(${theme.dir === 'ltr' ? '' : '-'}90deg)` }} />
        </UnstyledButton>

        <UnstyledButton
          onClick={handleNext}
          className={classes.control}
          aria-label={nextControlLabel}
        >
          <ChevronIcon style={{ transform: `rotate(${theme.dir === 'ltr' ? '-' : ''}90deg)` }} />
        </UnstyledButton>
      </div>
    </Box>
  );
}) as any;

_Carousel.Slide = CarouselSlide;
_Carousel.displayName = '@mantine/carousel/Carousel';

export const Carousel: ForwardRefWithStaticComponents<
  CarouselProps,
  { Slide: typeof CarouselSlide }
> = _Carousel;
