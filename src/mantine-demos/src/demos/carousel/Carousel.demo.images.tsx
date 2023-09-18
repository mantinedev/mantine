import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { images as _images } from './_images';

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

  return <Carousel withIndicators>{slides}</Carousel>;
}
`;

function Demo() {
  const slides = _images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return <Carousel withIndicators>{slides}</Carousel>;
}

export const images: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 320,
  centered: true,
};
