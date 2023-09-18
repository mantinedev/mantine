import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Calendar } from '@mantine/dates';

const code = `
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
`;

function Demo() {
  return <Calendar />;
}

export const usage: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
