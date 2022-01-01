import React from 'react';
import { Select } from '../Select';

const code = `
<Select
  label="Your favorite framework/library"
  placeholder="Pick one"
  data={[
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
  ]}
  allowDeselect
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
        allowDeselect
      />
    </div>
  );
}

export const deselectable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
