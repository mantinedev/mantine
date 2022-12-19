import React from 'react';
import {
  itSupportsSystemProps,
  createContextContainer,
  itThrowsContextError,
  itRendersChildren,
} from '@mantine/tests';
import { CAROUSEL_ERRORS } from '../Carousel.errors';
import { CarouselSlide, CarouselSlideProps } from './CarouselSlide';
import { CarouselProvider } from '../Carousel.context';

const defaultProps: CarouselSlideProps = {};

const TestContainer = createContextContainer(CarouselSlide, ({ children }) => (
  <CarouselProvider
    value={{
      embla: undefined,
      slideSize: '100%',
      slideGap: 0,
      orientation: 'horizontal',
      includeGapInSize: true,
      breakpoints: undefined,
      classNames: undefined,
      styles: undefined,
      unstyled: false,
      variant: undefined,
    }}
  >
    {children}
  </CarouselProvider>
));

describe('@mantine/carousel/CarouselSlide', () => {
  itRendersChildren(TestContainer, defaultProps);
  itThrowsContextError(CarouselSlide, defaultProps, CAROUSEL_ERRORS.context);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/carousel/CarouselSlide',
  });
});
