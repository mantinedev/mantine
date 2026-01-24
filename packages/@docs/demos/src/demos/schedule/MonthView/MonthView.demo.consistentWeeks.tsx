import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  return <MonthView date={date} consistentWeeks={false} onDateChange={setDate} />;
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  return <MonthView date={date} consistentWeeks={false} onDateChange={setDate} />;
}

export const consistentWeeks: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
