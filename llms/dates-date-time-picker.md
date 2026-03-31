# DateTimePicker
Package: @mantine/dates
Import: import { DateTimePicker } from '@mantine/dates';
Description: Capture datetime from the user

## DatePicker props

`DateTimePicker` supports most of the [DatePicker](https://mantine.dev/llms/dates-date-picker.md) props.
Read through the [DatePicker](https://mantine.dev/llms/dates-date-picker.md) documentation to learn about all component features that are not listed on this page.

## Usage

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />;
}
```


## With seconds

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}
```


## Presets

Use the `presets` prop to add custom date presets. Presets are displayed next to the calendar:

```tsx
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD HH:mm:ss'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD HH:mm:ss'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Next year' },
        {
          value: dayjs().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss'),
          label: 'Last month',
        },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Last year' },
      ]}
    />
  );
}
```


## TimePicker props

You can pass props down to the underlying [TimePicker](https://mantine.dev/llms/dates-time-picker.md) component
with the `timePickerProps` prop. Example of enabling dropdown and setting `12h` format
for the time picker:

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      timePickerProps={{
        withDropdown: true,
        popoverProps: { withinPortal: false },
        format: '12h',
      }}
    />
  );
}
```


## Value format

Use the `valueFormat` prop to change the [dayjs format](https://day.js.org/docs/en/display/format) of the value label:

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
```


## Disabled state

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
```


## Input props

DateTimePicker component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all button element props. DateTimePicker documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { DateTimePicker } from '@mantine/dates';


function Demo() {
  return (
    <DateTimePicker
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      placeholder="Input placeholder"
    />
  );
}
```


## Clearable

Set the `clearable` prop to display a clear button in the right section. Note that if you set the `rightSection`
prop, the clear button will not be displayed.

```tsx
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
```


```tsx
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DateTimePicker
        label="clearSectionMode='both' (default)"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <DateTimePicker
        label="clearSectionMode='rightSection'"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <DateTimePicker
        label="clearSectionMode='clear'"
        placeholder="Pick date and time"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
```


## Open picker in modal

By default, the picker is rendered inside [Popover](https://mantine.dev/llms/core-popover.md).
You can change that to [Modal](https://mantine.dev/llms/core-modal.md) by setting `dropdownType="modal"`:

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="modal"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
```


## Accessibility

DateTimePicker provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

**DateTimePicker props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ariaLabels | CalendarAriaLabels | - | `aria-label` attributes for controls on different levels |
| clearButtonProps | React.ComponentProps<"button"> | - | Props passed down to the clear button |
| clearSectionMode | ClearSectionMode | - | Determines how the clear button and rightSection are rendered |
| clearable | boolean | - | If set, clear button is displayed in the `rightSection` when the component has value. Ignored if `rightSection` prop is set. |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as `numberOfColumns` if not set explicitly |
| date | string \| Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string \| ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | `dayjs` format for decade label or a function that returns decade label based on the date value |
| defaultDate | string \| Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" \| "year" \| "decade" | - | Initial displayed level in uncontrolled mode |
| defaultTimeValue | string | - | Default time value in HH:mm` or `HH:mm:ss` format. Assigned to time when date is selected. |
| defaultValue | DateValue | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| dropdownType | "popover" \| "modal" | - | Type of the dropdown |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| excludeDate | (date: string) => boolean | - | Callback function to determine whether the day should be disabled |
| firstDayOfWeek | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 | - | Number 0-6, where 0 – Sunday and 6 – Saturday. |
| fullWidth | boolean | - | Determines whether the calendar should take the full width of its container |
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
| level | "month" \| "year" \| "decade" | - | Current displayed level displayed in controlled mode |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string \| Date | - | Maximum possible date in `YYYY-MM-DD` format or Date object |
| maxLevel | "month" \| "year" \| "decade" | - | Max level that user can go up to |
| minDate | string \| Date | - | Minimum possible date in `YYYY-MM-DD` format or Date object |
| modalProps | Partial<Omit<ModalProps, "children">> | - | Props passed down to `Modal` component |
| monthLabelFormat | string \| ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | `dayjs` format for months list |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button `aria-label` |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: string \| null) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onDropdownClose | () => void | - | Called when the dropdown is closed |
| onLevelChange | (level: CalendarLevel) => void | - | Called when level changes |
| onMonthSelect | (date: string) => void | - | Called when user selects month |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onNextMonth | (date: string) => void | - | Called when the next month button is clicked |
| onNextYear | (date: string) => void | - | Called when the next year button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| onPreviousMonth | (date: string) => void | - | Called when the previous month button is clicked |
| onPreviousYear | (date: string) => void | - | Called when the previous year button is clicked |
| onYearSelect | (date: string) => void | - | Called when user selects year |
| placeholder | string | - | Input placeholder |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| popoverProps | Partial<Omit<PopoverProps, "children">> | - | Props passed down to `Popover` component |
| presets | DatePickerPreset<"default">[] | - | Presets values |
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
| submitButtonProps | ActionIconProps & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement> | - | Props passed down to the submit button |
| timePickerProps | Omit<TimePickerProps, "value" \| "defaultValue"> | - | Props passed down to `TimePicker` component |
| value | DateValue | - | Controlled component value |
| valueFormat | string | - | `dayjs` format for input value |
| weekdayFormat | string \| ((date: string) => string) | - | `dayjs` format for weekdays names |
| weekendDays | (0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6)[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withSeconds | boolean | - | Determines whether the seconds input should be displayed |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |
| yearLabelFormat | string \| ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |


#### Styles API

DateTimePicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**DateTimePicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-DateTimePicker-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-DateTimePicker-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-DateTimePicker-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-DateTimePicker-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-DateTimePicker-levelsGroup | Group of months levels |
| yearsList | .mantine-DateTimePicker-yearsList | Years list table element |
| yearsListRow | .mantine-DateTimePicker-yearsListRow | Years list row element |
| yearsListCell | .mantine-DateTimePicker-yearsListCell | Years list cell element |
| yearsListControl | .mantine-DateTimePicker-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-DateTimePicker-monthsList | Months list table element |
| monthsListRow | .mantine-DateTimePicker-monthsListRow | Months list row element |
| monthsListCell | .mantine-DateTimePicker-monthsListCell | Months list cell element |
| monthsListControl | .mantine-DateTimePicker-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-DateTimePicker-monthThead | thead element of month table |
| monthRow | .mantine-DateTimePicker-monthRow | tr element of month table |
| monthTbody | .mantine-DateTimePicker-monthTbody | tbody element of month table |
| monthCell | .mantine-DateTimePicker-monthCell | td element of month table |
| month | .mantine-DateTimePicker-month | Month table element |
| weekdaysRow | .mantine-DateTimePicker-weekdaysRow | Weekdays tr element |
| weekday | .mantine-DateTimePicker-weekday | Weekday th element |
| day | .mantine-DateTimePicker-day | Month day control |
| weekNumber | .mantine-DateTimePicker-weekNumber | Week number td element |
| datePickerRoot | .mantine-DateTimePicker-datePickerRoot | Date picker root element, contains calendar and presets |
| presetsList | .mantine-DateTimePicker-presetsList | Presets wrapper element |
| presetButton | .mantine-DateTimePicker-presetButton | Preset button |
| placeholder | .mantine-DateTimePicker-placeholder | Placeholder element |
| timeWrapper | .mantine-DateTimePicker-timeWrapper | Wrapper around time input and submit button |
| timeInput | .mantine-DateTimePicker-timeInput | TimeInput |
| submitButton | .mantine-DateTimePicker-submitButton | Submit button |
