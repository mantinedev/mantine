import React from 'react';
import { ColorInput } from '@mantine/core';

const code = `
<ColorInput placeholder="Pick color" label="Your favorite color" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput placeholder="Pick color" label="Your favorite color" defaultValue="#ffffff" />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
