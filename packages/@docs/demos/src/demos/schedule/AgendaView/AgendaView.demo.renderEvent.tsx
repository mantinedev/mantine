import dayjs from 'dayjs';
import { Badge, Box, Group, Text, UnstyledButton } from '@mantine/core';
import { AgendaView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const eventsData: ScheduleEventData[] = [
  {
    id: 'standup',
    title: 'Team Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    payload: { location: 'Room A', category: 'meeting' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: `${today} 10:00:00`,
    end: `${today} 12:00:00`,
    color: 'grape',
    payload: { location: 'Creative Space', category: 'workshop' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { location: 'Zoom', category: 'dev' },
  },
  {
    id: 'conference',
    title: 'Tech Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(3, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: { location: 'Convention Center', category: 'event' },
  },
];

const code = `
import dayjs from 'dayjs';
import { Badge, Box, Group, Text, UnstyledButton } from '@mantine/core';
import { AgendaView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'standup',
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A', category: 'meeting' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'grape',
    payload: { location: 'Creative Space', category: 'workshop' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { location: 'Zoom', category: 'dev' },
  },
  {
    id: 'conference',
    title: 'Tech Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(3, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: { location: 'Convention Center', category: 'event' },
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      renderEvent={(event, props) => (
        <UnstyledButton {...props}>
          <Box
            style={{
              display: 'flex',
              gap: 'var(--mantine-spacing-sm)',
              padding: 'var(--mantine-spacing-xs) var(--mantine-spacing-sm)',
            }}
          >
            <Box
              style={{
                width: 4,
                borderRadius: 2,
                flexShrink: 0,
                backgroundColor: \`var(--mantine-color-\${event.color}-filled)\`,
              }}
            />
            <div style={{ flex: 1 }}>
              <Group justify="space-between" wrap="nowrap">
                <Text size="sm" fw={500}>
                  {event.title}
                </Text>
                <Badge size="xs" variant="light" color={event.color}>
                  {event.payload?.category}
                </Badge>
              </Group>
              <Text size="xs" c="dimmed">
                {dayjs(event.start).format('HH:mm')} – {dayjs(event.end).format('HH:mm')}
              </Text>
              {event.payload?.location && (
                <Text size="xs" c="dimmed" mt={2}>
                  📍 {event.payload.location}
                </Text>
              )}
            </div>
          </Box>
        </UnstyledButton>
      )}
    />
  );
}
`;

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={eventsData}
      renderEvent={(event, props) => (
        <UnstyledButton {...props}>
          <Box
            style={{
              display: 'flex',
              gap: 'var(--mantine-spacing-sm)',
              padding: 'var(--mantine-spacing-xs) var(--mantine-spacing-sm)',
            }}
          >
            <Box
              style={{
                width: 4,
                borderRadius: 2,
                flexShrink: 0,
                backgroundColor: `var(--mantine-color-${event.color}-filled)`,
              }}
            />
            <div style={{ flex: 1 }}>
              <Group justify="space-between" wrap="nowrap">
                <Text size="sm" fw={500}>
                  {event.title}
                </Text>
                <Badge size="xs" variant="light" color={event.color}>
                  {event.payload?.category}
                </Badge>
              </Group>
              <Text size="xs" c="dimmed">
                {dayjs(event.start).format('HH:mm')} – {dayjs(event.end).format('HH:mm')}
              </Text>
              {event.payload?.location && (
                <Text size="xs" c="dimmed" mt={2}>
                  {'\u{1F4CD}'} {event.payload.location}
                </Text>
              )}
            </div>
          </Box>
        </UnstyledButton>
      )}
    />
  );
}

export const renderEvent: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 500,
  code,
};
