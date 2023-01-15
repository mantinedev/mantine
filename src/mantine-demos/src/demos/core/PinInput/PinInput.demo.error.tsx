import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PinInput, Group } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput error />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput error />
    </Group>
  );
}

export const error: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
