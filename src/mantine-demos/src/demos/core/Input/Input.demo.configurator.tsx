import React from 'react';
import { IconAt } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Input, InputProps, rem } from '@mantine/core';

const iconSizes = {
  xs: rem(14),
  sm: rem(16),
  md: rem(18),
  lg: rem(22),
  xl: rem(24),
};

function Wrapper(props: InputProps) {
  return <Input icon={<IconAt size={iconSizes[props.size]} stroke={1.5} />} {...props} />;
}

const codeTemplate = (props: string) => `
import { Input } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

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
    { name: 'error', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
