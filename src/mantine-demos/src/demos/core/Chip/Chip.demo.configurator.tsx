import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Chip, ChipProps } from '@mantine/core';

function Wrapper(props: ChipProps) {
  return (
    <Chip defaultChecked {...props}>
      Awesome chip
    </Chip>
  );
}

const code = `
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    {
      prop: 'variant',
      type: 'segmented',
      data: [
        { value: 'outline', label: 'Outline' },
        { value: 'light', label: 'Light' },
        { value: 'filled', label: 'Filled' },
      ],
      initialValue: 'outline',
      libraryValue: 'outline',
    },
    { prop: 'size', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'radius', type: 'size', initialValue: 'xl', libraryValue: 'xl' },
  ],
};
