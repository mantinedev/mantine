import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ScheduleEventData, ScheduleResourceData } from '../../types';
import { toDateString } from '../../utils';
import { ResourcesWeekView } from './ResourcesWeekView';

export default { title: 'schedule/ResourcesWeekView' };

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
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
    start: `${tomorrow} 09:30:00`,
    end: `${tomorrow} 10:30:00`,
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
    start: `${tomorrow} 11:00:00`,
    end: `${tomorrow} 11:30:00`,
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
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}

export function MultidayEvents() {
  // Monday of the current week, independent of locale.
  const monday = dayjs().subtract((dayjs().day() + 6) % 7, 'day');
  const mon = monday.format('YYYY-MM-DD');
  const tue = monday.add(1, 'day').format('YYYY-MM-DD');
  const wed = monday.add(2, 'day').format('YYYY-MM-DD');

  const events: ScheduleEventData[] = [
    {
      id: 1,
      title: 'Conference (Mon 22:00 → Wed 02:00)',
      start: `${mon} 22:00:00`,
      end: `${wed} 02:00:00`,
      color: 'grape',
      resourceId: 'tokyo',
      payload: {},
    },
    {
      id: 2,
      title: 'Overnight shift (Tue 23:00 → Wed 01:00)',
      start: `${tue} 23:00:00`,
      end: `${wed} 01:00:00`,
      color: 'orange',
      resourceId: 'paris',
      payload: {},
    },
    {
      id: 3,
      title: 'Standup',
      start: `${tue} 09:00:00`,
      end: `${tue} 09:30:00`,
      color: 'blue',
      resourceId: 'tokyo',
      payload: {},
    },
  ];

  return (
    <Stack p="md">
      <Text size="sm" c="dimmed">
        The Conference spans Mon→Wed and the Overnight shift spans Tue→Wed. Both must appear on
        every day they cover as all-day events, not only on their start day.
      </Text>
      <ResourcesWeekView date={mon} resources={resources} events={events} />
    </Stack>
  );
}

export function IntervalMinutes() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesWeekView
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

export function BusinessHours() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesWeekView
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
    <ResourcesWeekView
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

export function DragAndDrop() {
  const [date, setDate] = useState(toDateString(new Date()));
  const [events, setEvents] = useState<ScheduleEventData[]>(regularEvents);
  const [lastAction, setLastAction] = useState('');

  return (
    <div>
      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withEventsDragAndDrop
        onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
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

export function EventResize() {
  const [date, setDate] = useState(toDateString(new Date()));
  const [events, setEvents] = useState<ScheduleEventData[]>(regularEvents);
  const [lastAction, setLastAction] = useState('');

  return (
    <div>
      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withEventResize
        onEventResize={({ eventId, newStart, newEnd }) => {
          setEvents((prev) =>
            prev.map((event) =>
              event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
            )
          );
          const resizedEvent = events.find((e) => e.id === eventId);
          setLastAction(
            `Resized "${resizedEvent?.title}" to ${dayjs(newStart).format('HH:mm')} - ${dayjs(newEnd).format('HH:mm')}`
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
      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={regularEvents}
        startTime="08:00:00"
        endTime="18:00:00"
        withDragSlotSelect
        onSlotDragEnd={({ rangeStart, rangeEnd, resourceId }) => {
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

        <ResourcesWeekView
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

export function WithoutWeekendDays() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      withWeekendDays={false}
    />
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
      start: `${tomorrow} 14:00:00`,
      end: `${tomorrow} 15:30:00`,
      color: ['blue', 'green', 'violet', 'orange', 'cyan', 'pink'][i],
      resourceId: resource.id,
      payload: {},
    },
  ]);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={manyResources}
      events={manyEvents}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}

export function SlotWidth() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      slotWidth={100}
    />
  );
}

export function ManyOverlappingEvents() {
  const [date, setDate] = useState(toDateString(new Date()));

  const manyEvents: ScheduleEventData[] = Array.from({ length: 10 }, (_, i) => ({
    id: `overlap-${i + 1}`,
    title: `Event ${i + 1}`,
    start: `${today} 10:00:00`,
    end: `${today} 11:00:00`,
    color: ['blue', 'green', 'violet', 'orange', 'cyan', 'pink', 'red', 'grape', 'teal', 'indigo'][
      i
    ],
    resourceId: 'tokyo',
    payload: {},
  }));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={manyEvents}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
