import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group, GroupProps, Button } from '@mantine/core';

function Wrapper(props: GroupProps) {
  return (
    <Group {...props}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group${props}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'position',
      type: 'select',
      data: [
        { label: 'left', value: 'left' },
        { label: 'center', value: 'center' },
        { label: 'right', value: 'right' },
        { label: 'apart', value: 'apart' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'grow', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
