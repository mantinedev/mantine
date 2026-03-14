import dayjs from 'dayjs';
import { useState } from 'react';
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { ScheduleEventData, WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${startOfWeek} 09:00:00`,
    end: `${startOfWeek} 09:30:00`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  {
    id: 2,
    title: 'Client Meeting',
    start: `${startOfWeek} 11:00:00`,
    end: `${startOfWeek} 12:00:00`,
    color: 'green',
    payload: { location: 'Video Call' },
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: `${dayAfterStartOfWeek} 12:30:00`,
    end: `${dayAfterStartOfWeek} 13:30:00`,
    color: 'orange',
    payload: { location: 'Cafeteria' },
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  {
    id: 2,
    title: 'Client Meeting',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'green',
    payload: { location: 'Video Call' },
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: \`\${dayAfterStartOfWeek} 12:30:00\`,
    end: \`\${dayAfterStartOfWeek} 13:30:00\`,
    color: 'orange',
    payload: { location: 'Cafeteria' },
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderEventBody={(event) => (
        <Group>
          <Text fz={12} fw={500}>
            {event.title}
          </Text>
          <Group gap={4}>
            <ClockIcon size={12} />
            <Text fz={10} lh={1}>
              {dayjs(event.start).format('h:mm A')}
            </Text>
          </Group>

          {event.payload?.location && (
            <Group gap={4}>
              <MapPinIcon size={12} />
              <Text fz={10}>{event.payload.location}</Text>
            </Group>
          )}
        </Group>
      )}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderEventBody={(event) => (
        <Group>
          <Text fz={12} fw={500}>
            {event.title}
          </Text>
          <Group gap={4}>
            <ClockIcon size={12} />
            <Text fz={10} lh={1}>
              {dayjs(event.start).format('h:mm A')}
            </Text>
          </Group>

          {event.payload?.location && (
            <Group gap={4}>
              <MapPinIcon size={12} />
              <Text fz={10}>{event.payload.location}</Text>
            </Group>
          )}
        </Group>
      )}
    />
  );
}

export const renderEventBody: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
