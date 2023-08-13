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
    <ColorInput
      maw={320}
      mx="auto"
      withEyeDropper
      placeholder="With eye dropper"
      label="Pick any color from the page"
    />
  );
}

export const eyeDropper: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
