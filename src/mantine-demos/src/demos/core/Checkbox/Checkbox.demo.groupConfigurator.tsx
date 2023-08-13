import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { CheckboxGroupProps, Checkbox, Group } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
     ${props}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`;

function Wrapper(props: Partial<CheckboxGroupProps>) {
  return (
    <Checkbox.Group defaultValue={['react']} {...props}>
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}

export const groupConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'label', type: 'string', initialValue: 'Select your favorite frameworks/libraries' },
    { name: 'description', type: 'string', initialValue: 'This is anonymous' },
    { name: 'error', type: 'string', initialValue: '' },
    { name: 'withAsterisk', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};
