import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
  { id: 'room-c', label: 'Room C (large groups only)' },
];

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Interview (2 people)',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'blue',
    resourceId: 'room-a',
    payload: { attendees: 2 },
  },
  {
    id: 2,
    title: 'All-hands (40 people)',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'grape',
    resourceId: 'room-c',
    payload: { attendees: 40 },
  },
];

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { Stack, Text } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <Stack>
      <ResourcesDayView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withEventsDragAndDrop
        preventEventOverlap
        canDropEvent={({ event, resourceId }) =>
          resourceId !== 'room-c' || (event.payload?.attendees ?? 0) >= 20
        }
        onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
          setMessage(null);
          setEvents((prev) =>
            prev.map((event) =>
              event.id === eventId
                ? { ...event, start: newStart, end: newEnd, resourceId }
                : event
            )
          );
        }}
        onEventPlacementRejected={(data) => {
          if (data.action === 'external-drop') {
            return;
          }

          setMessage(
            data.reason === 'overlap'
              ? \`\${data.event.title} would overlap \${data.conflicts.length} event(s) in that room\`
              : 'Room C is reserved for meetings with 20 or more attendees'
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
      <ResourcesDayView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withEventsDragAndDrop
        preventEventOverlap
        canDropEvent={({ event, resourceId }) =>
          resourceId !== 'room-c' || (event.payload?.attendees ?? 0) >= 20
        }
        onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
          setMessage(null);
          setEvents((prev) =>
            prev.map((event) =>
              event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
            )
          );
        }}
        onEventPlacementRejected={(data) => {
          if (data.action === 'external-drop') {
            return;
          }

          setMessage(
            data.reason === 'overlap'
              ? `${data.event.title} would overlap ${data.conflicts.length} event(s) in that room`
              : 'Room C is reserved for meetings with 20 or more attendees'
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

export const canDropEvent: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
