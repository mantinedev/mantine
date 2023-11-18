import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput allowDeselect label="Date input" placeholder="Date input" />;
}
`;

function Demo() {
  return <DateInput allowDeselect label="Date input" placeholder="Date input" />;
}

export const deselect: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
