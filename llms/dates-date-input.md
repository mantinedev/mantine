# DateInput
Package: @mantine/dates
Import: import { DateInput } from '@mantine/dates';
Description: Free form date input

## DatePicker props

`DateInput` supports most of the [DatePicker](https://mantine.dev/dates/date-picker/) props,
read through [DatePicker](https://mantine.dev/dates/date-picker/) documentation to learn about all component features that are not listed on this page.

## Usage

#### Example: usage

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

Use `valueFormat` prop to change [dayjs format](https://day.js.org/docs/en/display/format) of value label.
To use some custom formats, you need to enable [custom parse format](https://day.js.org/docs/en/plugin/custom-parse-format) plugin:

```tsx
// Do this once in your application root file
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
```

Example of using DateInput with custom format:

#### Example: format

```tsx
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput valueFormat="YYYY MMM DD" label="Date input" placeholder="Date input" />;
}
```


## Date parser

Use `dateParser` prop to replace default date parser. Parser function accepts user input (string)
and must return `Date` object:

#### Example: parser

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

Set `clearable` prop to allow removing value from the input. Input will be cleared if
user selects the same date in dropdown or clears input value:

#### Example: clearable

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


## Min and max date

Set `minDate` and `maxDate` props to define min and max dates. If date that is after `maxDate`
or before `minDate` is entered, then it will be considered invalid and input value will be reverted
to last known valid date value.

#### Example: minMax

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

#### Example: disabled

```tsx
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}
```


## Input props

<InputFeatures component="DateInput" element="input" />

DateInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. DateInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { DateInput } from '@mantine/dates';


function Demo() {
  return (
    <DateInput
      
      placeholder="Input placeholder"
    />
  );
}
```


<GetElementRef component="DateInput" refType="input" package="@mantine/dates" />

## Get element ref

```tsx
import { useRef } from 'react';
import { DateInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <DateInput ref={ref} />;
}
```

<InputAccessibility component="DateInput" packageName="@mantine/dates" />

## Accessibility

DateInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | If set, the value can be deselected by deleting everything from the input or by clicking the selected date in the dropdown. By default, <code>true</code> if <code>clearable</code> prop is set, <code>false</code> otherwise. |
| ariaLabels | CalendarAriaLabels | - | <code>aria-label</code> attributes for controls on different levels |
| clearButtonProps | React.ComponentPropsWithoutRef<"button"> | - | Props passed down to the clear button |
| clearable | boolean | - | If set, clear button is displayed in the <code>rightSection</code> when the component has value. Ignored if <code>rightSection</code> prop is set. |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as <code>numberOfColumns</code> if not set explicitly |
| date | string | Date | - | Displayed date in controlled mode |
| dateParser | (value: string) => string | Date | null | - | A function to parse user input and convert it to date string value |
| decadeLabelFormat | string | ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | <code>dayjs</code> format for decade label or a function that returns decade label based on the date value |
| defaultDate | string | Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" | "year" | "decade" | - | Initial displayed level (uncontrolled) |
| defaultValue | DateValue | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of <code>Input.Description</code> component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the <code>Input.Description</code> component |
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| error | React.ReactNode | - | Contents of <code>Input.Error</code> component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the <code>Input.Error</code> component |
| excludeDate | (date: string) => boolean | - | Callback function to determine whether the day should be disabled |
| firstDayOfWeek | 0 | 1 | 2 | 3 | 4 | 5 | 6 | - | Number 0-6, where 0 – Sunday and 6 – Saturday. |
| fixOnBlur | boolean | - | If set to <code>false</code>, invalid user input is preserved and is not corrected on blur |
| getDayAriaLabel | (date: string) => string | - | Assigns <code>aria-label</code> to <code>Day</code> components based on date |
| getDayProps | (date: string) => Omit<Partial<DayProps>, "classNames" | "styles" | "vars"> & DataAttributes | - | Passes props down to <code>Day</code> components |
| getMonthControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down month picker control |
| getYearControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down to year picker control based on date |
| hasNextLevel | boolean | - | Determines whether next level button should be enabled |
| headerControlsOrder | ("next" | "previous" | "level")[] | - | Controls order |
| hideOutsideDates | boolean | - | Determines whether outside dates should be hidden |
| hideWeekdays | boolean | - | Determines whether weekdays row should be hidden |
| highlightToday | boolean | - | Determines whether today should be highlighted with a border |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of <code>Input.Label</code> component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the <code>Input.Label</code> component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| level | "month" | "year" | "decade" | - | Current displayed level (controlled) |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in <code>YYYY-MM-DD</code> format or Date object |
| maxLevel | "month" | "year" | "decade" | - | Max level that user can go up to |
| minDate | string | Date | - | Minimum possible date in <code>YYYY-MM-DD</code> format or Date object |
| monthLabelFormat | string | ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | <code>dayjs</code> format for months list |
| nextDisabled | boolean | - | Disables next control |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button <code>aria-label</code> |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: string | null) => void | - | Called when value changes |
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
| pointer | boolean | - | Determines whether the input should have <code>cursor: pointer</code> style |
| popoverProps | Partial<Omit<PopoverProps, "children">> | - | Props passed down to the <code>Popover</code> component |
| previousDisabled | boolean | - | Disables previous control |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button <code>aria-label</code> |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | - | Component size |
| value | DateValue | - | Controlled component value |
| valueFormat | string | - | <code>dayjs</code> format to display input value, <code>"MMMM D, YYYY"</code> by default |
| weekdayFormat | string | ((date: string) => string) | - | <code>dayjs</code> format for weekdays names |
| weekendDays | (0 | 1 | 2 | 3 | 4 | 5 | 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by <code>DatesProvider</code>. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| withNext | boolean | - | Determines whether next control should be rendered |
| withPrevious | boolean | - | Determines whether previous control should be rendered |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |
| yearLabelFormat | string | ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
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