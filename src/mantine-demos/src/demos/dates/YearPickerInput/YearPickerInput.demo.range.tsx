import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPickerInput } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <YearPickerInput
      type="range"
      placeholder="Pick years range"
      label="Pick years range"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <YearPickerInput
      type="range"
      placeholder="Pick years range"
      label="Pick years range"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}

export const range: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
