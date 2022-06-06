import { MantineNumberSize } from '@mantine/core';
import { createSafeContext } from '@mantine/utils';
import { CarouselOrientation, EmblaApi } from './types';

interface CarouselContext {
  emblaApi: EmblaApi;
  slideSize: string | number;
  slideGap: MantineNumberSize;
  orientation: CarouselOrientation;
}

export const [CarouselProvider, useCarouselContext] = createSafeContext<CarouselContext>(
  'Carousel component was now found in tree'
);
