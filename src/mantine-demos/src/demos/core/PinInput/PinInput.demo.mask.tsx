import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { PinInput, Group } from '@mantine/core';

const code = `
import { PinInput, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput mask />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput mask />
    </Group>
  );
}

export const mask: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
