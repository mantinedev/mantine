import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { SegmentedControl } from '@mantine/core';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`;

function Wrapper(props: any) {
  return <SegmentedControl data={['React', 'Angular', 'Vue']} {...props} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      libraryValue: 'horizontal',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
    },
    { prop: 'fullWidth', type: 'boolean', initialValue: false, libraryValue: false },
    { type: 'size', prop: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
  ],
};
