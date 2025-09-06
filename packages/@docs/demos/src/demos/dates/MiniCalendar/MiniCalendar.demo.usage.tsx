import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  const [value, onChange] = useState<string | null>('2025-04-15');
  return <MiniCalendar value={value} onChange={onChange} numberOfDays={6} />;
}
`;

function Demo() {
  const [value, onChange] = useState<string | null>('2025-04-15');
  return <MiniCalendar value={value} onChange={onChange} numberOfDays={6} />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
