import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ScheduleEventData } from '../../types';
import { getStartOfWeek, toDateString } from '../../utils';
import { WeekView } from './WeekView';

export default { title: 'schedule/WeekView' };

const _weekStart = dayjs(getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 }));
const weekStart = _weekStart.format('YYYY-MM-DD');

const regularEvents: ScheduleEventData[] = [
  {
    id: 0,
    title: 'Design conference',
    start: `${_weekStart.subtract(6, 'day').format('YYYY-MM-DD')} 12:00:00`,
    end: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 14:00:00`,
    color: 'red',
    payload: {},
  },
  {
    id: 4,
    title: 'Design Workshop',
    start: `${_weekStart.add(2, 'day').format('YYYY-MM-DD')} 12:00:00`,
    end: `${_weekStart.add(4, 'day').format('YYYY-MM-DD')} 14:00:00`,
    color: 'cyan',
    payload: {},
  },
  {
    id: 5,
    title: 'Design Conference',
    start: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 12:00:00`,
    end: `${_weekStart.add(3, 'day').format('YYYY-MM-DD')} 14:00:00`,
    color: 'green',
    payload: {},
  },
  {
    id: 6,
    title: '3 level overlap',
    start: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 12:00:00`,
    end: `${_weekStart.add(3, 'day').format('YYYY-MM-DD')} 14:00:00`,
    color: 'violet',
    payload: {},
  },
  {
    id: 7,
    title: '4 level overlap',
    start: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 12:00:00`,
    end: `${_weekStart.add(2, 'day').format('YYYY-MM-DD')} 14:00:00`,
    color: 'orange',
    payload: {},
  },
  {
    id: 1,
    title: 'Team lunch',
    start: `${weekStart} 06:00:00`,
    end: `${weekStart} 11:00:00`,
    color: 'red',
    payload: {},
  },
  {
    id: 11,
    title: 'Team lunch 2',
    start: `${weekStart} 08:00:00`,
    end: `${weekStart} 12:00:00`,
    color: 'red',
    payload: {},
  },
  {
    id: 2,
    title: 'Daily standup',
    start: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 15:00:00`,
    end: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 15:15:00`,
    color: 'blue',
    payload: {},
  },
  {
    id: 3,
    title: 'Team dinner',
    start: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 18:00:00`,
    end: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 20:00:00`,
    color: 'cyan',
    payload: {},
  },
  {
    id: 8,
    title: 'Team dinner 2',
    start: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 19:00:00`,
    end: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 21:00:00`,
    color: 'cyan',
    payload: {},
  },
  {
    id: 9,
    title: 'Team dinner 3',
    start: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 20:00:00`,
    end: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 22:00:00`,
    color: 'cyan',
    payload: {},
  },
  {
    id: 10,
    title: 'Team dinner 4',
    start: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 21:00:00`,
    end: `${_weekStart.add(1, 'day').format('YYYY-MM-DD')} 23:59:59`,
    color: 'cyan',
    payload: {},
  },
];

export function Usage() {
  const [date, setDate] = useState(toDateString(new Date()));
  return <WeekView date={date} onDateChange={setDate} />;
}

export function SlotHeight() {
  const [date, setDate] = useState(toDateString(new Date()));
  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={regularEvents}
      slotHeight={128}
      allDaySlotHeight={96}
    />
  );
}

export function StartEndTime() {
  return <WeekView date={new Date()} startTime="08:00:00" endTime="12:00:00" />;
}

export function IntervalMinutes() {
  return (
    <WeekView date={new Date()} startTime="08:00:00" endTime="12:00:00" intervalMinutes={15} />
  );
}

export function Locale() {
  return <WeekView date={new Date()} locale="ru" />;
}

export function HighlightToday() {
  return <WeekView date={new Date()} highlightToday />;
}

export function Radius() {
  return <WeekView date={new Date()} radius="md" />;
}

export function NoWeekends() {
  return <WeekView date={new Date()} withWeekendDays={false} />;
}

export function FirstDayOfWeek() {
  return <WeekView date={new Date()} firstDayOfWeek={0} />;
}

export function SlotLabelFormat() {
  return <WeekView date={new Date()} slotLabelFormat="h:mm a" />;
}

export function ScrollAreaProps() {
  return <WeekView date={new Date()} scrollAreaProps={{ mah: 600 }} />;
}

export function WithWeekNumber() {
  return <WeekView date={new Date()} withWeekNumber={false} />;
}

export function WithAllDaySlots() {
  return <WeekView date={new Date()} withAllDaySlots={false} />;
}

export function RegularEvents() {
  return (
    <WeekView date={new Date()} events={regularEvents} startTime="10:00:00" endTime="22:00:00" />
  );
}

export function RegularEventsSunday() {
  return (
    <WeekView
      date={new Date()}
      events={regularEvents}
      startTime="10:00:00"
      endTime="22:00:00"
      firstDayOfWeek={0}
    />
  );
}

export function RegularEventsNoWeekends() {
  return (
    <WeekView
      date={new Date()}
      events={regularEvents}
      startTime="10:00:00"
      endTime="22:00:00"
      firstDayOfWeek={0}
      withWeekendDays={false}
    />
  );
}

export function BusinessHours() {
  return (
    <WeekView
      date={new Date()}
      events={regularEvents}
      highlightBusinessHours
      businessHours={['10:00:00', '18:00:00']}
      startTime="08:00:00"
      endTime="20:00:00"
    />
  );
}

export function DragAndDrop() {
  const [date, setDate] = useState(toDateString(new Date()));
  const [eventsData, setEventsData] = useState<ScheduleEventData[]>([
    {
      id: 1,
      title: 'Team Meeting',
      start: new Date(`${dayjs(date).format('YYYY-MM-DD')}T10:00:00`),
      end: new Date(`${dayjs(date).format('YYYY-MM-DD')}T11:00:00`),
      color: 'blue',
      variant: 'filled',
      payload: {},
    },
    {
      id: 2,
      title: 'Project Review',
      start: new Date(`${dayjs(date).add(1, 'day').format('YYYY-MM-DD')}T14:00:00`),
      end: new Date(`${dayjs(date).add(1, 'day').format('YYYY-MM-DD')}T16:00:00`),
      color: 'green',
      payload: {},
    },
    {
      id: 3,
      title: 'Client Call',
      start: new Date(`${dayjs(date).add(2, 'day').format('YYYY-MM-DD')}T09:00:00`),
      end: new Date(`${dayjs(date).add(2, 'day').format('YYYY-MM-DD')}T10:30:00`),
      color: 'red',
      payload: {},
    },
    {
      id: 4,
      title: 'Lunch Break',
      start: new Date(`${dayjs(date).add(3, 'day').format('YYYY-MM-DD')}T12:00:00`),
      end: new Date(`${dayjs(date).add(3, 'day').format('YYYY-MM-DD')}T13:00:00`),
      color: 'orange',
      payload: {},
    },
    {
      id: 5,
      title: 'Locked Event (Cannot Drag)',
      start: new Date(`${dayjs(date).add(4, 'day').format('YYYY-MM-DD')}T15:00:00`),
      end: new Date(`${dayjs(date).add(4, 'day').format('YYYY-MM-DD')}T16:00:00`),
      color: 'gray',
      payload: { locked: true },
    },
    {
      id: 6,
      title: 'All-Day Event',
      start: new Date(`${dayjs(date).format('YYYY-MM-DD')}T00:00:00`),
      end: new Date(`${dayjs(date).format('YYYY-MM-DD')}T23:59:59`),
      color: 'violet',
      payload: {},
    },
  ]);
  const [lastAction, setLastAction] = useState<string>('');

  const handleEventDrop = (eventId: string | number, newStart: Date, newEnd: Date) => {
    setEventsData((prev) =>
      prev.map((event) => {
        if (event.id === eventId) {
          return { ...event, start: newStart, end: newEnd };
        }
        return event;
      })
    );

    const movedEvent = eventsData.find((e) => e.id === eventId);
    setLastAction(
      `Moved "${movedEvent?.title}" to ${dayjs(newStart).format('dddd, MMMM D [at] HH:mm')}`
    );
  };

  return (
    <div>
      <WeekView
        date={date}
        onDateChange={setDate}
        events={eventsData}
        withEventsDragAndDrop
        onEventDrop={handleEventDrop}
        canDragEvent={(event) => !event.payload?.locked}
        startTime="08:00:00"
        endTime="20:00:00"
        intervalMinutes={60}
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
            Events, time slots, and day labels are not clickable or draggable. No hover effects are
            shown.
          </Text>
        </div>

        <WeekView
          date={new Date()}
          events={regularEvents}
          mode="static"
          startTime="08:00:00"
          endTime="18:00:00"
          withAllDaySlots
        />
      </Stack>
    </div>
  );
}
