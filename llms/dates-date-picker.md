# DatePicker
Package: @mantine/dates
Import: import { DatePicker } from '@mantine/dates';
Description: Inline date, multiple dates and dates range picker

## Usage



## Allow deselect

Set `allowDeselect` to allow users to deselect the currently selected date by clicking on it.
`allowDeselect` is disregarded when the `type` prop is `range` or `multiple`. When a date is
deselected, `onChange` is called with `null`.



## Multiple dates

Set `type="multiple"` to allow users to pick multiple dates:



## Dates range

Set `type="range"` to allow users to pick a date range:



## Single date in range

By default, it is not allowed to select a single date as a range – when the user clicks the same date a second time, it is deselected.
To change this behavior, set the `allowSingleDateInRange` prop. `allowSingleDateInRange` is ignored when the
`type` prop is not `range`.



## Presets

Use the `presets` prop to add custom date presets. Presets are displayed next to the calendar:

```tsx
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
```


To use `presets` with `type="range"`, define the value as a tuple of two dates:

```tsx
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <DatePicker
      type="range"
      presets={[
        {
          value: [today.subtract(2, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last two days',
        },
        {
          value: [today.subtract(7, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last 7 days',
        },
        {
          value: [today.startOf('month').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'This month',
        },
        {
          value: [
            today.subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
            today.subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
          ],
          label: 'Last month',
        },
        {
          value: [
            today.subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            today.subtract(1, 'year').endOf('year').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
      ]}
    />
  );
}
```


## Default date

Use the `defaultDate` prop to set the date value that will be used to determine which year should be displayed initially.
For example, to display the `2015 February` month, set `defaultDate={new Date(2015, 1)}`. If the value is not specified,
then `defaultDate` will use `new Date()`. Day, minutes and seconds are ignored in the provided date object, only year and month data is used –
you can specify any date value.

Note that if you set the `date` prop, then the `defaultDate` value will be ignored.

```tsx
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
```


## Controlled date

Set the `date` and `onDateChange` props to make the currently displayed month, year and decade controlled.
By doing so, you can customize the date picking experience. For example, when the user selects the first date in a range,
you can add one month to the current date value:

```tsx
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
```


## Default level

Set the `defaultLevel` prop to configure the initial level that will be displayed:

```tsx
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
```


## Hide outside dates

Set the `hideOutsideDates` prop to remove all dates that do not belong to the current month:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
```


## Display week numbers

Set the `withWeekNumbers` prop to display week numbers:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
```


## First day of week

Set the `firstDayOfWeek` prop to configure the first day of the week. The prop accepts a number from 0 to 6,
where 0 is Sunday and 6 is Saturday. The default value is 1 – Monday. You can also configure this option
for all components with [DatesProvider](https://mantine.dev/llms/dates-getting-started.md).

```tsx
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
```


## Hide weekdays

Set the `hideWeekdays` prop to hide weekday names:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
```


## Weekend days

Use the `weekendDays` prop to configure weekend days. The prop accepts an array of numbers from 0 to 6,
where 0 is Sunday and 6 is Saturday. The default value is `[0, 6]` – Saturday and Sunday. You can also configure this option
for all components with [DatesProvider](https://mantine.dev/llms/dates-getting-started.md).

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
```


## Render day function

You can customize day rendering with the `renderDay` prop. For example, it can be used to add
[Indicator](https://mantine.dev/llms/core-indicator.md) to certain days.

```tsx
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = dayjs(date).date();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}
```


## Min and max date

Set the `minDate` and `maxDate` props to define minimum and maximum dates. If the previous/next page is not available,
then the corresponding control will be disabled.

```tsx
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2022-02-01"
      minDate="2022-02-10"
      maxDate="2022-02-25"
    />
  );
}
```


## Change header controls order

Use the `headerControlsOrder` prop to change the order of header controls. The prop accepts an array of
`'next' | 'previous' | 'level'`. Note that each control can be used only once in the array.

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      defaultDate="2022-02-01"
      headerControlsOrder={['level', 'previous', 'next']}
      styles={{
        calendarHeaderLevel: {
          justifyContent: 'flex-start',
          paddingInlineStart: 8,
        },
      }}
    />
  );
}
```


## Add props to day, year and month control

You can add props to year, month and day controls with the `getYearControlProps`, `getMonthControlProps` and `getDayProps` functions. All functions accept a date as a single argument,
and props returned from the function will be added to the year/month/day control. For example, it can be used to disable a specific
control or add styles:

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const getDayProps: DatePickerProps['getDayProps'] = (date) => {
  const d = dayjs(date);

  if (d.day() === 5 && d.date() === 13) {
    return {
      style: {
        backgroundColor: 'var(--mantine-color-red-filled)',
        color: 'var(--mantine-color-white)',
      },
    };
  }

  return {};
};

const getYearControlProps: DatePickerProps['getYearControlProps'] = (date) => {
  const d = dayjs(date);

  if (d.year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: DatePickerProps['getMonthControlProps'] = (date) => {
  const d = dayjs(date);
  if (d.month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2021-08-01"
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
```


## Exclude dates

To disable specific dates, use the `excludeDate` prop.
It accepts a function that takes a date as an argument and returns a boolean value – if `true` is returned, the date will be disabled.
Example of disabling all dates that are not Fridays:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => new Date(date).getDay() !== 5} />;
}
```


## Number of columns

Set the `numberOfColumns` prop to define the number of pickers that will be rendered side by side:



## Max level

```tsx
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
```


## Full width

Set the `fullWidth` prop to make the date picker stretch to fill 100% of its parent container width:

```tsx
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker fullWidth value={value} onChange={setValue} />;
}
```


## Size



## Change year and months controls format

Use the `yearsListFormat` and `monthsListFormat` props to change the [dayjs format](https://day.js.org/docs/en/display/format) of year/month controls:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
```


## Change label format

Use the `decadeLabelFormat`, `yearLabelFormat` and `monthLabelFormat` props to change the [dayjs format](https://day.js.org/docs/en/display/format) of the decade/year label:

```tsx
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      value={value}
      onChange={setValue}
    />
  );
}
```


## Localization

Usually it is better to specify the `@mantine/dates` package locale in [DatesProvider](https://mantine.dev/llms/dates-getting-started.md),
but you can also override the locale per component:

```tsx
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
```


## Accessibility

### Aria labels

Set the `ariaLabels` prop to specify `aria-label` attributes for next/previous controls:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      ariaLabels={{
        nextDecade: 'Next decade',
        previousDecade: 'Previous decade',
        nextYear: 'Next year',
        previousYear: 'Previous year',
        nextMonth: 'Next month',
        previousMonth: 'Previous month',
        yearLevelControl: 'Change to decade view',
        monthLevelControl: 'Change to year view',
      }}
    />
  );
}
```

### Year/month control aria-label

Use `getYearControlProps`/`getMonthControlProps`/`getDayProps` to customize the `aria-label` attribute:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      getDayProps={(date) => ({
        'aria-label': `Select date ${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`,
      })}
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

Note that the following events will only trigger if focus is on a date control.


#### Props

**DatePicker props**

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
| defaultValue | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Default value for uncontrolled component |
| enableKeyboardNavigation | boolean | - | Enable enhanced keyboard navigation (Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade navigation, Y key to open year view) |
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
| level | "month" \| "year" \| "decade" | - | Current displayed level (controlled) |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string \| Date | - | Maximum possible date in `YYYY-MM-DD` format or Date object |
| maxLevel | "month" \| "year" \| "decade" | - | - |
| minDate | string \| Date | - | Minimum possible date in `YYYY-MM-DD` format or Date object |
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
| onYearMouseEnter | (event: MouseEvent<HTMLButtonElement, MouseEvent>, date: string) => void | - | Called when mouse enters year control |
| onYearSelect | (date: string) => void | - | Called when user selects year |
| presets | DatePickerPreset<Type>[] | - | Predefined values to pick from |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button `aria-label` |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| size | MantineSize | - | Component size |
| type | "range" \| "multiple" \| "default" | - | Picker type: range, multiple or default |
| value | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Value for controlled component |
| weekdayFormat | string \| ((date: string) => string) | - | `dayjs` format for weekdays names |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| yearLabelFormat | string \| ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |

**DatePicker.Input props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" |
| allowSingleDateInRange | boolean | - | Determines whether a single day can be selected as range, applicable only when type="range" |
| ariaLabels | CalendarAriaLabels | - | `aria-label` attributes for controls on different levels |
| clearButtonProps | React.ComponentProps<"button"> | - | Props passed down to the clear button |
| clearSectionMode | ClearSectionMode | - | Determines how the clear button and rightSection are rendered |
| clearable | boolean | - | If set, clear button is displayed in the `rightSection` when the component has value. Ignored if `rightSection` prop is set. |
| closeOnChange | boolean | - | Determines whether the dropdown is closed when date is selected, not applicable with `type="multiple"` |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as `numberOfColumns` if not set explicitly |
| date | string \| Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string \| ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | `dayjs` format for decade label or a function that returns decade label based on the date value |
| defaultDate | string \| Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" \| "year" \| "decade" | - | Initial displayed level (uncontrolled) |
| defaultValue | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Default value for uncontrolled component |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| dropdownType | "popover" \| "modal" | - | Type of the dropdown |
| enableKeyboardNavigation | boolean | - | Enable enhanced keyboard navigation (Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade navigation, Y key to open year view) |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
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
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| labelSeparator | string | - | Separator between range value |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| level | "month" \| "year" \| "decade" | - | Current displayed level (controlled) |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string \| Date | - | Maximum possible date in `YYYY-MM-DD` format or Date object |
| maxLevel | "month" \| "year" \| "decade" | - | - |
| minDate | string \| Date | - | Minimum possible date in `YYYY-MM-DD` format or Date object |
| modalProps | Partial<Omit<ModalProps, "children">> | - | Props passed down to `Modal` component |
| monthLabelFormat | string \| ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | `dayjs` format for months list |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button `aria-label` |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue<Type, string>) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onDropdownClose | () => void | - | Called when the dropdown is closed |
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
| placeholder | string | - | Input placeholder |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| popoverProps | Partial<Omit<PopoverProps, "children">> | - | Props passed down to `Popover` component |
| presets | DatePickerPreset<Type>[] | - | Predefined values to pick from |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button `aria-label` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| readOnly | boolean | - | If set, the component value cannot be changed by the user |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Component size |
| sortDates | boolean | - | Determines whether dates values should be sorted before `onChange` call, only applicable with type="multiple" |
| type | "range" \| "multiple" \| "default" | - | Picker type: range, multiple or default |
| value | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Value for controlled component |
| valueFormat | string | - | `dayjs` format for input value |
| valueFormatter | DateFormatter | - | A function to format selected dates values into a string. By default, date is formatted based on the input type. |
| weekdayFormat | string \| ((date: string) => string) | - | `dayjs` format for weekdays names |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |
| yearLabelFormat | string \| ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |


#### Styles API

DatePicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**DatePicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-DatePicker-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-DatePicker-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-DatePicker-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-DatePicker-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-DatePicker-levelsGroup | Group of months levels |
| yearsList | .mantine-DatePicker-yearsList | Years list table element |
| yearsListRow | .mantine-DatePicker-yearsListRow | Years list row element |
| yearsListCell | .mantine-DatePicker-yearsListCell | Years list cell element |
| yearsListControl | .mantine-DatePicker-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-DatePicker-monthsList | Months list table element |
| monthsListRow | .mantine-DatePicker-monthsListRow | Months list row element |
| monthsListCell | .mantine-DatePicker-monthsListCell | Months list cell element |
| monthsListControl | .mantine-DatePicker-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-DatePicker-monthThead | thead element of month table |
| monthRow | .mantine-DatePicker-monthRow | tr element of month table |
| monthTbody | .mantine-DatePicker-monthTbody | tbody element of month table |
| monthCell | .mantine-DatePicker-monthCell | td element of month table |
| month | .mantine-DatePicker-month | Month table element |
| weekdaysRow | .mantine-DatePicker-weekdaysRow | Weekdays tr element |
| weekday | .mantine-DatePicker-weekday | Weekday th element |
| day | .mantine-DatePicker-day | Month day control |
| weekNumber | .mantine-DatePicker-weekNumber | Week number td element |
| datePickerRoot | .mantine-DatePicker-datePickerRoot | Date picker root element, contains calendar and presets |
| presetsList | .mantine-DatePicker-presetsList | Presets wrapper element |
| presetButton | .mantine-DatePicker-presetButton | Preset button |

**DatePicker CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| datePickerRoot | --preset-font-size | Controls font size of preset buttons |

**DatePickerinput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-DatePickerinput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-DatePickerinput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-DatePickerinput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-DatePickerinput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-DatePickerinput-levelsGroup | Group of months levels |
| yearsList | .mantine-DatePickerinput-yearsList | Years list table element |
| yearsListRow | .mantine-DatePickerinput-yearsListRow | Years list row element |
| yearsListCell | .mantine-DatePickerinput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-DatePickerinput-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-DatePickerinput-monthsList | Months list table element |
| monthsListRow | .mantine-DatePickerinput-monthsListRow | Months list row element |
| monthsListCell | .mantine-DatePickerinput-monthsListCell | Months list cell element |
| monthsListControl | .mantine-DatePickerinput-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-DatePickerinput-monthThead | thead element of month table |
| monthRow | .mantine-DatePickerinput-monthRow | tr element of month table |
| monthTbody | .mantine-DatePickerinput-monthTbody | tbody element of month table |
| monthCell | .mantine-DatePickerinput-monthCell | td element of month table |
| month | .mantine-DatePickerinput-month | Month table element |
| weekdaysRow | .mantine-DatePickerinput-weekdaysRow | Weekdays tr element |
| weekday | .mantine-DatePickerinput-weekday | Weekday th element |
| day | .mantine-DatePickerinput-day | Month day control |
| weekNumber | .mantine-DatePickerinput-weekNumber | Week number td element |
| datePickerRoot | .mantine-DatePickerinput-datePickerRoot | Date picker root element, contains calendar and presets |
| presetsList | .mantine-DatePickerinput-presetsList | Presets wrapper element |
| presetButton | .mantine-DatePickerinput-presetButton | Preset button |
| placeholder | .mantine-DatePickerinput-placeholder | Placeholder element |
