import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`;

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}

export const listFormat: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
