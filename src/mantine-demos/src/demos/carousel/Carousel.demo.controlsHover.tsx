import React from 'react';
import { createStyles, getStylesRef } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { MantineDemo } from '@mantine/ds';
import { Slides } from './_slides';

const code = `
import { createStyles, getStylesRef } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [\`& .\${getStylesRef('controls')}\`]: {
        opacity: 1,
      },
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Carousel maw={320} mx="auto" height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getStylesRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Carousel maw={320} mx="auto" height={200} classNames={classes}>
      <Slides count={5} />
    </Carousel>
  );
}

export const controlsHover: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
