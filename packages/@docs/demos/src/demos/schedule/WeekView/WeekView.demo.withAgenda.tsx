import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');
const startOfWeek = dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD');

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
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: `${dayjs(startOfWeek).subtract(3, 'day').format('YYYY-MM-DD')} 14:00:00`,
    end: `${dayjs(startOfWeek).subtract(3, 'day').format('YYYY-MM-DD')} 14:30:00`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=14',
    },
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: `${startOfWeek} 16:00:00`,
    end: `${startOfWeek} 17:00:00`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const startOfWeek = dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD');

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
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: \`\${dayjs(startOfWeek).subtract(3, 'day').format('YYYY-MM-DD')} 14:00:00\`,
    end: \`\${dayjs(startOfWeek).subtract(3, 'day').format('YYYY-MM-DD')} 14:30:00\`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=14',
    },
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${startOfWeek} 16:00:00\`,
    end: \`\${startOfWeek} 17:00:00\`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      withAgenda
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(today);

  return <WeekView date={date} onDateChange={setDate} events={eventsData} withAgenda />;
}

export const withAgenda: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
