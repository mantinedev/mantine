import { EmblaCarouselType } from 'embla-carousel-react';
import { MantineNumberSize } from '@mantine/core';
import { createSafeContext } from '@mantine/utils';

interface CarouselContext {
  emblaApi: EmblaCarouselType;
  slideSize: string | number;
  slideGap: MantineNumberSize;
}

export const [CarouselProvider, useCarouselContext] = createSafeContext<CarouselContext>(
  'Carousel component was now found in tree'
);
