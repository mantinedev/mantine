import { createContextContainer, tests } from '@mantine/tests';
import { CarouselSlide, CarouselSlideProps, CarouselSlideStylesNames } from './CarouselSlide';
import { Carousel } from '../Carousel';

const TestContainer = createContextContainer(CarouselSlide, Carousel, {});

const defaultProps: CarouselSlideProps = {};

describe('@mantine/core/CarouselSlide', () => {
  tests.itSupportsSystemProps<CarouselSlideProps, CarouselSlideStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/CarouselSlide',
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
