# YearPicker
Package: @mantine/dates
Import: import { YearPicker } from '@mantine/dates';
Description: Inline year, multiple years and years range picker

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

Use `defaultDate` prop to set date value that will be used to determine which decade should be displayed initially.
For example to display `2040 – 2049` decade set `defaultDate={new Date(2040, 1)}`. If value is not specified,
then `defaultDate` will use `new Date()`. Month, day, minutes and seconds are ignored in provided date object, only year is used –
you can specify any date value.

Note that if you set `date` prop, then `defaultDate` value will be ignored.

#### Example: defaultDate

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker defaultDate="2040-02-01" value={value} onChange={setValue} />;
}
```


## Controlled date

Set `date`, and `onDateChange` props to make currently displayed decade controlled.
By doing so, you can customize date picking experience, for example, when user selects first date in range,
you can add 20 years to current date value:

#### Example: controlledDate

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  const handleChange = (val: [string | null, string | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => dayjs(current).add(20, 'year').format('YYYY-MM-DD'));
    }

    setValue(val);
  };

  return (
    <YearPicker
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
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate="2021-02-01"
      maxDate="2028-02-01"
    />
  );
}
```


## Add props to year control

You can add props to year controls with `getYearControlProps` function. It accepts year date as single argument,
props returned from the function will be added to year control. For example, it can be used to disable specific
control or add styles:

#### Example: controlProps

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearPicker, YearPickerProps } from '@mantine/dates';

const getYearControlProps: YearPickerProps['getYearControlProps'] = (date) => {
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

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker value={value} onChange={setValue} getYearControlProps={getYearControlProps} />;
}
```


## Number of columns

Set `numberOfColumns` prop to define number of pickers that will be rendered side by side:



## Size



## Change year controls format

Use `yearsListFormat` to change [dayjs format](https://day.js.org/docs/en/display/format) of year control:

#### Example: yearsListFormat

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
```


## Change decade label format

Use `decadeLabelFormat` to change [dayjs format](https://day.js.org/docs/en/display/format) of decade label:

#### Example: decadeLabelFormat

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
```


## Accessibility

### Aria labels

Set `ariaLabels` prop to specify `aria-label` attributes for next/previous controls:

```tsx
import { YearPicker } from '@mantine/dates';

function Demo() {
  return (
    <YearPicker
      ariaLabels={{
        nextDecade: 'Next decade',
        previousDecade: 'Previous decade',
      }}
    />
  );
}
```

### Year control aria-label

Use `getYearControlProps` to customize `aria-label` attribute:

```tsx
import { YearPicker } from '@mantine/dates';

function Demo() {
  return (
    <YearPicker
      getYearControlProps={(date) => ({
        'aria-label': `Select year ${date.getFullYear()}`,
      })}
    />
  );
}
```

### Keyboard interactions

Note that the following events will only trigger if focus is on year control.


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
| defaultValue | DateValue | DatesRangeValue<DateValue> | DateValue[] | - | Default value for uncontrolled component |
| getYearControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down to year picker control based on date |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in <code>YYYY-MM-DD</code> format or Date object |
| minDate | string | Date | - | Minimum possible date in <code>YYYY-MM-DD</code> format or Date object |
| nextLabel | string | - | Next button <code>aria-label</code> |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue<Type, string>) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| onYearSelect | (date: string) => void | - | Called when year is selected |
| previousLabel | string | - | Previous button <code>aria-label</code> |
| size | MantineSize | - | Component size |
| type | "range" | "multiple" | "default" | - | Picker type: range, multiple or default |
| value | DateValue | DatesRangeValue<DateValue> | DateValue[] | - | Value for controlled component |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| yearsListFormat | string | - | dayjs format for years list |


#### Styles API

YearPicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**YearPicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-YearPicker-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-YearPicker-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-YearPicker-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-YearPicker-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-YearPicker-levelsGroup | Group of decades levels |
| yearsList | .mantine-YearPicker-yearsList | Years list table element |
| yearsListRow | .mantine-YearPicker-yearsListRow | Years list row element |
| yearsListCell | .mantine-YearPicker-yearsListCell | Years list cell element |
| yearsListControl | .mantine-YearPicker-yearsListControl | Button used to pick months and years |

**YearPickerinput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-YearPickerinput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-YearPickerinput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-YearPickerinput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-YearPickerinput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-YearPickerinput-levelsGroup | Group of decades levels |
| yearsList | .mantine-YearPickerinput-yearsList | Years list table element |
| yearsListRow | .mantine-YearPickerinput-yearsListRow | Years list row element |
| yearsListCell | .mantine-YearPickerinput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-YearPickerinput-yearsListControl | Button used to pick months and years |
| placeholder | .mantine-YearPickerinput-placeholder | Placeholder element |