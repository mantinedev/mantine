import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MonthPickerInput } from '@mantine/dates';

const code = `
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
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
