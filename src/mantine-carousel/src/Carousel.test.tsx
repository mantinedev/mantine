import React from 'react';
import { itSupportsSystemProps, itRendersChildren, checkAccessibility } from '@mantine/tests';
import { Carousel, CarouselProps } from './Carousel';

const defaultProps: CarouselProps = {};

describe('@mantine/carousel/Carousel', () => {
  checkAccessibility([
    <Carousel nextControlLabel="Next slide" previousControlLabel="Previous slide" withIndicators>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      <Carousel.Slide>4</Carousel.Slide>
    </Carousel>,
  ]);

  itRendersChildren(Carousel, defaultProps);
  itSupportsSystemProps({
    component: Carousel,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/carousel/Carousel',
    providerName: 'Carousel',
  });
});
