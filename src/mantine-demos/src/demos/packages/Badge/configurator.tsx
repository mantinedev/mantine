import React from 'react';
import { Badge, BadgeProps, Group } from '@mantine/core';

function Wrapper(props: BadgeProps<'div'>) {
  return (
    <Group position="center">
      <Badge {...props}>Badge</Badge>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge${props}>Badge</Badge>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    {
      name: 'variant',
      type: 'select',
      initialValue: 'filled',
      defaultValue: 'filled',
      data: [
        { value: 'filled', label: 'Filled' },
        { value: 'outline', label: 'Outline' },
        { value: 'light', label: 'Light' },
        { value: 'dot', label: 'Dot' },
      ],
    },
  ],
};
