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
    />
  );
}

export const valueFormat: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
