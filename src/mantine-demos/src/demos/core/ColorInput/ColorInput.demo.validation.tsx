import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
// Error as boolean – red border color
<ColorInput error />

// Error as React node – red border color and message below input
<ColorInput error="You cannot pick white" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput label="Your favorite color" placeholder="Enter color" error />

      <ColorInput
        style={{ marginTop: 15 }}
        label="Your favorite color"
        placeholder="Enter color"
        error="You cannot pick white"
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
