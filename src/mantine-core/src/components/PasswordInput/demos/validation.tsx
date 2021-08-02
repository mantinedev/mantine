import React from 'react';
import { PasswordInput } from '../PasswordInput';

const code = `
// Error as boolean – red border color
<PasswordInput error />

// Error as React node – red border color and message below input
<PasswordInput error="Invalid email" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Your password" placeholder="Your password" error />

      <PasswordInput
        style={{ marginTop: 15 }}
        label="Your password"
        placeholder="Your password"
        error="Invalid password"
      />
    </div>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
