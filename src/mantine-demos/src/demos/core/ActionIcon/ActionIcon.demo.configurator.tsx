import React from 'react';
import { IconAdjustments } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { ActionIcon, ActionIconProps, Group, rem } from '@mantine/core';

const iconSizes = {
  xs: rem(12),
  sm: rem(14),
  md: rem(18),
  lg: rem(26),
  xl: rem(34),
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
    return `size="${rem(12)}"`;
  }
  if (props.includes('size="sm"')) {
    return `size="${rem(14)}"`;
  }
  if (props.includes('size="md"')) {
    return `size="${rem(18)}"`;
  }
  if (props.includes('size="lg"')) {
    return `size="${rem(26)}"`;
  }
  if (props.includes('size="xl"')) {
    return `size="${rem(34)}"`;
  }
  return `size="${rem(18)}"`;
}

const codeTemplate = (props: string) => {
  const childIconSizeProp = computeChildIconSizeProp(props);
  return `
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

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
