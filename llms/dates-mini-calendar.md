# MiniCalendar
Package: @mantine/dates
Import: import { MiniCalendar } from '@mantine/dates';
Description: Compact calendar to display a small number of days in a row

## Usage

#### Example: usage

```tsx
import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  const [value, onChange] = useState<string | null>('2025-04-15');
  return <MiniCalendar value={value} onChange={onChange} numberOfDays={6} />;
}
```


## Number of days

Use `numberOfDays` prop to control how many days are displayed at once.
The default value is `7`.

#### Example: numberOfDays

```tsx
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return <MiniCalendar numberOfDays={5} />;
}
```


## getDayProps

Use `getDayProps` to add custom props to days, for example, assign styles to weekends:

#### Example: getDayProps

```tsx
import dayjs from 'dayjs';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return (
    <MiniCalendar
      numberOfDays={6}
      getDayProps={(date) => ({
        style: {
          color: [0, 6].includes(dayjs(date).day()) ? 'var(--mantine-color-red-8)' : undefined,
        },
      })}
    />
  );
}
```


## Min and max dates

Use `minDate` and `maxDate` props to limit date selection:

#### Example: minMax

```tsx
import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  const [value, onChange] = useState<string | null>('2025-04-15');
  return (
    <MiniCalendar
      value={value}
      onChange={onChange}
      numberOfDays={6}
      defaultDate="2025-04-13"
      minDate="2025-04-14"
      maxDate="2025-04-24"
    />
  );
}
```


## Localization

You can change localization both on component level with `locale` prop and
globally with [DatesProvider](https://mantine.dev/dates/getting-started).

#### Example: locale

```tsx
import 'dayjs/locale/ru';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return <MiniCalendar defaultDate="2025-04-15" locale="ru" numberOfDays={6} />;
}
```


## Accessibility

Use `nextControlProps` and `previousControlProps` to add `aria-label` and other props to navigation buttons:

```tsx
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return (
    <MiniCalendar
      nextControlProps={{ 'aria-label': 'Next range' }}
      previousControlProps={{ 'aria-label': 'Previous range' }}
    />
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| date | string | Date | - | Controlled component date value, start date of the interval |
| defaultDate | string | Date | - | Uncontrolled component default value, start date of the interval |
| getDayProps | (date: string) => Record<string, any> | - | Props passed down to the day component |
| locale | string | - | dayjs locale used for formatting |
| maxDate | string | Date | - | Maximum date that can be selected, date object or date string in <code>YYYY-MM-DD</code> format |
| minDate | string | Date | - | Minimum date that can be selected, date object or date string in <code>YYYY-MM-DD</code> format |
| monthLabelFormat | string | - | Dayjs format string for month label |
| nextControlProps | Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & DataAttributes | - | Props passed to next control button |
| numberOfDays | number | - | Number of days to display in the calendar |
| onChange | (date: string) => void | - | Called with date in <code>YYYY-MM-DD</code> format when date changes |
| onDateChange | (date: string) => void | - | Called with date in <code>YYYY-MM-DD</code> format when date internal changes |
| onNext | () => void | - | Called when the next button is clicked |
| onPrevious | () => void | - | Called when the previous button is clicked |
| previousControlProps | Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & DataAttributes | - | Props passed to previous control button |
| size | MantineSize | - | Component size |
| value | string | Date | null | - | Selected date, controlled value |


#### Styles API

MiniCalendar component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**MiniCalendar selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-MiniCalendar-root | Root element |
| control | .mantine-MiniCalendar-control | Button in the dropdown which is used to select hours/minutes/seconds/am-pm |
| days | .mantine-MiniCalendar-days | Days container |
| day | .mantine-MiniCalendar-day | Single day element |
| dayMonth | .mantine-MiniCalendar-dayMonth | Day element in month view |
| dayNumber | .mantine-MiniCalendar-dayNumber | Day number element |

**MiniCalendar CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --mini-calendar-font-size | Controls size of all elements (based on em units) |

**MiniCalendar data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | disabled | Next/previous range is after  | - |
| control | direction | - | - |
| day | selected | The day matches the  | - |
| day | disabled | The day is before  | - |