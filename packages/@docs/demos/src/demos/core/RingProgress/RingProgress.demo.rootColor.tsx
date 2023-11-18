import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { RingProgress } from '@mantine/core';

const code = `
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`;

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}

export const rootColor: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
