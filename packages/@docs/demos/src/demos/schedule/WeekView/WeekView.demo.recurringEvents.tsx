import dayjs from 'dayjs';
import { useState } from 'react';
import { getStartOfWeek, WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const weekStart = dayjs(getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 })).format(
  'YYYY-MM-DD'
);

const recurringEventsData = [
  {
    id: 'weekly-sync-series',
    title: 'Weekly sync (series)',
    start: `${weekStart} 10:00:00`,
    end: `${weekStart} 11:00:00`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12',
      exdate: [`${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00`],
    },
  },
  {
    id: 'weekly-sync-override',
    title: 'Weekly sync (moved this week)',
    start: `${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 15:00:00`,
    end: `${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 16:00:00`,
    color: 'grape',
    recurringEventId: 'weekly-sync-series',
    recurrenceId: `${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00`,
  },
  {
    id: 'one-off-week',
    title: 'One-off interview',
    start: `${dayjs(weekStart).add(1, 'day').format('YYYY-MM-DD')} 13:00:00`,
    end: `${dayjs(weekStart).add(1, 'day').format('YYYY-MM-DD')} 14:00:00`,
    color: 'green',
  },
];

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView, getStartOfWeek } from '@mantine/schedule';

const weekStart = dayjs(getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 })).format('YYYY-MM-DD');

const events = [
  {
    id: 'weekly-sync-series',
    title: 'Weekly sync (series)',
    start: \`\${weekStart} 10:00:00\`,
    end: \`\${weekStart} 11:00:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12',
      exdate: [\`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00\`],
    },
  },
  {
    id: 'weekly-sync-override',
    title: 'Weekly sync (moved this week)',
    start: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 15:00:00\`,
    end: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 16:00:00\`,
    color: 'grape',
    recurringEventId: 'weekly-sync-series',
    recurrenceId: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00\`,
  },
];

function Demo() {
  const [date, setDate] = useState(weekStart);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="20:00:00"
      intervalMinutes={60}
    />
  );
}
`;

function Demo() {
  const [date, setDate] = useState(weekStart);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={recurringEventsData}
      startTime="08:00:00"
      endTime="20:00:00"
      intervalMinutes={60}
    />
  );
}

export const recurringEvents: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
