import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPickerInput } from '@mantine/dates';

const code = `
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Pick year"
      placeholder="Pick year"
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Pick year"
      placeholder="Pick year"
      mx="auto"
      maw={400}
    />
  );
}

export const valueFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
