import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PinInput, Group } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="⊡" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="⊡" />
    </Group>
  );
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
