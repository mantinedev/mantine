import dayjs from 'dayjs';
import { useState } from 'react';
import { Box } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Box } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <Box style={{ width: 375, height: 500 }}>
      <MobileMonthView
        date={date}
        onDateChange={setDate}
        selectedDate={selectedDate}
        onSelectedDateChange={setSelectedDate}
        events={events}
      />
    </Box>
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <Box style={{ width: 375, height: 500 }}>
      <MobileMonthView
        date={date}
        onDateChange={setDate}
        selectedDate={selectedDate}
        onSelectedDateChange={setSelectedDate}
        events={regularEvents}
      />
    </Box>
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
