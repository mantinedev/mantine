# DatePickerInput
Package: @mantine/dates
Import: import { DatePickerInput } from '@mantine/dates';
Description: Date, multiple dates and dates range picker input

## DatePicker props

`DatePickerInput` supports most of the [DatePicker](https://mantine.dev/dates/date-picker/) props,
read through [DatePicker](https://mantine.dev/dates/date-picker/) documentation to learn about all component features that are not listed on this page.

## Usage



## Multiple dates

Set `type="multiple"` to allow user to pick multiple dates:



## Dates range

Set `type="range"` to allow user to pick dates range:



## Presets

Use `presets` prop to add custom date presets. Presets are displayed next to the calendar:

#### Example: presets

```tsx
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      label="With presets"
      placeholder="Select date"
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


To use `presets` with `type="range"`, define value a tuple of two dates:

#### Example: presetsRange

```tsx
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <DatePickerInput
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


## Open picker in modal

By default, [DatePicker](https://mantine.dev/dates/date-picker/) is rendered inside [Popover](https://mantine.dev/core/popover/).
You can change that to [Modal](https://mantine.dev/core/modal/) by setting `dropdownType="modal"`:



## Value format

Use `valueFormat` prop to change [dayjs format](https://day.js.org/docs/en/display/format) of value label:

#### Example: valueFormat

```tsx
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
```


## Value formatter

`valueFormatter` is a more powerful alternative to `valueFormat` prop.
It allows formatting value label with a custom function.
The function is the same for all component types (`default`, `multiple` and `range`)
– you need to perform additional checks inside the function to handle different types.

Example of using a custom formatter function with `type="multiple"`:



## Clearable

Set `clearable` prop to display clear button in the right section. Note that if you set `rightSection`
prop, clear button will not be displayed.



## Disabled state

#### Example: disabled

```tsx
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
      disabled
    />
  );
}
```


## Input props

<InputFeatures component="DatePickerInput" element="button" />

DatePickerInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all button element props. DatePickerInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.



## With icon



<GetElementRef component="DatePickerInput" refType="button" package="@mantine/dates" />

## Get element ref

```tsx
import { useRef } from 'react';
import { DatePickerInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <DatePickerInput ref={ref} />;
}
```

<InputAccessibility component="DatePickerInput" packageName="@mantine/dates" />

## Accessibility

DatePickerInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" |
| allowSingleDateInRange | boolean | - | Determines whether a single day can be selected as range, applicable only when type="range" |
| ariaLabels | CalendarAriaLabels | - | <code>aria-label</code> attributes for controls on different levels |
| clearButtonProps | React.ComponentPropsWithoutRef<"button"> | - | Props passed down to the clear button |
| clearable | boolean | - | If set, clear button is displayed in the <code>rightSection</code> when the component has value. Ignored if <code>rightSection</code> prop is set. |
| closeOnChange | boolean | - | Determines whether the dropdown is closed when date is selected, not applicable with <code>type="multiple"</code> |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as <code>numberOfColumns</code> if not set explicitly |
| date | string | Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string | ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | <code>dayjs</code> format for decade label or a function that returns decade label based on the date value |
| defaultDate | string | Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" | "year" | "decade" | - | Initial displayed level (uncontrolled) |
| defaultValue | DateValue | DatesRangeValue<DateValue> | DateValue[] | - | Default value for uncontrolled component |
| description | React.ReactNode | - | Contents of <code>Input.Description</code> component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the <code>Input.Description</code> component |
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| dropdownType | "popover" | "modal" | - | Type of the dropdown |
| enableKeyboardNavigation | boolean | - | Enable enhanced keyboard navigation (Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade navigation, Y key to open year view) |
| error | React.ReactNode | - | Contents of <code>Input.Error</code> component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the <code>Input.Error</code> component |
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
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of <code>Input.Label</code> component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the <code>Input.Label</code> component |
| labelSeparator | string | - | Separator between range value |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| level | "month" | "year" | "decade" | - | Current displayed level (controlled) |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in <code>YYYY-MM-DD</code> format or Date object |
| maxLevel | "month" | "year" | "decade" | - | - |
| minDate | string | Date | - | Minimum possible date in <code>YYYY-MM-DD</code> format or Date object |
| modalProps | Partial<Omit<ModalProps, "children">> | - | Props passed down to <code>Modal</code> component |
| monthLabelFormat | string | ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | <code>dayjs</code> format for months list |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button <code>aria-label</code> |
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
| pointer | boolean | - | Determines whether the input should have <code>cursor: pointer</code> style |
| popoverProps | Partial<Omit<PopoverProps, "children">> | - | Props passed down to <code>Popover</code> component |
| presets | DatePickerPreset<Type>[] | - | Predefined values to pick from |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button <code>aria-label</code> |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| readOnly | boolean | - | If set, the component value cannot be changed by the user |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | - | Component size |
| sortDates | boolean | - | Determines whether dates values should be sorted before <code>onChange</code> call, only applicable with type="multiple" |
| type | "range" | "multiple" | "default" | - | Picker type: range, multiple or default |
| value | DateValue | DatesRangeValue<DateValue> | DateValue[] | - | Value for controlled component |
| valueFormat | string | - | <code>dayjs</code> format for input value |
| valueFormatter | DateFormatter | - | A function to format selected dates values into a string. By default, date is formatted based on the input type. |
| weekdayFormat | string | ((date: string) => string) | - | <code>dayjs</code> format for weekdays names |
| weekendDays | (0 | 1 | 2 | 3 | 4 | 5 | 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by <code>DatesProvider</code>. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |
| yearLabelFormat | string | ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |


#### Styles API

DatePickerInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**DatePickerInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-DatePickerInput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-DatePickerInput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-DatePickerInput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-DatePickerInput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-DatePickerInput-levelsGroup | Group of months levels |
| yearsList | .mantine-DatePickerInput-yearsList | Years list table element |
| yearsListRow | .mantine-DatePickerInput-yearsListRow | Years list row element |
| yearsListCell | .mantine-DatePickerInput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-DatePickerInput-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-DatePickerInput-monthsList | Months list table element |
| monthsListRow | .mantine-DatePickerInput-monthsListRow | Months list row element |
| monthsListCell | .mantine-DatePickerInput-monthsListCell | Months list cell element |
| monthsListControl | .mantine-DatePickerInput-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-DatePickerInput-monthThead | thead element of month table |
| monthRow | .mantine-DatePickerInput-monthRow | tr element of month table |
| monthTbody | .mantine-DatePickerInput-monthTbody | tbody element of month table |
| monthCell | .mantine-DatePickerInput-monthCell | td element of month table |
| month | .mantine-DatePickerInput-month | Month table element |
| weekdaysRow | .mantine-DatePickerInput-weekdaysRow | Weekdays tr element |
| weekday | .mantine-DatePickerInput-weekday | Weekday th element |
| day | .mantine-DatePickerInput-day | Month day control |
| weekNumber | .mantine-DatePickerInput-weekNumber | Week number td element |
| datePickerRoot | .mantine-DatePickerInput-datePickerRoot | Date picker root element, contains calendar and presets |
| presetsList | .mantine-DatePickerInput-presetsList | Presets wrapper element |
| presetButton | .mantine-DatePickerInput-presetButton | Preset button |
| placeholder | .mantine-DatePickerInput-placeholder | Placeholder element |