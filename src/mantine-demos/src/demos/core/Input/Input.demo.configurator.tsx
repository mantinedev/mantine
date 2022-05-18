import React from 'react';
import { IconAt } from '@tabler/icons';
import { Input, InputProps } from '@mantine/core';

const iconSizes = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 22,
  xl: 24,
};

function Wrapper(props: InputProps) {
  return <Input icon={<IconAt size={iconSizes[props.size]} />} {...props} />;
}

const codeTemplate = (props: string) => `
import { Input } from '@mantine/core';
import { IconAt } from '@tabler/icons';

function Demo() {
  return (
    <Input
      icon={<IconAt />}
     ${props}
    />
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'variant',
      type: 'segmented',
      data: [
        { label: 'default', value: 'default' },
        { label: 'filled', value: 'filled' },
        { label: 'unstyled', value: 'unstyled' },
      ],
      initialValue: 'default',
      defaultValue: 'default',
    },
    { name: 'placeholder', type: 'string', initialValue: 'Your email' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'invalid', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
