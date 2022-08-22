import React from 'react';
import { IconAdjustments } from '@tabler/icons';
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
        <IconAdjustments size={iconSizes[props.size]} />
      </ActionIcon>
    </Group>
  );
}

function computeChildIconSizeProp(props: string) {
  if (props.includes('size="xs"')) {
    return 'size={12}';
  }
  if (props.includes('size="sm"')) {
    return 'size={14}';
  }
  if (props.includes('size="md"')) {
    return 'size={18}';
  }
  if (props.includes('size="lg"')) {
    return 'size={26}';
  }
  if (props.includes('size="xl"')) {
    return 'size={34}';
  }
  return 'size={18}';
}

const codeTemplate = (props: string) => {
  const childIconSizeProp = computeChildIconSizeProp(props);
  return `
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons';

function Demo() {
  return (
    <ActionIcon${props}>
      <IconAdjustments ${childIconSizeProp} />
    </ActionIcon>
  );
}
`;
};

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
