import dayjs from 'dayjs';
import { Schedule } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const eventsData = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
  },
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'green',
  },
  {
    id: 'code-review',
    title: 'Code Review',
    start: `${tomorrow} 14:00:00`,
    end: `${tomorrow} 15:00:00`,
    color: 'violet',
  },
  {
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: `${dayjs(today).subtract(3, 'day').format('YYYY-MM-DD')} 14:00:00`,
    end: `${dayjs(today).subtract(3, 'day').format('YYYY-MM-DD')} 14:30:00`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=14',
    },
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: `${dayjs(today).startOf('week').format('YYYY-MM-DD')} 16:00:00`,
    end: `${dayjs(today).startOf('week').format('YYYY-MM-DD')} 17:00:00`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

const code = `
import dayjs from 'dayjs';
import { Schedule } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 'code-review',
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: \`\${dayjs(today).subtract(3, 'day').format('YYYY-MM-DD')} 14:00:00\`,
    end: \`\${dayjs(today).subtract(3, 'day').format('YYYY-MM-DD')} 14:30:00\`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=14',
    },
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${dayjs(today).startOf('week').format('YYYY-MM-DD')} 16:00:00\`,
    end: \`\${dayjs(today).startOf('week').format('YYYY-MM-DD')} 17:00:00\`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  return (
    <Schedule
      events={events}
      withAgenda
    />
  );
}
`;

function Demo() {
  return <Schedule events={eventsData} withAgenda />;
}

export const withAgenda: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
