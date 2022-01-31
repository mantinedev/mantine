import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select allowDeselect {...otherProps} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        allowDeselect
        defaultValue="react"
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

export const deselect: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
