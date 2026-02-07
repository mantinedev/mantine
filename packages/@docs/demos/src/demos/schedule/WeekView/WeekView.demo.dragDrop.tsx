import dayjs from 'dayjs';
import { useState } from 'react';
import { getStartOfWeek, ScheduleEventData, WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: `${tomorrow} 11:00:00`,
    end: `${tomorrow} 12:00:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: `${today} 14:00:00`,
    end: `${today} 15:00:00`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Company Holiday',
    start: getStartOfWeek({ date: today, firstDayOfWeek: 1 }),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(1, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 5,
    title: 'Release Day',
    start: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 })).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(2, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
  },
];

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Company Holiday',
    start: dayjs(today).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 5,
    title: 'Release Day',
    start: dayjs(tomorrow).startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(tomorrow).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = (eventId: string | number, newStart: string, newEnd: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`;

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = (eventId: string | number, newStart: string, newEnd: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}

export const dragDrop: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
