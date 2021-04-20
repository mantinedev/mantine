import React from 'react';
import { Select } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import Configurator from '../../../../components/Configurator/Configurator';

const data = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'ng', label: 'Angular', disabled: true },
  { value: 'svelte', label: 'Svelte' },
];

const codeTemplate = (props: string) => `<Select
  data={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'ng', label: 'Angular', disabled: true },
    { value: 'svelte', label: 'Svelte' },
  ]}
 ${props}
/>`;

export function SelectConfigurator() {
  const theme = useMantineTheme();

  return (
    <Configurator
      component={(props: any) => <Select {...props} data={data} />}
      codeTemplate={codeTemplate}
      previewBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      multiline
      props={[
        { name: 'placeholder', type: 'string', initialValue: 'Pick one' },
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
        { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
        {
          name: 'required',
          type: 'boolean',
          initialValue: true,
          defaultValue: false,
        },
      ]}
    />
  );
}
