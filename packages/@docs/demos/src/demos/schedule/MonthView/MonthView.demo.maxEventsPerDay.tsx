import dayjs from 'dayjs';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const demoEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: `${today} 09:00:00`,
    end: `${today} 10:00:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Code Review',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Design Review',
    start: `${today} 13:00:00`,
    end: `${today} 14:00:00`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Sprint Planning',
    start: `${today} 15:00:00`,
    end: `${today} 16:00:00`,
    color: 'orange',
  },
  {
    id: 5,
    title: 'Retrospective',
    start: `${today} 16:30:00`,
    end: `${today} 17:30:00`,
    color: 'cyan',
  },
];

const code = `
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const events: ScheduleEventData[] = [
  // ... 5 events on the same day
];

function Demo() {
  return (
    <MonthView
      date={new Date()}
      events={events}
      maxEventsPerDay={4}
    />
  );
}
`;

function Demo() {
  return <MonthView date={new Date()} events={demoEvents} maxEventsPerDay={4} />;
}

export const maxEventsPerDay: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
