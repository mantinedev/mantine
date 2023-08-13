import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
