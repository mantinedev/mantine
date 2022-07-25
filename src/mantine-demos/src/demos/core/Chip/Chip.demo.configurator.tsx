import React from 'react';
import { Chip, ChipProps, Group } from '@mantine/core';

function Wrapper(props: ChipProps) {
  return (
    <Group position="center">
      <Chip {...props}>Awesome chip</Chip>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip${props}>Awesome chip</Chip>
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
        { value: 'filled', label: 'Filled' },
      ],
      initialValue: 'outline',
      defaultValue: 'outline',
    },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
  ],
};
