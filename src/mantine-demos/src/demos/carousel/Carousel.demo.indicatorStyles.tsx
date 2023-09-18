import React from 'react';
import { Carousel } from '@mantine/carousel';
import { MantineDemo } from '@mantine/ds';
import { Slides } from './_slides';
import classes from './Carousel.demo.indicatorStyles.module.css';

const cssCode = `
.indicator {
  width: rem(12px);
  height: rem(4px);
  transition: width 250ms ease;

  &[data-active] {
    width: rem(40px);
  }
}`;

const code = `
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel withIndicators height={200} classNames={classes}>
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
    <Carousel withIndicators height={200} classNames={classes}>
      <Slides count={5} />
    </Carousel>
  );
}

export const indicatorStyles: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
  ],
  centered: true,
  maxWidth: 320,
};
