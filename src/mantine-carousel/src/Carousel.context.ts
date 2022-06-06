import { MantineNumberSize } from '@mantine/core';
import { createSafeContext } from '@mantine/utils';
import { CAROUSEL_ERRORS } from './Carousel.errors';
import { CarouselOrientation, Embla, CarouselBreakpoint } from './types';

interface CarouselContext {
  embla: Embla;
  slideSize: string | number;
  slideGap: MantineNumberSize;
  orientation: CarouselOrientation;
  includeGapInSize: boolean;
  breakpoints: CarouselBreakpoint[];
}

export const [CarouselProvider, useCarouselContext] = createSafeContext<CarouselContext>(
  CAROUSEL_ERRORS.context
);
