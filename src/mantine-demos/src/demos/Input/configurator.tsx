import React from 'react';
import { EnvelopeClosedIcon } from '@modulz/radix-icons';
import { Input } from '@mantine/core';

const codeTemplate = (props: string) => `<Input
  icon={<MailIcon />}
 ${props}
/>`;

const iconSizes = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 22,
  xl: 24,
};

export const configurator: MantineDemo = {
  type: 'configurator',
  component: (props: any) => (
    <Input
      icon={
        <EnvelopeClosedIcon
          style={{ width: iconSizes[props.size], height: iconSizes[props.size] }}
        />
      }
      {...props}
    />
  ),
  codeTemplate,
  configuratorProps: { multiline: true },
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
