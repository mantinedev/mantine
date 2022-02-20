import React from 'react';
import { checkAccessibility, itFiltersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Carousel, CarouselProps } from './Carousel';
import { CarouselItem } from './CarouselItem/CarouselItem';

const content = [
  <Carousel.Item>Item1</Carousel.Item>,
  <Carousel.Item>Item2</Carousel.Item>,
  <Carousel.Item>Item3</Carousel.Item>,
];

const defaultProps: CarouselProps<'div'> = {
  children: content,
};

describe('@mantine/core/Carousel', () => {
  checkAccessibility([<Carousel>{content}</Carousel>]);
  itSupportsSystemProps({
    component: Carousel,
    props: defaultProps,
    displayName: '@mantine/core/Carousel',
    refType: HTMLDivElement,
  });

  itFiltersChildren(Carousel, defaultProps, '.mantine-CarouselItem-carouselItem', [
    <Carousel.Item>test-label-1</Carousel.Item>,
    <Carousel.Item>test-label-2</Carousel.Item>,
  ]);

  it('exposes CarouselItem as Carousel.Item', () => {
    expect(Carousel.Item).toBe(CarouselItem);
  });
});
