import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Stack, Text } from '@mantine/core';
import { ScheduleEventData } from '../../types';
import { DayView } from './DayView';

export default { title: 'schedule/DayView' };

const today = dayjs().format('YYYY-MM-DD');

const regularEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    payload: {},
  },
  {
    id: 9,
    title: 'Morning Standup 2',
    start: `${today} 10:30:00`,
    end: `${today} 11:30:00`,
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: `${today} 09:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: `${today} 09:30:00`,
    end: `${today} 12:30:00`,
    color: 'orange',
    payload: {},
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: {},
  },
  {
    id: 5,
    title: 'Tomorrow event, do not show',
    start: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(today).add(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: {},
  },
];

const overlappingEvents: ScheduleEventData[] = [
  {
    id: 0,
    title: 'Team Meeting',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 4,
    title: 'Team Meeting 2',
    start: `${today} 10:00:00`,
    end: `${today} 16:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 1,
    title: 'Workshop Session 1',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Workshop Session 2',
    start: `${today} 11:00:00`,
    end: `${today} 12:30:00`,
    color: 'violet',
    payload: {},
  },
  {
    id: 3,
    title: 'Workshop Session 3',
    start: `${today} 11:30:00`,
    end: `${today} 13:00:00`,
    color: 'cyan',
    payload: {},
  },
];

const allDayEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Conference Day',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: {},
  },
  {
    id: 2,
    title: 'Holiday',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink',
    payload: {},
  },
  {
    id: 3,
    title: 'Team Building',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
    payload: {},
  },
  {
    id: 4,
    title: 'Product Launch',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
    payload: {},
  },
  {
    id: 5,
    title: 'Year Kickoff',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
    payload: {},
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} />
    </div>
  );
}

export function RegularEvents() {
  return (
    <div style={{ padding: 40 }}>
      <DayView
        date={new Date()}
        events={regularEvents}
        attributes={{ event: { 'data-test-id': '1' } }}
      />
    </div>
  );
}

export function OverlappingEvents() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} events={overlappingEvents} />
    </div>
  );
}

export function MultipleAllDayEvents() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} events={allDayEvents} />
    </div>
  );
}

export function CustomTimeRange() {
  return (
    <div style={{ padding: 40 }}>
      <DayView
        date={new Date()}
        startTime="08:00:00"
        endTime="13:00:00"
        events={regularEvents}
        withAllDaySlot={false}
      />
    </div>
  );
}

export function CustomInterval() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} intervalMinutes={12} slotHeight={120} allDaySlotHeight={220} />
    </div>
  );
}

export function Radius() {
  return (
    <div style={{ padding: 40 }}>
      <DayView date={new Date()} radius="md" events={regularEvents} withAllDaySlot />
    </div>
  );
}

export function BusinessHours() {
  return (
    <div style={{ padding: 40 }}>
      <DayView
        date={new Date()}
        events={regularEvents}
        highlightBusinessHours
        businessHours={['10:00:00', '18:00:00']}
        // startTime="08:00:00"
        // endTime="20:00:00"
      />
    </div>
  );
}

export function DragAndDrop() {
  const [events, setEvents] = useState<ScheduleEventData[]>([
    {
      id: 1,
      title: 'Morning Standup',
      start: `${today} 09:00:00`,
      end: `${today} 09:30:00`,
      color: 'blue',
      payload: {},
    },
    {
      id: 2,
      title: 'Team Meeting',
      start: `${today} 11:00:00`,
      end: `${today} 12:00:00`,
      color: 'green',
      payload: {},
    },
    {
      id: 3,
      title: 'Lunch Break',
      start: `${today} 12:30:00`,
      end: `${today} 13:30:00`,
      color: 'orange',
      payload: {},
    },
    {
      id: 4,
      title: 'Code Review',
      start: `${today} 14:00:00`,
      end: `${today} 15:00:00`,
      color: 'violet',
      payload: {},
    },
    {
      id: 5,
      title: 'All Day Conference',
      start: `${today} 00:00:00`,
      end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
      color: 'red',
      payload: {},
    },
    {
      id: 6,
      title: 'Locked Event (Cannot Drag)',
      start: `${today} 16:00:00`,
      end: `${today} 17:00:00`,
      color: 'gray',
      payload: { locked: true },
    },
  ]);

  const [lastAction, setLastAction] = useState<string>('');

  const handleEventDrop = (eventId: string | number, newStart: Date, newEnd: Date) => {
    setEvents((prev) =>
      prev.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            start: newStart,
            end: newEnd,
          };
        }
        return event;
      })
    );

    const movedEvent = events.find((e) => e.id === eventId);
    setLastAction(
      `Moved "${movedEvent?.title}" to ${dayjs(newStart).format('HH:mm')} - ${dayjs(newEnd).format('HH:mm')}`
    );
  };

  const resetEvents = () => {
    setEvents([
      {
        id: 1,
        title: 'Morning Standup',
        start: `${today} 09:00:00`,
        end: `${today} 09:30:00`,
        color: 'blue',
        payload: {},
      },
      {
        id: 2,
        title: 'Team Meeting',
        start: `${today} 11:00:00`,
        end: `${today} 12:00:00`,
        color: 'green',
        payload: {},
      },
      {
        id: 3,
        title: 'Lunch Break',
        start: `${today} 12:30:00`,
        end: `${today} 13:30:00`,
        color: 'orange',
        payload: {},
      },
      {
        id: 4,
        title: 'Code Review',
        start: `${today} 14:00:00`,
        end: `${today} 15:00:00`,
        color: 'violet',
        payload: {},
      },
      {
        id: 5,
        title: 'All Day Conference',
        start: `${today} 00:00:00`,
        end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
        color: 'red',
        payload: {},
      },
      {
        id: 6,
        title: 'Locked Event (Cannot Drag)',
        start: `${today} 16:00:00`,
        end: `${today} 17:00:00`,
        color: 'gray',
        payload: { locked: true },
      },
    ]);
    setLastAction('Events reset to initial state');
  };

  return (
    <div style={{ padding: 40 }}>
      <Stack gap="md">
        <div>
          <Text size="sm" fw={500} mb="xs">
            Drag and Drop Demo
          </Text>
          <Text size="xs" c="dimmed" mb="md">
            Try dragging events to different time slots. All-day events and locked events cannot be
            moved.
          </Text>
        </div>

        {lastAction && (
          <Text size="sm" c="blue">
            Last action: {lastAction}
          </Text>
        )}

        <Button onClick={resetEvents} variant="light" size="xs" style={{ width: 'fit-content' }}>
          Reset Events
        </Button>

        <DayView
          date={new Date()}
          events={events}
          withDragDrop
          onEventDrop={handleEventDrop}
          canDragEvent={(event) => !event.payload.locked}
          startTime="08:00:00"
          endTime="18:00:00"
        />
      </Stack>
    </div>
  );
}

export function DragAndDropWithOverlappingEvents() {
  const [events, setEvents] = useState<ScheduleEventData[]>([
    {
      id: 1,
      title: 'Workshop Session 1',
      start: `${today} 10:00:00`,
      end: `${today} 11:30:00`,
      color: 'blue',
      payload: {},
    },
    {
      id: 2,
      title: 'Workshop Session 2',
      start: `${today} 11:00:00`,
      end: `${today} 12:30:00`,
      color: 'violet',
      payload: {},
    },
    {
      id: 3,
      title: 'Workshop Session 3',
      start: `${today} 11:30:00`,
      end: `${today} 13:00:00`,
      color: 'cyan',
      payload: {},
    },
    {
      id: 4,
      title: 'Full Day Session',
      start: `${today} 10:00:00`,
      end: `${today} 16:00:00`,
      color: 'green',
      payload: {},
    },
  ]);

  const handleEventDrop = (eventId: string | number, newStart: Date, newEnd: Date) => {
    setEvents((prev) =>
      prev.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            start: newStart,
            end: newEnd,
          };
        }
        return event;
      })
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <Stack gap="md">
        <div>
          <Text size="sm" fw={500} mb="xs">
            Drag and Drop with Overlapping Events
          </Text>
          <Text size="xs" c="dimmed" mb="md">
            Events maintain their overlap positioning when moved.
          </Text>
        </div>

        <DayView
          date={new Date()}
          events={events}
          withDragDrop
          onEventDrop={handleEventDrop}
          startTime="09:00:00"
          endTime="17:00:00"
        />
      </Stack>
    </div>
  );
}
