import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';
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
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: `${startOfMonth} 16:00:00`,
    end: `${startOfMonth} 17:00:00`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

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
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${startOfMonth} 16:00:00\`,
    end: \`\${startOfMonth} 17:00:00\`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <MonthView
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

  return <MonthView date={date} onDateChange={setDate} events={eventsData} withAgenda />;
}

export const withAgenda: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
