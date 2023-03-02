import { MantineNumberSize, Styles, ClassNames } from '@mantine/core';
import { createSafeContext } from '@mantine/utils';
import { CAROUSEL_ERRORS } from './Carousel.errors';
import { CarouselOrientation, Embla, CarouselBreakpoint } from './types';
import type { CarouselStylesNames } from './Carousel';

interface CarouselContext {
  embla: Embla;
  slideSize: string | number;
  slideGap: MantineNumberSize;
  orientation: CarouselOrientation;
  includeGapInSize: boolean;
  breakpoints: CarouselBreakpoint[];
  classNames: ClassNames<CarouselStylesNames>;
  styles: Styles<CarouselStylesNames>;
  unstyled: boolean;
  variant: string;
}

export const [CarouselProvider, useCarouselContext] = createSafeContext<CarouselContext>(
  CAROUSEL_ERRORS.context
);
