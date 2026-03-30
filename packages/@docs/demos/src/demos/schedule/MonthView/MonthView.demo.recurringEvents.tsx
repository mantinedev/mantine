import { useState } from 'react';
import { MonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const month = '2025-11-01';

const recurringEventsData = [
  {
    id: 'monthly-planning-series',
    title: 'Weekly planning (series)',
    start: '2025-11-03 10:00:00',
    end: '2025-11-03 11:00:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO;COUNT=10',
      exdate: ['2025-11-17 10:00:00'],
    },
  },
  {
    id: 'monthly-planning-override',
    title: 'Weekly planning (moved occurrence)',
    start: '2025-11-17 15:00:00',
    end: '2025-11-17 16:00:00',
    color: 'grape',
    recurringEventId: 'monthly-planning-series',
    recurrenceId: '2025-11-17 10:00:00',
  },
  {
    id: 'month-one-off',
    title: 'One-off product demo',
    start: '2025-11-20 12:00:00',
    end: '2025-11-20 13:00:00',
    color: 'green',
  },
];

const code = `
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

const month = '2025-11-01';

const events = [
  {
    id: 'monthly-planning-series',
    title: 'Weekly planning (series)',
    start: '2025-11-03 10:00:00',
    end: '2025-11-03 11:00:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO;COUNT=10',
      exdate: ['2025-11-17 10:00:00'],
    },
  },
  {
    id: 'monthly-planning-override',
    title: 'Weekly planning (moved occurrence)',
    start: '2025-11-17 15:00:00',
    end: '2025-11-17 16:00:00',
    color: 'grape',
    recurringEventId: 'monthly-planning-series',
    recurrenceId: '2025-11-17 10:00:00',
  },
];

function Demo() {
  const [date, setDate] = useState(month);

  return <MonthView date={date} onDateChange={setDate} events={events} withWeekNumbers />;
}
`;

function Demo() {
  const [date, setDate] = useState(month);

  return (
    <MonthView date={date} onDateChange={setDate} events={recurringEventsData} withWeekNumbers />
  );
}

export const recurringEvents: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
