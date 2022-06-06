import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      sx={{ maxWidth: 320 }}
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
`;

function Demo() {
  return (
    <Carousel
      sx={{ maxWidth: 320 }}
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
