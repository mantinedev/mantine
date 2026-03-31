# RecurringEventsSchedule
Package: @mantine/schedule
Import: import { RecurringEventsSchedule } from '@mantine/schedule';

## Recurring events

`@mantine/schedule` supports recurring events via [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545)
recurrence rules (powered by the [rrule](https://github.com/jkbrzt/rrule) library).

There are three event shapes:

1. **Series event** – has a `recurrence` field with an `rrule` string
2. **Override event** – has `recurringEventId` + `recurrenceId` to replace one generated occurrence
3. **One-off event** – has none of the recurring fields (regular event)

## Series event

Series events define recurrence with `recurrence.rrule`. You can optionally add
`recurrence.exdate` to exclude specific occurrences and `recurrence.dtstart` to set
an explicit series start date (defaults to `start`).

```tsx
const event = {
  id: 'weekly-series',
  title: 'Weekly planning',
  start: '2024-01-15 10:00:00',
  end: '2024-01-15 11:00:00',
  color: 'blue',
  recurrence: {
    rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16',
    exdate: ['2024-01-17 10:00:00'],
  },
};
```

Common rrule patterns:

* `FREQ=DAILY;COUNT=10` – every day, 10 occurrences
* `FREQ=WEEKLY;BYDAY=MO,WE,FR` – every Mon, Wed, Fri
* `FREQ=MONTHLY;BYMONTHDAY=15` – 15th of every month
* `FREQ=YEARLY;COUNT=5` – once a year, 5 times

## Override event

Override events replace a single generated occurrence from a series.
Use `recurringEventId` to point to the series and `recurrenceId` to identify
which occurrence to replace (in `YYYY-MM-DD HH:mm:ss` format matching the original start time):

```tsx
const override = {
  id: 'weekly-series-override',
  title: 'Weekly planning (moved)',
  start: '2024-01-17 16:00:00',
  end: '2024-01-17 17:00:00',
  color: 'grape',
  recurringEventId: 'weekly-series',
  recurrenceId: '2024-01-17 10:00:00',
};
```

## How rendering works

Each view expands recurring events only for its visible date range:

1. Parse the `rrule` string and generate occurrence start times within the range
2. Remove occurrences that match `exdate` entries
3. Replace matching occurrences with override events
4. Merge with one-off events and render

Generated instances include a `recurringInstance` metadata object with:

* `isRecurringInstance` – always `true` for generated events
* `recurringEventId` – parent series id
* `recurrenceId` – occurrence identifier
* `originalStart` / `originalEnd` – the occurrence dates before any overrides

## expandRecurringEvents utility

You can use the `expandRecurringEvents` utility directly for custom logic:

```tsx
import { expandRecurringEvents } from '@mantine/schedule';

const expanded = expandRecurringEvents({
  events,
  rangeStart: '2024-01-15 00:00:00',
  rangeEnd: '2024-01-21 23:59:59',
  expansionLimit: 2000, // optional, default 2000
});
```

## recurrenceExpansionLimit prop

All views accept a `recurrenceExpansionLimit` prop (default `2000`) to cap the number
of generated instances per recurring series. This prevents performance issues with
unbounded recurrence rules (e.g., `FREQ=DAILY` without `COUNT` or `UNTIL`).
Note that the limit applies independently to each series, so a schedule with
multiple unbounded series may generate up to `limit × number of series` total instances.

## Schedule demo

```tsx
import { useState } from 'react';
import { Schedule } from '@mantine/schedule';

const events = [
  {
    id: 'schedule-series',
    title: 'Weekly planning (series)',
    start: '2024-01-15 10:00:00',
    end: '2024-01-15 11:00:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16',
      exdate: ['2024-01-17 10:00:00'],
    },
  },
  {
    id: 'schedule-series-override',
    title: 'Weekly planning (moved one occurrence)',
    start: '2024-01-17 16:00:00',
    end: '2024-01-17 17:00:00',
    color: 'grape',
    recurringEventId: 'schedule-series',
    recurrenceId: '2024-01-17 10:00:00',
  },
  {
    id: 'schedule-one-off',
    title: 'One-off roadmap review',
    start: '2024-01-18 12:00:00',
    end: '2024-01-18 13:00:00',
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState('2024-01-15');
  return <Schedule view="week" date={date} onDateChange={setDate} events={events} />;
}
```


## DayView demo

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
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
```


## WeekView demo

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView, getStartOfWeek } from '@mantine/schedule';

const weekStart = dayjs(getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 })).format('YYYY-MM-DD');

const events = [
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
```


## MonthView demo

```tsx
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
```


## YearView demo

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';

const year = dayjs().year();

const events = [
  {
    id: 'yearly-series',
    title: 'Monthly architecture review (series)',
    start: `${year}-01-10 09:00:00`,
    end: `${year}-01-10 10:00:00`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=MONTHLY;COUNT=12',
      exdate: [`${year}-11-10 09:00:00`],
    },
  },
  {
    id: 'yearly-series-override',
    title: 'Monthly architecture review (moved in Nov)',
    start: `${year}-11-10 13:00:00`,
    end: `${year}-11-10 14:00:00`,
    color: 'grape',
    recurringEventId: 'yearly-series',
    recurrenceId: `${year}-11-10 09:00:00`,
  },
];

function Demo() {
  const [date, setDate] = useState(`${year}-01-01`);
  return <YearView date={date} onDateChange={setDate} events={events} withWeekNumbers />;
}
```

