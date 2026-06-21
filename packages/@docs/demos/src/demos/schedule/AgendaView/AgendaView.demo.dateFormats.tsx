import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const eventsData = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
  },
  {
    id: 'meeting',
    title: 'Team Meeting',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 11:30:00'),
    color: 'green',
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(2, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'violet',
  },
];

const code = `
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'meeting',
    title: 'Team Meeting',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 11:30:00'),
    color: 'green',
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(2, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'violet',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      headerFormat="MMM D"
      dateHeaderFormat="ddd, D MMM"
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
      headerFormat="MMM D"
      dateHeaderFormat="ddd, D MMM"
    />
  );
}

export const dateFormats: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 500,
  code,
};
