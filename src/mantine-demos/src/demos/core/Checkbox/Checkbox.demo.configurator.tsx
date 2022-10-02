import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Checkbox, CheckboxProps } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
     ${props}
    />
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: (props: CheckboxProps) => <Checkbox {...props} defaultChecked />,
  codeTemplate,
  configuratorProps: {
    multiline: 3,
  },
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
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'indeterminate', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
