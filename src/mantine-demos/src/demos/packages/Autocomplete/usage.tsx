import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
<Autocomplete
  label="Your favorite framework/library"
  placeholder="Pick one"
  data={['React', 'Angular', 'Svelte', 'Vue']}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
