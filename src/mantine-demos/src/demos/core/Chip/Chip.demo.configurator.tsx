import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Chip, ChipProps, Group } from '@mantine/core';

function Wrapper(props: ChipProps) {
  return (
    <Group position="center">
      <Chip defaultChecked {...props}>
        Awesome chip
      </Chip>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked${props}>Awesome chip</Chip>
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    {
      name: 'variant',
      type: 'segmented',
      data: [
        { value: 'outline', label: 'Outline' },
        { value: 'light', label: 'Light' },
        { value: 'filled', label: 'Filled' },
      ],
      initialValue: 'outline',
      defaultValue: 'outline',
    },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
  ],
};
