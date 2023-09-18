import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PinInputProps, PinInput } from '@mantine/core';

const code = `
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput{{props}} />
}
`;

function Wrapper(props: PinInputProps) {
  return <PinInput {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: 'size', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'length', type: 'number', initialValue: 4, libraryValue: 4, min: 1, max: 10 },
    { prop: 'mask', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'placeholder', type: 'string', initialValue: '○', libraryValue: '○' },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'error', type: 'boolean', initialValue: false, libraryValue: false },
    {
      prop: 'type',
      type: 'select',
      initialValue: 'alphanumeric',
      libraryValue: 'alphanumeric',
      data: ['alphanumeric', 'number'],
    },
  ],
};
