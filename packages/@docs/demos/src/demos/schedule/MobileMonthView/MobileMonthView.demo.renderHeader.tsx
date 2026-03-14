import dayjs from 'dayjs';
import { useState } from 'react';
import { Badge } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Badge } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      renderHeader={({ defaultHeader }) => (
        <>
          {defaultHeader}
          <Badge variant="light" size="sm">3 events today</Badge>
        </>
      )}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
      renderHeader={({ defaultHeader }) => (
        <>
          {defaultHeader}
          <Badge variant="light" size="sm">
            3 events today
          </Badge>
        </>
      )}
    />
  );
}

export const renderHeader: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  centered: true,
  maxWidth: 375,
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
