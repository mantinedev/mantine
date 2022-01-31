import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
<ColorInput disallowInput />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput disallowInput placeholder="Pick color" label="Your favorite color" />
    </div>
  );
}

export const readOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
