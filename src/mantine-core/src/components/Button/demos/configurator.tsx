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
      ],
      initialValue: 'filled',
      defaultValue: 'filled',
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'children', type: 'string', initialValue: 'Settings' },
    { name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
