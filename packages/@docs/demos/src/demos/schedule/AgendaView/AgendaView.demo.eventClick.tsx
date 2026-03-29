import dayjs from 'dayjs';
import { useState } from 'react';
import { Modal, Stack, Text } from '@mantine/core';
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
    payload: { description: 'Daily team sync', location: 'Room A' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: `${today} 10:00:00`,
    end: `${today} 12:00:00`,
    color: 'grape',
    payload: { description: 'Collaborative design session', location: 'Creative Space' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { description: 'Review pull requests', location: 'Zoom' },
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Modal, Stack, Text } from '@mantine/core';
import { AgendaView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'standup',
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { description: 'Daily team sync', location: 'Room A' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'grape',
    payload: { description: 'Collaborative design session', location: 'Creative Space' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { description: 'Review pull requests', location: 'Zoom' },
  },
];

function Demo() {
  const [selected, setSelected] = useState<ScheduleEventData | null>(null);

  return (
    <>
      <AgendaView
        rangeStart={dayjs().format('YYYY-MM-DD')}
        rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
        events={events}
        onEventClick={(event) => setSelected(event)}
      />

      <Modal
        opened={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <Stack gap="xs">
            <Text size="sm" c="dimmed">
              {dayjs(selected.start).format('MMM D, YYYY HH:mm')} –{' '}
              {dayjs(selected.end).format('HH:mm')}
            </Text>
            {selected.payload?.description && (
              <Text size="sm">{selected.payload.description}</Text>
            )}
            {selected.payload?.location && (
              <Text size="sm" c="dimmed">
                Location: {selected.payload.location}
              </Text>
            )}
          </Stack>
        )}
      </Modal>
    </>
  );
}
`;

function Demo() {
  const [selected, setSelected] = useState<ScheduleEventData | null>(null);

  return (
    <>
      <AgendaView
        rangeStart={dayjs().format('YYYY-MM-DD')}
        rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
        events={eventsData}
        onEventClick={(event) => setSelected(event)}
      />

      <Modal opened={selected !== null} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <Stack gap="xs">
            <Text size="sm" c="dimmed">
              {dayjs(selected.start).format('MMM D, YYYY HH:mm')} –{' '}
              {dayjs(selected.end).format('HH:mm')}
            </Text>
            {selected.payload?.description && <Text size="sm">{selected.payload.description}</Text>}
            {selected.payload?.location && (
              <Text size="sm" c="dimmed">
                Location: {selected.payload.location}
              </Text>
            )}
          </Stack>
        )}
      </Modal>
    </>
  );
}

export const eventClick: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 500,
  code,
};
