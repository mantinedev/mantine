import React from 'react';
import { GearIcon } from '@modulz/radix-icons';
import { ActionIcon, ActionIconProps, Group } from '@mantine/core';

const iconSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 26,
  xl: 34,
};

function Wrapper(props: ActionIconProps<'button'>) {
  return (
    <Group position="center">
      <ActionIcon {...props}>
        <GearIcon style={{ width: iconSizes[props.size], height: iconSizes[props.size] }} />
      </ActionIcon>
    </Group>
  );
}

const codeTemplate = (props: string) => `<ActionIcon${props}>
  <GearIcon />
</ActionIcon>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'gray', defaultValue: 'gray' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'transparent', value: 'transparent' },
        { label: 'hover', value: 'hover' },
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
        { label: 'default', value: 'default' },
      ],
      initialValue: 'hover',
      defaultValue: 'hover',
    },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
