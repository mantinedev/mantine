import React from 'react';
import { SwitchGroupProps, Switch } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Switch } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
     ${props}
    >
      <Switch value="react" label="React" />
      <Switch value="svelte" label="Svelte" />
      <Switch value="ng" label="Angular" />
      <Switch value="vue" label="Vue" />
    </Switch.Group>
  );
}
`;

function Wrapper(props: SwitchGroupProps) {
  return (
    <Switch.Group defaultValue={['react']} {...props}>
      <Switch value="react" label="React" />
      <Switch value="svelte" label="Svelte" />
      <Switch value="ng" label="Angular" />
      <Switch value="vue" label="Vue" />
    </Switch.Group>
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
    { name: 'withAsterisk', type: 'boolean', initialValue: true, defaultValue: false },
    { name: 'spacing', type: 'size', initialValue: 'lg', defaultValue: 'lg' },
    { name: 'offset', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
  ],
};
