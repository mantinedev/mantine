import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');

const eventsData = [
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: `${startOfMonth} 09:00:00`,
    end: `${startOfMonth} 10:30:00`,
    color: 'blue',
  },
  {
    id: 'client-call',
    title: 'Client Call',
    start: `${today} 14:00:00`,
    end: `${today} 15:00:00`,
    color: 'green',
  },
  {
    id: 'workshop',
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: `${startOfMonth} 09:30:00`,
    end: `${startOfMonth} 10:00:00`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;COUNT=30',
    },
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: `${startOfMonth} 16:00:00`,
    end: `${startOfMonth} 17:00:00`,
    color: 'cyan',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

const code = `
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');

const events = [
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 'client-call',
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: \`\${startOfMonth} 09:30:00\`,
    end: \`\${startOfMonth} 10:00:00\`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;COUNT=30',
    },
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${startOfMonth} 16:00:00\`,
    end: \`\${startOfMonth} 17:00:00\`,
    color: 'cyan',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().startOf('month').format('YYYY-MM-DD')}
      rangeEnd={dayjs().endOf('month').format('YYYY-MM-DD')}
      events={events}
    />
  );
}
`;

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().startOf('month').format('YYYY-MM-DD')}
      rangeEnd={dayjs().endOf('month').format('YYYY-MM-DD')}
      events={eventsData}
    />
  );
}

export const usage: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 500,
  code,
};
