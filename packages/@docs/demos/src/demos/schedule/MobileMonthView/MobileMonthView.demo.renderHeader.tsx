import dayjs from 'dayjs';
import { useState } from 'react';
import { Badge } from '@mantine/core';
import { MobileMonthView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Badge } from '@mantine/core';
import { MobileMonthView, ScheduleEventData } from '@mantine/schedule';
import { events } from './data';

function countEvents(events: ScheduleEventData[], day: string | null) {
  if (!day) {
    return 0;
  }

  const dayStart = dayjs(day).startOf('day');
  const dayEnd = dayStart.add(1, 'day');
  return events.filter(
    (event) => dayjs(event.start).isBefore(dayEnd) && dayjs(event.end).isAfter(dayStart)
  ).length;
}

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));
  const count = countEvents(events, selectedDate);

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
          <Badge variant="default" size="sm">
            {count} {count === 1 ? 'event' : 'events'}
          </Badge>
        </>
      )}
    />
  );
}
`;

function countEvents(events: ScheduleEventData[], day: string | null) {
  if (!day) {
    return 0;
  }

  const dayStart = dayjs(day).startOf('day');
  const dayEnd = dayStart.add(1, 'day');
  return events.filter(
    (event) => dayjs(event.start).isBefore(dayEnd) && dayjs(event.end).isAfter(dayStart)
  ).length;
}

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));
  const count = countEvents(regularEvents, selectedDate);

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
          <Badge variant="default" size="sm">
            {count} {count === 1 ? 'event' : 'events'}
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
