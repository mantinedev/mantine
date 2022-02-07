import React from 'react';
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

const code = `
<ColorInput format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors).map(
  (color) => `'${DEFAULT_THEME.colors[color][6]}'`
)}]} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput
        placeholder="Pick color"
        label="Your favorite color"
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />
    </div>
  );
}

export const swatches: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
