import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      withEyeDropper
      placeholder="With eye dropper"
      label="Pick any color from the page"
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput
        withEyeDropper
        placeholder="With eye dropper"
        label="Pick any color from the page"
      />
    </div>
  );
}

export const eyeDropper: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
