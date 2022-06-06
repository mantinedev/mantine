import { MantineNumberSize } from '@mantine/core';
import { createSafeContext } from '@mantine/utils';

interface CarouselContext {
  slideSize: string | number;
  slideGap: MantineNumberSize;
}

export const [CarouselProvider, useCarouselContext] = createSafeContext<CarouselContext>(
  'Carousel component was now found in tree'
);
