import React from 'react';
import { MultiSelect } from '@mantine/core';

const codeTemplate = (props: string) => `<MultiSelect
 ${props}
  data={['React', 'Angular', 'Svelte', 'Vue']}
/>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: (props: any) => (
    <MultiSelect data={['React', 'Angular', 'Svelte', 'Vue']} {...props} />
  ),
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Pick all you like' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Your favorite frameworks/libraries',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: '',
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
