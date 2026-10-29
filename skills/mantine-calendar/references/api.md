# Calendar API Reference

Props and exports of `@mantine/dates` 10.x that matter for custom calendars. Input-only props
(label, error, sections) work as on other Mantine inputs and are not repeated here.

## Table of Contents
- [Exports](#exports)
- [Types](#types)
- [DatesProvider](#datesprovider)
- [Calendar](#calendar)
- [useCalendar controller](#usecalendar-controller)
- [Month settings](#month-settings)
- [Month, year and decade level settings](#month-year-and-decade-level-settings)
- [Pickers](#pickers)
- [Picker inputs](#picker-inputs)
- [MiniCalendar](#minicalendar)
- [TimeGrid](#timegrid)
- [Primitives: Day, Month, PickerControl, CalendarHeader, WeekdaysRow](#primitives)
- [Utilities](#utilities)
- [Styles API](#styles-api)

---

## Exports

Components:

- Pickers: `Calendar`, `DatePicker`, `WeekPicker`, `MonthPicker`, `QuarterPicker`, `YearPicker`,
  `MiniCalendar`, `InlineDateTimePicker`, `TimeGrid`
- Inputs: `DatePickerInput`, `WeekPickerInput`, `MonthPickerInput`, `QuarterPickerInput`,
  `YearPickerInput`, `DateInput`, `MaskedDateInput`, `DateTimePicker`, `TimeInput`,
  `TimePicker`, `TimeValue`
- Primitives: `Month`, `Day`, `WeekdaysRow`, `CalendarHeader`, `PickerControl`,
  `PickerInputBase`, `HiddenDatesInput`
- Provider: `DatesProvider`, `useDatesContext`, `DATES_PROVIDER_DEFAULT_SETTINGS`

Controller hooks: `useCalendar`, `useDatePickerInput`, `useWeekPickerInput`,
`useMonthPickerInput`, `useQuarterPickerInput`, `useYearPickerInput`, `useDateInput`,
`useMaskedDateInput`, `useDateTimePicker`, `useInlineDateTimePicker`, `useTimePicker`.

Not exported in 10.x (were in 9.x): `MonthLevel`, `YearLevel`, `DecadeLevel`,
`MonthLevelGroup`, `YearLevelGroup`, `DecadeLevelGroup`, `LevelsGroup`, `MonthsList`,
`YearsList`. The `useDatesState` selection logic of the pickers is internal.

## Types

```ts
type DateStringValue = string;            // 'YYYY-MM-DD'
type DateTimeStringValue = string;        // 'YYYY-MM-DD HH:mm:ss'
type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 – Sunday
type CalendarLevel = 'month' | 'year' | 'decade';
type DateLabelFormat = string | ((date: DateStringValue) => React.ReactNode);

type DateValue = DateStringValue | Date | null;
type DatesRangeValue<ValueType = DateValue> = [ValueType | null, ValueType | null];
type DatePickerType = 'default' | 'multiple' | 'range';
type DatePickerValue<Type, ValueType = DateValue> =
  Type extends 'range' ? DatesRangeValue<ValueType>
  : Type extends 'multiple' ? ValueType[]
  : ValueType | null;

interface PickerPreset<Type extends DatePickerType> {   // DatePickerPreset, WeekPickerPreset, … are aliases
  value: Type extends 'range' ? [DateStringValue | null, DateStringValue | null]
    : Type extends 'multiple' ? DateStringValue[] : DateStringValue | null;
  label: React.ReactNode;
}

type RenderDay = (date: DateStringValue) => React.ReactNode;
type DateFormatter = (input: { type; date; locale; format; labelSeparator }) => string;
```

`onChange` of every picker receives `DatePickerValue<Type, DateStringValue>` (strings, never
`Date`). For a range state use `useState<DatesRangeValue<string>>([null, null])`.

## DatesProvider

```tsx
<DatesProvider settings={{ locale: 'de', firstDayOfWeek: 0, weekendDays: [5, 6] }}>
```

| Setting | Default | Notes |
|---|---|---|
| `locale` | `'en'` | dayjs locale; import `dayjs/locale/<name>` yourself (`'use client'` file in Next.js app router) |
| `firstDayOfWeek` | `1` | Grid layout, `WeekPicker` values, `getStartOfWeek`/`getEndOfWeek` defaults in pickers |
| `weekendDays` | `[0, 6]` | Weekend days get `data-weekend` (red text by default) |
| `consistentWeeks` | `true` | Every month renders 6 rows |
| `labelSeparator` | `'–'` | Between range ends in picker inputs |
| `submitButtonLabel` | `'Save'` | Submit button of modal/drawer dropdowns |

`useDatesContext()` returns the settings plus `getLocale(input?)`, `getFirstDayOfWeek(input?)`,
`getWeekendDays(input?)`, `getLabelSeparator(input?)`, `getSubmitButtonLabel(input?)`, which
return the prop when set and the provider value otherwise. Use it in custom primitives so they
follow the app settings.

There is no timezone setting: values are timezone-free strings.

## Calendar

`Calendar` = header + levels (`month` → `year` → `decade`) + keyboard navigation, no selection.
It accepts every [month setting](#month-settings) and [level setting](#month-year-and-decade-level-settings) plus:

| Prop | Type | Notes |
|---|---|---|
| `date` / `defaultDate` / `onDateChange` | `DateStringValue \| Date`, `(date: string) => void` | Displayed date; `onDateChange` fires on previous/next, month/year clicks and keyboard period changes |
| `level` / `defaultLevel` / `onLevelChange` | `CalendarLevel` | Displayed level, default `'month'` |
| `minLevel` / `maxLevel` | `CalendarLevel` | Defaults `'month'` / `'decade'`. `minLevel="year"` makes month clicks call `onMonthSelect` without descending |
| `controller` | `CalendarController` | From `useCalendar`; the six props above are then ignored |
| `numberOfColumns` | `number` | Default `1` |
| `columnsToScroll` | `number` | Default `numberOfColumns` |
| `static` | `boolean` | Days render as `div`, no keyboard shortcuts, no `role="grid"` |
| `fullWidth` | `boolean` | Stretch to the container |
| `enableKeyboardNavigation` | `boolean` | Default `true`: Ctrl/Cmd+Arrow years, Ctrl/Cmd+Shift+Arrow decades, `Y` opens year level |
| `onMonthSelect` / `onYearSelect` | `(date) => void` | Month control click (year level), year control click (decade level) |
| `onMonthMouseEnter` / `onYearMouseEnter` | `(event, date) => void` | Hover on month/year controls |
| `onNextMonth`, `onPreviousMonth`, `onNextYear`, `onPreviousYear`, `onNextDecade`, `onPreviousDecade` | `(date) => void` | Header buttons, called with the new displayed date |
| `ariaLabels` | `{ nextMonth, previousMonth, nextYear, previousYear, nextDecade, previousDecade, monthLevelControl, yearLevelControl }` | Header controls |
| `nextLabel` / `previousLabel`, `nextIcon` / `previousIcon` | | Header controls on every level |
| `headerControlsOrder` | `('previous' \| 'next' \| 'level')[]` | Default `['previous', 'level', 'next']` |
| `withNativeLevelSelect`, `yearsSelectRange` | `boolean`, `[number, number]` | Native `<select>` for month/year in the header |

Root element is a `div` (`ElementProps<'div'>`), so `onMouseLeave` on `Calendar` clears hover state.

Clicking a day in `Calendar` calls only your `getDayProps(date).onClick`. Arrow keys move focus
between days (crossing months, skipping disabled days); `Enter`/`Space` click the focused day.

## useCalendar controller

```tsx
const controller = useCalendar({ defaultDate, date, onDateChange, defaultLevel, level, onLevelChange });
<Calendar controller={controller} />
```

Accepted by `Calendar`, `DatePicker`, `WeekPicker`, `MonthPicker`, `QuarterPicker`, `YearPicker`.
It owns only the displayed date and level, never the selected value.

| Member | Notes |
|---|---|
| `date` | Displayed date, `null` until set |
| `level` | Displayed level before clamping |
| `getDate()` / `getLevel()` | Latest values |
| `getDisplayedDate()` | Date the mounted calendar shows (falls back to today clamped to `minDate`/`maxDate` while `date` is `null`) |
| `getDisplayedLevel()` | Level clamped to `minLevel`/`maxLevel` of the mounted calendar |
| `setDate(date)` | Accepts string or `Date` |
| `setLevel(level)` | Clamped by the mounted calendar |
| `next()` / `previous()` | One step of the current level |
| `nextMonth()`, `previousMonth()`, `nextYear()`, `previousYear()`, `nextDecade()`, `previousDecade()` | Steps of `columnsToScroll` |

Before a calendar using the controller is mounted, the stepping actions are no-ops while `date`
is `null`, and step by one column otherwise.

Picker input hooks (`useDatePickerInput`, …) return the same navigation members plus
`openDropdown()`, `closeDropdown()`, `toggleDropdown()`, `isDropdownOpened()`, and accept
`dropdownOpened`, `defaultDropdownOpened`, `onDropdownOpenedChange`. Each time the dropdown opens,
the displayed date resets to the value (or `defaultDate`) and the level to `defaultLevel`, unless
`date`/`level` are controlled; call `setDate`/`setLevel` right after `openDropdown` to open elsewhere.

## Month settings

Accepted by `Calendar`, `Month`, `DatePicker`, `WeekPicker`, `DatePickerInput`,
`WeekPickerInput`, `DateTimePicker`, `InlineDateTimePicker`, `DateInput`.

| Prop | Type | Notes |
|---|---|---|
| `getDayProps` | `(date) => Omit<Partial<DayProps>, 'classNames' \| 'styles' \| 'vars'> & DataAttributes` | Spread after the computed `disabled` and, in pickers, after the computed `selected`/`inRange`/`firstInRange`/`lastInRange`; your `onClick`, `onMouseEnter`, `onKeyDown` run before the built-in ones |
| `renderDay` | `(date) => ReactNode` | Replaces the day number |
| `excludeDate` | `(date) => boolean` | Disables the day |
| `minDate` / `maxDate` | `DateStringValue \| Date` | Inclusive |
| `getDayAriaLabel` | `(date) => string` | Default `D MMMM YYYY` in the current locale |
| `firstDayOfWeek` | `DayOfWeek` | Overrides `DatesProvider` |
| `weekendDays` | `DayOfWeek[]` | `[]` removes weekend styling |
| `weekdayFormat` | `DateLabelFormat` | Default `'dd'` |
| `hideOutsideDates` | `boolean` | Days of neighbouring months get `data-hidden` (`display: none`) |
| `hideWeekdays` | `boolean` | |
| `withWeekNumbers` | `boolean` | ISO week numbers column (not on `WeekPicker`, which always shows week controls) |
| `highlightToday` | `boolean` | Border on today |
| `withCellSpacing` | `boolean` | Default `true`; `false` joins range days |
| `size` | `MantineSize` | Day size 30/36/42/48/54px for `xs`–`xl` |
| `fullWidth` | `boolean` | Days fill the cell width, square aspect ratio |
| `locale` | `string` | Overrides `DatesProvider` |

## Month, year and decade level settings

| Prop | Level | Notes |
|---|---|---|
| `monthLabelFormat` | month | Header label, default `'MMMM YYYY'` |
| `yearLabelFormat` | year | Header label, default `'YYYY'` |
| `decadeLabelFormat` | decade | Header label, default `'YYYY'`; function receives `(startOfDecade, endOfDecade)` |
| `monthsListFormat` | year | Month control label, default `'MMM'` |
| `yearsListFormat` | decade | Year control label, default `'YYYY'` |
| `getMonthControlProps` | year | `(date) => Partial<PickerControlProps> & DataAttributes`; `children` replaces the label; spread after the computed `disabled` |
| `getYearControlProps` | decade | Same for years |
| `getQuarterControlProps`, `quartersListFormat` | `QuarterPicker` only | Default label `'[Q]Q'` |

Every `*Format` accepts a dayjs format string or a function returning a `ReactNode`.

## Pickers

`DatePicker`, `WeekPicker`, `MonthPicker`, `QuarterPicker`, `YearPicker` share:

| Prop | Notes |
|---|---|
| `type` | `'default' \| 'multiple' \| 'range'` |
| `value` / `defaultValue` / `onChange` | See [types](#types) |
| `allowDeselect` | `type="default"`: clicking the selected item calls `onChange(null)` |
| `allowSingleDateInRange` | `type="range"`: the same item twice makes a one-item range (otherwise it clears) |
| `presets` | `{ value, label }[]` rendered beside the calendar; selecting one also moves the view to its first date. Not checked against `excludeDate` |
| `controller` | `useCalendar()` result |
| `numberOfColumns` | Outside dates hidden by default when greater than 1 (`hideOutsideDates={false}` to show) |

Range selection: first click sets `[date, null]`; hovering previews the range; second click sets
the sorted pair. Excluded days inside the range are not checked, and there is no length limit.

Value conventions:

- `DatePicker`: the clicked day.
- `WeekPicker`: first day of the week per `firstDayOfWeek`. A week is selectable if at least one
  of its days is enabled, so the value can precede `minDate`. Week-number buttons are the keyboard
  targets (days are mouse-only). Extra prop: `getWeekControlProps(weekStart) =>
  Partial<MonthWeekControlProps>` (`selected`, `disabled`, `aria-label`, handlers). No
  `withWeekNumbers`.
- `MonthPicker`: first day of the month. `getMonthControlProps`, `getYearControlProps`.
- `QuarterPicker`: first day of the quarter (`getQuarterStart`). Levels `QuarterPickerLevel =
  'year' | 'decade'`. Extra: `getQuarterControlProps`, `quartersListFormat`,
  `onQuarterMouseEnter`.
- `YearPicker`: first day of the year. `getYearControlProps`.

`DatePicker` and `WeekPicker` take the [Calendar](#calendar) props except `static` and
`minLevel`.

## Picker inputs

`DatePickerInput`, `WeekPickerInput`, `MonthPickerInput`, `QuarterPickerInput`,
`YearPickerInput` take their picker's props plus:

| Prop | Notes |
|---|---|
| `dropdownType` | `'popover' \| 'modal' \| 'drawer'` or breakpoints object; default `{ base: 'drawer', sm: 'popover' }` |
| `applyOnSubmit` | Default `true`: in modal/drawer the value applies on the submit button |
| `submitButtonLabel`, `submitButtonProps` | |
| `closeOnChange` | Default `true` (not with `type="multiple"`) |
| `valueFormat` | dayjs format of the displayed value |
| `valueFormatter` | `DateFormatter` for full control (`getWeekFormatter(firstDayOfWeek)` for weeks) |
| `valueDisplay` | `'text' \| 'pills'` for `type="multiple"` |
| `clearable`, `clearSectionMode`, `clearButtonProps` | |
| `sortDates` | `type="multiple"`, default `true` |
| `popoverProps`, `modalProps`, `drawerProps` | `popoverProps.opened` needs `popoverProps.onChange` |
| `controller` | From the matching `use*PickerInput` hook |
| `onDropdownClose` | |

With `type="range"`, closing the dropdown after only the first date clears the value. The input
renders its value through a hidden input named by `name`, so it submits with native forms.

## MiniCalendar

A horizontal strip of `numberOfDays` days (default `7`) with previous/next buttons that step by
`numberOfDays`. Single selection only.

| Prop | Notes |
|---|---|
| `value` / `onChange` | Selected date; `onChange(date: string)` |
| `date` / `defaultDate` / `onDateChange` | First displayed day |
| `minDate` / `maxDate` | |
| `getDayProps` | `(date) => Record<string, any>`; spread over the computed `disabled`; `children` is ignored |
| `getDayAriaLabel` | |
| `monthLabelFormat` | Month shown above each day number, default `'MMM'` |
| `onNext` / `onPrevious`, `nextControlProps` / `previousControlProps` | `children` in control props replaces the chevron |
| `size`, `locale` | |

No `renderDay`, `excludeDate` or range. Styles names: `root`, `control`, `days`, `day`,
`dayMonth`, `dayNumber`.

## TimeGrid

| Prop | Notes |
|---|---|
| `data` | `string[]` of unique 24h times (`'09:00'`, `'09:30:00'`) |
| `value` / `defaultValue` / `onChange` | `string \| null`; compared without seconds unless `withSeconds` |
| `allowDeselect` | |
| `disableTime` | `string[]` or `(time) => boolean` |
| `minTime` / `maxTime` | |
| `getControlProps` | `(time) => ComponentProps<'button'> & DataAttributes` |
| `format`, `amPmLabels`, `withSeconds` | Display |
| `simpleGridProps` | Default `{ cols: 3, spacing: 'xs' }` |
| `disabled`, `size`, `radius` | |

`getTimeRange({ startTime, endTime, interval })` returns `'HH:mm:ss'` strings, both ends
included. `isTimeBefore(a, b)` / `isTimeAfter(a, b)` compare time strings.

## Primitives

### Day

`<Day date="2026-03-08" />` is the day button. Props: `date`, `selected`, `inRange`,
`firstInRange`, `lastInRange`, `outside`, `weekend`, `hidden`, `disabled`, `static`,
`renderDay`, `highlightToday`, `fullWidth`, `size`, plus `button` element props.

Data attributes (style them through `classNames.day`):

| Attribute | When |
|---|---|
| `data-selected` | `selected` and not disabled |
| `data-in-range`, `data-first-in-range`, `data-last-in-range` | range flags and not disabled |
| `data-disabled` | `disabled` |
| `data-outside` | day of a neighbouring month, not disabled |
| `data-weekend` | weekend day of the month, not disabled |
| `data-today` | today (`aria-current="date"`) |
| `data-hidden` | hidden outside day |
| `data-static` | `static` |

`aria-pressed` reflects `selected`. Built-in colors: selected uses the filled primary color with
the contrast text color, weekend days red, outside days dimmed, disabled days use
`--mantine-disabled-opacity`. Size variable `--day-size`.

### Month

`<Month month="2026-03-01" />` renders one month table with weekday header. Takes all
[month settings](#month-settings) plus `static`. Outside a `Calendar`, clicks come only from
`getDayProps` and there is no arrow-key navigation.

### PickerControl

The month/quarter/year button. Props: `selected`, `inRange`, `firstInRange`, `lastInRange`,
`disabled`, `size`, `fullWidth`, `children`, plus `button` props and style props (`h`, `py`).
Sets `aria-pressed`, `data-selected`, `data-in-range`, `data-first-in-range`,
`data-last-in-range`, `data-disabled`, `data-picker-control`. Default height `--dpc-size`
(36px at `sm`), width a third of a 7-day row; `fullWidth` fills the cell.

### CalendarHeader

Previous button, label, next button, as in `Calendar`.

| Prop | Notes |
|---|---|
| `label` | Required `ReactNode` |
| `onPrevious` / `onNext` / `onLevelClick` | |
| `previousDisabled` / `nextDisabled` | |
| `hasNextLevel` | Default `true`; `false` renders the label as a `div` (`data-static`) |
| `withPrevious` / `withNext` | Default `true` |
| `previousLabel` / `nextLabel` / `levelControlAriaLabel` | `aria-label`s |
| `previousIcon` / `nextIcon`, `headerControlsOrder`, `size`, `fullWidth` | |

### WeekdaysRow

A `tr` of weekday names: `firstDayOfWeek`, `weekdayFormat`, `locale`, `cellComponent`
(`'th'` default), `withWeekNumbers`, `size`. Render it inside your own `thead`.

### HiddenDatesInput

`<HiddenDatesInput value={value} type="range" name="period" form={undefined} />` serializes a
value into a hidden input (`YYYY-MM-DD`, ranges as `start – end`, multiple joined by commas;
`withTime` for `YYYY-MM-DD HH:mm:ss`).

## Utilities

| Export | Signature | Notes |
|---|---|---|
| `toDateString` | `(value: string \| number \| Date \| Dayjs \| null \| undefined) => string` | `YYYY-MM-DD`, keeps `null`/`undefined` |
| `toDateTimeString` | same | `YYYY-MM-DD HH:mm:ss` |
| `getStartOfWeek` | `(date, firstDayOfWeek = 1) => string` | Loops forever on an invalid date |
| `getEndOfWeek` | `(date, firstDayOfWeek = 1) => string` | |
| `getMonthDays` | `({ month, firstDayOfWeek, consistentWeeks }) => string[][]` | The weeks a month grid renders |
| `isSameMonth` | `(a, b) => boolean` | |
| `getQuarterStart` | `(date) => string` | First day of the quarter |
| `assignTime` | `(date \| null, 'HH:mm[:ss]') => string \| null` | Returns `YYYY-MM-DD HH:mm:ss` |
| `clampDate` | `(minDate, maxDate, date) => string` | Returns `YYYY-MM-DD HH:mm:ss` |
| `getDefaultClampedDate` | `({ minDate, maxDate }) => string` | Today clamped into the bounds |
| `getFormattedDate` | `({ type, date, locale, format, labelSeparator, formatter? }) => string` | How picker inputs format values |
| `getWeekFormatter` | `(firstDayOfWeek) => DateFormatter` | Week ranges for `WeekPickerInput` |
| `getTimeRange`, `isTimeBefore`, `isTimeAfter` | | See [TimeGrid](#timegrid) |

## Styles API

`Calendar`, `DatePicker` and `WeekPicker` selectors:

- Layout: `levelsGroup`
- Header: `calendarHeader`, `calendarHeaderControl`, `calendarHeaderLevel`,
  `calendarHeaderControlIcon`, `calendarHeaderSelect`
- Month: `month`, `monthThead`, `monthTbody`, `monthRow`, `monthCell`, `weekday`,
  `weekdaysRow`, `weekNumber`, `weekControl`, `day`
- Year and decade levels: `monthsList`, `monthsListRow`, `monthsListCell`,
  `monthsListControl`, `yearsList`, `yearsListRow`, `yearsListCell`, `yearsListControl`
- `QuarterPicker` adds `quartersList`, `quartersListRow`, `quartersListCell`,
  `quartersListControl`
- With presets: `presetsList`, `presetButton` and the root `datePickerRoot` /
  `weekPickerRoot` / …

```tsx
<Calendar classNames={{ day: classes.day, monthCell: classes.cell }} />
```

`getDayProps` cannot pass `classNames` or `styles`; use its `className`/`style` for one day and
`classNames.day` with data attributes for rules that apply to all days.

CSS variables: `--day-size` (`Day`), `--dpc-size` and `--dpc-fz` (`PickerControl`),
`--dch-control-size` and `--dch-fz` (`CalendarHeader`), `--wn-size` and `--wn-fz` (week numbers).
