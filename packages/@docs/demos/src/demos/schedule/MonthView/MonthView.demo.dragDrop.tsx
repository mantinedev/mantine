import { useState } from 'react';
import dayjs from 'dayjs';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: `${today} 09:00:00`,
    end: `${today} 10:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = (eventId: string | number, newDate: Date) => {
    setEvents((prev) =>
      prev.map((event) => {
        if (event.id === eventId) {
          const duration = dayjs(event.end).diff(dayjs(event.start));
          const newStart = dayjs(newDate);
          const newEnd = newStart.add(duration, 'millisecond');
          return { ...event, start: newStart.toDate(), end: newEnd.toDate() };
        }
        return event;
      })
    );
  };

  return <MonthView date={new Date()} events={events} withDragDrop onEventDrop={handleEventDrop} />;
}
`;

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = (eventId: string | number, newDate: Date) => {
    setEvents((prev) =>
      prev.map((event) => {
        if (event.id === eventId) {
          const duration = dayjs(event.end).diff(dayjs(event.start));
          const newStart = dayjs(newDate);
          const newEnd = newStart.add(duration, 'millisecond');
          return { ...event, start: newStart.toDate(), end: newEnd.toDate() };
        }
        return event;
      })
    );
  };

  return <MonthView date={new Date()} events={events} withDragDrop onEventDrop={handleEventDrop} />;
}

export const dragDrop: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
