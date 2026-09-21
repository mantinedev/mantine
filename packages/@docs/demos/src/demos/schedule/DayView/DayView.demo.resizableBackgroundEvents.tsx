import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 'out-of-office',
    title: 'Out of office',
    start: `${today} 12:00:00`,
    end: `${today} 16:00:00`,
    color: 'red',
    display: 'background',
  },
  {
    id: 'standup',
    title: 'Standup',
    start: `${today} 09:30:00`,
    end: `${today} 10:00:00`,
    color: 'teal',
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: `${today} 14:30:00`,
    end: `${today} 15:30:00`,
    color: 'blue',
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 'out-of-office',
    title: 'Out of office',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'red',
    display: 'background',
  },
  {
    id: 'standup',
    title: 'Standup',
    start: \`\${today} 09:30:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'teal',
  },
  {
    id: 'design-review',
    title: 'Design review',
    start: \`\${today} 14:30:00\`,
    end: \`\${today} 15:30:00\`,
    color: 'blue',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={today}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
      withEventResize
      withInteractiveBackgroundEvents
      onEventResize={handleEventResize}
    />
  );
}
`;

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({
    eventId,
    newStart,
    newEnd,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
  }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={today}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
      withEventResize
      withInteractiveBackgroundEvents
      onEventResize={handleEventResize}
    />
  );
}

export const resizableBackgroundEvents: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
