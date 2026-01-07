# TextInput
Package: @mantine/core
Import: import { TextInput } from '@mantine/core';
Description: Capture string input from user

## Usage

<InputFeatures component="TextInput" element="input" />

TextInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. TextInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      
      placeholder="Input placeholder"
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

<InputSections component="TextInput" />

## Input sections

TextInput supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={16} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}
```


## Error state

#### Example: error

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput label="Boolean error" placeholder="Boolean error" error />
      <TextInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```


## Disabled state

#### Example: disabled

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```


#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      
    />
  );
}
```


<GetElementRef component="TextInput" refType="input" />

## Get element ref

```tsx
import { useRef } from 'react';
import { TextInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <TextInput ref={ref} />;
}
```

<InputAccessibility component="TextInput" />

## Accessibility

TextInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


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
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

TextInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**TextInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-TextInput-wrapper | Root element of the Input |
| input | .mantine-TextInput-input | Input element |
| section | .mantine-TextInput-section | Left and right sections |
| root | .mantine-TextInput-root | Root element |
| label | .mantine-TextInput-label | Label element |
| required | .mantine-TextInput-required | Required asterisk element, rendered inside label |
| description | .mantine-TextInput-description | Description element |
| error | .mantine-TextInput-error | Error element |