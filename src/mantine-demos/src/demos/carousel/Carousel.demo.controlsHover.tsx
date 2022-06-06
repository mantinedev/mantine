import React from 'react';
import { createStyles } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides';

const code = `
import { createStyles } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [\`& .\${getRef('controls')}\`]: {
        opacity: 1,
      },
    },
  },
}));


function Demo() {
  const { classes } = useStyles();
  return (
    <Carousel sx={{ maxWidth: 320 }} mx="auto" height={200} classNames={classes}>
      <Slides count={5} />
    </Carousel>
  );
}
`;

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Carousel sx={{ maxWidth: 320 }} mx="auto" height={200} classNames={classes}>
      <Slides count={5} />
    </Carousel>
  );
}

export const controlsHover: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
