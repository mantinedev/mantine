import React from 'react';
import { Loader, LoaderProps, Group } from '@mantine/core';

function Wrapper(props: LoaderProps) {
  return (
    <Group position="center">
      <Loader {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `<Loader${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    {
      name: 'variant',
      type: 'segmented',
      initialValue: 'oval',
      defaultValue: 'oval',
      data: [
        { value: 'oval', label: 'Oval' },
        { value: 'bars', label: 'Bars' },
        { value: 'dots', label: 'Dots' },
      ],
    },
  ],
};
