import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Indicator, IndicatorProps, Avatar } from '@mantine/core';

function Demo(props: IndicatorProps) {
  return (
    <Indicator {...props}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
      />
    </Indicator>
  );
}

const code = `
import { Indicator, Avatar } from '@mantine/core';

function Demo() {
  return (
    <Indicator{{props}}>
      <Avatar size="lg" radius="sm" src="./avatar.png" />
    </Indicator>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  centered: true,
  controls: [
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    {
      prop: 'position',
      type: 'select',
      data: [
        { value: 'top-start', label: 'top-start' },
        { value: 'top-center', label: 'top-center' },
        { value: 'top-end', label: 'top-end' },
        { value: 'middle-start', label: 'middle-start' },
        { value: 'middle-center', label: 'middle-center' },
        { value: 'middle-end', label: 'middle-end' },
        { value: 'bottom-start', label: 'bottom-start' },
        { value: 'bottom-center', label: 'bottom-center' },
        { value: 'bottom-end', label: 'bottom-end' },
      ],
      initialValue: 'top-end',
      libraryValue: 'top-end',
    },
    { prop: 'radius', type: 'size', initialValue: 'xl', libraryValue: 'xl' },
    { prop: 'size', type: 'number', initialValue: 10, libraryValue: 10, step: 1, min: 6, max: 30 },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'withBorder', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'processing', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
