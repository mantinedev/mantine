import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Carousel } from '@mantine/carousel';
import { CarouselStylesApi } from '@mantine/styles-api';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}{{props}}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
`;

function Demo(props: any) {
  return (
    <Carousel withIndicators height={200} {...props}>
      <Slides count={2} />
    </Carousel>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: CarouselStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: '100%',
};
