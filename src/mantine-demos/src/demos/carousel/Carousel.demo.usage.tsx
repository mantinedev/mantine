import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { images } from './_images';

const code = `
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [/* ... urls of images */];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel sx={{ maxWidth: 320 }} mx="auto">
      {slides}
    </Carousel>
  );
}
`;

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel sx={{ maxWidth: 320 }} mx="auto">
      {slides}
    </Carousel>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
