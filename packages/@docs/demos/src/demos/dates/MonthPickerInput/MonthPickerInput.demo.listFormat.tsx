import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPickerInput
      monthsListFormat="MM"
      yearsListFormat="YY"
      label="Pick month"
      placeholder="Pick month"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPickerInput
      monthsListFormat="MM"
      yearsListFormat="YY"
      label="Pick month"
      placeholder="Pick month"
      value={value}
      onChange={setValue}
    />
  );
}

export const listFormat: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
