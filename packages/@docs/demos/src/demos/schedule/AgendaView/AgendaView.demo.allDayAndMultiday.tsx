import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const eventsData = [
  {
    id: 'timed',
    title: 'Team Meeting',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'blue',
  },
  {
    id: 'allday',
    title: 'Company Holiday',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(2, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 'multiday',
    title: 'Sales Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(5, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'grape',
  },
  {
    id: 'timed-2',
    title: 'Client Call',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
  },
  {
    id: 'evening',
    title: 'Dinner Event',
    start: dayjs().add(4, 'day').format('YYYY-MM-DD 19:00:00'),
    end: dayjs().add(4, 'day').format('YYYY-MM-DD 21:00:00'),
    color: 'orange',
  },
];

const code = `
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'timed',
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'blue',
  },
  {
    id: 'allday',
    title: 'Company Holiday',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(2, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 'multiday',
    title: 'Sales Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(5, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'grape',
  },
  {
    id: 'timed-2',
    title: 'Client Call',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
  },
  {
    id: 'evening',
    title: 'Dinner Event',
    start: dayjs().add(4, 'day').format('YYYY-MM-DD 19:00:00'),
    end: dayjs().add(4, 'day').format('YYYY-MM-DD 21:00:00'),
    color: 'orange',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
    />
  );
}
`;

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={eventsData}
    />
  );
}

export const allDayAndMultiday: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 500,
  code,
};
