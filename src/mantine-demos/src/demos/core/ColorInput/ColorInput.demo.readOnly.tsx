import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ColorInput } from '@mantine/core';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      disallowInput
      placeholder="Pick color"
      label="Your favorite color"
    />
  );
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
