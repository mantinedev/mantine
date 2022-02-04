import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select
  label="Your favorite framework/library"
  placeholder="Pick one"
  clearable
  data={data}
/>

<Select
  label="Your favorite framework/library"
  placeholder="Pick one"
  searchable
  clearable
  data={data}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        clearable
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />

      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        clearable
        searchable
        style={{ marginTop: 15 }}
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
