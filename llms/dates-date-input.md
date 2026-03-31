# DateInput
Package: @mantine/dates
Import: import { DateInput } from '@mantine/dates';
Description: Free form date input

## DatePicker props

`DateInput` supports most of the [DatePicker](https://mantine.dev/llms/dates-date-picker.md) props.
Read through the [DatePicker](https://mantine.dev/llms/dates-date-picker.md) documentation to learn about all component features that are not listed on this page.

## Usage

```tsx
import { useState } from 'react';
import { DateInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}
```


## Value format

Use the `valueFormat` prop to change the [dayjs format](https://day.js.org/docs/en/display/format) of the value label.
To use some custom formats, you need to enable the [custom parse format](https://day.js.org/docs/en/plugin/custom-parse-format) plugin:

```tsx
// Do this once in your application root file
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
```

Example of using DateInput with a custom format:

```tsx
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput valueFormat="YYYY MMM DD" label="Date input" placeholder="Date input" />;
}
```


## With time

If your `valueFormat` includes time (for example, `YYYY-MM-DD HH:mm`), set the `withTime` prop
to preserve the time part of the value. Without `withTime`, the time portion is discarded and
always defaults to `00:00`. When using `withTime`, you will also need to provide a custom `dateParser`
that returns a date-time string:

```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateInput, DateInputProps, DateStringValue } from '@mantine/dates';

// It is required to extend dayjs with customParseFormat plugin
// in order to parse dates with custom format
dayjs.extend(customParseFormat);

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (!input) {
    return null;
  }
  const parsed = dayjs(input, 'YYYY-MM-DD HH:mm', true);
  return parsed.isValid() ? parsed.format('YYYY-MM-DD HH:mm:ss') : null;
};

function Demo() {
  const [value, setValue] = useState<DateStringValue | null>(null);
  return (
    <DateInput
      withTime
      valueFormat="YYYY-MM-DD HH:mm"
      dateParser={dateParser}
      value={value}
      onChange={setValue}
      label="Date and time input"
      placeholder="Date and time input"
    />
  );
}
```


## Date parser

Use the `dateParser` prop to replace the default date parser. The parser function accepts user input (string)
and must return a `Date` object:

```tsx
import dayjs from 'dayjs';
import { DateInput, DateInputProps } from '@mantine/dates';

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (input === 'WW2') {
    return '1939-09-01';
  }

  return dayjs(input, 'DD/MM/YYYY').format('YYYY-MM-DD');
};

function Demo() {
  return (
    <DateInput
      dateParser={dateParser}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
    />
  );
}
```


## Allow clear

Set the `clearable` prop to allow removing the value from the input. The input will be cleared if the
user selects the same date in the dropdown or clears the input value:

```tsx
import dayjs from 'dayjs';
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Date input"
      placeholder="Date input"
    />
  );
}
```


```tsx
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DateInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <DateInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <DateInput
        label="clearSectionMode='clear'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
```


## Min and max date

Set the `minDate` and `maxDate` props to define minimum and maximum dates. If a date that is after `maxDate`
or before `minDate` is entered, it will be considered invalid and the input value will be reverted
to the last known valid date value.

```tsx
import dayjs from 'dayjs';
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      minDate={dayjs().format('YYYY-MM-DD')}
      maxDate={dayjs().add(1, 'month').format('YYYY-MM-DD')}
      label="Date input"
      placeholder="Date input"
    />
  );
}
```


## Disabled state

```tsx
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}
```


## Input props

DateInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. DateInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { DateInput } from '@mantine/dates';


function Demo() {
  return (
    <DateInput
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      placeholder="Input placeholder"
    />
  );
}
```


## Accessibility

DateInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

**DateInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | If set, the value can be deselected by deleting everything from the input or by clicking the selected date in the dropdown. By default, `true` if `clearable` prop is set, `false` otherwise. |
| ariaLabels | CalendarAriaLabels | - | `aria-label` attributes for controls on different levels |
| clearButtonProps | React.ComponentProps<"button"> | - | Props passed down to the clear button |
| clearSectionMode | ClearSectionMode | - | Determines how the clear button and rightSection are rendered |
| clearable | boolean | - | If set, clear button is displayed in the `rightSection` when the component has value. Ignored if `rightSection` prop is set. |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as `numberOfColumns` if not set explicitly |
| date | string \| Date | - | Displayed date in controlled mode |
| dateParser | (value: string) => string \| Date \| null | - | A function to parse user input and convert it to date string value |
| decadeLabelFormat | string \| ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | `dayjs` format for decade label or a function that returns decade label based on the date value |
| defaultDate | string \| Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" \| "year" \| "decade" | - | Initial displayed level (uncontrolled) |
| defaultValue | DateValue | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| excludeDate | (date: string) => boolean | - | Callback function to determine whether the day should be disabled |
| firstDayOfWeek | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 | - | Number 0-6, where 0 – Sunday and 6 – Saturday. |
| fixOnBlur | boolean | - | If set to `false`, invalid user input is preserved and is not corrected on blur |
| fullWidth | boolean | - | Determines whether the calendar should take the full width of its container |
| getDayAriaLabel | (date: string) => string | - | Assigns `aria-label` to `Day` components based on date |
| getDayProps | (date: string) => Omit<Partial<DayProps>, "vars" \| "classNames" \| "styles"> & DataAttributes | - | Passes props down to `Day` components |
| getMonthControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down month picker control |
| getYearControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down to year picker control based on date |
| hasNextLevel | boolean | - | Determines whether next level button should be enabled |
| headerControlsOrder | ("next" \| "previous" \| "level")[] | - | Controls order |
| hideOutsideDates | boolean | - | Determines whether outside dates should be hidden |
| hideWeekdays | boolean | - | Determines whether weekdays row should be hidden |
| highlightToday | boolean | - | Determines whether today should be highlighted with a border |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| level | "month" \| "year" \| "decade" | - | Current displayed level (controlled) |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string \| Date | - | Maximum possible date in `YYYY-MM-DD` format or Date object |
| maxLevel | "month" \| "year" \| "decade" | - | Max level that user can go up to |
| minDate | string \| Date | - | Minimum possible date in `YYYY-MM-DD` format or Date object |
| monthLabelFormat | string \| ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | `dayjs` format for months list |
| nextDisabled | boolean | - | Disables next control |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button `aria-label` |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: string \| null) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onLevelChange | (level: CalendarLevel) => void | - | Called when the level changes |
| onLevelClick | () => void | - | Called when the level button is clicked |
| onNext | () => void | - | Called when the next button is clicked |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onNextMonth | (date: string) => void | - | Called when the next month button is clicked |
| onNextYear | (date: string) => void | - | Called when the next year button is clicked |
| onPrevious | () => void | - | Called when the previous button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| onPreviousMonth | (date: string) => void | - | Called when the previous month button is clicked |
| onPreviousYear | (date: string) => void | - | Called when the previous year button is clicked |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| popoverProps | Partial<Omit<PopoverProps, "children">> | - | Props passed down to the `Popover` component |
| previousDisabled | boolean | - | Disables previous control |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button `aria-label` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Component size |
| value | DateValue | - | Controlled component value |
| valueFormat | string | - | `dayjs` format to display input value, `"MMMM D, YYYY"` by default |
| weekdayFormat | string \| ((date: string) => string) | - | `dayjs` format for weekdays names |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withNext | boolean | - | Determines whether next control should be rendered |
| withPrevious | boolean | - | Determines whether previous control should be rendered |
| withTime | boolean | - | If set to `true`, the time part of the value is preserved. Set this to `true` when `valueFormat` includes time (e.g. `"YYYY-MM-DD HH:mm"`). |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |
| yearLabelFormat | string \| ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |


#### Styles API

DateInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**DateInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-DateInput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-DateInput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-DateInput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-DateInput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-DateInput-levelsGroup | Group of months levels |
| yearsList | .mantine-DateInput-yearsList | Years list table element |
| yearsListRow | .mantine-DateInput-yearsListRow | Years list row element |
| yearsListCell | .mantine-DateInput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-DateInput-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-DateInput-monthsList | Months list table element |
| monthsListRow | .mantine-DateInput-monthsListRow | Months list row element |
| monthsListCell | .mantine-DateInput-monthsListCell | Months list cell element |
| monthsListControl | .mantine-DateInput-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-DateInput-monthThead | thead element of month table |
| monthRow | .mantine-DateInput-monthRow | tr element of month table |
| monthTbody | .mantine-DateInput-monthTbody | tbody element of month table |
| monthCell | .mantine-DateInput-monthCell | td element of month table |
| month | .mantine-DateInput-month | Month table element |
| weekdaysRow | .mantine-DateInput-weekdaysRow | Weekdays tr element |
| weekday | .mantine-DateInput-weekday | Weekday th element |
| day | .mantine-DateInput-day | Month day control |
| weekNumber | .mantine-DateInput-weekNumber | Week number td element |
