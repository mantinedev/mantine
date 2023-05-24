import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput allowDeselect label="Date input" placeholder="Date input" maw={400} mx="auto" />
  );
}
`;

function Demo() {
  return (
    <DateInput allowDeselect label="Date input" placeholder="Date input" maw={400} mx="auto" />
  );
}

export const deselect: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
