import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MonthPicker } from '@mantine/dates';

const code = `
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
`;

function Demo() {
  return <MonthPicker maxLevel="year" />;
}

export const maxLevel: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
