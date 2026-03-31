# MonthView
Package: @mantine/schedule
Import: import { MonthView } from '@mantine/schedule';
Description: Standalone schedule month view component

## Usage

MonthView displays events in a calendar month grid. It shows event badges in each day cell with support for drag and drop.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## With week numbers

Set `withWeekNumbers` to display week numbers in the first column.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekNumbers />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Without week days

Set `withWeekDays={false}` to hide the weekday names row.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekDays={false} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## First day of week

Set `firstDayOfWeek` to control which day starts the week.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} firstDayOfWeek={0} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Weekday format

Use `weekdayFormat` prop to customize weekday names.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} weekdayFormat="ddd" />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Consistent weeks

Set `consistentWeeks={false}` to only show weeks that have days in the current month.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  return <MonthView date={date} consistentWeeks={false} onDateChange={setDate} />;
}
```


## Highlight today

Set `highlightToday={false}` to disable highlighting the current day.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} highlightToday={false} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Without outside days

Set `withOutsideDays={false}` to hide days from adjacent months.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withOutsideDays={false} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Radius

Use `radius` prop to customize the border radius of events.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} radius={0} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Without header

Set `withHeader={false}` to hide the header controls.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withHeader={false} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Custom header

You can build a custom header using `ScheduleHeader` compound components combined with your own controls.
Set `withHeader={false}` on the view and compose the header externally.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, MonthView, ScheduleHeader } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              dayjs(date)
                .subtract(1, 'month')
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
          onMonthChange={(month) =>
            setDate(
              dayjs(date)
                .month(month)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'month')
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Today
          onClick={() =>
            setDate(
              dayjs().format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control
          style={{ marginInlineStart: 'auto' }}
          onClick={() => window.print()}
        >
          Print
        </ScheduleHeader.Control>
      </ScheduleHeader>

      <MonthView
        date={date}
        onDateChange={setDate}
        events={events}
        withHeader={false}
      />
    </div>
  );
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Max events per day

Use `maxEventsPerDay` prop to control how many events are visible per day before the "+more"
indicator appears. The value is clamped between 1 and 10. Day cell height adjusts automatically.

```tsx
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const events: ScheduleEventData[] = [
  // ... 5 events on the same day
];

function Demo() {
  return (
    <MonthView
      date={new Date()}
      events={events}
      maxEventsPerDay={4}
    />
  );
}
```


## Many events

When a day has many events, the component shows a "More events" indicator.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Event 1',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Event 2',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Event 3',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Event 4',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Event 5',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'Event 6',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'pink',
  },
];
```


## Drag and drop

Enable drag and drop to move events between days.

```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: `${today} 09:00:00`,
    end: `${today} 10:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return <MonthView date={new Date()} events={events} withEventsDragAndDrop onEventDrop={handleEventDrop} />;
}
```


## External drag and drop

Use `onExternalEventDrop` to allow dragging items from outside the component into
the schedule. External items must set data in `dataTransfer` during their `onDragStart`.
The callback receives the `DataTransfer` object and the drop target datetime.

```tsx
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const sidebarItems = [
  { title: 'Team Offsite', color: 'teal' },
  { title: 'Release Day', color: 'orange' },
  { title: 'All Hands', color: 'violet' },
];

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
    const raw = dataTransfer.getData('text/plain');
    if (!raw) {
      return;
    }

    const data = JSON.parse(raw);
    const start = dayjs(dropDateTime);
    const end = start.endOf('day');

    setEvents((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: data.title,
        start: start.format('YYYY-MM-DD HH:mm:ss'),
        end: end.format('YYYY-MM-DD HH:mm:ss'),
        color: data.color,
      },
    ]);
  };

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 3 }}>
        <Text fw={500} mb="xs">Drag to schedule</Text>
        {sidebarItems.map((item) => (
          <Box
            key={item.title}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', JSON.stringify(item));
              e.dataTransfer.effectAllowed = 'copy';
            }}
            style={{
              padding: '8px 12px',
              marginBottom: 8,
              borderRadius: 4,
              cursor: 'grab',
              backgroundColor: `var(--mantine-color-${item.color}-light)`,
              color: `var(--mantine-color-${item.color}-light-color)`,
            }}
          >
            <Text size="sm" fw={500}>{item.title}</Text>
          </Box>
        ))}
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <MonthView
          date={new Date()}
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
```


## Bidirectional drag and drop

Combine `onExternalEventDrop` with `withEventsDragAndDrop` to enable bidirectional
drag and drop. Items dragged from the sidebar are removed from the list and added
to the schedule. Events dragged from the schedule back to the sidebar are removed
from the schedule. The schedule sets `application/json` with `{ eventId }` in
`dataTransfer` when an event is dragged, which the sidebar drop zone reads to
identify the event.

```tsx
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

interface SidebarItem {
  title: string;
  color: string;
}

const initialSidebarItems: SidebarItem[] = [
  { title: 'Team Offsite', color: 'teal' },
  { title: 'Release Day', color: 'orange' },
  { title: 'All Hands', color: 'violet' },
];

function Demo() {
  const [sidebarItems, setSidebarItems] = useState(initialSidebarItems);
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const [sidebarHighlight, setSidebarHighlight] = useState(false);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
    const raw = dataTransfer.getData('text/plain');
    if (!raw) {
      return;
    }

    const data = JSON.parse(raw);
    const start = dayjs(dropDateTime);
    const end = start.endOf('day');

    setEvents((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: data.title,
        start: start.format('YYYY-MM-DD HH:mm:ss'),
        end: end.format('YYYY-MM-DD HH:mm:ss'),
        color: data.color,
      },
    ]);
    setSidebarItems((prev) => prev.filter((item) => item.title !== data.title));
  };

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  const handleSidebarDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setSidebarHighlight(false);
    const raw = e.dataTransfer.getData('application/json');
    if (!raw) {
      return;
    }

    const { eventId } = JSON.parse(raw);
    const event = events.find((ev) => String(ev.id) === String(eventId));
    if (!event) {
      return;
    }

    setSidebarItems((prev) => [
      ...prev,
      { title: event.title, color: event.color || 'blue' },
    ]);
    setEvents((prev) => prev.filter((ev) => ev.id !== event.id));
  };

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 3 }}>
        <Box
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            setSidebarHighlight(true);
          }}
          onDragLeave={() => setSidebarHighlight(false)}
          onDrop={handleSidebarDrop}
          style={{
            padding: 8,
            borderRadius: 8,
            border: sidebarHighlight
              ? '2px dashed var(--mantine-color-blue-5)'
              : '2px dashed transparent',
            transition: 'border-color 150ms',
          }}
        >
          <Text fw={500} mb="xs">Unscheduled</Text>
          {sidebarItems.map((item) => (
            <Box
              key={item.title}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', JSON.stringify(item));
                e.dataTransfer.effectAllowed = 'copy';
              }}
              style={{
                padding: '8px 12px',
                marginBottom: 8,
                borderRadius: 4,
                cursor: 'grab',
                backgroundColor: `var(--mantine-color-${item.color}-light)`,
                color: `var(--mantine-color-${item.color}-light-color)`,
              }}
            >
              <Text size="sm" fw={500}>{item.title}</Text>
            </Box>
          ))}
          {sidebarItems.length === 0 && (
            <Text size="xs" c="dimmed">Drag events here to unschedule</Text>
          )}
        </Box>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <MonthView
          date={new Date()}
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
```


## Full event customization

Use `renderEvent` prop to fully customize event rendering. This function receives the event
data as the first argument and all props that would be passed to the event root element
(including children) as the second argument, allowing you to wrap events in custom components
like HoverCard, Tooltip, or custom wrappers.

```tsx
// Demo.tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <MonthView
      date={new Date()}
      events={selectedEvents}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? {
                  ...event,
                  start: dayjs(newStart).format('YYYY-MM-DD HH:mm:ss'),
                  end: dayjs(newEnd).format('YYYY-MM-DD HH:mm:ss'),
                }
              : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    />
  );
}

// EventDetails.tsx
import { Badge, Group, Stack, Text } from '@mantine/core';
import { ScheduleEventData } from '@mantine/schedule';

interface EventDetailsProps {
  event: ScheduleEventData;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <Stack gap="xs">
      <Text fw={600} size="sm">
        {event.title}
      </Text>

      {event.payload?.description && (
        <Text size="xs" c="dimmed">
          {event.payload.description}
        </Text>
      )}

      {event.payload?.location && (
        <Group gap={4}>
          <Badge size="sm" variant="light">
            {event.payload.location}
          </Badge>
        </Group>
      )}

      {event.payload?.attendees && (
        <div>
          <Text size="xs" fw={500} mb={4}>
            Attendees:
          </Text>
          <Text size="xs" c="dimmed">
            {event.payload.attendees.join(', ')}
          </Text>
        </div>
      )}
    </Stack>
  );
}
```


## Recurring events

MonthView automatically expands recurring events for the visible month.
See [Recurring events guide](https://mantine.dev/llms/schedule-recurring-events.md) for full documentation.

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


## Background events

Set `display="background"` on an event to render it as a full-width, semi-transparent,
non-interactive block behind regular events. Background events span the full height of
the day cell in the month view.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 'company-offsite',
    title: 'Company offsite',
    start: `${dayjs(today).startOf('week').add(1, 'day').format('YYYY-MM-DD')} 00:00:00`,
    end: `${dayjs(today).startOf('week').add(3, 'day').format('YYYY-MM-DD')} 23:59:59`,
    color: 'blue',
    display: 'background',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: `${today} 10:00:00`,
    end: `${today} 11:00:00`,
    color: 'violet',
  },
  {
    id: 'code-review',
    title: 'Code review',
    start: `${dayjs(today).add(1, 'day').format('YYYY-MM-DD')} 14:00:00`,
    end: `${dayjs(today).add(1, 'day').format('YYYY-MM-DD')} 15:00:00`,
    color: 'green',
  },
];

function overlapsBackground(
  newStart: string,
  newEnd: string,
  events: ScheduleEventData[]
) {
  return events.some(
    (e) =>
      e.display === 'background' && newStart < e.end && newEnd > e.start
  );
}

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
  }) => {
    if (overlapsBackground(newStart, newEnd, events)) {
      return;
    }

    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? { ...event, start: newStart, end: newEnd }
          : event
      )
    );
  };

  return (
    <MonthView
      date={new Date()}
      events={events}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
```


## Static mode

Set `mode="static"` to disable all interactions.

```tsx
// Demo.tsx
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} mode="static" />;
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Localization

Use `locale` prop to set the dayjs locale for date formatting.
Combine it with `labels` prop to translate all UI text.

```tsx
// Demo.tsx
import 'dayjs/locale/es';
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <MonthView
      date={new Date()}
      events={events}
      locale="es"
      labels={{
        day: 'Día',
        week: 'Semana',
        month: 'Mes',
        year: 'Año',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        more: 'Más',
        moreLabel: (hiddenEventsCount) => `+${hiddenEventsCount} más`,
      }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Create and update events

Set `withDragSlotSelect` prop to allow users to drag across day cells to select a date range.
When the drag ends, the `onSlotDragEnd` callback is called with the range start and end dates.
Combined with `onDayClick` and `onEventClick` callbacks, this enables a complete event creation
and editing experience.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './_EventForm';
import { events } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);

  const handleDayClick = (date: string) => {
    setSelectedEventData({
      title: '',
      start: dayjs(date).startOf('day').toDate(),
      end: dayjs(date).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
    });
    setFormOpened(true);
  };

  const handleSubmit = (values: EventData) => {
    if (values.id) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === values.id
            ? {
                ...event,
                title: values.title,
                start: dayjs(values.start).toISOString(),
                end: dayjs(values.end).toISOString(),
                color: values.color || 'blue',
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 11),
          title: values.title,
          start: dayjs(values.start).toISOString(),
          end: dayjs(values.end).toISOString(),
          color: values.color || 'blue',
        },
      ]);
    }
  };

  const handleSlotDragEnd = (rangeStart: string, rangeEnd: string) => {
    setSelectedEventData({
      title: '',
      start: new Date(rangeStart),
      end: new Date(rangeEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <MonthView
        date={new Date()}
        events={events}
        withDragSlotSelect
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      />
    </>
  );
}

// EventForm.tsx
import { useEffect } from 'react';
import { Modal, TextInput, Button, Stack, Group, Checkbox } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';

interface EventData {
  id?: string | number;
  title: string;
  start: Date;
  end: Date;
  color?: string;
  isAllDay?: boolean;
}

interface EventFormProps {
  opened: boolean;
  onClose: () => void;
  initialData: EventData | null;
  onSave: (data: EventData) => void;
  onDelete?: () => void;
}

export function EventForm({
  opened,
  onClose,
  values,
  onSubmit,
  onDelete,
  ...others
}: EventFormProps) {
  const form = useForm({
    initialValues: {
      id: values?.id,
      title: values?.title || '',
      start: values?.start || new Date(),
      end: values?.end || new Date(),
      color: values?.color || 'blue',
    },
    validate: {
      title: isNotEmpty('Event title is required'),
      start: isNotEmpty('Start time is required'),
      end: (value, { start }) => {
        if (!value) {
          return 'End time is required';
        }

        if (dayjs(value).isBefore(dayjs(start))) {
          return 'End time must be after start time';
        }

        return null;
      },
    },
  });

  useEffect(() => {
    form.setValues({
      id: values?.id,
      title: values?.title || '',
      start: values?.start || new Date(),
      end: values?.end || new Date(),
      color: values?.color || 'blue',
    });
  }, [values]);

  const handleSubmit = (values: EventData) => {
    onSubmit({
      id: values.id,
      title: values.title,
      start: values.start,
      end: values.end,
      color: values.color,
    });
    onClose();
  };

  const handleDelete = () => {
    onDelete?.();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={form.values.id ? 'Edit Event' : 'Create Event'}
      {...others}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Event Title"
            placeholder="Enter event title"
            data-autofocus
            {...form.getInputProps('title')}
          />

          <DateTimePicker
            label="Start Time"
            clearable
            {...form.getInputProps('start')}
          />
          <DateTimePicker label="End Time" {...form.getInputProps('end')} clearable />

          <Group justify="flex-end" gap="sm">
            {form.values.id && onDelete && (
              <Button color="red" onClick={handleDelete} mie="auto">
                Delete
              </Button>
            )}

            <Button variant="default" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {form.values.id ? 'Update' : 'Create'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}

// events.ts
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
```


## Responsive styles

MonthView uses [@container queries](https://caniuse.com/css-container-queries) for responsive styles.
The component automatically adjusts its layout based on the container width, hiding labels
and reducing padding on smaller screens. Container queries are supported in all modern browsers.

## Accessibility

### Focus management

In the MonthView component, focus is managed to provide an efficient keyboard navigation experience:

* Only the first day in the month view is included in the tab order (has `tabIndex={0}`)
* All other days have `tabIndex={-1}` and can only be reached via arrow key navigation
* Outside days (days from adjacent months) are navigable using arrow keys when `withOutsideDays` is `true`
* Disabled days are skipped during keyboard navigation

This approach reduces the number of tab stops when navigating through the calendar, making it faster for keyboard users to move through the view while still allowing full access to all days via arrow keys.

### Keyboard interactions

Note that the following events will only trigger if focus is on a day control.

### Day labels

Each day button has an `aria-label` attribute with the full date in the format "Month Day, Year" (e.g., "November 15, 2025"). This provides screen reader users with complete date information.


#### Props

**MonthView props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| canDragEvent | (event: ScheduleEventData) => boolean | - | Function to determine if event can be dragged |
| consistentWeeks | boolean | - | If set, always renders 6 weeks in the month view |
| date | string \| Date | required | Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format |
| events | ScheduleEventData[] | - | Events to display |
| firstDayOfWeek | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 | - | Number 0-6, where 0 – Sunday and 6 – Saturday. |
| getDayProps | (date: string) => Record<string, any> | - | Props passed down to the day button |
| getWeekNumberProps | (weekStartDate: string) => Record<string, any> | - | Props passed down to the week number button |
| highlightToday | boolean | - | If set, highlights the current day |
| labels | Partial<ScheduleLabels> | - | Labels override for i18n |
| locale | string | - | Locale passed down to dayjs, overrides value defined on `DatesProvider` |
| maxEventsPerDay | number | - | Maximum number of events visible per day before "+more" indicator shows, value is clamped between 1 and 10 |
| mode | ScheduleMode | - | Interaction mode: 'default' allows all interactions, 'static' disables event interactions |
| monthYearSelectProps | Partial<MonthYearSelectProps> | - | Props passed down to `MonthYearSelect` component in the header |
| moreEventsProps | Partial<MoreEventsProps> | - | Props passed down to `MoreEvents` component |
| nextControlProps | React.ComponentProps<'button'> | - | Props passed to next month control |
| onDateChange | (value: string) => void | - | Called with the new date value when a date is selected |
| onDayClick | (date: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when day is clicked |
| onEventClick | (event: ScheduleEventData, e: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when event is clicked |
| onEventDragEnd | () => void | - | Called when any event drag ends |
| onEventDragStart | (event: ScheduleEventData) => void | - | Called when any event drag starts |
| onEventDrop | (data: { eventId: string \| number; newStart: string; newEnd: string; event: ScheduleEventData; }) => void | - | Called when event is dropped on new date |
| onExternalEventDrop | (dataTransfer: DataTransfer, dropDateTime: string) => void | - | Called when an external item is dropped onto the schedule. Receives the `DataTransfer` object and the drop target datetime. |
| onSlotDragEnd | (rangeStart: string, rangeEnd: string) => void | - | Called when a day range is selected by dragging |
| onViewChange | (view: ScheduleViewLevel) => void | - | Called when view level select button is clicked |
| onWeekNumberClick | (date: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called with first day of the week when week number is clicked |
| previousControlProps | React.ComponentProps<'button'> | - | Props passed to previous month control |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| recurrenceExpansionLimit | number | - | Max number of generated recurring instances per recurring series |
| renderEvent | RenderEvent | - | Function to fully customize event rendering, receives all props that would be passed to the root element including children |
| renderEventBody | RenderEventBody | - | Function to customize event body, `event` object is passed as first argument |
| scrollAreaProps | Partial<ScrollAreaProps> & DataAttributes | - | Props passed down to `ScrollArea` component |
| todayControlProps | React.ComponentProps<'button'> | - | Props passed to today control |
| viewSelectProps | Partial<ViewSelectProps> & DataAttributes | - | Props passed to view level select |
| weekdayFormat | string \| ((date: string) => string) | - | `dayjs` format for weekdays names. By default, the first letter of the weekday. |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. |
| withDragSlotSelect | boolean | - | If set, enables drag-to-select day ranges |
| withEventsDragAndDrop | boolean | - | If true, events can be dragged and dropped |
| withHeader | boolean | - | If set, the header is displayed |
| withOutsideDays | boolean | - | If set, days from the previous and next months are displayed to fill the weeks |
| withWeekDays | boolean | - | If set, weekdays names are displayed in the first row |
| withWeekNumbers | boolean | - | If set, week numbers are displayed in the first column |


#### Styles API

MonthView component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**MonthView selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| monthView | .mantine-MonthView-monthView | Root element |
| monthViewScrollArea | .mantine-MonthView-monthViewScrollArea | Scroll area wrapper |
| monthViewInner | .mantine-MonthView-monthViewInner | Inner container |
| monthViewWeek | .mantine-MonthView-monthViewWeek | Week row |
| monthViewDay | .mantine-MonthView-monthViewDay | Day cell |
| monthViewDayLabel | .mantine-MonthView-monthViewDayLabel | Day number label |
| monthViewWeekNumber | .mantine-MonthView-monthViewWeekNumber | Week number indicator |
| monthViewWeekday | .mantine-MonthView-monthViewWeekday | Weekday name cell |
| monthViewWeekdays | .mantine-MonthView-monthViewWeekdays | Weekdays row |
| monthViewWeekdaysCorner | .mantine-MonthView-monthViewWeekdaysCorner | Top-left corner in weekdays row |
| monthViewEvents | .mantine-MonthView-monthViewEvents | Events container in day cell |
| monthViewBackgroundEvent | .mantine-MonthView-monthViewBackgroundEvent | Background event element |
| header | .mantine-MonthView-header | Header container, part of ScheduleHeader |
| headerControl | .mantine-MonthView-headerControl | Header control element, part of ScheduleHeader |
| viewSelect | .mantine-MonthView-viewSelect | View select element, part of ScheduleHeader |
| monthYearSelectTarget | .mantine-MonthView-monthYearSelectTarget | Month/year select target button, part of MonthYearSelect |
| monthYearSelectDropdown | .mantine-MonthView-monthYearSelectDropdown | Month/year select dropdown, part of MonthYearSelect |
| monthYearSelectControl | .mantine-MonthView-monthYearSelectControl | Month/year select control, part of MonthYearSelect |
| monthYearSelectList | .mantine-MonthView-monthYearSelectList | Month/year select list, part of MonthYearSelect |
| monthYearSelectLabel | .mantine-MonthView-monthYearSelectLabel | Month/year select label, part of MonthYearSelect |

**MonthView CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| monthView | --month-view-radius | Controls `border-radius` of the month view |

**MonthView data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| monthViewDay | data-today | Day is today | - |
| monthViewDay | data-weekend | Day is a weekend day | - |
| monthViewDay | data-outside | Day is outside current month | - |
| monthView | data-static | `mode="static"` is set | - |
