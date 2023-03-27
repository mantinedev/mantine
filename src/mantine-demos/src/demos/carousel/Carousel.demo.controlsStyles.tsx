import React from 'react';
import { Carousel } from '@mantine/carousel';
import { MantineDemo } from '@mantine/ds';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      maw={320}
      mx="auto"
      height={200}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;

function Demo() {
  return (
    <Carousel
      maw={320}
      mx="auto"
      height={200}
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
    >
      <Slides count={5} />
    </Carousel>
  );
}

export const controlsStyles: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
