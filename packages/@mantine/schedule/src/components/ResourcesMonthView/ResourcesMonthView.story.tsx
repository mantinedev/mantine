import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ScheduleEventData, ScheduleResourceData } from '../../types';
import { toDateString } from '../../utils';
import { ResourcesMonthView } from './ResourcesMonthView';

export default { title: 'schedule/ResourcesMonthView' };

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    resourceId: 'tokyo',
    payload: {},
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'green',
    resourceId: 'paris',
    payload: {},
  },
  {
    id: 3,
    title: 'Design Review',
    start: `${tomorrow} 13:00:00`,
    end: `${tomorrow} 14:00:00`,
    color: 'orange',
    resourceId: 'tokyo',
    payload: {},
  },
  {
    id: 4,
    title: 'Client Call',
    start: `${tomorrow} 09:30:00`,
    end: `${tomorrow} 10:30:00`,
    color: 'violet',
    resourceId: 'new-york',
    payload: {},
  },
  {
    id: 5,
    title: 'Workshop',
    start: `${nextWeek} 14:00:00`,
    end: `${nextWeek} 16:00:00`,
    color: 'pink',
    resourceId: 'paris',
    payload: {},
  },
  {
    id: 6,
    title: 'Retro',
    start: `${nextWeek} 10:00:00`,
    end: `${nextWeek} 11:00:00`,
    color: 'cyan',
    resourceId: 'new-york',
    payload: {},
  },
];

export function Usage() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesMonthView date={date} onDateChange={setDate} resources={resources} events={events} />
  );
}

export function DayWidth() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      dayWidth={60}
    />
  );
}

export function RowHeight() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      rowHeight={80}
    />
  );
}

export function NoHeader() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withHeader={false}
    />
  );
}

export function CustomResourceLabel() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      renderResourceLabel={(resource) => (
        <span style={{ fontSize: 12, fontWeight: 700 }}>{resource.label}</span>
      )}
    />
  );
}

export function DragAndDrop() {
  const [date, setDate] = useState(toDateString(new Date()));
  const [eventsData, setEventsData] = useState<ScheduleEventData[]>(events);
  const [lastAction, setLastAction] = useState('');

  return (
    <div>
      <ResourcesMonthView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={eventsData}
        withEventsDragAndDrop
        onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
          setEventsData((prev) =>
            prev.map((event) =>
              event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
            )
          );
          const movedEvent = eventsData.find((e) => e.id === eventId);
          setLastAction(`Moved "${movedEvent?.title}" to ${dayjs(newStart).format('MMM D')}`);
        }}
      />
      {lastAction && (
        <div style={{ marginTop: 20, padding: 12, backgroundColor: '#f0f0f0', borderRadius: 4 }}>
          Last action: {lastAction}
        </div>
      )}
    </div>
  );
}

export function Radius() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      radius="md"
    />
  );
}

export function StaticMode() {
  return (
    <div style={{ padding: 40 }}>
      <Stack gap="md">
        <div>
          <Text size="sm" fw={500} mb="xs">
            Static Mode
          </Text>
          <Text size="xs" c="dimmed" mb="md">
            Events and day cells are not clickable or draggable.
          </Text>
        </div>

        <ResourcesMonthView date={new Date()} resources={resources} events={events} mode="static" />
      </Stack>
    </div>
  );
}

export function ManyResources() {
  const [date, setDate] = useState(toDateString(new Date()));
  const manyResources: ScheduleResourceData[] = [
    { id: 'r1', label: 'Room 1' },
    { id: 'r2', label: 'Room 2' },
    { id: 'r3', label: 'Room 3' },
    { id: 'r4', label: 'Room 4' },
    { id: 'r5', label: 'Room 5' },
  ];

  const manyEvents: ScheduleEventData[] = manyResources.flatMap((resource, i) => [
    {
      id: `${resource.id}-1`,
      title: `Mtg ${i + 1}`,
      start: `${today} 09:00:00`,
      end: `${today} 10:00:00`,
      color: ['blue', 'green', 'violet', 'orange', 'cyan'][i],
      resourceId: resource.id,
      payload: {},
    },
  ]);

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={manyResources}
      events={manyEvents}
    />
  );
}

export function ManyEventsPerDay() {
  const [date, setDate] = useState(toDateString(new Date()));

  const manyEvents: ScheduleEventData[] = Array.from({ length: 12 }, (_, i) => ({
    id: `event-${i + 1}`,
    title: `Event ${i + 1}`,
    start: `${today} ${String(8 + i).padStart(2, '0')}:00:00`,
    end: `${today} ${String(9 + i).padStart(2, '0')}:00:00`,
    color: [
      'blue',
      'green',
      'violet',
      'orange',
      'cyan',
      'pink',
      'red',
      'grape',
      'teal',
      'indigo',
      'lime',
      'yellow',
    ][i],
    resourceId: 'tokyo',
    payload: {},
  }));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={manyEvents}
      maxEventsPerTimeSlot={3}
    />
  );
}
