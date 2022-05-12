import React from 'react';
import { Adjustments } from 'tabler-icons-react';
import { ActionIcon, ActionIconProps, Group } from '@mantine/core';

const iconSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 26,
  xl: 34,
};

function Wrapper(props: ActionIconProps) {
  return (
    <Group position="center">
      <ActionIcon {...props}>
        <Adjustments size={iconSizes[props.size]} />
      </ActionIcon>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { ActionIcon } from '@mantine/core';
import { Adjustments } from 'tabler-icons-react';

function Demo() {
  return (
    <ActionIcon${props}>
      <Adjustments />
    </ActionIcon>
  );
}
`;

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
        { label: 'subtle', value: 'subtle' },
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
        { label: 'default', value: 'default' },
      ],
      initialValue: 'subtle',
      defaultValue: 'subtle',
    },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
