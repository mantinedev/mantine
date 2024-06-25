import { createContextContainer, tests } from '@mantine-tests/core';
import { Carousel } from '../Carousel';
import { CarouselSlide, CarouselSlideProps, CarouselSlideStylesNames } from './CarouselSlide';

const TestContainer = createContextContainer(CarouselSlide, Carousel, {});

const defaultProps: CarouselSlideProps = {};

describe('@mantine/carousel/CarouselSlide', () => {
  tests.itSupportsSystemProps<CarouselSlideProps, CarouselSlideStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/carousel/CarouselSlide',
    stylesApiSelectors: ['slide'],
    providerStylesApi: false,
    selector: '.mantine-Carousel-slide',
    stylesApiName: 'Carousel',
    compound: true,
  });

  tests.itThrowsContextError({
    component: CarouselSlide,
    props: defaultProps,
    error: 'Carousel component was not found in tree',
  });
});
