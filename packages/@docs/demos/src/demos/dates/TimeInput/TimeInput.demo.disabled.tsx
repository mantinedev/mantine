import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TimeInput } from '@mantine/dates';

const code = `
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
`;

function Demo() {
  return <TimeInput disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
