# Custom Calendar Patterns

Every pattern is one or two of the levers from `SKILL.md` (per-cell props, cell content,
displayed period) on the lowest block that fits. Combine them: the stay picker's prices work in
the event calendar, the sprint picker's hover preview works on any period.

## Table of Contents
- [Stay picker with nightly prices](#stay-picker-with-nightly-prices)
- [Rental range that cannot cross closed days](#rental-range-that-cannot-cross-closed-days)
- [Day and time slots](#day-and-time-slots)
- [Event dots with a day agenda](#event-dots-with-a-day-agenda)
- [Unavailable days with reasons](#unavailable-days-with-reasons)
- [Fixed-length period with hover preview](#fixed-length-period-with-hover-preview)
- [Range input with presets and a maximum length](#range-input-with-presets-and-a-maximum-length)
- [Activity heatmap with streaks](#activity-heatmap-with-streaks)
- [Fiscal quarter picker from primitives](#fiscal-quarter-picker-from-primitives)
- [Toolbar and per-month data loading](#toolbar-and-per-month-data-loading)

---

## Stay picker with nightly prices

The built-in range cannot express "a booked night may still be the check-out day", so the
selection lives on `Calendar`. Every value the cells need (`lastCheckOut`, the preview end) is
computed once per render; the callbacks only compare strings.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import classes from './StayPicker.module.css';

export interface Night {
  price: number;
  booked: boolean;
}

export type Stay = [string | null, string | null];

interface StayPickerProps {
  nights: Record<string, Night>;
  value: Stay;
  onChange: (value: Stay) => void;
}

const isFreeNight = (nights: Record<string, Night>, date: string) =>
  nights[date] !== undefined && !nights[date].booked;

function getLastCheckOut(nights: Record<string, Night>, checkIn: string) {
  let day = dayjs(checkIn).add(1, 'day');
  while (isFreeNight(nights, day.format('YYYY-MM-DD'))) {
    day = day.add(1, 'day');
  }
  return day.format('YYYY-MM-DD');
}

export function StayPicker({ nights, value, onChange }: StayPickerProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [checkIn, checkOut] = value;
  const lastCheckOut =
    checkIn !== null && checkOut === null ? getLastCheckOut(nights, checkIn) : null;

  const canCheckOut = (date: string) =>
    checkIn !== null && lastCheckOut !== null && date > checkIn && date <= lastCheckOut;

  const end = hovered !== null && canCheckOut(hovered) ? hovered : checkOut;
  const inStay = (date: string) =>
    checkIn !== null && end !== null && date >= checkIn && date <= end;

  const handleClick = (date: string) => {
    if (canCheckOut(date)) {
      onChange([checkIn, date]);
    } else if (isFreeNight(nights, date)) {
      onChange([date, null]);
    }
  };

  const getLabel = (date: string) => {
    const label = dayjs(date).format('dddd, D MMMM YYYY');
    if (canCheckOut(date)) {
      return `${label}, available for check-out`;
    }
    if (!isFreeNight(nights, date)) {
      return `${label}, unavailable`;
    }
    return `${label}, $${nights[date].price} per night`;
  };

  return (
    <Calendar
      numberOfColumns={2}
      hideOutsideDates
      withCellSpacing={false}
      weekendDays={[]}
      minDate={dayjs().format('YYYY-MM-DD')}
      excludeDate={(date) => !isFreeNight(nights, date) && !canCheckOut(date)}
      onMouseLeave={() => setHovered(null)}
      classNames={{ day: classes.day }}
      getDayAriaLabel={getLabel}
      getDayProps={(date) => ({
        selected: date === checkIn || date === checkOut,
        inRange: inStay(date),
        firstInRange: date === checkIn,
        lastInRange: date === end,
        onClick: () => handleClick(date),
        onMouseEnter: () => setHovered(date),
        onFocus: () => setHovered(date),
      })}
      renderDay={(date) => (
        <div>
          <div>{dayjs(date).date()}</div>
          {isFreeNight(nights, date) && <div className={classes.price}>${nights[date].price}</div>}
        </div>
      )}
    />
  );
}
```

```css
/* StayPicker.module.css */
.day {
  width: 44px;
  height: 48px;
  line-height: 1.2;
}

.price {
  font-size: 10px;
  opacity: 0.8;
}
```

- `onFocus` gives keyboard users the same preview as hover; `onMouseLeave` on the root clears it.
- The price has no color of its own, so it stays readable on selected days.
- `excludeDate` reads the current selection: while check-out is being picked, days after the
  first booked night are disabled and the booked night itself is enabled as a check-out.

## Rental range that cannot cross closed days

When the built-in range fits (whole days, both ends inclusive), keep `DatePicker` and limit the
second pick while the first one is set. Closed days stay disabled for good; days past the nearest
closed day or past the maximum length are disabled only while the end is being picked.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { DatePicker, DatesRangeValue } from '@mantine/dates';

const MAX_DAYS = 14;

function findClosedDay(start: string, step: 1 | -1, closedDays: Set<string>) {
  for (let offset = 1; offset < MAX_DAYS; offset += 1) {
    const date = dayjs(start).add(offset * step, 'day').format('YYYY-MM-DD');
    if (closedDays.has(date)) {
      return date;
    }
  }
  return null;
}

export function RentalPeriodPicker({ closedDays }: { closedDays: Set<string> }) {
  const [value, setValue] = useState<DatesRangeValue<string>>([null, null]);
  const [start, end] = value;
  const pickingEnd = start !== null && end === null;
  const closedBefore = start !== null && end === null ? findClosedDay(start, -1, closedDays) : null;
  const closedAfter = start !== null && end === null ? findClosedDay(start, 1, closedDays) : null;

  const isExcluded = (date: string) => {
    if (closedDays.has(date)) {
      return true;
    }
    if (start === null || !pickingEnd) {
      return false;
    }
    return (
      Math.abs(dayjs(date).diff(start, 'day')) >= MAX_DAYS ||
      (closedBefore !== null && date < closedBefore) ||
      (closedAfter !== null && date > closedAfter)
    );
  };

  return (
    <Stack gap="xs">
      <DatePicker
        type="range"
        numberOfColumns={2}
        value={value}
        onChange={setValue}
        minDate={dayjs().format('YYYY-MM-DD')}
        excludeDate={isExcluded}
      />
      <Text size="sm">
        {start && end
          ? `${dayjs(end).diff(start, 'day') + 1} days`
          : `Up to ${MAX_DAYS} days, closed days cannot be included`}
      </Text>
    </Stack>
  );
}
```

- Clicking the start day again clears the range, so the user is never stuck with the limits.
- Values that do not come from clicks (presets, an API, a form reset) skip `excludeDate`: check
  them in `onChange` or where they are set, and replace an invalid range with a new value
  (`[clickedDate, null]` or `[null, null]`) rather than ignoring the call.

## Day and time slots

A day picker and a slot list side by side. Days without free slots are excluded, the slot list
follows the picked day, and the value is one `YYYY-MM-DD HH:mm:ss` string.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Group, Stack, Text } from '@mantine/core';
import { assignTime, DatePicker, TimeGrid } from '@mantine/dates';

interface SlotPickerProps {
  slots: Record<string, string[]>;
  value: string | null;
  onChange: (value: string | null) => void;
}

export function SlotPicker({ slots, value, onChange }: SlotPickerProps) {
  const [day, setDay] = useState<string | null>(
    value ? dayjs(value).format('YYYY-MM-DD') : null
  );
  const time = value ? dayjs(value).format('HH:mm') : null;

  const handleDayChange = (next: string | null) => {
    if (next === day) {
      return;
    }
    setDay(next);
    onChange(null);
  };

  return (
    <Group align="flex-start" gap="xl">
      <DatePicker
        value={day}
        onChange={handleDayChange}
        minDate={dayjs().format('YYYY-MM-DD')}
        excludeDate={(date) => !slots[date]?.length}
        getDayAriaLabel={(date) => {
          const count = slots[date]?.length ?? 0;
          const label = dayjs(date).format('D MMMM YYYY');
          return count ? `${label}, ${count} free times` : `${label}, fully booked`;
        }}
      />

      <Stack gap="xs" w={240}>
        <Text fw="var(--mantine-font-weight-medium)">
          {day ? dayjs(day).format('dddd, MMMM D') : 'Pick a day to see free times'}
        </Text>
        {day && (
          <TimeGrid
            data={slots[day] ?? []}
            value={time}
            onChange={(next) => onChange(next ? assignTime(day, next) : null)}
            simpleGridProps={{ cols: 2, spacing: 'xs' }}
          />
        )}
      </Stack>
    </Group>
  );
}
```

- `DatePicker` calls `onChange` with the same date when the selected day is clicked again; the
  early return keeps the picked time.
- For evenly spaced slots, `getTimeRange({ startTime: '09:00', endTime: '17:00', interval: '00:30' })`
  builds `data`; `disableTime` (array or function), `minTime` and `maxTime` disable some of them.
- A fixed time per day with one input is `DateTimePicker`/`InlineDateTimePicker`; this pattern is
  for slots that differ per day.

## Event dots with a day agenda

Days with events get dots, the picked day lists its events. Events are grouped by day once, so
`renderDay` is a lookup.

```tsx
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { Group, Stack, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import classes from './EventCalendar.module.css';

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
}

export function EventCalendar({ events }: { events: CalendarEvent[] }) {
  const [day, setDay] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  const eventsByDay = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      const key = dayjs(event.start).format('YYYY-MM-DD');
      map.set(key, [...(map.get(key) ?? []), event]);
    }
    return map;
  }, [events]);

  const dayEvents = day ? (eventsByDay.get(day) ?? []) : [];

  return (
    <Group align="flex-start" gap="xl">
      <DatePicker
        value={day}
        onChange={setDay}
        renderDay={(date) => {
          const dots = Math.min(eventsByDay.get(date)?.length ?? 0, 3);
          return (
            <div className={classes.content}>
              {dayjs(date).date()}
              <div className={classes.dots}>
                {Array.from({ length: dots }, (_, index) => (
                  <span key={index} className={classes.dot} />
                ))}
              </div>
            </div>
          );
        }}
        getDayAriaLabel={(date) => {
          const count = eventsByDay.get(date)?.length ?? 0;
          const label = dayjs(date).format('D MMMM YYYY');
          return count ? `${label}, ${count} ${count === 1 ? 'event' : 'events'}` : label;
        }}
      />

      <Stack gap="xs" w={260}>
        <Text fw="var(--mantine-font-weight-medium)">
          {day ? dayjs(day).format('dddd, MMMM D') : 'Pick a day'}
        </Text>
        {dayEvents.length === 0 ? (
          <Text size="sm">No events</Text>
        ) : (
          dayEvents.map((event) => (
            <Group key={event.id} gap="sm" wrap="nowrap">
              <Text size="sm" w={44}>
                {dayjs(event.start).format('HH:mm')}
              </Text>
              <Text size="sm">{event.title}</Text>
            </Group>
          ))
        )}
      </Stack>
    </Group>
  );
}
```

```css
/* EventCalendar.module.css */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.dots {
  display: flex;
  gap: 2px;
  height: 4px;
}

.dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: currentColor;
}
```

- `currentColor` dots turn white with the selected day's text; colored dots would vanish on the
  filled background.
- A single marker per day can be the core `Indicator` around the day number
  (`<Indicator size={6} offset={-4} disabled={!hasEvents}>`).
- A read-only overview (no selection) is the same `renderDay` on `<Calendar static />`.
- Hour-by-hour views with event blocks are not a date picker: use `@mantine/schedule`.

## Unavailable days with reasons

Disabled buttons receive no hover or focus, so a reason attached to a disabled day is never seen.
Days with a reason stay enabled, look unavailable, refuse the click and show the reason. The
selection is on `Calendar`, because a picker would select the day anyway.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import classes from './AppointmentDayPicker.module.css';

interface AppointmentDayPickerProps {
  value: string | null;
  onChange: (value: string) => void;
  unavailable: Record<string, string>;
}

export function AppointmentDayPicker({ value, onChange, unavailable }: AppointmentDayPickerProps) {
  const [hint, setHint] = useState<string | null>(null);

  const showReason = (date: string) =>
    setHint(unavailable[date] ? `${dayjs(date).format('D MMMM')}: ${unavailable[date]}` : null);

  return (
    <Stack gap="xs" w="fit-content">
      <Calendar
        minDate={dayjs().format('YYYY-MM-DD')}
        classNames={{ day: classes.day }}
        onMouseLeave={() => setHint(null)}
        getDayAriaLabel={(date) => {
          const label = dayjs(date).format('D MMMM YYYY');
          return unavailable[date] ? `${label}, unavailable: ${unavailable[date]}` : label;
        }}
        getDayProps={(date) => ({
          selected: date === value,
          ...(unavailable[date] ? { 'aria-disabled': true, 'data-unavailable': true } : {}),
          onMouseEnter: () => showReason(date),
          onFocus: () => showReason(date),
          onClick: () => (unavailable[date] ? showReason(date) : onChange(date)),
        })}
      />
      <Text size="sm" mih={22}>
        {hint}
      </Text>
    </Stack>
  );
}
```

```css
/* AppointmentDayPicker.module.css */
.day[data-unavailable] {
  opacity: var(--mantine-disabled-opacity);
  text-decoration: line-through;
  cursor: not-allowed;
}
```

- Days that need no explanation (past days, outside `minDate`/`maxDate`) stay truly disabled.
- The reason is in the accessible name, so screen reader users hear it on focus without a live region.
- `mih` reserves the line so the layout does not jump when the hint appears.

## Fixed-length period with hover preview

Any "click a day, get its period" picker: sprints, billing cycles, 7-night packages, custom
weeks. One function maps a day to its period; hover and selection both use it. For calendar weeks
use `WeekPicker` instead.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

const FIRST_SPRINT_START = '2026-01-05';
const SPRINT_DAYS = 14;

type Period = [string, string];

function getSprint(date: string): Period {
  const index = Math.floor(dayjs(date).diff(FIRST_SPRINT_START, 'day') / SPRINT_DAYS);
  const start = dayjs(FIRST_SPRINT_START).add(index * SPRINT_DAYS, 'day');
  return [start.format('YYYY-MM-DD'), start.add(SPRINT_DAYS - 1, 'day').format('YYYY-MM-DD')];
}

const isWithin = (date: string, period: Period | null) =>
  period !== null && date >= period[0] && date <= period[1];

interface SprintPickerProps {
  value: string | null;
  onChange: (sprintStart: string) => void;
}

export function SprintPicker({ value, onChange }: SprintPickerProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const selected = value ? getSprint(value) : null;
  const preview = hovered ? getSprint(hovered) : null;

  return (
    <Calendar
      withCellSpacing={false}
      onMouseLeave={() => setHovered(null)}
      getDayProps={(date) => {
        const period = isWithin(date, preview) ? preview : isWithin(date, selected) ? selected : null;
        return {
          selected: isWithin(date, selected),
          inRange: period !== null,
          firstInRange: period?.[0] === date,
          lastInRange: period?.[1] === date,
          onMouseEnter: () => setHovered(date),
          onFocus: () => setHovered(date),
          onClick: () => onChange(getSprint(date)[0]),
        };
      }}
    />
  );
}
```

- Emit the period start, like `WeekPicker` and `QuarterPicker` do, and derive the end where it
  is needed.
- `Math.floor` keeps days before `FIRST_SPRINT_START` in the right period (negative index).
- `withCellSpacing={false}` joins the days of a period into one band.

## Range input with presets and a maximum length

Report filters: a range input with two months, presets for common periods and a cap on the
length. Everything is built in except the cap, which reads the first picked date.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePickerInput, DatePickerPreset, DatesRangeValue, toDateString } from '@mantine/dates';

const MAX_DAYS = 90;

export function ReportPeriodInput() {
  const [value, setValue] = useState<DatesRangeValue<string>>([null, null]);
  const [start, end] = value;
  const today = dayjs();

  const presets: DatePickerPreset<'range'>[] = [
    { label: 'Last 7 days', value: [toDateString(today.subtract(6, 'day')), toDateString(today)] },
    { label: 'Last 30 days', value: [toDateString(today.subtract(29, 'day')), toDateString(today)] },
    { label: 'This month', value: [toDateString(today.startOf('month')), toDateString(today)] },
    {
      label: 'Last month',
      value: [
        toDateString(today.subtract(1, 'month').startOf('month')),
        toDateString(today.subtract(1, 'month').endOf('month')),
      ],
    },
  ];

  return (
    <DatePickerInput
      type="range"
      label="Report period"
      placeholder="Start date – end date"
      numberOfColumns={2}
      presets={presets}
      maxDate={toDateString(today)}
      excludeDate={(date) =>
        start !== null && end === null && Math.abs(dayjs(date).diff(start, 'day')) >= MAX_DAYS
      }
      value={value}
      onChange={setValue}
      valueFormat="MMM D, YYYY"
    />
  );
}
```

- A preset sets the value and moves the calendar to its first date. Presets are not checked
  against `excludeDate`, so keep them inside the limits.
- Below the `sm` breakpoint the dropdown is a bottom drawer that applies the value on its
  Save button (`applyOnSubmit`); with `type="range"` the button waits for both dates.
- The inline equivalent is `DatePicker` with the same props; presets render beside it.

## Activity heatmap with streaks

A year at a glance: twelve static `Month` grids, each day tinted by its count. The streak
numbers carry the story; the grid is the picture.

```tsx
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { Group, SimpleGrid, Stack, Text } from '@mantine/core';
import { Month } from '@mantine/dates';

interface ActivityYearProps {
  year: number;
  counts: Record<string, number>;
}

function getStreaks(counts: Record<string, number>) {
  const activeDays = Object.keys(counts)
    .filter((date) => counts[date] > 0)
    .sort();

  let longest = 0;
  let run = 0;
  let previous: string | null = null;
  for (const date of activeDays) {
    run = previous !== null && dayjs(date).diff(previous, 'day') === 1 ? run + 1 : 1;
    longest = Math.max(longest, run);
    previous = date;
  }

  const today = dayjs();
  let day = (counts[today.format('YYYY-MM-DD')] ?? 0) > 0 ? today : today.subtract(1, 'day');
  let current = 0;
  while ((counts[day.format('YYYY-MM-DD')] ?? 0) > 0) {
    current += 1;
    day = day.subtract(1, 'day');
  }

  return { longest, current };
}

export function ActivityYear({ year, counts }: ActivityYearProps) {
  const max = useMemo(() => Math.max(1, ...Object.values(counts)), [counts]);
  const streaks = useMemo(() => getStreaks(counts), [counts]);
  const months = Array.from({ length: 12 }, (_, index) =>
    dayjs(`${year}-01-01`).add(index, 'month').format('YYYY-MM-DD')
  );

  const getDayProps = (date: string) => {
    const count = counts[date] ?? 0;
    const title = `${dayjs(date).format('D MMMM')}: ${count} ${count === 1 ? 'activity' : 'activities'}`;
    if (count === 0) {
      return { title };
    }
    const share = count / max;
    return {
      title,
      style: {
        backgroundColor: `color-mix(in srgb, var(--mantine-primary-color-filled) ${Math.round(15 + share * 85)}%, transparent)`,
        color: share > 0.5 ? 'var(--mantine-primary-color-contrast)' : undefined,
      },
    };
  };

  return (
    <Stack gap="lg">
      <Group gap="xl">
        <div>
          <Text size="sm" fw="var(--mantine-font-weight-medium)">
            Current streak
          </Text>
          <Text fz="xl" c="var(--mantine-color-bright)">
            {streaks.current} days
          </Text>
        </div>
        <div>
          <Text size="sm" fw="var(--mantine-font-weight-medium)">
            Longest streak
          </Text>
          <Text fz="xl" c="var(--mantine-color-bright)">
            {streaks.longest} days
          </Text>
        </div>
      </Group>

      <SimpleGrid cols={{ base: 2, sm: 3, lg: 4 }} spacing="lg">
        {months.map((month) => (
          <Stack key={month} gap={4}>
            <Text size="sm" fw="var(--mantine-font-weight-medium)">
              {dayjs(month).format('MMMM')}
            </Text>
            <Month
              month={month}
              static
              hideOutsideDates
              size="xs"
              weekendDays={[]}
              getDayProps={getDayProps}
            />
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
```

- One hue in steps of opacity (`color-mix` with `transparent`) reads in both color schemes; the
  text switches to the contrast color where the tint gets dark.
- Static days are `div`s: `title` gives mouse users the count, screen readers get the streaks and
  should get a text or table summary of the data, not 365 unlabeled cells.
- A compact single-row strip (GitHub style) is not a month grid: build it from your own cells.

## Fiscal quarter picker from primitives

When periods do not follow the calendar year (fiscal years, 4-4-5 retail periods, school terms),
the `Calendar` levels cannot show them. Build the grid from `CalendarHeader` and `PickerControl`:
they look and behave like the built-in header and month/quarter controls.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { SimpleGrid, Stack, Text } from '@mantine/core';
import { CalendarHeader, PickerControl } from '@mantine/dates';

const FISCAL_YEAR_START_MONTH = 4;

function getFiscalYear(date: string) {
  const day = dayjs(date);
  const startsThisYear = day.month() + 1 >= FISCAL_YEAR_START_MONTH;
  return FISCAL_YEAR_START_MONTH === 1 || !startsThisYear ? day.year() : day.year() + 1;
}

function getFiscalQuarters(fiscalYear: number) {
  const firstYear = FISCAL_YEAR_START_MONTH === 1 ? fiscalYear : fiscalYear - 1;
  const start = dayjs(`${firstYear}-${String(FISCAL_YEAR_START_MONTH).padStart(2, '0')}-01`);

  return [0, 1, 2, 3].map((index) => {
    const quarterStart = start.add(index * 3, 'month');
    return {
      value: quarterStart.format('YYYY-MM-DD'),
      label: `Q${index + 1}`,
      months: `${quarterStart.format('MMM')} – ${quarterStart.add(2, 'month').format('MMM YYYY')}`,
    };
  });
}

interface FiscalQuarterPickerProps {
  value: string | null;
  onChange: (quarterStart: string) => void;
}

export function FiscalQuarterPicker({ value, onChange }: FiscalQuarterPickerProps) {
  const [fiscalYear, setFiscalYear] = useState(() =>
    getFiscalYear(value ?? dayjs().format('YYYY-MM-DD'))
  );

  return (
    <Stack gap="xs" w={280}>
      <CalendarHeader
        label={`FY${fiscalYear}`}
        hasNextLevel={false}
        previousLabel="Previous fiscal year"
        nextLabel="Next fiscal year"
        onPrevious={() => setFiscalYear((current) => current - 1)}
        onNext={() => setFiscalYear((current) => current + 1)}
      />
      <SimpleGrid cols={2} spacing={4} verticalSpacing={4}>
        {getFiscalQuarters(fiscalYear).map((quarter) => (
          <PickerControl
            key={quarter.value}
            fullWidth
            h="auto"
            py={6}
            selected={quarter.value === value}
            onClick={() => onChange(quarter.value)}
          >
            <div>
              <div>{quarter.label}</div>
              <Text span size="xs" display="block">
                {quarter.months}
              </Text>
            </div>
          </PickerControl>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
```

- `PickerControl` sets `aria-pressed` and `data-selected` from `selected`, and takes
  `inRange`/`firstInRange`/`lastInRange` for period ranges and `disabled` for closed periods.
- `CalendarHeader` with `hasNextLevel={false}` renders the label as text; pass
  `nextDisabled`/`previousDisabled` at the edges of the allowed years.
- Controls built this way are plain buttons in tab order; arrow-key navigation is yours to add.
  Prefer this only when no `Calendar` level or picker shows the periods.
- Calendar quarters are `QuarterPicker`; a calendar-year month grid with your own selection is
  `Calendar` with `minLevel="year" maxLevel="year"`, `getMonthControlProps` and `onMonthSelect`.

## Toolbar and per-month data loading

The displayed month drives the data request, and a toolbar outside the calendar jumps to today.
`useCalendar` owns the displayed date; the controller can also be passed to `DatePicker` and the
other pickers.

```tsx
import dayjs from 'dayjs';
import { Button, Group, Stack, Text } from '@mantine/core';
import { Calendar, useCalendar } from '@mantine/dates';

const COLUMNS = 2;

export function AvailabilityOverview() {
  const controller = useCalendar({ defaultDate: dayjs().format('YYYY-MM-DD') });
  const firstMonth = dayjs(controller.date ?? undefined).startOf('month');
  const from = firstMonth.format('YYYY-MM-DD');
  const to = firstMonth.add(COLUMNS - 1, 'month').endOf('month').format('YYYY-MM-DD');
  const freeRooms = useAvailability(from, to);

  return (
    <Stack gap="sm" w="fit-content">
      <Group justify="space-between">
        <Text fw="var(--mantine-font-weight-medium)">Free rooms per night</Text>
        <Button
          variant="default"
          size="xs"
          onClick={() => {
            controller.setDate(new Date());
            controller.setLevel('month');
          }}
        >
          Today
        </Button>
      </Group>

      <Calendar
        controller={controller}
        numberOfColumns={COLUMNS}
        hideOutsideDates
        static
        renderDay={(date) => (
          <div>
            <div>{dayjs(date).date()}</div>
            <Text span size="xs" display="block">
              {freeRooms?.[date] ?? '–'}
            </Text>
          </div>
        )}
      />
    </Stack>
  );
}
```

`useAvailability(from, to)` stands for your data hook (TanStack Query, SWR, a `useEffect` fetch)
returning `Record<string, number> | undefined` keyed by `YYYY-MM-DD`; days render without numbers
while it loads.

- The displayed date keeps the day of the month when the user steps months; normalize it with
  `startOf('month')` before using it as a request key, or every step builds a different key.
- Without `hideOutsideDates`, request from `getStartOfWeek` of the first month to `getEndOfWeek`
  of the last one (or use `getMonthDays`) so outside days get data too.
- Without a toolbar, the same works with plain state: `date={displayed}` and
  `onDateChange={setDisplayed}` on `Calendar` or any picker.
- Picker inputs reset the displayed date to the value each time the dropdown opens; use
  `useDatePickerInput` (or the other `use*PickerInput` hooks) to drive them from outside.
