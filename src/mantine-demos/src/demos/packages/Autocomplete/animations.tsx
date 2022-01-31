import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
<Autocomplete
  transition="pop-top-left"
  transitionDuration={80}
  transitionTimingFunction="ease"
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        transition="pop-top-left"
        transitionDuration={80}
        transitionTimingFunction="ease"
      />
    </div>
  );
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
