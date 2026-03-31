# YearView
Package: @mantine/schedule
Import: import { YearView } from '@mantine/schedule';
Description: Standalone schedule year view component

## Usage

YearView displays all 12 months of a year in a grid layout. Event indicators are shown as colored dots in day cells.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
      events={events}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisYear = dayjs().format('YYYY');

const events = [
  {
    id: 1,
    title: 'New Year',
    start: \\\`\\\${thisYear}-01-01 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-01-01\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
  {
    id: 2,
    title: 'Spring Event',
    start: \\\`\\\${thisYear}-03-15 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-03-15\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
];
```


## With week numbers

Set `withWeekNumbers` to display week numbers in the first column of each month.

```tsx
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekNumbers />;
}
```


## Without week days

Set `withWeekDays={false}` to hide the weekday names row in each month.

```tsx
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekDays={false} />;
}
```


## Hide outside days

Set `withOutsideDays={false}` to hide days from adjacent months.

```tsx
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withOutsideDays={false} />;
}
```


## First day of week

Set `firstDayOfWeek` to control which day starts the week.

```tsx
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} firstDayOfWeek={0} />;
}
```


## Weekday format

Use `weekdayFormat` prop to customize weekday names.

```tsx
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} weekdayFormat="dd" />;
}
```


## Highlight today

Set `highlightToday={false}` to disable highlighting the current day.

```tsx
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} highlightToday={false} />;
}
```


## Without header

Set `withHeader={false}` to hide the header controls.

```tsx
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withHeader={false} />;
}
```


## Custom header

You can build a custom header using `ScheduleHeader` compound components combined with your own controls.
Set `withHeader={false}` on the view and compose the header externally.

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, ScheduleHeader, YearView } from '@mantine/schedule';
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
                .subtract(1, 'year')
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          withMonths={false}
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'year')
                .startOf('year')
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

      <YearView
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

const thisYear = dayjs().format('YYYY');

const events = [
  {
    id: 1,
    title: 'New Year',
    start: \\\`\\\${thisYear}-01-01 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-01-01\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
  {
    id: 2,
    title: 'Spring Event',
    start: \\\`\\\${thisYear}-03-15 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-03-15\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
];
```


## Recurring events

YearView automatically expands recurring events for the visible year.
See [Recurring events guide](https://mantine.dev/llms/schedule-recurring-events.md) for full documentation.

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


## Static mode

Set `mode="static"` to disable all interactions.

```tsx
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} mode="static" />;
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
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
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
      }}
    />
  );
}

// data.ts
import dayjs from 'dayjs';

const thisYear = dayjs().format('YYYY');

const events = [
  {
    id: 1,
    title: 'New Year',
    start: \\\`\\\${thisYear}-01-01 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-01-01\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
  {
    id: 2,
    title: 'Spring Event',
    start: \\\`\\\${thisYear}-03-15 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-03-15\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
];
```


## Responsive styles

YearView uses [@container queries](https://caniuse.com/css-container-queries) for responsive styles.
The component automatically adjusts its layout based on the container width, hiding labels
and reducing padding on smaller screens. Container queries are supported in all modern browsers.

## Accessibility

### Focus management

In the YearView component, focus is managed to provide an efficient keyboard navigation experience:

* Only the first day of each month is included in the tab order (has `tabIndex={0}`)
* All other days within a month have `tabIndex={-1}` and can only be reached via arrow key navigation
* Outside days (days from adjacent months displayed in the current month view) are not focusable
* Disabled days are skipped during keyboard navigation

This approach reduces the number of tab stops when navigating through the calendar, making it faster for keyboard users to move between months while still allowing full access to all days via arrow keys.

### Keyboard interactions

Note that the following events will only trigger if focus is on a day control.

### Day labels

Each day button has an `aria-label` attribute with the full date in the format "Month Day, Year" (e.g., "November 15, 2025"). This provides screen reader users with complete date information.


#### Props

**YearView props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| date | string \| Date | required | Date to display, Date object or date string in `YYYY-MM-DD 00:00:00` format |
| events | ScheduleEventData[] | - | Events to display, must be a stable reference |
| firstDayOfWeek | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 | - | Number 0-6, where 0 – Sunday and 6 – Saturday |
| getDayProps | (date: string) => Record<string, any> | - | Props passed down to the day button |
| getWeekNumberProps | (weekStartDate: string) => Record<string, any> | - | Props passed down to the week number button |
| highlightToday | boolean | - | If set, highlights the current day |
| labels | Partial<ScheduleLabels> | - | Labels override for i18n |
| locale | string | - | Locale passed down to dayjs, overrides value defined on `DatesProvider` |
| mode | ScheduleMode | - | Interaction mode: 'default' allows all interactions, 'static' disables event interactions |
| monthLabelFormat | string \| ((date: string) => string) | - | `dayjs` format for month label |
| monthYearSelectProps | Partial<MonthYearSelectProps> | - | Props passed down to `MonthYearSelect` component in the header |
| nextControlProps | React.ComponentProps<'button'> | - | Props passed to next month control |
| onDateChange | (value: string) => void | - | Called with the new date value when a date is selected |
| onDayClick | (date: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called when day is clicked |
| onMonthClick | (date: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called with the first day of the month when month label is clicked |
| onViewChange | (view: ScheduleViewLevel) => void | - | Called when view level select button is clicked |
| onWeekNumberClick | (date: string, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void | - | Called with first day of the week when week number is clicked |
| previousControlProps | React.ComponentProps<'button'> | - | Props passed to previous month control |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| recurrenceExpansionLimit | number | - | Max number of generated recurring instances per recurring series |
| todayControlProps | React.ComponentProps<'button'> | - | Props passed to today control |
| viewSelectProps | Partial<ViewSelectProps> & DataAttributes | - | Props passed to view level select |
| weekdayFormat | string \| ((date: string) => string) | - | `dayjs` format for weekdays names |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. |
| withHeader | boolean | - | If set, the header is displayed |
| withOutsideDays | boolean | - | If true, days from adjacent months are displayed |
| withWeekDays | boolean | - | If set, weekdays names are displayed in the first row |
| withWeekNumbers | boolean | - | If set, show week numbers |


#### Styles API

YearView component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**YearView selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| yearView | .mantine-YearView-yearView | Root element |
| yearViewMonths | .mantine-YearView-yearViewMonths | Container for all months |
| yearViewMonth | .mantine-YearView-yearViewMonth | Individual month container |
| yearViewWeekday | .mantine-YearView-yearViewWeekday | Weekday name cell |
| yearViewDay | .mantine-YearView-yearViewDay | Day cell |
| yearViewWeek | .mantine-YearView-yearViewWeek | Week row |
| yearViewWeekNumber | .mantine-YearView-yearViewWeekNumber | Week number indicator |
| yearViewWeekdays | .mantine-YearView-yearViewWeekdays | Weekdays row |
| yearViewWeekdaysCorner | .mantine-YearView-yearViewWeekdaysCorner | Top-left corner in weekdays row |
| yearViewMonthCaption | .mantine-YearView-yearViewMonthCaption | Month name label |
| yearViewDayIndicators | .mantine-YearView-yearViewDayIndicators | Container for day event indicators |
| yearViewDayIndicator | .mantine-YearView-yearViewDayIndicator | Individual day event indicator |
| header | .mantine-YearView-header | Header container, part of ScheduleHeader |
| headerControl | .mantine-YearView-headerControl | Header control element, part of ScheduleHeader |
| viewSelect | .mantine-YearView-viewSelect | View select element, part of ScheduleHeader |
| monthYearSelectTarget | .mantine-YearView-monthYearSelectTarget | Month/year select target button, part of MonthYearSelect |
| monthYearSelectDropdown | .mantine-YearView-monthYearSelectDropdown | Month/year select dropdown, part of MonthYearSelect |
| monthYearSelectControl | .mantine-YearView-monthYearSelectControl | Month/year select control, part of MonthYearSelect |
| monthYearSelectList | .mantine-YearView-monthYearSelectList | Month/year select list, part of MonthYearSelect |
| monthYearSelectLabel | .mantine-YearView-monthYearSelectLabel | Month/year select label, part of MonthYearSelect |

**YearView CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| yearView | --year-view-radius | Controls `border-radius` of the year view |

**YearView data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| yearViewDay | data-today | Day is today | - |
| yearViewDay | data-weekend | Day is a weekend day | - |
| yearViewDay | data-outside | Day is outside current month | - |
| yearView | data-static | `mode="static"` is set | - |
