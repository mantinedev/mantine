import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPickerInput } from '@mantine/dates';

const code = `
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
  );
}

export const valueFormat: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
