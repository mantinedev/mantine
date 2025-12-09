import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '@mantine/core';
import { useCarouselContext } from '../Carousel.context';
import classes from '../Carousel.module.css';

export type CarouselSlideStylesNames = 'slide';

export interface CarouselSlideProps
  extends BoxProps, CompoundStylesApiProps<CarouselSlideFactory>, ElementProps<'div'> {}

export type CarouselSlideFactory = Factory<{
  props: CarouselSlideProps;
  ref: HTMLDivElement;
  stylesNames: CarouselSlideStylesNames;
  compound: true;
}>;

export const CarouselSlide = factory<CarouselSlideFactory>((props) => {
  const { classNames, className, style, styles, vars, mod, ...others } = useProps(
    'CarouselSlide',
    null,
    props
  );

  const ctx = useCarouselContext();

  return (
    <Box
      mod={[{ orientation: ctx.orientation }, mod]}
      {...ctx.getStyles('slide', { className, style, classNames, styles })}
      {...others}
    />
  );
});

CarouselSlide.classes = classes;
CarouselSlide.displayName = '@mantine/carousel/CarouselSlide';
