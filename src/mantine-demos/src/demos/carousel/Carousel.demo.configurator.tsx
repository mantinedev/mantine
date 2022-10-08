import React from 'react';
import { Carousel, CarouselProps } from '@mantine/carousel';
import { MantineDemo } from '@mantine/ds';
import { Slides } from './_slides';

function Wrapper(props: CarouselProps) {
  return (
    <Carousel height={200} slideSize="70%" {...props}>
      <Slides count={5} />
    </Carousel>
  );
}

const codeTemplate = (props: string) => `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel slideSize="70%" height={200}${props}>
      {/* ...slides */}
    </Carousel>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'align',
      type: 'segmented',
      initialValue: 'center',
      defaultValue: 'center',
      data: [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
      ],
    },
    {
      name: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
      data: [
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
      ],
    },
    { name: 'slideGap', type: 'size', initialValue: 'md' },
    { name: 'controlsOffset', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'controlSize', type: 'number', min: 14, max: 40, initialValue: 26, defaultValue: 26 },
    { name: 'loop', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'dragFree', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'draggable', type: 'boolean', initialValue: true, defaultValue: true },
    { name: 'withControls', type: 'boolean', initialValue: true, defaultValue: true },
    { name: 'withIndicators', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
