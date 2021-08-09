import React from 'react';
import { Group, GroupProps } from '../Group';
import { Button } from '../../Button/Button';

function Wrapper(props: GroupProps) {
  return (
    <Group {...props}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
  );
}

const codeTemplate = (props: string) => `<Group${props}>
  <Button variant="outline">1</Button>
  <Button variant="outline">2</Button>
  <Button variant="outline">3</Button>
</Group>`;

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
    { name: 'gutter', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
