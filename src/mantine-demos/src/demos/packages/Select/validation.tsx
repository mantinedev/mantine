import React from 'react';
import { Select } from '@mantine/core';

const code = `
// Error as boolean – red border color
<Select error />

// Error as React node – red border color and message below input
<Select error="Pick at least one item" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        error
      />

      <Select
        style={{ marginTop: 15 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        error="Pick at least one item"
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
