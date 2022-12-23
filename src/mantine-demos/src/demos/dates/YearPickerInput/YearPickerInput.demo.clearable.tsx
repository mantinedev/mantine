import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPickerInput } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      label="Pick year"
      placeholder="Pick year"
      defaultValue={new Date()}
      mx="auto"
      clearable
      maw={400}
    />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput
      label="Pick year"
      placeholder="Pick year"
      defaultValue={new Date()}
      mx="auto"
      clearable
      maw={400}
    />
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
