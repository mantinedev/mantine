# FileInput
Package: @mantine/core
Import: import { FileInput } from '@mantine/core';
Description: Capture files from user

## Usage

<InputFeatures component="FileInput" element="input" />

FileInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. FileInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      
      placeholder="Input placeholder"
    />
  );
}
```


## Controlled

When `multiple` is `false`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File | null>(null);
  return <FileInput value={value} onChange={setValue} />;
}
```

When `multiple` is `true`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File[]>([]);
  return <FileInput multiple value={value} onChange={setValue} />;
}
```

## Multiple

Set `multiple` to allow user to pick more than one file:

#### Example: multiple

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
```


## Accept

Set `accept` prop to restrict files selection to specific mime types:

#### Example: accept

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
```


## Clearable

Set `clearable` prop to display clear button in the right section of the input
when file is selected. Note that if you define custom right section, clear button
will not be rendered.

#### Example: clearable

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
```


## Custom value component

#### Example: valueComponent

```tsx
import { FileInput, FileInputProps, Pill } from '@mantine/core';

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function Demo() {
  return (
    <FileInput
      label="Upload files"
      placeholder="Upload files"
      multiple
      valueComponent={ValueComponent}
    />
  );
}
```


## Error state

#### Example: error

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
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
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```


<InputSections component="FileInput" />

## Input sections

FileInput supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { FileInput } from '@mantine/core';
import { IconFileCv } from '@tabler/icons-react';

function Demo() {
  const icon = <IconFileCv size={18} stroke={1.5} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
```


#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      
    />
  );
}
```


<GetElementRef component="FileInput" refType="button" />

## Get element ref

```tsx
import { useRef } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <FileInput ref={ref} />;
}
```

<InputAccessibility component="FileInput" />

## Accessibility

FileInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

## FileInputProps type

`FileInputProps` type is a generic interface which accepts a single type argument:
`multiple` value.

```tsx
import type { FileInputProps } from '@mantine/core';

type SingleInputProps = FileInputProps<false>;
type MultipleInputProps = FileInputProps<true>;
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accept | string | - | File input accept attribute, for example, <code>"image/png,image/jpeg"</code> |
| capture | boolean | "user" | "environment" | - | Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. |
| clearButtonProps | React.ComponentPropsWithoutRef<"button"> | - | Props passed down to the clear button |
| clearable | boolean | - | If set, the clear button is displayed in the right section |
| defaultValue | File | File[] | null | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of <code>Input.Description</code> component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the <code>Input.Description</code> component |
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| error | React.ReactNode | - | Contents of <code>Input.Error</code> component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the <code>Input.Error</code> component |
| fileInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input element which is used to capture files |
| form | string | - | Input form attribute |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of <code>Input.Label</code> component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the <code>Input.Label</code> component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| multiple | boolean | - | If set, user can pick more than one file |
| name | string | - | Input name attribute |
| onChange | (payload: Multiple extends true ? File[] : File | null) => void | - | Called when value changes |
| placeholder | React.ReactNode | - | Input placeholder |
| pointer | boolean | - | Determines whether the input should have <code>cursor: pointer</code> style |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| readOnly | boolean | - | If set, the input value cannot be changed |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| resetRef | ForwardedRef<() => void> | - | Reference of the function that should be called when value changes to null or empty array |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input <code>height</code> and horizontal <code>padding</code> |
| value | File | File[] | null | - | Controlled component value |
| valueComponent | FC<{ value: File | File[] | null; }> | - | Value renderer. By default, displays file name. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

FileInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**FileInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-FileInput-wrapper | Root element of the Input |
| input | .mantine-FileInput-input | Input element |
| section | .mantine-FileInput-section | Left and right sections |
| root | .mantine-FileInput-root | Root element |
| label | .mantine-FileInput-label | Label element |
| required | .mantine-FileInput-required | Required asterisk element, rendered inside label |
| description | .mantine-FileInput-description | Description element |
| error | .mantine-FileInput-error | Error element |
| placeholder | .mantine-FileInput-placeholder | Placeholder text |