import type { MantineNumberSize } from '@mantine/core';
import type { EmblaCarouselType } from 'embla-carousel-react';

export type Embla = EmblaCarouselType;
export type CarouselOrientation = 'vertical' | 'horizontal';
export interface CarouselBreakpoint {
  maxWidth?: MantineNumberSize;
  minWidth?: MantineNumberSize;
  slideSize: string | number;
  slideGap?: MantineNumberSize;
}
