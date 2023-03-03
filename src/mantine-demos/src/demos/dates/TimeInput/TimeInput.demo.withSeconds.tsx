import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TimeInput } from '@mantine/dates';

const code = `
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}

export const withSeconds: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
