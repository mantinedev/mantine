import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PinInput, Group } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput type="number" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput type="number" />
    </Group>
  );
}

export const number: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
