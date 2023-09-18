import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Select } from '@mantine/core';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}

export const disabledOptions: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
