import React from 'react';
import { Switch, SwitchProps } from '@mantine/core';

const codeTemplate = (props: string) => `<Switch
 ${props}
/>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: (props: SwitchProps) => <Switch {...props} defaultChecked />,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'I agree to sell my privacy',
    },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
