import React from 'react';
import { Group } from '@mantine/core';
import { MantineDemo, MantineLogo, MantineLogoProps } from '@mantine/ds';

function Wrapper(props: MantineLogoProps) {
  return (
    <Group position="center">
      <MantineLogo {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { MantineLogo } from '@mantine/ds';

function Demo() {
  return <MantineLogo${props} />
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'type',
      type: 'segmented',
      data: [
        { label: 'Full', value: 'full' },
        { label: 'Mark', value: 'mark' },
      ],
      initialValue: 'full',
      defaultValue: 'full',
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'number', initialValue: 30, max: 50, min: 10, step: 5 },
  ],
};
