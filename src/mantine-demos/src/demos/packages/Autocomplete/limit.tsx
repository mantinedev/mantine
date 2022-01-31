import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
<Autocomplete
  label="Only 2 options at a time"
  placeholder="Your favorite framework"
  limit={2}
  data={['React', 'Angular', 'Svelte', 'Vue']}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Only 2 options at a time"
        placeholder="Your favorite framework"
        limit={2}
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}

export const limit: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
