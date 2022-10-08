import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Autocomplete } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return <Autocomplete${props} />;
}
`;

export const flip: MantineDemo = {
  type: 'configurator',
  component: (props: any) => (
    <Autocomplete
      placeholder="Pick one"
      label="Your favorite framework/library"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
      {...props}
    />
  ),
  codeTemplate,
  configuratorProps: { multiline: false },
  configurator: [
    {
      name: 'dropdownPosition',
      type: 'segmented',
      data: [
        { label: 'top', value: 'top' },
        { label: 'bottom', value: 'bottom' },
        { label: 'flip', value: 'flip' },
      ],
      initialValue: 'flip',
      defaultValue: 'flip',
    },
  ],
};
