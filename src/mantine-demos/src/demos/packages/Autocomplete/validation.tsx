import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Error as boolean – red border color */}
      <Autocomplete error />

      {/* Error as React node – red border color and message below input */}
      <Autocomplete error="Field is required" />
    </>
  );
}
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
        error="Field is required"
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
