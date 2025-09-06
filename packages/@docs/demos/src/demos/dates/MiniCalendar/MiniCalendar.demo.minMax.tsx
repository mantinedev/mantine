import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  const [value, onChange] = useState<string | null>('2025-04-15');
  return (
    <MiniCalendar
      value={value}
      onChange={onChange}
      numberOfDays={6}
      defaultDate="2025-04-13"
      minDate="2025-04-14"
      maxDate="2025-04-24"
    />
  );
}
`;

function Demo() {
  const [value, onChange] = useState<string | null>('2025-04-15');
  return (
    <MiniCalendar
      value={value}
      onChange={onChange}
      numberOfDays={6}
      defaultDate="2025-04-13"
      minDate="2025-04-14"
      maxDate="2025-04-24"
    />
  );
}

export const minMax: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
