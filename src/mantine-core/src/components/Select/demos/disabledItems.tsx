import React from 'react';
import { Select } from '../Select';

const code = `
  <Select
    label="Select with Disabled Items"
    data={[
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'vue', label: 'Vue' },
    ]}
    placeholder="Select items"
    nothingFound="Nothing found"
  />;
`;

export function Demo() {
  return (
    <Select
      label="Select with Disabled Items"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
      placeholder="Select items"
      nothingFound="Nothing found"
    />
  );
}

export const disabledItems: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
