import React from 'react';
import { Group, GroupProps, Button, Card } from '@mantine/core';

function Wrapper(props: GroupProps) {
  return (
    <Card withBorder p={0} sx={{ height: '250px' }}>
      <Group {...props} sx={{ width: '100%', height: '100%' }}>
        <Button variant="outline">1</Button>
        <Button variant="outline" size="xl">
          2
        </Button>
        <Button variant="outline">3</Button>
      </Group>
    </Card>
  );
}

const codeTemplate = (props: string) => `
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group${props}>
      <Button variant="outline">1</Button>
      <Button variant="outline" size="xl">2</Button>
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
        { label: 'top', value: 'top' },
        { label: 'bottom', value: 'bottom' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
    {
      name: 'align',
      type: 'select',
      data: [
        { label: 'center', value: 'center' },
        { label: 'flex-start', value: 'flex-start' },
        { label: 'flex-end', value: 'flex-end' },
        { label: 'baseline', value: 'baseline' },
      ],
      initialValue: 'center',
      defaultValue: 'center',
    },
    {
      name: 'direction',
      type: 'segmented',
      data: [
        { label: 'row', value: 'row' },
        { label: 'column', value: 'column' },
      ],
      initialValue: 'row',
      defaultValue: 'row',
    },
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'grow', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
