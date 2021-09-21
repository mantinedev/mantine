import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Group } from '../../Group/Group';

function Wrapper(props: ButtonProps) {
  return (
    <Group position="center">
      <Button {...props} />
    </Group>
  );
}

const codeTemplate = (props: string, children: string) => `<Button${props}>
  ${children}
</Button>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
        { label: 'link', value: 'link' },
        { label: 'default', value: 'default' },
      ],
      initialValue: 'filled',
      defaultValue: 'filled',
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'compact', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'children', type: 'string', initialValue: 'Settings' },
  ],
};
