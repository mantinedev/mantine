import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Indicator, IndicatorProps, Avatar, Group } from '@mantine/core';

function Wrapper(props: IndicatorProps) {
  return (
    <Group position="center">
      <Indicator {...props}>
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Indicator, Avatar, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Indicator${props}>
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
    </Group>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    {
      name: 'position',
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
      defaultValue: 'top-end',
    },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'size', type: 'number', initialValue: 10, defaultValue: 10, step: 1, min: 6, max: 30 },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'withBorder', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'processing', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
