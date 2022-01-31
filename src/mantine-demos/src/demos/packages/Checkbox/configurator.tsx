import React from 'react';
import { Checkbox, CheckboxProps } from '@mantine/core';

const codeTemplate = (props: string) => `<Checkbox
 ${props}
/>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: (props: CheckboxProps) => <Checkbox {...props} defaultChecked />,
  codeTemplate,
  configuratorProps: {
    multiline: true,
  },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'I agree to sell my privacy',
    },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'indeterminate', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
