# Calendar
Package: @mantine/dates
Import: import { Calendar } from '@mantine/dates';
Description: Base component for custom date pickers

## Usage

Use `Calendar` component to create custom date pickers if [DatePicker](https://mantine.dev/dates/date-picker/)
component does not meet your requirements. `Calendar` supports all [DatePicker](https://mantine.dev/dates/date-picker/)
props and some other props that are listed in props table – check it out to learn about all component features.

By default, `Calendar` works the same way as [DatePicker](https://mantine.dev/dates/date-picker/) component but does not
include any logic of dates selection:

#### Example: usage

```tsx
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
```


## Custom date pickers

Use `Calendar` as a base for custom date pickers. For example, you can create a date picker
that allows user to pick three or less dates:

#### Example: picker

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelect = (date: string) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
      })}
    />
  );
}
```


Another custom date picker example – week picker:

#### Example: weekPicker

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function getDay(date: string) {
  const day = dayjs(date).day();
  return day === 0 ? 6 : day - 1;
}

function startOfWeek(date: string) {
  return dayjs(date)
    .subtract(getDay(date) + 1, 'day')
    .toDate();
}

function endOfWeek(date: string) {
  return dayjs(date)
    .add(6 - getDay(date), 'day')
    .endOf('day')
    .toDate();
}

function isInWeekRange(date: string, value: string | null) {
  return value
    ? dayjs(date).isBefore(endOfWeek(value)) && dayjs(date).isAfter(startOfWeek(value))
    : false;
}

function Demo() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);

  return (
    <Calendar
      withCellSpacing={false}
      getDayProps={(date) => {
        const isHovered = isInWeekRange(date, hovered);
        const isSelected = isInWeekRange(date, value);
        const isInRange = isHovered || isSelected;
        return {
          onMouseEnter: () => setHovered(date),
          onMouseLeave: () => setHovered(null),
          inRange: isInRange,
          firstInRange: isInRange && new Date(date).getDay() === 1,
          lastInRange: isInRange && new Date(date).getDay() === 0,
          selected: isSelected,
          onClick: () => setValue(date),
        };
      }}
    />
  );
}
```


## Static prop

Set `static` prop to display a calendar that user cannot interact with.
It is useful when you want to display data with in calendar view but do
not want it to be interactive.

#### Example: isStatic

```tsx
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = dayjs(date).date();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ariaLabels | CalendarAriaLabels | - | <code>aria-label</code> attributes for controls on different levels |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as <code>numberOfColumns</code> if not set explicitly |
| date | string | Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string | ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | <code>dayjs</code> format for decade label or a function that returns decade label based on the date value |
| defaultDate | string | Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" | "year" | "decade" | - | Initial displayed level in uncontrolled mode |
| enableKeyboardNavigation | boolean | - | Enable enhanced keyboard navigation (Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade navigation, Y key to open year view) |
| excludeDate | (date: string) => boolean | - | Callback function to determine whether the day should be disabled |
| firstDayOfWeek | 0 | 1 | 2 | 3 | 4 | 5 | 6 | - | Number 0-6, where 0 – Sunday and 6 – Saturday. |
| getDayAriaLabel | (date: string) => string | - | Assigns <code>aria-label</code> to <code>Day</code> components based on date |
| getDayProps | (date: string) => Omit<Partial<DayProps>, "classNames" | "styles" | "vars"> & DataAttributes | - | Passes props down to <code>Day</code> components |
| getMonthControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down month picker control |
| getYearControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down to year picker control based on date |
| headerControlsOrder | ("next" | "previous" | "level")[] | - | Controls order |
| hideOutsideDates | boolean | - | Determines whether outside dates should be hidden |
| hideWeekdays | boolean | - | Determines whether weekdays row should be hidden |
| highlightToday | boolean | - | Determines whether today should be highlighted with a border |
| level | "month" | "year" | "decade" | - | Current displayed level displayed in controlled mode |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in <code>YYYY-MM-DD</code> format or Date object |
| maxLevel | "month" | "year" | "decade" | - | Max level that user can go up to (decade, year, month) |
| minDate | string | Date | - | Minimum possible date in <code>YYYY-MM-DD</code> format or Date object |
| minLevel | "month" | "year" | "decade" | - | Min level that user can go down to (decade, year, month) |
| monthLabelFormat | string | ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | <code>dayjs</code> format for months list |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button <code>aria-label</code> |
| numberOfColumns | number | - | Number of columns displayed next to each other |
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
| onYearMouseEnter | (event: MouseEvent<HTMLButtonElement, MouseEvent>, date: string) => void | - | Called when mouse enters year control |
| onYearSelect | (date: string) => void | - | Called when user selects year |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button <code>aria-label</code> |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| size | MantineSize | - | Component size |
| static | boolean | - | Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way |
| weekdayFormat | string | ((date: string) => string) | - | <code>dayjs</code> format for weekdays names |
| weekendDays | (0 | 1 | 2 | 3 | 4 | 5 | 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by <code>DatesProvider</code>. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| yearLabelFormat | string | ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |


#### Styles API

Calendar component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Calendar selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-Calendar-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-Calendar-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-Calendar-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-Calendar-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-Calendar-levelsGroup | Group of months levels |
| yearsList | .mantine-Calendar-yearsList | Years list table element |
| yearsListRow | .mantine-Calendar-yearsListRow | Years list row element |
| yearsListCell | .mantine-Calendar-yearsListCell | Years list cell element |
| yearsListControl | .mantine-Calendar-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-Calendar-monthsList | Months list table element |
| monthsListRow | .mantine-Calendar-monthsListRow | Months list row element |
| monthsListCell | .mantine-Calendar-monthsListCell | Months list cell element |
| monthsListControl | .mantine-Calendar-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-Calendar-monthThead | thead element of month table |
| monthRow | .mantine-Calendar-monthRow | tr element of month table |
| monthTbody | .mantine-Calendar-monthTbody | tbody element of month table |
| monthCell | .mantine-Calendar-monthCell | td element of month table |
| month | .mantine-Calendar-month | Month table element |
| weekdaysRow | .mantine-Calendar-weekdaysRow | Weekdays tr element |
| weekday | .mantine-Calendar-weekday | Weekday th element |
| day | .mantine-Calendar-day | Month day control |
| weekNumber | .mantine-Calendar-weekNumber | Week number td element |

**Calendarheader selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-Calendarheader-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-Calendarheader-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-Calendarheader-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-Calendarheader-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |

**Calendarheader CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| calendarHeader | --dch-control-size | Controls size of the previous/next and level controls |
| calendarHeader | --dch-fz | Controls font-size of the previous/next and level controls |

**Calendarheader data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| calendarHeaderControl | data-direction | - | - |
| calendarHeaderControl | data-disabled | Control is disabled for any reason | - |