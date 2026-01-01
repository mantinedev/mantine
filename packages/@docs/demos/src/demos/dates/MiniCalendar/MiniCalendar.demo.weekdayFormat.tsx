import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  const [value, onChange] = useState<string | null>('2025-12-29');
  return <MiniCalendar value={value} onChange={onChange} withWeekday weekdayFormat="dddd" />;
}
`;

function Demo() {
  const [value, onChange] = useState<string | null>('2025-12-29');
  return <MiniCalendar value={value} onChange={onChange} withWeekday weekdayFormat="dddd" />;
}

export const weekdayFormat: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
