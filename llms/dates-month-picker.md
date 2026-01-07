# MonthPicker
Package: @mantine/dates
Import: import { MonthPicker } from '@mantine/dates';
Description: Inline month, multiple months and months range picker

## Usage



## Allow deselect

Set `allowDeselect` to allow user to deselect current selected date by clicking on it.
`allowDeselect` is disregarded when `type` prop is `range` or `multiple`. When date is
deselected `onChange` is called with `null`.



## Multiple dates

Set `type="multiple"` to allow user to pick multiple dates:



## Dates range

Set `type="range"` to allow user to pick dates range:



## Single date in range

By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.
To change this behavior set `allowSingleDateInRange` prop. `allowSingleDateInRange` is ignored when
`type` prop is not `range`.



## Default date

Use `defaultDate` prop to set date value that will be used to determine which year should be displayed initially.
For example to display `2015` year set `defaultDate={new Date(2015, 1)}`. If value is not specified,
then `defaultDate` will use `new Date()`. Month, day, minutes and seconds are ignored in provided date object, only year is used –
you can specify any date value.

Note that if you set `date` prop, then `defaultDate` value will be ignored.

#### Example: defaultDate

```tsx
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <MonthPicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
```


## Controlled date

Set `date`, and `onDateChange` props to make currently displayed year and decade controlled.
By doing so, you can customize date picking experience, for example, when user selects first date in range,
you can add one year to current date value:

#### Example: controlledDate

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  const handleChange = (val: [string | null, string | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => dayjs(current).add(1, 'year').format('YYYY-MM-DD'));
    }

    setValue(val);
  };

  return (
    <MonthPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
```


## Min and max date

Set `minDate` and `maxDate` props to define min and max dates. If previous/next page is not available
then corresponding control will be disabled.

#### Example: minMax

```tsx
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      defaultDate="2022-02-01"
      minDate="2022-02-01"
      maxDate="2022-09-01"
    />
  );
}
```


## Add props to year and month control

You can add props to year and month controls with `getYearControlProps` and `getMonthControlProps` functions. Both functions accept date as single argument,
props returned from the function will be added to year/month control. For example, it can be used to disable specific
control or add styles:

#### Example: controlProps

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthPicker, MonthPickerProps } from '@mantine/dates';

const getYearControlProps: MonthPickerProps['getYearControlProps'] = (date) => {
  if (dayjs(date).year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (dayjs(date).year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: MonthPickerProps['getMonthControlProps'] = (date) => {
  if (dayjs(date).month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (dayjs(date).month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
```


## Number of columns

Set `numberOfColumns` prop to define number of pickers that will be rendered side by side:



## Max level

To disallow user going to the decade level set `maxLevel="year"`:

#### Example: maxLevel

```tsx
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker maxLevel="year" />;
}
```


## Size



## Change year and months controls format

Use `yearsListFormat` and `monthsListFormat` props to change [dayjs format](https://day.js.org/docs/en/display/format) of year/month controls:

#### Example: listFormat

```tsx
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />;
}
```


## Change label format

Use `decadeLabelFormat` and `yearLabelFormat` to change [dayjs format](https://day.js.org/docs/en/display/format) of decade/year label:

#### Example: labelFormat

```tsx
import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <MonthPicker
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      value={value}
      onChange={setValue}
    />
  );
}
```


## Localization

Usually it is better to specify `@mantine/dates` package locale in [DatesProvider](https://mantine.dev/dates/getting-started/),
but you can also override locale per component:

#### Example: locale

```tsx
import 'dayjs/locale/ru';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return <MonthPicker locale="ru" />;
}
```


## Accessibility

### Aria labels

Set `ariaLabels` prop to specify `aria-label` attributes for next/previous controls:

```tsx
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <MonthPicker
      ariaLabels={{
        nextDecade: 'Next decade',
        previousDecade: 'Previous decade',
        nextYear: 'Next year',
        previousYear: 'Previous year',
        yearLevelControl: 'Change to decade view',
      }}
    />
  );
}
```

### Year/month control aria-label

Use `getYearControlProps`/`getMonthControlProps` to customize `aria-label` attribute:

```tsx
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <MonthPicker
      getYearControlProps={(date) => ({
        'aria-label': `Select year ${date.getFullYear()}`,
      })}
      getMonthControlProps={(date) => ({
        'aria-label': `Select month ${date.getFullYear()}/${date.getMonth()}`,
      })}
    />
  );
}
```

### Keyboard interactions

Note that the following events will only trigger if focus is on month control.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" |
| allowSingleDateInRange | boolean | - | Determines whether a single day can be selected as range, applicable only when type="range" |
| ariaLabels | CalendarAriaLabels | - | <code>aria-label</code> attributes for controls on different levels |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as <code>numberOfColumns</code> if not set explicitly |
| date | string | Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string | ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | <code>dayjs</code> format for decade label or a function that returns decade label based on the date value |
| defaultDate | string | Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" | "year" | "decade" | - | Initial displayed level (uncontrolled) |
| defaultValue | DateValue | DatesRangeValue<DateValue> | DateValue[] | - | Default value for uncontrolled component |
| getMonthControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down month picker control |
| getYearControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down to year picker control based on date |
| level | "month" | "year" | "decade" | - | Current displayed level (controlled) |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in <code>YYYY-MM-DD</code> format or Date object |
| maxLevel | "month" | "year" | "decade" | - | Max level that user can go up to |
| minDate | string | Date | - | Minimum possible date in <code>YYYY-MM-DD</code> format or Date object |
| monthsListFormat | string | - | <code>dayjs</code> format for months list |
| nextLabel | string | - | Next button <code>aria-label</code> |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue<Type, string>) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onLevelChange | (level: MonthPickerLevel) => void | - | Called when level changes |
| onMonthSelect | (date: string) => void | - | Called when month is selected |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onNextYear | (date: string) => void | - | Called when the next year button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| onPreviousYear | (date: string) => void | - | Called when the previous year button is clicked |
| previousLabel | string | - | Previous button <code>aria-label</code> |
| size | MantineSize | - | Component size |
| type | "range" | "multiple" | "default" | - | Picker type: range, multiple or default |
| value | DateValue | DatesRangeValue<DateValue> | DateValue[] | - | Value for controlled component |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| yearLabelFormat | string | ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |


#### Styles API

MonthPicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**MonthPicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-MonthPicker-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-MonthPicker-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-MonthPicker-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-MonthPicker-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-MonthPicker-levelsGroup | Group of years levels |
| yearsList | .mantine-MonthPicker-yearsList | Years list table element |
| yearsListRow | .mantine-MonthPicker-yearsListRow | Years list row element |
| yearsListCell | .mantine-MonthPicker-yearsListCell | Years list cell element |
| yearsListControl | .mantine-MonthPicker-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-MonthPicker-monthsList | Months list table element |
| monthsListRow | .mantine-MonthPicker-monthsListRow | Months list row element |
| monthsListCell | .mantine-MonthPicker-monthsListCell | Months list cell element |
| monthsListControl | .mantine-MonthPicker-monthsListControl | Button used to pick months and years |

**MonthPickerinput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-MonthPickerinput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-MonthPickerinput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-MonthPickerinput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-MonthPickerinput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-MonthPickerinput-levelsGroup | Group of years levels |
| yearsList | .mantine-MonthPickerinput-yearsList | Years list table element |
| yearsListRow | .mantine-MonthPickerinput-yearsListRow | Years list row element |
| yearsListCell | .mantine-MonthPickerinput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-MonthPickerinput-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-MonthPickerinput-monthsList | Months list table element |
| monthsListRow | .mantine-MonthPickerinput-monthsListRow | Months list row element |
| monthsListCell | .mantine-MonthPickerinput-monthsListCell | Months list cell element |
| monthsListControl | .mantine-MonthPickerinput-monthsListControl | Button used to pick months and years |
| placeholder | .mantine-MonthPickerinput-placeholder | Placeholder element |