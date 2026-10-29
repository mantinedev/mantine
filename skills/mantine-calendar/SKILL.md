---
name: mantine-calendar
description: >
  Build custom calendars and date pickers with @mantine/dates: per-day content and states,
  your own selection rules, custom periods and display-only calendars. Use this skill when:
  (1) a calendar shows data per day (prices, free slots, event dots, activity heatmap),
  (2) days are unavailable with a reason, or a range must not cross booked days,
  (3) the selection is not a plain date, dates or range (stays, fixed-length periods, fiscal
  quarters, week or custom-period pickers), (4) a calendar sits next to time slots, presets or
  a toolbar, or (5) any task involving Calendar, useCalendar, getDayProps, renderDay,
  excludeDate, getMonthControlProps, Month, Day, CalendarHeader or PickerControl.
---

# Mantine Calendar Skill

Written for Mantine 10.x. Upgrading code written for 9.x: see [Coming from 9.x](#coming-from-9x).

## Overview

`@mantine/dates` has two layers. Pickers (`DatePicker`, `WeekPicker`, `MonthPicker`,
`QuarterPicker`, `YearPicker` and their `*Input` versions) own a selected value. `Calendar`
renders the same grid, header and levels with no selection at all: clicking a day does nothing
until you say what it does. Everything custom is built from three levers on either layer:

- **per-cell props**: `getDayProps`, `getMonthControlProps`, `getYearControlProps` return props for
  one cell (state flags, handlers, `style`, `className`, `data-*`, `aria-*`);
- **cell content**: `renderDay` (and functions passed to the `*Format` props) replace the label;
- **displayed period**: `date`/`onDateChange`, `level`/`minLevel`/`maxLevel` or a `useCalendar`
  controller decide which month, year or decade is on screen.

Load the `mantine-ui` skill with this one: it decides which ready input fits a form field
(`MaskedDateInput` for typed dates, `DatePickerInput type="range" numberOfColumns={2}` for
periods). This skill covers what those inputs do not do out of the box.

## Pick the right building block

Start from the highest row that fits and decorate it; go lower only when the selection model
itself differs.

| Need | Use |
|---|---|
| A date, several dates or a range, inline | `DatePicker` with `type="default" \| "multiple" \| "range"` |
| The same in an input with a dropdown | `DatePickerInput` (controller: `useDatePickerInput`) |
| Whole weeks, months, quarters or years | `WeekPicker`, `MonthPicker`, `QuarterPicker`, `YearPicker` and their `*Input` versions |
| Date and time | `DateTimePicker` (input), `InlineDateTimePicker` (inline) |
| A short strip of days (next 7 days) | `MiniCalendar` (`numberOfDays`, single date only) |
| Time slots for a picked day | `TimeGrid` (`data` from `getTimeRange` or your API) |
| Month grid with your own selection rules, or display only | `Calendar` (+ `useCalendar` for an outside toolbar) |
| One month grid without header and navigation (year overview, heatmap) | `Month` |
| Header with previous/next and a label for your own grid | `CalendarHeader` |
| A button for one period in your own grid (fiscal quarter, sprint, 4-4-5 period) | `PickerControl` |
| Weekday names row, a single day cell | `WeekdaysRow`, `Day` |
| Submit a custom picker's value with a native form | `HiddenDatesInput` |

`Calendar` takes the grid props of `DatePicker` (levels, columns, formats, `getDayProps`,
`renderDay`, `excludeDate`, `minDate`/`maxDate`) plus `static`, but not `type`, `value`,
`onChange`, `presets` or `allowDeselect`: selection is yours.

## How dates are represented

- Every value is a string: `YYYY-MM-DD` (`DateStringValue`) or `YYYY-MM-DD HH:mm:ss` with time.
  Props accept `Date` objects too, but `onChange`, `onDateChange`, `getDayProps`, `renderDay` and
  `excludeDate` always receive strings. Strings carry no timezone: `2026-03-08` is the 8th
  wherever the user is.
- Same-format strings compare correctly as strings (`date >= start && date <= end`), which is
  the cheapest range test inside per-cell callbacks.
- Do arithmetic and formatting with `dayjs` (a required peer dependency) and convert back with
  `.format('YYYY-MM-DD')` or `toDateString(value)`. Never `new Date('2026-03-08')`: it parses as
  UTC midnight and lands on the 7th west of UTC. `dayjs('2026-03-08')` parses as local midnight.
- Data from an API keyed by ISO timestamps is re-keyed to `YYYY-MM-DD` once, when it arrives
  (`dayjs(iso).format('YYYY-MM-DD')`, which is the user's local day). The package has no timezone
  setting; when days must follow a venue's timezone, compute the date strings server-side or with
  the dayjs `utc`/`timezone` plugins before they reach the calendar.
- `DatesProvider settings={{ locale, firstDayOfWeek, weekendDays, consistentWeeks, labelSeparator,
  submitButtonLabel }}` sets app-wide defaults; component props of the same names override them.
  Defaults: `locale: 'en'`, `firstDayOfWeek: 1` (Monday), `weekendDays: [0, 6]`,
  `consistentWeeks: true` (every month shows 6 rows). A locale needs `import 'dayjs/locale/de'`;
  every `*Format` prop also accepts a function `(date) => ReactNode`, so `Intl.DateTimeFormat` can
  replace locale imports.
- Week values are the first day of the week per `firstDayOfWeek`; quarter values are the first day
  of the quarter (`getQuarterStart`); month values are the first day of the month.

## Customization hooks

| Hook | Where | What it is for |
|---|---|---|
| `getDayProps(date)` | `Calendar`, all day pickers, `Month`, `MiniCalendar` | `selected`, `inRange`, `firstInRange`, `lastInRange`, `onClick`, `onMouseEnter`, `onFocus`, `style`, `className`, `data-*`, `aria-*` for one day |
| `renderDay(date)` | `Calendar`, day pickers, `Month`, `Day` | Day content (number + price, dots, icon). Not on `MiniCalendar` |
| `excludeDate(date)` | `Calendar`, day pickers, `Month` | Disables a day: not clickable, skipped by arrow keys |
| `minDate` / `maxDate` | everywhere | Disables days and controls outside, disables previous/next at the edges |
| `getDayAriaLabel(date)` | `Calendar`, day pickers, `Month`, `MiniCalendar` | Accessible name of a day; defaults to `D MMMM YYYY` |
| `getMonthControlProps(date)` / `getYearControlProps(date)` | `Calendar`, `DatePicker`, `MonthPicker`, `YearPicker`, … | Same as `getDayProps` for year and decade levels; `children` replaces the label |
| `getQuarterControlProps(date)` | `QuarterPicker`, `QuarterPickerInput` | Same for quarters |
| `getWeekControlProps(weekStart)` | `WeekPicker`, `WeekPickerInput` | Props for week-number buttons (disable a week, `aria-label`) |
| `date` + `onDateChange` | `Calendar`, pickers, `MiniCalendar` | Controlled displayed month: load data for it, jump to a month |
| `level` / `defaultLevel` / `minLevel` / `maxLevel` / `onLevelChange` | `Calendar`, pickers | Which of `'month' \| 'year' \| 'decade'` is shown and reachable |
| `onMonthSelect` / `onYearSelect`, `onMonthMouseEnter` / `onYearMouseEnter` | `Calendar` | Clicks and hovers on month/year controls (selection at year level with `minLevel="year"`) |
| `controller` from `useCalendar()` | `Calendar`, `DatePicker`, `WeekPicker`, `MonthPicker`, `QuarterPicker`, `YearPicker` | Drive the displayed date and level from your own toolbar |
| `static` | `Calendar`, `Month`, `Day` | Display only: days render as `div`, no keyboard, no grid role |
| `numberOfColumns`, `columnsToScroll`, `hideOutsideDates` | `Calendar`, pickers | Several months side by side; pickers hide outside days when columns > 1, `Calendar` does not |
| `presets` | pickers and picker inputs | `{ value, label }[]` beside the calendar; a preset also moves the view to its first date |
| `withCellSpacing={false}`, `highlightToday`, `withWeekNumbers`, `fullWidth`, `size` | `Calendar`, pickers | Connected ranges, today border, week numbers, stretch to container, cell size `xs`–`xl` |
| `classNames` / `styles` with `day`, `monthCell`, `monthRow`, `calendarHeader`, … | `Calendar`, pickers | Styles API, see [api](references/api.md#styles-api) |

### How the props merge (read before returning objects from getDayProps)

Inside the grid, a day is rendered as `<Day disabled={excluded or out of min/max} {...getDayProps(date)} />`,
and pickers compute their own `selected`/`inRange` first and spread your `getDayProps` after them.
Your object wins on every key it contains, **including keys whose value is `undefined`**. Handlers
are the exception: your `onClick`, `onMouseEnter` and `onKeyDown` run first, then the built-in ones
(selection, keyboard navigation) still run. The same holds for `getMonthControlProps`,
`getYearControlProps` and `MiniCalendar`'s `getDayProps`.

## Decorate a picker

When the selection is a plain date, dates or range, keep the picker and add data to the cells:

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Indicator } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

interface DeliveryDatePickerProps {
  closedDays: Set<string>;
  eventCounts: Map<string, number>;
}

function DeliveryDatePicker({ closedDays, eventCounts }: DeliveryDatePickerProps) {
  const [value, setValue] = useState<string | null>(null);

  return (
    <DatePicker
      value={value}
      onChange={setValue}
      minDate={dayjs().format('YYYY-MM-DD')}
      excludeDate={(date) => closedDays.has(date)}
      renderDay={(date) => (
        <Indicator size={6} offset={-4} disabled={!eventCounts.has(date)}>
          <div>{dayjs(date).date()}</div>
        </Indicator>
      )}
      getDayAriaLabel={(date) => {
        const count = eventCounts.get(date);
        const label = dayjs(date).format('D MMMM YYYY');
        return count ? `${label}, ${count} deliveries scheduled` : label;
      }}
    />
  );
}
```

## Own the selection with Calendar

When the rules differ (a stay whose checkout may fall on a booked night, a period of fixed length,
at most three dates), render `Calendar` and derive every day's state from your own value:

```tsx
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function UpToThreeDates() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (date: string) =>
    setSelected((current) =>
      current.includes(date)
        ? current.filter((item) => item !== date)
        : current.length < 3
          ? [...current, date]
          : current
    );

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.includes(date),
        onClick: () => toggle(date),
      })}
    />
  );
}
```

Keyboard navigation, focus handling, levels and month switching keep working: they belong to
`Calendar`, not to the selection. For hover previews, add `onMouseEnter` and `onFocus` per day
and `onMouseLeave` on the `Calendar` root. Complete versions: [patterns](references/patterns.md).

## Rules

- **Disable with `excludeDate`, never with `disabled` in `getDayProps`.** A `disabled` key
  in the returned object replaces the result of `excludeDate`, `minDate` and `maxDate` for that
  day: `{ disabled: isClosed || undefined }` re-enables every past day. The same goes for
  `selected` and `inRange` in pickers: return those keys only when you mean to replace the
  picker's own state, and build objects without keys for "no change".
- **A disabled day cannot explain itself.** Disabled buttons get no hover or focus, so a
  tooltip on them never shows. When users need the reason ("Closed for inventory"), keep the day
  enabled with `aria-disabled` and a `data-*` attribute for the look, ignore its click in your
  handler, show the reason in text near the calendar on hover/focus/click, and put it in
  `getDayAriaLabel`. This works with `Calendar` (you own the click); a picker would still select it.
- **Range rules that pickers do not enforce are yours.** `type="range"` happily spans excluded
  days and has no maximum length. Limit the second pick while the first is set
  (`excludeDate` that reads `value[0]`), and validate the completed range in `onChange`: reject it
  by setting a new value (`[clickedDate, null]` or `[null, null]`), not by ignoring the call.
- **Content added by `renderDay` is invisible to screen readers.** Each day has an
  `aria-label`, which overrides its content. Every price, count or status you render must also be
  in `getDayAriaLabel`.
- **Day content fits the cell and follows its state.** Days are fixed squares (36px at `sm`).
  Two-line content needs a taller `day` via `classNames`/`styles` or a larger `size`. Text and
  dots inside a day use `currentColor`, `inherit` and smaller `font-size` instead of their own
  colors, so they stay readable on the filled background of selected days. Pass
  `weekendDays={[]}` when your cells carry their own color coding (weekends are red by default).
- **Per-cell callbacks are hot paths.** `getDayProps` and `excludeDate` run several times per
  day on every render (state, tab order, keyboard). Index your data once (`Map`/`Set`/object keyed
  by `YYYY-MM-DD`, or values computed once per render) and keep the callbacks to lookups and
  string comparisons.
- **The displayed date is not normalized.** `onDateChange` reports whatever date the view moved
  to (previous/next keep the day of the month, a month click gives its first day). Derive data
  keys with `dayjs(date).startOf('month')`, and with `numberOfColumns={n}` load `n` months.
  Without `hideOutsideDates`, the grid also shows days of neighbouring months.
- **`static` is display only.** It turns days into `div`s with no keyboard support and drops the
  grid role. Interactive calendars stay non-static, even if clicks only open details. A standalone
  `Month` (outside `Calendar`) has no arrow-key navigation either: an interactive grid is a
  `Calendar`, which supplies the keyboard model; standalone `Month` is for overviews.
- **Multi-column `Calendar` shows duplicate days.** Pickers hide outside days when
  `numberOfColumns > 1`; `Calendar` does not, so pass `hideOutsideDates` yourself.
- **Week math uses the package helpers.** `getStartOfWeek(date, firstDayOfWeek)` and
  `getEndOfWeek` follow `DatesProvider`; hard-coding Monday breaks Sunday-first locales.
  `getStartOfWeek` loops forever on an invalid date: validate (`dayjs(value).isValid()`) first.
- **dayjs plugins your own code uses are your imports.** Code calling `.quarter()`,
  `startOf('quarter')` or `.isoWeek()` extends dayjs with `quarterOfYear`/`isoWeek` itself (and
  `customParseFormat` for parsing), even though the package registers some of them internally.

## Coming from 9.x

- `MonthLevel`, `YearLevel`, `DecadeLevel`, their `*Group` versions, `LevelsGroup`,
  `MonthsList` and `YearsList` are no longer exported. Use `Calendar` with
  `minLevel`/`maxLevel`/`level`, or build the grid from `Month`, `PickerControl` and
  `CalendarHeader`.
- `consistentWeeks` defaults to `true`: every month renders 6 rows.
- `useCalendar` and the `controller` prop are new: they drive the displayed date and level from
  outside. Picker inputs have `useDatePickerInput`, `useWeekPickerInput`, `useMonthPickerInput`,
  `useQuarterPickerInput` and `useYearPickerInput`.
- Hand-built week pickers (a `Calendar` with week hover in `getDayProps`) can be replaced with
  `WeekPicker` (9.8+); hand-built quarter pickers with `QuarterPicker`.

## References

- **[`references/patterns.md`](references/patterns.md)**: complete examples: stay picker with
  nightly prices and booked nights, rental range that cannot cross closed days, day + time slots,
  event dots with a day agenda, unavailable days with reasons, fixed-length period with hover
  preview, multi-month range input with presets and a maximum length, activity heatmap with
  streaks, fiscal quarter picker from primitives, toolbar and per-month data loading.
- **[`references/api.md`](references/api.md)**: exports, `Calendar`/`Month`/`Day`/
  `PickerControl`/`CalendarHeader` props, `useCalendar` controller, picker value types, Styles API
  names and data attributes.

## Looking things up

If the references do not cover what you need, do not guess:

- If the Mantine MCP server (`@mantine/mcp-server`) is connected, use `search_docs` and `get_item_doc`.
- Otherwise fetch `https://mantine.dev/llms.txt` and open the `Calendar`, `DatePicker` or the
  relevant picker page.
