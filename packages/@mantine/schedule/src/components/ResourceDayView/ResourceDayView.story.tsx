import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ScheduleEventData, ScheduleResourceData } from '../../types';
import { toDateString } from '../../utils';
import { ResourceDayView } from './ResourceDayView';

export default { title: 'schedule/ResourceDayView' };

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'new-york', label: 'New York' },
];

const regularEvents: ScheduleEventData[] = [
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
    resourceId: 'tokyo',
    payload: {},
  },
  {
    id: 3,
    title: 'Client Call',
    start: `${today} 09:30:00`,
    end: `${today} 10:30:00`,
    color: 'violet',
    resourceId: 'paris',
    payload: {},
  },
  {
    id: 4,
    title: 'Design Review',
    start: `${today} 13:00:00`,
    end: `${today} 14:00:00`,
    color: 'orange',
    resourceId: 'paris',
    payload: {},
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: `${today} 11:00:00`,
    end: `${today} 11:30:00`,
    color: 'cyan',
    resourceId: 'new-york',
    payload: {},
  },
  {
    id: 6,
    title: 'Workshop',
    start: `${today} 14:00:00`,
    end: `${today} 16:00:00`,
    color: 'pink',
    resourceId: 'new-york',
    payload: {},
  },
];

export function Usage() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}

export function IntervalMinutes() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}

export function SlotWidth() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      slotWidth={120}
    />
  );
}

export function RowHeight() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      rowHeight={100}
    />
  );
}

export function BusinessHours() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="07:00:00"
      endTime="20:00:00"
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}

export function NoHeader() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      withHeader={false}
    />
  );
}

export function CustomResourceLabel() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      renderResourceLabel={(resource) => (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{resource.label}</div>
          <div style={{ fontSize: 11, color: 'gray' }}>Floor 2</div>
        </div>
      )}
    />
  );
}

export function DragAndDrop() {
  const [date, setDate] = useState(toDateString(new Date()));
  const [events, setEvents] = useState<ScheduleEventData[]>(regularEvents);
  const [lastAction, setLastAction] = useState('');

  return (
    <div>
      <ResourceDayView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withEventsDragAndDrop
        onEventDrop={(eventId, newStart, newEnd, _event, resourceId) => {
          setEvents((prev) =>
            prev.map((event) =>
              event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
            )
          );
          const movedEvent = events.find((e) => e.id === eventId);
          setLastAction(
            `Moved "${movedEvent?.title}" to ${resourceId} at ${dayjs(newStart).format('HH:mm')}`
          );
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

export function SlotDragSelect() {
  const [date, setDate] = useState(toDateString(new Date()));
  const [lastAction, setLastAction] = useState('');

  return (
    <div>
      <ResourceDayView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={regularEvents}
        startTime="08:00:00"
        endTime="18:00:00"
        withDragSlotSelect
        onSlotDragEnd={(rangeStart, rangeEnd, resourceId) => {
          setLastAction(
            `Selected ${dayjs(rangeStart).format('HH:mm')} - ${dayjs(rangeEnd).format('HH:mm')} on ${resourceId}`
          );
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
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
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
            Events and time slots are not clickable or draggable.
          </Text>
        </div>

        <ResourceDayView
          date={new Date()}
          resources={resources}
          events={regularEvents}
          mode="static"
          startTime="08:00:00"
          endTime="18:00:00"
        />
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
    { id: 'r6', label: 'Room 6' },
  ];

  const manyEvents: ScheduleEventData[] = manyResources.flatMap((resource, i) => [
    {
      id: `${resource.id}-1`,
      title: `Meeting ${i + 1}a`,
      start: `${today} 09:00:00`,
      end: `${today} 10:00:00`,
      color: ['blue', 'green', 'violet', 'orange', 'cyan', 'pink'][i],
      resourceId: resource.id,
      payload: {},
    },
    {
      id: `${resource.id}-2`,
      title: `Meeting ${i + 1}b`,
      start: `${today} 14:00:00`,
      end: `${today} 15:30:00`,
      color: ['blue', 'green', 'violet', 'orange', 'cyan', 'pink'][i],
      resourceId: resource.id,
      payload: {},
    },
  ]);

  return (
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={manyResources}
      events={manyEvents}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}

export function ManyOverlappingEvents() {
  const [date, setDate] = useState(toDateString(new Date()));

  const manyEvents: ScheduleEventData[] = Array.from({ length: 12 }, (_, i) => ({
    id: `event-${i + 1}`,
    title: `Event ${i + 1}`,
    start: `${today} ${String(9 + Math.floor(i / 3)).padStart(2, '0')}:00:00`,
    end: `${today} ${String(10 + Math.floor(i / 3)).padStart(2, '0')}:00:00`,
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
    <ResourceDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={manyEvents}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
