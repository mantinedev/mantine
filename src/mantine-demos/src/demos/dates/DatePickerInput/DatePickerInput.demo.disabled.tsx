import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DatePickerInput } from '@mantine/dates';

const code = `
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
      disabled
    />
  );
}
`;

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
      disabled
    />
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
