# YearPicker
Package: @mantine/dates
Import: import { YearPicker } from '@mantine/dates';
Description: Inline year, multiple years and years range picker

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

Use the `presets` prop to add custom year presets. Presets are displayed next to the calendar:

```tsx
import dayjs from 'dayjs';
import { YearPicker } from '@mantine/dates';

function Demo() {
  return (
    <YearPicker
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
import { YearPicker } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <YearPicker
      type="range"
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


## Default date

Use the `defaultDate` prop to set the date value that will be used to determine which decade should be displayed initially.
For example, to display the `2040 – 2049` decade, set `defaultDate={new Date(2040, 1)}`. If the value is not specified,
then `defaultDate` will use `new Date()`. Month, day, minutes and seconds are ignored in the provided date object, only the year is used –
you can specify any date value.

Note that if you set the `date` prop, then the `defaultDate` value will be ignored.

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker defaultDate="2040-02-01" value={value} onChange={setValue} />;
}
```


## Controlled date

Set the `date` and `onDateChange` props to make the currently displayed decade controlled.
By doing so, you can customize the date picking experience. For example, when the user selects the first date in a range,
you can add 20 years to the current date value:

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

Set the `minDate` and `maxDate` props to define minimum and maximum dates. If the previous/next page is not available,
then the corresponding control will be disabled.

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

You can add props to year controls with the `getYearControlProps` function. It accepts a year date as a single argument,
and props returned from the function will be added to the year control. For example, it can be used to disable a specific
control or add styles:

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

Set the `numberOfColumns` prop to define the number of pickers that will be rendered side by side:



## Full width

Set the `fullWidth` prop to make the year picker stretch to fill 100% of its parent container width:

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker fullWidth value={value} onChange={setValue} />;
}
```


## Size



## Change year controls format

Use `yearsListFormat` to change the [dayjs format](https://day.js.org/docs/en/display/format) of the year control:

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
```


## Change decade label format

Use `decadeLabelFormat` to change the [dayjs format](https://day.js.org/docs/en/display/format) of the decade label:

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

Set the `ariaLabels` prop to specify `aria-label` attributes for next/previous controls:

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

Use `getYearControlProps` to customize the `aria-label` attribute:

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

Note that the following events will only trigger if focus is on a year control.


#### Props

**YearPicker props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" |
| allowSingleDateInRange | boolean | - | Determines whether a single day can be selected as range, applicable only when type="range" |
| ariaLabels | CalendarAriaLabels | - | `aria-label` attributes for controls on different levels |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as `numberOfColumns` if not set explicitly |
| date | string \| Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string \| ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | `dayjs` format for decade label or a function that returns decade label based on the date value |
| defaultDate | string \| Date | - | Initial displayed date in uncontrolled mode |
| defaultValue | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Default value for uncontrolled component |
| fullWidth | boolean | - | Determines whether the list should take the full width of its container |
| getYearControlProps | (date: string) => Partial<PickerControlProps> & DataAttributes | - | Passes props down to year picker control based on date |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string \| Date | - | Maximum possible date in `YYYY-MM-DD` format or Date object |
| minDate | string \| Date | - | Minimum possible date in `YYYY-MM-DD` format or Date object |
| nextLabel | string | - | Next button `aria-label` |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue<Type, string>) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| onYearSelect | (date: string) => void | - | Called when year is selected |
| presets | YearPickerPreset<Type>[] | - | Predefined values to pick from |
| previousLabel | string | - | Previous button `aria-label` |
| size | MantineSize | - | Component size |
| type | "range" \| "multiple" \| "default" | - | Picker type: range, multiple or default |
| value | DateValue \| DatesRangeValue<DateValue> \| DateValue[] | - | Value for controlled component |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| yearsListFormat | string | - | dayjs format for years list |

**YearPicker.Input props**

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
| yearPickerRoot | .mantine-YearPicker-yearPickerRoot | Year picker root element, contains calendar and presets |
| presetsList | .mantine-YearPicker-presetsList | Presets wrapper element |
| presetButton | .mantine-YearPicker-presetButton | Preset button |

**YearPicker CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| yearPickerRoot | --preset-font-size | Controls font size of preset buttons |

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
| yearPickerRoot | .mantine-YearPickerinput-yearPickerRoot | Year picker root element, contains calendar and presets |
| presetsList | .mantine-YearPickerinput-presetsList | Presets wrapper element |
| presetButton | .mantine-YearPickerinput-presetButton | Preset button |
| placeholder | .mantine-YearPickerinput-placeholder | Placeholder element |
