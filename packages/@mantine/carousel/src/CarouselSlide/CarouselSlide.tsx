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
  extends BoxProps,
    CompoundStylesApiProps<CarouselSlideFactory>,
    ElementProps<'div'> {}

export type CarouselSlideFactory = Factory<{
  props: CarouselSlideProps;
  ref: HTMLDivElement;
  stylesNames: CarouselSlideStylesNames;
  compound: true;
}>;

const defaultProps: Partial<CarouselSlideProps> = {};

export const CarouselSlide = factory<CarouselSlideFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, mod, ...others } = useProps(
    'CarouselSlide',
    defaultProps,
    props
  );

  const ctx = useCarouselContext();

  return (
    <Box
      ref={ref}
      mod={[{ orientation: ctx.orientation }, mod]}
      {...ctx.getStyles('slide', { className, style, classNames, styles })}
      {...others}
    />
  );
});

CarouselSlide.classes = classes;
CarouselSlide.displayName = '@mantine/carousel/CarouselSlide';
