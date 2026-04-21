# TimePicker
Package: @mantine/dates
Import: import { TimePicker } from '@mantine/dates';
Description: Captures time value from the user

## Usage

The `TimePicker` component is an alternative to [TimeInput](https://mantine.dev/llms/dates-time-input.md) that offers more
features. It supports 24-hour and 12-hour formats, a dropdown with hours, minutes and seconds, and
more.

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" />;
}
```


## Controlled

The `TimePicker` component value is a string in `hh:mm:ss` or `hh:mm` 24-hour format (for example `18:34:55`).
An empty string is used to represent no value. The `onChange` function is called only when the entered value is valid.
The input value is considered valid in the following cases:

* All inputs are empty. In this case, `onChange` is called with an empty string.
* All inputs are filled. For example, if the `withSeconds` prop is set and the user entered `12:34:56`, `onChange` will be called with `12:34:56`. But if the user entered `12:34`, `onChange` will not be called because the seconds value is missing.

```tsx
import { useState } from 'react';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState('');
  return <TimePicker value={value} onChange={setValue} />;
}
```

## With seconds

Set the `withSeconds` prop to enable seconds input. Note that if this prop is used,
`onChange` is not called until all inputs are filled – it is not possible
to enter only hours and minutes.

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" withSeconds />;
}
```


## Duration type

Set `type="duration"` to allow entering durations that exceed 24 hours.
In this mode, the hours field has no upper limit and the input width adjusts
dynamically based on the entered value. The `format` prop is ignored (always 24h)
and the dropdown is disabled.

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter duration" type="duration" withSeconds />;
}
```


## Min hours digits

Use the `minHoursDigits` prop to set the minimum number of digits displayed in the hours input.
This prop is only applicable when `type="duration"` is set. By default, the minimum is `2`.

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter duration"
      type="duration"
      withSeconds
      minHoursDigits={3}
    />
  );
}
```


## 12-hour format

Set `format="12h"` to use 12-hour format. Note that `onChange` is called only when all inputs are filled,
including the am/pm input.

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" format="12h" />;
}
```


## Change am/pm labels

To change am/pm labels, use the `amPmLabels` prop. Example of changing labels to Hindi:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker label="Enter time" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
  );
}
```


## Min and max values

Set the `min` and `max` props to limit the available time range:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" min="10:00" max="18:30" />
      <TimePicker label="Enter time (12h format)" min="10:00" max="18:30" format="12h" mt="md" />
    </>
  );
}
```


## With dropdown

Set the `withDropdown` prop to display a dropdown with hours, minutes, seconds and am/pm selects.
By default, the dropdown is visible when one of the inputs is focused.

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" withSeconds withDropdown />
      <TimePicker label="Enter time (12h format)" withSeconds withDropdown format="12h" mt="md" />
    </>
  );
}
```


## Hours/minutes/seconds step

Use `hoursStep`, `minutesStep` and `secondsStep` props to control step for each input.
These props are used to control value by which the input is incremented or decremented when
up/down arrow keys are pressed and to generate corresponding values range in the dropdown.

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withSeconds
      withDropdown
      hoursStep={1}
      minutesStep={5}
      secondsStep={10}
    />
  );
}
```


## Control dropdown opened state

Use `popoverProps` to pass props down to the underlying [Popover](https://mantine.dev/llms/core-popover.md) component:

```tsx
import { useState } from 'react';
import { ClockIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState('');

  return (
    <TimePicker
      withDropdown
      rightSection={
        <ActionIcon onClick={() => setDropdownOpened(true)} variant="default">
          <ClockIcon size={18} />
        </ActionIcon>
      }
      value={value}
      onChange={(val) => {
        setValue(val);
        if (value === '') {
          setDropdownOpened(false);
        }
      }}
      popoverProps={{
        opened: dropdownOpened,
        onChange: (_opened) => !_opened && setDropdownOpened(false),
      }}
    />
  );
}
```


## Time presets

You can define time presets with `presets` prop. Presets are displayed in the dropdown and can be selected by clicking on them.
Time values for presets should be in `hh:mm:ss` or `hh:mm` 24-hour time format. Presets
display value is generated based on `format`, `amPmLabels` and `withSeconds` props.

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={['12:30', '15:45', '18:00', '20:15', '22:30']}
    />
  );
}
```


## Time presets groups

To group presets use an array of objects with `label` and `values` keys:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      maxDropdownContentHeight={300}
      presets={[
        { label: 'Morning', values: ['06:00:00', '08:00:00', '10:00:00'] },
        { label: 'Afternoon', values: ['12:00:00', '14:00:00', '16:00:00'] },
        { label: 'Evening', values: ['18:00:00', '20:00:00', '22:00:00'] },
      ]}
    />
  );
}
```


## Time presets range

If you need to generate a range of time values, use `getTimeRange` function exported from
`@mantine/dates` package. The function accepts start, end time and interval in `hh:mm:ss` format.

```tsx
import { getTimeRange, TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={getTimeRange({ startTime: '06:00:00', endTime: '18:00:00', interval: '01:30:00' })}
    />
  );
}
```


## Dropdown position

By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.
You can change this behavior by setting `position` and `middlewares` props, which are passed down to the
underlying [Popover](https://mantine.dev/llms/core-popover.md) component.

Example of dropdown that is always displayed above the input:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      popoverProps={{
        position: 'top-start',
        middlewares: { flip: false, shift: false },
      }}
    />
  );
}
```


## Dropdown width

To change dropdown width, set `width` prop in `comboboxProps`. By default,
dropdown width is adjusted to fit all content. Example of dropdown width set
to the input width:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      withSeconds
      format="12h"
      popoverProps={{
        width: 'target',
      }}
    />
  );
}
```


## Paste events

By default, `TimePicker` handles only time in 24-hour format (for example `17:33:43` or `19:22`) for paste events.
With `pasteSplit` prop you can create a custom paste time parser:

```tsx
import { Code, Text } from '@mantine/core';
import { TimePicker, TimePickerPasteSplit } from '@mantine/dates';

const re = /^(1[0-2]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?\\s?(AM|PM)$/;

const customPasteSplit: TimePickerPasteSplit = ({ time }) => {
  if (!re.test(time)) {
    return { hours: null, minutes: null, seconds: null, amPm: null };
  }

  const [hours, minutes, second] = time.split(':').map((part) => part.replace(/AM|PM/g, ''));
  const isPm = time.toLowerCase().includes('pm');

  return {
    hours: typeof hours === 'string' ? Number(hours) : null,
    minutes: typeof minutes === 'string' ? Number(minutes) : null,
    seconds: typeof second === 'string' ? Number(second) : 0,
    amPm: isPm ? 'PM' : 'AM',
  };
};

function Demo() {
  return (
    <div>
      <TimePicker label="Paste time here" format="12h" withSeconds pasteSplit={customPasteSplit} />
      <Text mt="md">
        Try pasting time in 12h format in any input. For example, try pasting <Code>12:34 PM</Code>{' '}
        or <Code>8:56:45 AM</Code>
      </Text>
    </div>
  );
}
```


## Clearable

Set `clearable` prop to display a clear button in the right section of the input.
The clear button is visible when at least one of the fields has value.

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" clearable defaultValue="12:34:44" />;
}
```


```tsx
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <TimePicker
        label="clearSectionMode='both' (default)"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <TimePicker
        label="clearSectionMode='rightSection'"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <TimePicker
        label="clearSectionMode='clear'"
        defaultValue="12:30"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
```


## Disabled

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" disabled />;
}
```


## Read only

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" defaultValue="12:45:33" readOnly />;
}
```


## Input props

TimePicker component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all div element props. TimePicker documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { TimePicker } from '@mantine/dates';


function Demo() {
  return (
    <TimePicker
      withDropdown
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
    />
  );
}
```


## Get refs of inner inputs

Use `hoursRef`, `minutesRef`, `secondsRef` and `amPmRef` props to get refs of inner inputs:

```tsx
import { useRef } from 'react';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const amPmRef = useRef<HTMLSelectElement>(null);

  return (
    <TimePicker
      hoursRef={hoursRef}
      minutesRef={minutesRef}
      secondsRef={secondsRef}
      amPmRef={amPmRef}
    />
  );
}
```

## onFocus and onBlur events

`onFocus` and `onBlur` events are called when the first input is focused and the last input is blurred:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      onFocus={() => console.log('Focused')}
      onBlur={() => console.log('Blurred')}
    />
  );
}
```

## Accessibility

Set aria labels for hours, minutes, seconds and am/pm inputs and clear button with corresponding props:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      hoursInputLabel="Hours"
      minutesInputLabel="Minutes"
      secondsInputLabel="Seconds"
      amPmInputLabel="AM/PM"
      clearButtonProps={{ 'aria-label': 'Clear time' }}
    />
  );
}
```

Keyboard interactions:


#### Props

**TimePicker props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| amPmInputLabel | string | - | `aria-label` of am/pm input |
| amPmLabels | { am: string; pm: string } | - | Labels used for am/pm values |
| amPmRef | Ref<HTMLSelectElement> | - | A ref object to get node reference of the am/pm select |
| amPmSelectProps | ClassAttributes<HTMLSelectElement> & SelectHTMLAttributes<HTMLSelectElement> & DataAttributes | - | Props passed down to am/pm select |
| clearButtonProps | CloseButtonProps | - | Props passed down to clear button |
| clearSectionMode | ClearSectionMode | - | Determines how the clear button and rightSection are rendered |
| clearable | boolean | - | Determines whether the clear button should be displayed |
| defaultValue | string | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | If set, the component becomes disabled |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| form | string | - | `form` prop passed down to the hidden input |
| format | "12h" \| "24h" | - | Time format, `'24h'` by default |
| hiddenInputProps | ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & DataAttributes | - | Props passed down to the hidden input |
| hoursInputLabel | string | - | `aria-label` of hours input |
| hoursInputProps | ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & DataAttributes | - | Props passed down to hours input |
| hoursPlaceholder | string | - | Hours input placeholder, |
| hoursRef | Ref<HTMLInputElement> | - | A ref object to get node reference of the hours input |
| hoursStep | number | - | Number by which hours are incremented/decremented |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| max | string | - | Max possible time value in `hh:mm:ss` format |
| maxDropdownContentHeight | number | - | Maximum height of the content displayed in the dropdown in px |
| min | string | - | Min possible time value in `hh:mm:ss` format |
| minHoursDigits | number | - | Minimum number of digits displayed in the hours input, applicable only when `type="duration"` is set |
| minutesInputLabel | string | - | `aria-label` of minutes input |
| minutesInputProps | ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & DataAttributes | - | Props passed down to minutes input |
| minutesPlaceholder | string | - | Minutes input placeholder, |
| minutesRef | Ref<HTMLInputElement> | - | A ref object to get node reference of the minutes input |
| minutesStep | number | - | Number by which minutes are incremented/decremented |
| name | string | - | `name` prop passed down to the hidden input |
| onBlur | (event: FocusEvent<HTMLDivElement, Element>) => void | - | Called once when the focus is no longer on any of the inputs |
| onChange | (value: string) => void | - | Called when the value changes |
| onFocus | (event: FocusEvent<HTMLInputElement, Element>) => void | - | Called once when one of the inputs is focused, not called when focused is shifted between hours, minutes, seconds and am/pm inputs |
| pasteSplit | TimePickerPasteSplit | - | A function to transform paste values, by default time in 24h format can be parsed on paste for example `23:34:22` |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| popoverProps | PopoverProps | - | Props passed down to `Popover` component |
| presets | TimePickerPresets | - | Time presets to display in the dropdown |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| readOnly | boolean | - | If set, the value cannot be updated |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| reverseTimeControlsList | boolean | - | If set, the time controls list are reversed, |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| scrollAreaProps | ScrollAreaProps | - | Props passed down to all underlying `ScrollArea` components |
| secondsInputLabel | string | - | `aria-label` of seconds input |
| secondsInputProps | ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & DataAttributes | - | Props passed down to seconds input |
| secondsPlaceholder | string | - | Seconds input placeholder, |
| secondsRef | Ref<HTMLInputElement> | - | A ref object to get node reference of the seconds input |
| secondsStep | number | - | Number by which seconds are incremented/decremented |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| type | TimePickerType | - | TimePicker type, `'time'` for regular time input, `'duration'` for duration input that allows values greater than 24 hours |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withDropdown | boolean | - | Determines whether the dropdown with time controls list should be visible when the input has focus |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withSeconds | boolean | - | Determines whether the seconds input should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

TimePicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**TimePicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-TimePicker-wrapper | Root element of the Input |
| input | .mantine-TimePicker-input | Input element |
| section | .mantine-TimePicker-section | Left and right sections |
| root | .mantine-TimePicker-root | Root element |
| label | .mantine-TimePicker-label | Label element |
| required | .mantine-TimePicker-required | Required asterisk element, rendered inside label |
| description | .mantine-TimePicker-description | Description element |
| error | .mantine-TimePicker-error | Error element |
| control | .mantine-TimePicker-control | Button in the dropdown which is used to select hours/minutes/seconds/am-pm |
| controlsList | .mantine-TimePicker-controlsList | List of buttons with hours/minutes/seconds/am-pm |
| controlsListGroup | .mantine-TimePicker-controlsListGroup | Group of controlsLists |
| dropdown | .mantine-TimePicker-dropdown | Popover dropdown |
| fieldsRoot | .mantine-TimePicker-fieldsRoot | A wrapper element for all fieldsGroups |
| fieldsGroup | .mantine-TimePicker-fieldsGroup | A wrapper element for hours/minutes/seconds/am-pm fields |
| field | .mantine-TimePicker-field | Hours/minutes/seconds/am-pm input field |
| presetControl | .mantine-TimePicker-presetControl | Time preset button |
| presetsGroup | .mantine-TimePicker-presetsGroup | Wraps preset controls and label |
| presetsGroupLabel | .mantine-TimePicker-presetsGroupLabel | Labels of the preset group |
| presetsRoot | .mantine-TimePicker-presetsRoot | Element wrapping all presets content |
| scrollarea | .mantine-TimePicker-scrollarea | Scroll area in the dropdown |

**TimePicker CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| dropdown | --control-font-size | Controls `font-size` of dropdown controls |
