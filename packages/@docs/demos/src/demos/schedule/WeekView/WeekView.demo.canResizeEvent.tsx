import dayjs from 'dayjs';
import { useState } from 'react';
import { ScheduleEventData, WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Resizable Event',
    start: `${startOfWeek} 09:00:00`,
    end: `${startOfWeek} 10:00:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: `${startOfWeek} 11:00:00`,
    end: `${startOfWeek} 12:00:00`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Resizable',
    start: `${dayAfterStartOfWeek} 14:00:00`,
    end: `${dayAfterStartOfWeek} 15:00:00`,
    color: 'green',
  },
];

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Resizable Event',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Resizable',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = (eventId: string | number, newStart: string, newEnd: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = (eventId: string | number, newStart: string, newEnd: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}

export const canResizeEvent: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
