# TimeInput
Package: @mantine/dates
Import: import { TimeInput } from '@mantine/dates';
Description: Capture time from the user

## Usage

TimeInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. TimeInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
    />
  );
}
```


## TimePicker component

The `TimeInput` component is based on the native `input[type="time"]` element and does not support
most advanced features like choosing time format or custom dropdown with time select. If you need
more features, use the [TimePicker](https://mantine.dev/llms/dates-time-picker.md) component instead.

`TimeInput` features/limitations:

* Native `input[type="time"]` element
* Native browser controls for time selection on mobile devices
* Time format depends on the user's locale
* Only native dropdown with hours/minutes/seconds, does not work in Firefox
* Mobile Safari does not provide an option to select seconds

## Controlled

```tsx
import { useState } from 'react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <TimeInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Show browser picker

You can show the browser picker by calling the `showPicker` method of the input element.
Note that some browsers (desktop Safari) do not support this feature and the
method will do nothing.

```tsx
import { useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { ClockIcon } from '@phosphor-icons/react';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <ClockIcon size={16} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}
```


## With seconds

```tsx
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
```


## With icon

```tsx
import { ClockIcon } from '@phosphor-icons/react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput leftSection={<ClockIcon size={16} />} />;
}
```


## Disabled state

```tsx
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
```


## Accessibility

TimeInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

**TimeInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
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
| maxTime | string | - | Maximum possible string time, if `withSeconds` is true, time should be in format HH:mm:ss, otherwise HH:mm |
| minTime | string | - | Minimum possible string time, if `withSeconds` is true, time should be in format HH:mm:ss, otherwise HH:mm |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| withSeconds | boolean | - | Determines whether seconds input should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |