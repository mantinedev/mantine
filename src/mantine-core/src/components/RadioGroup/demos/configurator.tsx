import React from 'react';
import { RadioGroup, RadioGroupProps, Radio } from '../RadioGroup';

const codeTemplate = (props: string) => `<RadioGroup
 ${props}
>
  <Radio value="react">React</Radio>
  <Radio value="svelte">Svelte</Radio>
  <Radio value="ng" disabled title="Unless you can't, haha">Angular</Radio>
  <Radio value="vue">Vue</Radio>
</RadioGroup>`;

function Wrapper(props: RadioGroupProps) {
  return (
    <RadioGroup {...props}>
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio value="ng" disabled title="Unless you can't, haha">
        Angular
      </Radio>
      <Radio value="vue">Vue</Radio>
    </RadioGroup>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'Select your favorite framework/library',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: 'This is anonymous, you can safely pick Angular',
    },
    {
      name: 'error',
      type: 'string',
      initialValue: '',
    },
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
    },
    {
      name: 'color',
      type: 'color',
      initialValue: 'blue',
      defaultValue: 'blue',
    },
    {
      name: 'size',
      type: 'size',
      initialValue: 'md',
      defaultValue: 'md',
    },
    {
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};
