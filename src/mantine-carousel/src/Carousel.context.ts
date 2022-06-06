import { MantineNumberSize } from '@mantine/core';
import { createSafeContext } from '@mantine/utils';
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
  'Carousel component was now found in tree'
);
