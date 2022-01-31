import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select
  label="Select with disabled items"
  placeholder="Select something"
  data={[
    { value: 'react', label: 'React', disabled: true },
    { value: 'ng', label: 'Angular', disabled: true },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ]}
/>
`;

export function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Select with disabled items"
        placeholder="Select something"
        data={[
          { value: 'react', label: 'React', disabled: true },
          { value: 'ng', label: 'Angular', disabled: true },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
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
