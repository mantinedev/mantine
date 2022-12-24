import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPickerInput } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPickerInput
      dropdownType="modal"
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPickerInput
      dropdownType="modal"
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}

export const modal: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
