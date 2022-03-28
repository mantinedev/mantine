import React from 'react';
import { Autocomplete } from '@mantine/core';

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite Rick and Morty character"
      placeholder="Pick one"
      data={[
        { value: 'Rick', group: 'Used to be a pickle' },
        { value: 'Morty', group: 'Never was a pickle' },
        { value: 'Beth', group: 'Never was a pickle' },
        { value: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Your favorite Rick and Morty character"
        placeholder="Pick one"
        data={[
          { value: 'Rick', group: 'Used to be a pickle' },
          { value: 'Morty', group: 'Never was a pickle' },
          { value: 'Beth', group: 'Never was a pickle' },
          { value: 'Summer', group: 'Never was a pickle' },
        ]}
      />
    </div>
  );
}

export const group: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
