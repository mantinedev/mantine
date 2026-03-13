import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const today = dayjs().format('YYYY-MM-DD');

const recurringEventsData = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: `${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00`,
    end: `${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:30:00`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [`${today} 09:00:00`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: `${today} 14:00:00`,
    end: `${today} 14:30:00`,
    color: 'grape',
    recurringEventId: 'daily-sync-series',
    recurrenceId: `${today} 09:00:00`,
  },
  {
    id: 'one-off-day',
    title: 'One-off planning',
    start: `${today} 11:00:00`,
    end: `${today} 12:00:00`,
    color: 'green',
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00\`,
    end: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:30:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [\`\${today} 09:00:00\`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 14:30:00\`,
    color: 'grape',
    recurringEventId: 'daily-sync-series',
    recurrenceId: \`\${today} 09:00:00\`,
  },
  {
    id: 'one-off-day',
    title: 'One-off planning',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={recurringEventsData}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}

export const recurringEvents: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
