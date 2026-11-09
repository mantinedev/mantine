import { useState } from 'react';
import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { QuarterPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <QuarterPicker
      value={value}
      onChange={setValue}
      defaultDate="2026-01-01"
      minDate="2026-04-01"
      maxDate="2027-07-01"
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <QuarterPicker
      value={value}
      onChange={setValue}
      defaultDate="2026-01-01"
      minDate="2026-04-01"
      maxDate="2027-07-01"
    />
  );
}

export const minMax: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
