import React from 'react';
import { MultiSelect } from '@mantine/core';

const code = `
<MultiSelect
  label="MultiSelect with disabled items"
  placeholder="Select items"
  data={[
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular', disabled: true },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue', disabled: true },
  ]}
/>
`;

export function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        label="MultiSelect with disabled items"
        placeholder="Select items"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular', disabled: true },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue', disabled: true },
        ]}
      />
    </div>
  );
}

export const disabledItems: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
