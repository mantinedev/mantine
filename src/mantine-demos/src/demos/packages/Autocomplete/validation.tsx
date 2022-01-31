import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
// Error as boolean – red border color
<Autocomplete error />

// Error as React node – red border color and message below input
<Autocomplete error="Pick at least one item" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick one that you like"
        error
      />

      <Autocomplete
        style={{ marginTop: 15 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Your favorite frameworks/libraries"
        placeholder="Pick one that you like"
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
