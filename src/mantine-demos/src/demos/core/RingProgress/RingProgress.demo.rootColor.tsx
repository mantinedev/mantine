import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { RingProgress, Group } from '@mantine/core';

const code = `
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />
    </Group>
  );
}

export const rootColor: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
