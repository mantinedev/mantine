# InlineDateTimePicker
Package: @mantine/dates
Import: import { InlineDateTimePicker } from '@mantine/dates';
Description: Inline date and time picker with range support

## DatePicker props

`InlineDateTimePicker` supports most of the [DatePicker](https://mantine.dev/llms/dates-date-picker.md) props.
Read through the [DatePicker](https://mantine.dev/llms/dates-date-picker.md) documentation to learn about all component features that are not listed on this page.

## Usage

`InlineDateTimePicker` renders a calendar with a time picker inline, without a dropdown.
It combines [DatePicker](https://mantine.dev/llms/dates-date-picker.md) and [TimePicker](https://mantine.dev/llms/dates-time-picker.md) components:

```tsx
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker />;
}
```


## With seconds

Set `withSeconds` prop to display seconds input in the time picker:

```tsx
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker withSeconds />;
}
```


## Range

Set `type="range"` to allow selecting a date and time range. In range mode,
two time inputs are rendered side by side, and a range summary is displayed
below the time inputs:

```tsx
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" />;
}
```


## Controlled range

```tsx
import { useState } from 'react';
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);

  return (
    <InlineDateTimePicker
      type="range"
      value={value}
      onChange={setValue}
    />
  );
}
```


## Value format

Use `valueFormat` prop to change the [dayjs format](https://day.js.org/docs/en/display/format) of the range preview:

```tsx
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  return <InlineDateTimePicker type="range" valueFormat="MMMM YYYY, DD HH:mm" />;
}
```



#### Props

**InlineDateTimePicker props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" |
| allowSingleDateInRange | boolean | - | Determines whether a single day can be selected as range, applicable only when type="range" |
| ariaLabels | CalendarAriaLabels | - | `aria-label` attributes for controls on different levels |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as `numberOfColumns` if not set explicitly |
| date | string \| Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string \| ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | `dayjs` format for decade label or a function that returns decade label based on the date value |
| defaultDate | string \| Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" \| "year" \| "decade" | - | Initial displayed level (uncontrolled) |
| defaultTimeValue | string | - | Default time value in `HH:mm` or `HH:mm:ss` format. Assigned to time when date is selected. |
| defaultValue | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Default value for uncontrolled component |
| enableKeyboardNavigation | boolean | - | Enable enhanced keyboard navigation (Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade navigation, Y key to open year view) |
| endTimePickerProps | Omit<TimePickerProps, "value" \| "defaultValue"> | - | Props passed down to the end time `TimePicker` component in range mode |
| excludeDate | (date: string) => boolean | - | Callback function to determine whether the day should be disabled |
| firstDayOfWeek | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 | - | Number 0-6, where 0 – Sunday and 6 – Saturday. |
| fullWidth | boolean | - | Determines whether the list should take the full width of its container |
| getDayAriaLabel | (date: string) => string | - | Assigns `aria-label` to `Day` components based on date |
| getDayProps | (date: string) => Omit<Partial<DayProps>, "vars" \| "classNames" \| "styles"> & DataAttributes | - | Passes props down to `Day` components |
| getMonthControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down month picker control |
| getYearControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down to year picker control based on date |
| headerControlsOrder | ("next" \| "previous" \| "level")[] | - | Controls order |
| hideOutsideDates | boolean | - | Determines whether outside dates should be hidden |
| hideWeekdays | boolean | - | Determines whether weekdays row should be hidden |
| highlightToday | boolean | - | Determines whether today should be highlighted with a border |
| labelSeparator | string | - | Separator between range values |
| level | "month" \| "year" \| "decade" | - | Current displayed level (controlled) |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string \| Date | - | Max date |
| maxLevel | "month" \| "year" \| "decade" | - | - |
| minDate | string \| Date | - | Min date |
| monthLabelFormat | string \| ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | `dayjs` format for months list |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button `aria-label` |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue<Type, string>) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onLevelChange | (level: CalendarLevel) => void | - | Called when level changes |
| onMonthMouseEnter | (event: MouseEvent<HTMLButtonElement, MouseEvent>, date: string) => void | - | Called when mouse enters month control |
| onMonthSelect | (date: string) => void | - | Called when user selects month |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onNextMonth | (date: string) => void | - | Called when the next month button is clicked |
| onNextYear | (date: string) => void | - | Called when the next year button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| onPreviousMonth | (date: string) => void | - | Called when the previous month button is clicked |
| onPreviousYear | (date: string) => void | - | Called when the previous year button is clicked |
| onSubmit | () => void | - | Called when the submit button is clicked |
| onYearMouseEnter | (event: MouseEvent<HTMLButtonElement, MouseEvent>, date: string) => void | - | Called when mouse enters year control |
| onYearSelect | (date: string) => void | - | Called when user selects year |
| presets | DatePickerPreset<Type>[] | - | Predefined values to pick from |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button `aria-label` |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| size | MantineSize | - | Component size |
| submitButtonProps | ActionIconProps & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> | - | Props passed down to the submit button |
| timePickerProps | Omit<TimePickerProps, "value" \| "defaultValue"> | - | Props passed down to `TimePicker` component |
| type | "range" \| "multiple" \| "default" | - | Picker type: range, multiple or default |
| value | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Value for controlled component |
| valueFormat | string \| ((date: string) => string) | - | `dayjs` format for range display, or a function that receives the value as a `YYYY-MM-DD HH:mm:ss` string and returns the formatted value |
| weekdayFormat | string \| ((date: string) => string) | - | `dayjs` format for weekdays names |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withSeconds | boolean | - | Determines whether the seconds input should be displayed |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| yearLabelFormat | string \| ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |


#### Styles API

InlineDateTimePicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**InlineDateTimePicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-InlineDateTimePicker-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-InlineDateTimePicker-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-InlineDateTimePicker-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-InlineDateTimePicker-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-InlineDateTimePicker-levelsGroup | Group of months levels |
| yearsList | .mantine-InlineDateTimePicker-yearsList | Years list table element |
| yearsListRow | .mantine-InlineDateTimePicker-yearsListRow | Years list row element |
| yearsListCell | .mantine-InlineDateTimePicker-yearsListCell | Years list cell element |
| yearsListControl | .mantine-InlineDateTimePicker-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-InlineDateTimePicker-monthsList | Months list table element |
| monthsListRow | .mantine-InlineDateTimePicker-monthsListRow | Months list row element |
| monthsListCell | .mantine-InlineDateTimePicker-monthsListCell | Months list cell element |
| monthsListControl | .mantine-InlineDateTimePicker-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-InlineDateTimePicker-monthThead | thead element of month table |
| monthRow | .mantine-InlineDateTimePicker-monthRow | tr element of month table |
| monthTbody | .mantine-InlineDateTimePicker-monthTbody | tbody element of month table |
| monthCell | .mantine-InlineDateTimePicker-monthCell | td element of month table |
| month | .mantine-InlineDateTimePicker-month | Month table element |
| weekdaysRow | .mantine-InlineDateTimePicker-weekdaysRow | Weekdays tr element |
| weekday | .mantine-InlineDateTimePicker-weekday | Weekday th element |
| day | .mantine-InlineDateTimePicker-day | Month day control |
| weekNumber | .mantine-InlineDateTimePicker-weekNumber | Week number td element |
| datePickerRoot | .mantine-InlineDateTimePicker-datePickerRoot | Date picker root element, contains calendar and presets |
| presetsList | .mantine-InlineDateTimePicker-presetsList | Presets wrapper element |
| presetButton | .mantine-InlineDateTimePicker-presetButton | Preset button |
| root | .mantine-InlineDateTimePicker-root | Root element |
| timeWrapper | .mantine-InlineDateTimePicker-timeWrapper | Wrapper around time input and submit button |
| timeInput | .mantine-InlineDateTimePicker-timeInput | TimeInput |
| submitButton | .mantine-InlineDateTimePicker-submitButton | Submit button |
| rangeTimeWrapper | .mantine-InlineDateTimePicker-rangeTimeWrapper | Wrapper around two time inputs and submit button in range mode |
| rangeTimeInput | .mantine-InlineDateTimePicker-rangeTimeInput | Time input in range mode |
| rangeInfo | .mantine-InlineDateTimePicker-rangeInfo | Range dates preview in range mode |
