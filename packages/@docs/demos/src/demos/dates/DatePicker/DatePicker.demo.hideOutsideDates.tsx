import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`;

function Demo() {
  return <DatePicker hideOutsideDates />;
}

export const hideOutsideDates: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
