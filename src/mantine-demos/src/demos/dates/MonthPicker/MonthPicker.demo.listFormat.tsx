import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MonthPicker } from '@mantine/dates';

const code = `
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`;

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}

export const listFormat: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
