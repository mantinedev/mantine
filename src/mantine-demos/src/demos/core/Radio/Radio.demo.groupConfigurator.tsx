import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { RadioGroupProps, Radio, Group } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
     ${props}
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
`;

function Wrapper(props: Partial<RadioGroupProps>) {
  return (
    <Radio.Group defaultValue="react" name="favoriteFramework" {...props}>
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}

export const groupConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'label', type: 'string', initialValue: 'Select your favorite framework/library' },
    { name: 'description', type: 'string', initialValue: 'This is anonymous' },
    { name: 'error', type: 'string', initialValue: '' },
    { name: 'withAsterisk', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};
