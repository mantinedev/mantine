# TimeInput
Package: @mantine/dates
Import: import { TimeInput } from '@mantine/dates';
Description: Capture time from the user

## Usage

<InputFeatures component="TimeInput" element="input" />

TimeInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. TimeInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
      
    />
  );
}
```


## TimePicker component

`TimeInput` component is based on the native `input[type="time"]` element and does not support
most of advanced features like choosing time format or custom dropdown with time select. If you need
more features, use [TimePicker](https://mantine.dev/dates/time-picker) component instead.

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

You can show browser picker by calling `showPicker` method of input element.
Note that some browsers (desktop Safari) do not support this feature and the
method will do nothing.

#### Example: picker

```tsx
import { useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}
```


## With seconds

#### Example: withSeconds

```tsx
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
```


## With icon

#### Example: icon

```tsx
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput leftSection={<IconClock size={16} stroke={1.5} />} />;
}
```


## Disabled state

#### Example: disabled

```tsx
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
```


<GetElementRef component="TimeInput" refType="input" package="@mantine/dates" />

## Get element ref

```tsx
import { useRef } from 'react';
import { TimeInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <TimeInput ref={ref} />;
}
```

<InputAccessibility component="TimeInput" packageName="@mantine/dates" />

## Accessibility

TimeInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | React.ReactNode | - | Contents of <code>Input.Description</code> component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the <code>Input.Description</code> component |
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| error | React.ReactNode | - | Contents of <code>Input.Error</code> component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the <code>Input.Error</code> component |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of <code>Input.Label</code> component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the <code>Input.Label</code> component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| maxTime | string | - | Maximum possible string time, if <code>withSeconds</code> is true, time should be in format HH:mm:ss, otherwise HH:mm |
| minTime | string | - | Minimum possible string time, if <code>withSeconds</code> is true, time should be in format HH:mm:ss, otherwise HH:mm |
| pointer | boolean | - | Determines whether the input should have <code>cursor: pointer</code> style |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input <code>height</code> and horizontal <code>padding</code> |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| withSeconds | boolean | - | Determines whether seconds input should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |