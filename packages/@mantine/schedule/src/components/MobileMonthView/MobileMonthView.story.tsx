import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useState } from 'react';
import { Box, Button, Group, Stack, Switch, Text } from '@mantine/core';
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

export function ControlledMonthNavigation() {
  const [date, setDate] = useState('2025-11-01');
  const [withOutsideDays, setWithOutsideDays] = useState(false);
  return (
    <Stack>
      <Group>
        <Button
          variant="default"
          onClick={() => setDate(dayjs(date).subtract(1, 'month').format('YYYY-MM-DD'))}
        >
          Previous month
        </Button>
        <Button
          variant="default"
          onClick={() => setDate(dayjs(date).add(1, 'month').format('YYYY-MM-DD'))}
        >
          Next month
        </Button>
        <Switch
          label="withOutsideDays"
          checked={withOutsideDays}
          onChange={(event) => setWithOutsideDays(event.currentTarget.checked)}
        />
      </Group>
      <Text size="sm">date: {date}</Text>
      <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
        <MobileMonthView
          date={date}
          onDateChange={setDate}
          events={november2025Events}
          withWeekNumbers
          withOutsideDays={withOutsideDays}
        />
      </Box>
    </Stack>
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
        labels={{ noEvents: 'Нет событий' }}
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
      <MobileMonthView date="2025-11-01" events={november2025Events} selectedDate="2025-11-10" />
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

export function OutsideDaysEvents() {
  return (
    <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
      <MobileMonthView
        date="2026-10-01"
        firstDayOfWeek={0}
        withOutsideDays
        events={[
          {
            id: 1,
            title: 'Sunday before the month',
            start: '2026-09-27 10:00:00',
            end: '2026-09-27 11:00:00',
            color: 'blue',
          },
          {
            id: 2,
            title: 'First of November',
            start: '2026-11-01 10:00:00',
            end: '2026-11-01 11:00:00',
            color: 'red',
          },
          {
            id: 3,
            title: 'Daily recurring',
            start: '2026-10-30 08:00:00',
            end: '2026-10-30 08:30:00',
            color: 'green',
            recurrence: { rrule: 'FREQ=DAILY;COUNT=5' },
          },
        ]}
      />
    </Box>
  );
}

export function DisabledWeekends() {
  return (
    <Stack>
      <Text size="sm">
        Weekends are disabled and the selected day (Saturday, November 8) is one of them. Tab enters
        the grid on Monday, November 3.
      </Text>
      <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
        <MobileMonthView
          date="2025-11-01"
          defaultSelectedDate="2025-11-08"
          events={november2025Events}
          getDayProps={(date) => ({ disabled: [0, 6].includes(dayjs(date).day()) })}
        />
      </Box>
    </Stack>
  );
}

export function SelectedDateOutsideMonth() {
  const [date, setDate] = useState('2025-12-01');
  return (
    <Stack>
      <Text size="sm">
        December is displayed and November 5 is selected. The list shows the events of November 5.
      </Text>
      <Box style={{ width: 375, height: 600, border: '1px solid #ccc' }}>
        <MobileMonthView
          date={date}
          onDateChange={setDate}
          defaultSelectedDate="2025-11-05"
          events={november2025Events}
        />
      </Box>
    </Stack>
  );
}
