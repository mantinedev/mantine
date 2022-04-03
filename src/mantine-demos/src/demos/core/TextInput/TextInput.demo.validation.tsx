import React from 'react';
import { TextInput } from '@mantine/core';

const code = `
// Error as boolean – red border color
<TextInput error />

// Error as React node – red border color and message below input
<TextInput error="Invalid email" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput label="Your email" placeholder="you@email.com" error />

      <TextInput
        style={{ marginTop: 15 }}
        label="Your email"
        placeholder="you@email.com"
        error="Invalid email"
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
