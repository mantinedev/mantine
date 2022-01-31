import React from 'react';
import { NativeSelect } from '@mantine/core';

const data = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

const codeTemplate = (props: string) => `<NativeSelect
  data={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]}
 ${props}
/>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: (props: any) => <NativeSelect {...props} data={data} />,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Pick one' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Select your favorite framework/library',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: 'This is anonymous',
    },
    {
      name: 'error',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'default', value: 'default' },
        { label: 'filled', value: 'filled' },
        { label: 'unstyled', value: 'unstyled' },
      ],
      initialValue: 'default',
      defaultValue: 'default',
    },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};
