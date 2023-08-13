import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Switch, SwitchProps } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Switch } from '@mantine/core';

function Demo() {
  return (
    <Switch
     ${props}
    />
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: (props: SwitchProps) => <Switch {...props} />,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'labelPosition',
      type: 'segmented',
      data: [
        { value: 'right', label: 'Right' },
        { value: 'left', label: 'Left' },
      ],
      initialValue: 'right',
      defaultValue: 'right',
    },
    { name: 'label', type: 'string', initialValue: 'I agree to sell my privacy' },
    { name: 'description', type: 'string', initialValue: '' },
    { name: 'error', type: 'string', initialValue: '' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
