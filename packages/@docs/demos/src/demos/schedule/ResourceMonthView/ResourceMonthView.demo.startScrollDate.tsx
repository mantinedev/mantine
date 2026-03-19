import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourceMonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, resourceEvents, resources } from './_data';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourceMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourceMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourceMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={resourceEvents}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}

export const startScrollDate: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
