# YearPickerInput
Package: @mantine/dates
Import: import { YearPickerInput } from '@mantine/dates';
Description: Inline year, multiple years and years range picker

## YearPicker props

`YearPickerInput` supports most of the [YearPicker](https://mantine.dev/llms/dates-year-picker.md) props.
Read through the [YearPicker](https://mantine.dev/llms/dates-year-picker.md) documentation to learn about all component features that are not listed on this page.

## Usage



## Multiple dates

Set `type="multiple"` to allow users to pick multiple dates:



## Dates range

Set `type="range"` to allow users to pick a date range:



## Presets

Use the `presets` prop to add custom year presets. Presets are displayed next to the calendar:

```tsx
import dayjs from 'dayjs';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      label="With presets"
      placeholder="Select year"
      presets={[
        { value: dayjs().startOf('year').format('YYYY-MM-DD'), label: 'This year' },
        { value: dayjs().add(1, 'year').startOf('year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'), label: 'Last year' },
        { value: dayjs().add(5, 'year').startOf('year').format('YYYY-MM-DD'), label: 'In 5 years' },
        { value: dayjs().subtract(5, 'year').startOf('year').format('YYYY-MM-DD'), label: '5 years ago' },
      ]}
    />
  );
}
```


To use `presets` with `type="range"`, define the value as a tuple of two dates:

```tsx
import dayjs from 'dayjs';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <YearPickerInput
      type="range"
      label="With presets"
      placeholder="Select years range"
      presets={[
        {
          value: [today.subtract(2, 'year').startOf('year').format('YYYY-MM-DD'), today.startOf('year').format('YYYY-MM-DD')],
          label: 'Last 2 years',
        },
        {
          value: [today.subtract(5, 'year').startOf('year').format('YYYY-MM-DD'), today.startOf('year').format('YYYY-MM-DD')],
          label: 'Last 5 years',
        },
        {
          value: [today.startOf('year').format('YYYY-MM-DD'), today.add(5, 'year').startOf('year').format('YYYY-MM-DD')],
          label: 'Next 5 years',
        },
        {
          value: [
            today.subtract(10, 'year').startOf('year').format('YYYY-MM-DD'),
            today.startOf('year').format('YYYY-MM-DD'),
          ],
          label: 'Last decade',
        },
      ]}
    />
  );
}
```


## Open picker in modal

By default, [YearPicker](https://mantine.dev/llms/dates-year-picker.md) is rendered inside [Popover](https://mantine.dev/llms/core-popover.md).
You can change that to [Modal](https://mantine.dev/llms/core-modal.md) by setting `dropdownType="modal"`:



## Value format

Use the `valueFormat` prop to change the [dayjs format](https://day.js.org/docs/en/display/format) of the value label:

```tsx
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
  );
}
```


## Value formatter

`valueFormatter` is a more powerful alternative to the `valueFormat` prop.
It allows formatting the value label with a custom function.
The function is the same for all component types (`default`, `multiple` and `range`)
– you need to perform additional checks inside the function to handle different types.

Example of using a custom formatter function with `type="multiple"`:



## Clearable

Set the `clearable` prop to display a clear button in the right section. Note that if you set the `rightSection`
prop, the clear button will not be displayed.



```tsx
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <YearPickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick year"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <YearPickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick year"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <YearPickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick year"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
```


## Disabled state

```tsx
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Disabled"
      placeholder="Pick year"
      disabled
    />
  );
}
```


## Min and max dates

`minDate` and `maxDate` props define the minimum and maximum dates that can be picked.
You can specify `minDate` and `maxDate` as `Date` objects:

```tsx
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPickerInput
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
      minDate={new Date(2021, 1)}
      maxDate={new Date(2028, 1)}
    />
  );
}
```


## Control props

`getYearControlProps` prop allows passing props to the control component based on the date.
It is useful for disabling specific dates or customising styles/className.

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearPickerInput, YearPickerInputProps } from '@mantine/dates';

const getYearControlProps: YearPickerInputProps['getYearControlProps'] = (date) => {
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
  return (
    <YearPickerInput
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
      getYearControlProps={getYearControlProps}
    />
  );
}
```


## Year label format

`yearsListFormat` props allow changing the format of the year label in the years list.
It accepts a [dayjs format string](https://day.js.org/docs/en/display/format).

```tsx
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPickerInput
      yearsListFormat="YY"
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
    />
  );
}
```


## Decade label format

`decadeLabelFormat` prop allows changing the format of the decade label in the header.
It accepts a [dayjs format string](https://day.js.org/docs/en/display/format).

```tsx
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPickerInput
      decadeLabelFormat="YY"
      label="Pick year"
      placeholder="Pick year"
      value={value}
      onChange={setValue}
    />
  );
}
```


## Input props

MonthPickerInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all button element props. MonthPickerInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.



## With icon



## Accessibility

YearPickerInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

**YearPickerInput props**

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
| defaultValue | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Default value for uncontrolled component |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| dropdownType | "popover" \| "modal" | - | Type of the dropdown |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| fullWidth | boolean | - | Determines whether the list should take the full width of its container |
| getYearControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down to year picker control based on date |
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
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string \| Date | - | Maximum possible date in `YYYY-MM-DD` format or Date object |
| minDate | string \| Date | - | Minimum possible date in `YYYY-MM-DD` format or Date object |
| modalProps | Partial<Omit<ModalProps, "children">> | - | Props passed down to `Modal` component |
| nextLabel | string | - | Next button `aria-label` |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue<Type, string>) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onDropdownClose | () => void | - | Called when the dropdown is closed |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| placeholder | string | - | Input placeholder |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| popoverProps | Partial<Omit<PopoverProps, "children">> | - | Props passed down to `Popover` component |
| presets | YearPickerPreset<Type>[] | - | Predefined values to pick from |
| previousLabel | string | - | Previous button `aria-label` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| readOnly | boolean | - | If set, the component value cannot be changed by the user |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Component size |
| sortDates | boolean | - | Determines whether dates values should be sorted before `onChange` call, only applicable with type="multiple" |
| type | "range" \| "multiple" \| "default" | - | Picker type: range, multiple or default |
| value | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Value for controlled component |
| valueFormat | string | - | `dayjs` format to display input value |
| valueFormatter | DateFormatter | - | A function to format selected dates values into a string. By default, date is formatted based on the input type. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |
| yearsListFormat | string | - | dayjs format for years list |


#### Styles API

YearPickerInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**YearPickerInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-YearPickerInput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-YearPickerInput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-YearPickerInput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-YearPickerInput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-YearPickerInput-levelsGroup | Group of decades levels |
| yearsList | .mantine-YearPickerInput-yearsList | Years list table element |
| yearsListRow | .mantine-YearPickerInput-yearsListRow | Years list row element |
| yearsListCell | .mantine-YearPickerInput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-YearPickerInput-yearsListControl | Button used to pick months and years |
| yearPickerRoot | .mantine-YearPickerInput-yearPickerRoot | Year picker root element, contains calendar and presets |
| presetsList | .mantine-YearPickerInput-presetsList | Presets wrapper element |
| presetButton | .mantine-YearPickerInput-presetButton | Preset button |
| placeholder | .mantine-YearPickerInput-placeholder | Placeholder element |
