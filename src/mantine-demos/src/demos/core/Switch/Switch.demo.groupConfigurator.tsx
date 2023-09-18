import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { SwitchGroupProps, Switch, Group } from '@mantine/core';

const code = `
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`;

function Wrapper(props: SwitchGroupProps) {
  return (
    <Switch.Group defaultValue={['react']} {...props}>
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}

export const groupConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      prop: 'label',
      type: 'string',
      initialValue: 'Select your favorite framework/library',
      libraryValue: '',
    },
    { prop: 'description', type: 'string', initialValue: 'This is anonymous', libraryValue: '' },
    { prop: 'error', type: 'string', initialValue: '', libraryValue: '' },
    { prop: 'withAsterisk', type: 'boolean', initialValue: true, libraryValue: false },
  ],
};
