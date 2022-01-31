import React from 'react';
import { PasswordInput } from '@mantine/core';

const code = `
<PasswordInput disabled />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Disabled without value" placeholder="Your password" disabled />

      <PasswordInput
        style={{ marginTop: 15 }}
        label="Disabled with value"
        placeholder="Your password"
        disabled
        value="secret"
      />
    </div>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
