import React from 'react';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons';

function Demo() {
  return (
    <Carousel
      sx={{ maxWidth: 320 }}
      mx="auto"
      height={180}
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
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
      sx={{ maxWidth: 320 }}
      mx="auto"
      height={180}
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
    >
      <Slides count={5} />
    </Carousel>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
