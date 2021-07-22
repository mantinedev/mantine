import React from 'react';
import { EnvelopeClosedIcon } from '@modulz/radix-icons';
import { Input } from '../Input';

const codeTemplate = (props: string) => `<Input
  icon={<MailIcon />}
 ${props}
/>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: (props: any) => <Input icon={<EnvelopeClosedIcon />} {...props} />,
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
