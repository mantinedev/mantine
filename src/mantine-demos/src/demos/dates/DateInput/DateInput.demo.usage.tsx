import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateInput } from '@mantine/dates';

const code = `
`;

function Demo() {
  return <DateInput label="Date input" placeholder="Date input" maw={400} mx="auto" />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
