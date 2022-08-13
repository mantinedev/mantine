import React from 'react';
import { CheckboxGroupProps, Checkbox } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
     ${props}
    >
      <Checkbox value="react" label="React" />
      <Checkbox value="svelte" label="Svelte" />
      <Checkbox value="ng" label="Angular" />
      <Checkbox value="vue" label="Vue" />
    </Checkbox.Group>
  );
}
`;

function Wrapper(props: CheckboxGroupProps) {
  return (
    <Checkbox.Group defaultValue={['react']} {...props}>
      <Checkbox value="react" label="React" />
      <Checkbox value="svelte" label="Svelte" />
      <Checkbox value="ng" label="Angular" />
      <Checkbox value="vue" label="Vue" />
    </Checkbox.Group>
  );
}

export const groupConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'orientation',
      type: 'segmented',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
    },
    { name: 'label', type: 'string', initialValue: 'Select your favorite framework/library' },
    { name: 'description', type: 'string', initialValue: 'This is anonymous' },
    { name: 'error', type: 'string', initialValue: '' },
    { name: 'required', type: 'boolean', initialValue: true, defaultValue: false },
    { name: 'spacing', type: 'size', initialValue: 'lg', defaultValue: 'lg' },
    { name: 'offset', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
  ],
};
