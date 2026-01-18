import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(new Date());

  return (
    <YearView
      date={date}
      onDateChange={(newDate) => setDate(new Date(newDate))}
      events={events}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(new Date());

  return (
    <YearView
      date={date}
      onDateChange={(newDate) => setDate(new Date(newDate))}
      events={regularEvents}
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
