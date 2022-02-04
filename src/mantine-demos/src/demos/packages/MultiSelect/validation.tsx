import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data';

const code = `
// Error as boolean – red border color
<MultiSelect error />

// Error as React node – red border color and message below input
<MultiSelect error="Pick at least one item" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        error
      />

      <MultiSelect
        style={{ marginTop: 15 }}
        data={data}
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
