import type {
  CarouselCssVariables,
  CarouselFactory,
  CarouselProps,
  CarouselStylesNames,
} from './Carousel';
import type { CarouselContextValue } from './Carousel.context';

export { Carousel } from './Carousel.js';
export { useCarouselContext } from './Carousel.context.js';
export { CarouselSlide } from './CarouselSlide/CarouselSlide.js';

export type {
  CarouselProps,
  CarouselCssVariables,
  CarouselFactory,
  CarouselStylesNames,
  CarouselContextValue,
};

export namespace Carousel {
  export type Props = CarouselProps;
  export type CssVariables = CarouselCssVariables;
  export type Factory = CarouselFactory;
  export type StylesNames = CarouselStylesNames;
  export type ContextValue = CarouselContextValue;
}
