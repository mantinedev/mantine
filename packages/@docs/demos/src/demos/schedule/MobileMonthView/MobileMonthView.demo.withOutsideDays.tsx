import dayjs from 'dayjs';
import { useState } from 'react';
import { Box } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

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
        withOutsideDays
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
        withOutsideDays
      />
    </Box>
  );
}

export const withOutsideDays: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
