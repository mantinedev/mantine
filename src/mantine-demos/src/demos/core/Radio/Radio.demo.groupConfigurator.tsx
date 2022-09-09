import React from 'react';
import { RadioGroupProps, Radio } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
     ${props}
    >
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </Radio.Group>
  );
}
`;

function Wrapper(props: RadioGroupProps) {
  return (
    <Radio.Group defaultValue="react" name="favoriteFramework" {...props}>
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </Radio.Group>
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
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'offset', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'withAsterisk', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};
