import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { Box, Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const sidebarItems = [
  { title: 'Team Offsite', color: 'teal' },
  { title: 'Release Day', color: 'orange' },
  { title: 'All Hands', color: 'violet' },
];

const code = `
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const sidebarItems = [
  { title: 'Team Offsite', color: 'teal' },
  { title: 'Release Day', color: 'orange' },
  { title: 'All Hands', color: 'violet' },
];

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
    const raw = dataTransfer.getData('text/plain');
    if (!raw) {
      return;
    }

    const data = JSON.parse(raw);
    const start = dayjs(dropDateTime);
    const end = start.endOf('day');

    setEvents((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: data.title,
        start: start.format('YYYY-MM-DD HH:mm:ss'),
        end: end.format('YYYY-MM-DD HH:mm:ss'),
        color: data.color,
      },
    ]);
  };

  const handleEventDrop = (eventId: string | number, newStart: string, newEnd: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <Box style={{ display: 'flex', gap: 16 }}>
      <Box style={{ width: 160, flexShrink: 0 }}>
        <Text fw={500} mb="xs">Drag to schedule</Text>
        {sidebarItems.map((item) => (
          <Box
            key={item.title}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', JSON.stringify(item));
              e.dataTransfer.effectAllowed = 'copy';
            }}
            style={{
              padding: '8px 12px',
              marginBottom: 8,
              borderRadius: 4,
              cursor: 'grab',
              backgroundColor: \`var(--mantine-color-\${item.color}-light)\`,
              color: \`var(--mantine-color-\${item.color}-light-color)\`,
            }}
          >
            <Text size="sm" fw={500}>{item.title}</Text>
          </Box>
        ))}
      </Box>
      <Box style={{ flex: 1 }}>
        <MonthView
          date={new Date()}
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Box>
    </Box>
  );
}
`;

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
    const raw = dataTransfer.getData('text/plain');
    if (!raw) {
      return;
    }

    const data = JSON.parse(raw);
    const start = dayjs(dropDateTime);
    const end = start.endOf('day');

    setEvents((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: data.title,
        start: start.format('YYYY-MM-DD HH:mm:ss'),
        end: end.format('YYYY-MM-DD HH:mm:ss'),
        color: data.color,
      },
    ]);
  };

  const handleEventDrop = (eventId: string | number, newStart: string, newEnd: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <Box style={{ display: 'flex', gap: 16 }}>
      <Box style={{ width: 160, flexShrink: 0 }}>
        <Text fw={500} mb="xs">
          Drag to schedule
        </Text>
        {sidebarItems.map((item) => (
          <Box
            key={item.title}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', JSON.stringify(item));
              e.dataTransfer.effectAllowed = 'copy';
            }}
            style={{
              padding: '8px 12px',
              marginBottom: 8,
              borderRadius: 4,
              cursor: 'grab',
              backgroundColor: `var(--mantine-color-${item.color}-light)`,
              color: `var(--mantine-color-${item.color}-light-color)`,
            }}
          >
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
          </Box>
        ))}
      </Box>
      <Box style={{ flex: 1 }}>
        <MonthView
          date={new Date()}
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Box>
    </Box>
  );
}

export const externalDragDrop: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
