import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons';
import { images } from './_images';

const code = `
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons';

const images = [/* ... urls of images */];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      sx={{ maxWidth: 320 }}
      mx="auto"
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
    >
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
    <Carousel
      sx={{ maxWidth: 320 }}
      mx="auto"
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
    >
      {slides}
    </Carousel>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
