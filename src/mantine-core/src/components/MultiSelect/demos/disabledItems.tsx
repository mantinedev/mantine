import React from 'react';
import { MultiSelect } from '../MultiSelect';

const code = `
  <MultiSelect
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
    <MultiSelect
      label="MultiSelect with Disabled Items"
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
