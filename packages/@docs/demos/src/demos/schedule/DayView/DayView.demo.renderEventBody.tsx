import dayjs from 'dayjs';
import { IconClock, IconMapPin } from '@tabler/icons-react';
import { Group, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  {
    id: 2,
    title: 'Client Meeting',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
    payload: { location: 'Video Call' },
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: `${today} 12:30:00`,
    end: `${today} 13:30:00`,
    color: 'orange',
    payload: { location: 'Cafeteria' },
  },
];

const code = `
import { IconClock, IconMapPin } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { Group, Text } from '@mantine/core';

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  // ... more events
];

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderEventBody={(event) => (
        <div>
          <Text size="sm" fw={500}>
            {event.title}
          </Text>
          <Group gap={4} mt={4}>
            <IconClock size={12} />
            <Text size="xs">
              {dayjs(event.start).format('h:mm A')}
            </Text>
          </Group>
          {event.payload?.location && (
            <Group gap={4} mt={2}>
              <IconMapPin size={12} />
              <Text size="xs">{event.payload.location}</Text>
            </Group>
          )}
        </div>
      )}
    />
  );
}
`;

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderEventBody={(event) => (
        <div>
          <Text size="sm" fw={500}>
            {event.title}
          </Text>
          <Group gap={4} mt={4}>
            <IconClock size={12} />
            <Text size="xs">{dayjs(event.start).format('h:mm A')}</Text>
          </Group>
          {event.payload?.location && (
            <Group gap={4} mt={2}>
              <IconMapPin size={12} />
              <Text size="xs">{event.payload.location}</Text>
            </Group>
          )}
        </div>
      )}
    />
  );
}

export const renderEventBody: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
