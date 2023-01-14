import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PinInput, Group } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput disabled />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput disabled />
    </Group>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
