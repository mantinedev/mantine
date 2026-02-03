import 'dayjs/locale/ru';

import { useState } from 'react';
import { Box, Stack, Text } from '@mantine/core';
import { ScheduleEventData } from '../../types';
import { MobileMonthView } from './MobileMonthView';

export default { title: 'schedule/MobileMonthView' };

const november2025Events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Project Kickoff',
    start: '2025-11-03 09:00:00',
    end: '2025-11-03 10:30:00',
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Conference - Day 1',
    start: '2025-11-05',
    end: '2025-11-07',
    color: 'red',
    payload: {},
  },
  {
    id: 3,
    title: 'Morning Standup',
    start: '2025-11-10 08:00:00',
    end: '2025-11-10 08:30:00',
    color: 'green',
    payload: {},
  },
  {
    id: 4,
    title: 'Team Sync',
    start: '2025-11-10 10:00:00',
    end: '2025-11-10 11:00:00',
    color: 'violet',
    payload: {},
  },
  {
    id: 5,
    title: 'Lunch Meeting',
    start: '2025-11-10 12:00:00',
    end: '2025-11-10 13:00:00',
    color: 'orange',
    payload: {},
  },
  {
    id: 6,
    title: 'Product Workshop',
    start: '2025-11-10 14:00:00',
    end: '2025-11-10 15:30:00',
    color: 'cyan',
    payload: {},
  },
  {
    id: 7,
    title: 'Client Review',
    start: '2025-11-10 16:00:00',
    end: '2025-11-10 17:00:00',
    color: 'pink',
    payload: {},
  },
  {
    id: 8,
    title: 'Sales Summit',
    start: '2025-11-15',
    end: '2025-11-17',
    color: 'yellow',
    payload: {},
  },
  {
    id: 9,
    title: 'Thanksgiving Holiday',
    start: '2025-11-25',
    end: '2025-11-28',
    color: 'blue',
    payload: {},
  },
  {
    id: 10,
    title: 'Month Closing',
    start: '2025-11-28 10:00:00',
    end: '2025-11-28 11:00:00',
    color: 'grape',
    payload: {},
  },
];

export function Usage() {
  const [date, setDate] = useState('2025-11-01');
  const [selectedDate, setSelectedDate] = useState<string | null>('2025-11-10');
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView
        date={date}
        onDateChange={setDate}
        selectedDate={selectedDate}
        onSelectedDateChange={setSelectedDate}
        events={november2025Events}
      />
    </Box>
  );
}

export function WithWeekNumbers() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView
        date="2025-11-01"
        events={november2025Events}
        selectedDate="2025-11-10"
        withWeekNumbers
      />
    </Box>
  );
}

export function WithOutsideDays() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView
        date="2025-11-01"
        events={november2025Events}
        selectedDate="2025-11-10"
        withOutsideDays
      />
    </Box>
  );
}

export function Locale() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView
        date="2025-11-01"
        events={november2025Events}
        selectedDate="2025-11-10"
        locale="ru"
        eventsHeaderFormat="dddd, D MMMM"
      />
    </Box>
  );
}

export function FirstDayOfWeek() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView
        date="2025-11-01"
        events={november2025Events}
        selectedDate="2025-11-10"
        firstDayOfWeek={0}
      />
    </Box>
  );
}

export function NoEvents() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView date="2025-11-01" events={[]} selectedDate="2025-11-10" />
    </Box>
  );
}

export function CustomNoEventsText() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView
        date="2025-11-01"
        events={[]}
        selectedDate="2025-11-10"
        noEventsText="Нет событий"
      />
    </Box>
  );
}

export function StaticMode() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <Stack gap="md" p="md">
        <div>
          <Text size="sm" fw={500} mb="xs">
            Static Mode
          </Text>
          <Text size="xs" c="dimmed" mb="md">
            Days and week numbers are not clickable. No hover effects are shown.
          </Text>
        </div>

        <MobileMonthView
          date="2025-11-01"
          events={november2025Events}
          selectedDate="2025-11-10"
          mode="static"
        />
      </Stack>
    </Box>
  );
}

export function CustomRadius() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView
        date="2025-11-01"
        events={november2025Events}
        selectedDate="2025-11-10"
        radius="md"
      />
    </Box>
  );
}

export function WithoutWeekDays() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView
        date="2025-11-01"
        events={november2025Events}
        selectedDate="2025-11-10"
        withWeekDays={false}
      />
    </Box>
  );
}
