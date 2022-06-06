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
      withIndicators
      height={200}
      styles={{
        indicator: {
          width: 12,
          height: 4,
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: 40,
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
      withIndicators
      height={200}
      styles={{
        indicator: {
          width: 12,
          height: 4,
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: 40,
          },
        },
      }}
    >
      <Slides count={5} />
    </Carousel>
  );
}

export const indicatorStyles: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
