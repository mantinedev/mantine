import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
<ColorInput disabled />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput label="Disabled without value" placeholder="Your favorite color" disabled />

      <ColorInput
        style={{ marginTop: 15 }}
        label="Disabled with value"
        placeholder="Your favorite color"
        disabled
        value="#EFD679"
      />
    </div>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
