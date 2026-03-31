# MobileMonthView
Package: @mantine/schedule
Import: import { MobileMonthView } from '@mantine/schedule';
Description: Mobile-optimized schedule month view component

## Usage

MobileMonthView is a mobile-optimized calendar view that displays a month grid at the top with event indicators, and a list of events for the selected day at the bottom. This component is designed to work similarly to how calendar applications work on iOS.

The component does not include drag-and-drop functionality and is optimized for touch interactions on mobile devices.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
```


## With week numbers

Set `withWeekNumbers` to display week numbers in the first column.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
      withWeekNumbers
    />
  );
}
```


## With outside days

By default, days from the previous and next months are hidden. Set `withOutsideDays` to display them.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
      withOutsideDays
    />
  );
}
```


## Highlight today

Set `highlightToday={false}` to disable highlighting the current day.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      highlightToday={false}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
```


## First day of week

Set `firstDayOfWeek` to control which day starts the week. 0 is Sunday, 1 is Monday (default), etc.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      firstDayOfWeek={0}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
```


## Custom header

Use `renderHeader` to customize the header. The callback receives the default header element,
the current mode, and the current date, allowing you to wrap or replace the default header.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Badge } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      renderHeader={({ defaultHeader }) => (
        <>
          {defaultHeader}
          <Badge variant="light" size="sm">3 events today</Badge>
        </>
      )}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
```


## Consistent weeks

Set `consistentWeeks={false}` to only show weeks that have days in the current month.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      consistentWeeks={false}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
```


## Weekday format

Use `weekdayFormat` prop to customize the weekday names display. It accepts dayjs format strings.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      weekdayFormat="ddd"
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
```


## Without week days

Set `withWeekDays={false}` to hide the weekday names row.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      withWeekDays={false}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
```


## Static mode

Set `mode="static"` to disable all interactions. In this mode, days are not clickable and no selection changes occur.

```tsx
import dayjs from 'dayjs';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <MobileMonthView
      date={dayjs().format('YYYY-MM-DD')}
      selectedDate={dayjs().format('YYYY-MM-DD')}
      events={regularEvents}
      mode="static"
    />
  );
}
```


## Localization

Use `locale` prop to set the dayjs locale for date formatting.
Combine it with `labels` prop to translate all UI text.

```tsx
// Demo.tsx
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
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
        noEvents: 'Sin eventos',
      }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
```


## Accessibility

MobileMonthView follows the same keyboard navigation patterns as [MonthView](./month-view.mdx#accessibility).

### Focus management

The first day of the month is included in the tab order (`tabIndex={0}`), while all other days have `tabIndex={-1}`. When a day receives focus via arrow key navigation, the component updates `tabIndex` values so that the newly focused day becomes the tab stop.

### Keyboard interactions

### Day labels

Each day button has an `aria-label` attribute with the full date in the format "Month Day, Year" (e.g., "November 15, 2025"). This provides screen reader users with complete date information.


#### Props

**MobileMonthView props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| consistentWeeks | boolean | - | If set, always renders 6 weeks in the month view |
| date | string \| Date | required | Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format |
| defaultSelectedDate | string \| Date \| null | - | Default selected date (uncontrolled) |
| events | ScheduleEventData[] | - | Events to display |
| eventsHeaderFormat | string \| ((date: string) => string) | - | Format for the events list header date |
| firstDayOfWeek | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 | - | Number 0-6, where 0 – Sunday and 6 – Saturday. |
| getDayProps | (date: string) => Record<string, any> | - | Props passed down to the day button |
| getWeekNumberProps | (weekStartDate: string) => Record<string, any> | - | Props passed down to the week number button |
| highlightToday | boolean | - | If set, highlights the current day |
| labels | Partial<ScheduleLabels> | - | Labels override for i18n |
| locale | string | - | Locale passed down to dayjs, overrides value defined on `DatesProvider` |
| mode | ScheduleMode | - | Interaction mode: 'default' allows all interactions, 'static' disables event interactions |
| onDateChange | (value: string) => void | - | Called with the new date value when a date is selected |
| onDayClick | (date: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when day is clicked |
| onEventClick | (event: ScheduleEventData, e: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when event is clicked |
| onSelectedDateChange | (value: string \| null) => void | - | Called when selected date changes |
| onWeekNumberClick | (date: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called with first day of the week when week number is clicked |
| onYearClick | () => void | - | Called when the year back button in the header is clicked |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| recurrenceExpansionLimit | number | - | Max number of generated recurring instances per recurring series |
| renderEvent | RenderEvent | - | Function to fully customize event rendering, receives all props that would be passed to the root element including children |
| renderHeader | (input: MobileMonthViewRenderHeaderInput) => ReactNode | - | Custom header renderer, receives object with mode, date, and default header element |
| selectedDate | string \| Date \| null | - | Currently selected date (controlled) |
| weekdayFormat | string \| ((date: string) => string) | - | `dayjs` format for weekdays names. By default, the first letter of the weekday. |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. |
| withOutsideDays | boolean | - | If set, days from the previous and next months are displayed to fill the weeks |
| withWeekDays | boolean | - | If set, weekdays names are displayed in the first row |
| withWeekNumbers | boolean | - | If set, week numbers are displayed in the first column |


#### Styles API

MobileMonthView component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**MobileMonthView selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| mobileMonthView | .mantine-MobileMonthView-mobileMonthView | Root element |
| mobileMonthViewHeader | .mantine-MobileMonthView-mobileMonthViewHeader | Header container with back button and month label |
| mobileMonthViewHeaderBackButton | .mantine-MobileMonthView-mobileMonthViewHeaderBackButton | Back button with year text |
| mobileMonthViewHeaderLabel | .mantine-MobileMonthView-mobileMonthViewHeaderLabel | Month and year label in the header |
| mobileMonthViewCalendar | .mantine-MobileMonthView-mobileMonthViewCalendar | Calendar grid container |
| mobileMonthViewWeekdays | .mantine-MobileMonthView-mobileMonthViewWeekdays | Weekdays row |
| mobileMonthViewWeekday | .mantine-MobileMonthView-mobileMonthViewWeekday | Individual weekday name |
| mobileMonthViewWeekdaysCorner | .mantine-MobileMonthView-mobileMonthViewWeekdaysCorner | Weekdays corner (for week numbers) |
| mobileMonthViewWeek | .mantine-MobileMonthView-mobileMonthViewWeek | Week row |
| mobileMonthViewWeekNumber | .mantine-MobileMonthView-mobileMonthViewWeekNumber | Week number button |
| mobileMonthViewDay | .mantine-MobileMonthView-mobileMonthViewDay | Day cell button |
| mobileMonthViewDayIndicators | .mantine-MobileMonthView-mobileMonthViewDayIndicators | Day indicators container |
| mobileMonthViewDayIndicator | .mantine-MobileMonthView-mobileMonthViewDayIndicator | Individual day indicator dot |
| mobileMonthViewEventsList | .mantine-MobileMonthView-mobileMonthViewEventsList | Events list container |
| mobileMonthViewEventsHeader | .mantine-MobileMonthView-mobileMonthViewEventsHeader | Events list header (selected date) |
| mobileMonthViewEvent | .mantine-MobileMonthView-mobileMonthViewEvent | Event item button |
| mobileMonthViewEventColor | .mantine-MobileMonthView-mobileMonthViewEventColor | Event color indicator |
| mobileMonthViewEventBody | .mantine-MobileMonthView-mobileMonthViewEventBody | Event body layout container |
| mobileMonthViewEventTitle | .mantine-MobileMonthView-mobileMonthViewEventTitle | Event title text |
| mobileMonthViewEventTime | .mantine-MobileMonthView-mobileMonthViewEventTime | Event time label |
| mobileMonthViewNoEvents | .mantine-MobileMonthView-mobileMonthViewNoEvents | No events message |

**MobileMonthView CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| mobileMonthView | --mobile-month-view-radius | Controls border radius |
