import React from 'react';
import { Chip, ChipGroupProps } from '@mantine/core';

function Wrapper(props: ChipGroupProps) {
  return (
    <Chip.Group {...props} position="center" defaultValue="react">
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chip.Group>
  );
}

const codeTemplate = (props: string) => `
import { Chip } from '@mantine/core';

function Demo() {
  return (
    <Chip.Group${props}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chip.Group>
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
      name: 'variant',
      type: 'segmented',
      data: [
        { value: 'outline', label: 'Outline' },
        { value: 'filled', label: 'Filled' },
      ],
      initialValue: 'outline',
      defaultValue: 'outline',
    },
    { name: 'spacing', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
  ],
};
