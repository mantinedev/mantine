import { useState } from 'react';
import { DayView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import { useState } from 'react';
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState('2024-06-15 09:00:00');

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState('2024-06-15 09:00:00');

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
