import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ScheduleEventData, WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const startOfWeek = dayjs()
  .subtract((dayjs().day() + 6) % 7, 'day')
  .format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Standup',
    start: `${startOfWeek} 09:00:00`,
    end: `${startOfWeek} 09:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Design review',
    start: `${startOfWeek} 11:00:00`,
    end: `${startOfWeek} 12:00:00`,
    color: 'grape',
  },
  {
    id: 3,
    title: 'Retro',
    start: `${startOfWeek} 14:00:00`,
    end: `${startOfWeek} 15:00:00`,
    color: 'teal',
  },
];

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { Stack, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs()
  .subtract((dayjs().day() + 6) % 7, 'day')
  .format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Design review',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'grape',
  },
  {
    id: 3,
    title: 'Retro',
    start: \`\${startOfWeek} 14:00:00\`,
    end: \`\${startOfWeek} 15:00:00\`,
    color: 'teal',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <Stack>
      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withEventsDragAndDrop
        withEventResize
        eventDragInterval={15}
        preventEventOverlap
        onEventDrop={({ eventId, newStart, newEnd }) => {
          setMessage(null);
          setEvents((prev) =>
            prev.map((event) =>
              event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
            )
          );
        }}
        onEventResize={({ eventId, newStart, newEnd }) => {
          setMessage(null);
          setEvents((prev) =>
            prev.map((event) =>
              event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
            )
          );
        }}
        onEventPlacementRejected={(data) => {
          if (data.action === 'external-drop') {
            return;
          }

          setMessage(
            \`\${data.event.title} cannot be \${data.action === 'drop' ? 'moved' : 'resized'} there – it would overlap \${data.conflicts
              .map((conflict) => conflict.title)
              .join(', ')}\`
          );
        }}
      />

      {message && <Text c="red" size="sm">{message}</Text>}
    </Stack>
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <Stack>
      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withEventsDragAndDrop
        withEventResize
        eventDragInterval={15}
        preventEventOverlap
        onEventDrop={({ eventId, newStart, newEnd }) => {
          setMessage(null);
          setEvents((prev) =>
            prev.map((event) =>
              event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
            )
          );
        }}
        onEventResize={({ eventId, newStart, newEnd }) => {
          setMessage(null);
          setEvents((prev) =>
            prev.map((event) =>
              event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
            )
          );
        }}
        onEventPlacementRejected={(data) => {
          if (data.action === 'external-drop') {
            return;
          }

          setMessage(
            `${data.event.title} cannot be ${data.action === 'drop' ? 'moved' : 'resized'} there – it would overlap ${data.conflicts
              .map((conflict) => conflict.title)
              .join(', ')}`
          );
        }}
      />

      {message && (
        <Text c="red" size="sm">
          {message}
        </Text>
      )}
    </Stack>
  );
}

export const preventEventOverlap: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
