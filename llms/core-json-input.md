# JsonInput
Package: @mantine/core
Import: import { JsonInput } from '@mantine/core';
Description: Capture json data from user

## Usage

`JsonInput` is based on [Textarea](https://mantine.dev/core/textarea/) component,
it includes json validation logic and option to format input value on blur:

#### Example: usage

```tsx
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { JsonInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <JsonInput value={value} onChange={setValue} />;
}
```

## Input props

<InputFeatures component="JsonInput" element="textarea" />

JsonInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all textarea element props. JsonInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { JsonInput } from '@mantine/core';


function Demo() {
  return (
    <JsonInput
      
      placeholder="Input placeholder"
    />
  );
}
```


## Disabled state

#### Example: disabled

```tsx
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
```


#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      autosize
      
    />
  );
}
```


<GetElementRef component="JsonInput" refType="textarea" />

## Get element ref

```tsx
import { useRef } from 'react';
import { JsonInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLTextAreaElement>(null);
  return <JsonInput ref={ref} />;
}
```

<InputAccessibility component="JsonInput" />

## Accessibility

JsonInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autosize | boolean | - | If set, enables textarea height growing with its content |
| defaultValue | string | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of <code>Input.Description</code> component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the <code>Input.Description</code> component |
| deserialize | ((text: string, reviver?: ((this: any, key: string, value: any) => any)) => any) | undefined | - | Function to deserialize string value, used for value formatting and input JSON validation, must throw error if string cannot be processed |
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| error | React.ReactNode | - | Contents of <code>Input.Error</code> component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the <code>Input.Error</code> component |
| formatOnBlur | boolean | - | Determines whether the value should be formatted on blur |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of <code>Input.Label</code> component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the <code>Input.Label</code> component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| maxRows | number | - | Maximum rows for autosize textarea to grow, ignored if <code>autosize</code> prop is not set |
| minRows | number | - | Minimum rows of autosize textarea, ignored if <code>autosize</code> prop is not set |
| onChange | (value: string) => void | - | Called when value changes |
| pointer | boolean | - | Determines whether the input should have <code>cursor: pointer</code> style |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| resize | Resize | - | Controls <code>resize</code> CSS property |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| serialize | { (value: any, replacer?: ((this: any, key: string, value: any) => any), space?: string | number | undefined): string; (value: any, replacer?: (string | number)[] | null | undefined, space?: string | ... 1 more ... | undefined): string; } | undefined | - | Function to serialize value into a string, used for value formatting |
| size | MantineSize | (string & {}) | - | Controls input <code>height</code> and horizontal <code>padding</code> |
| validationError | React.ReactNode | - | Error message displayed when value is not valid JSON |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

JsonInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**JsonInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-JsonInput-wrapper | Root element of the Input |
| input | .mantine-JsonInput-input | Input element |
| section | .mantine-JsonInput-section | Left and right sections |
| root | .mantine-JsonInput-root | Root element |
| label | .mantine-JsonInput-label | Label element |
| required | .mantine-JsonInput-required | Required asterisk element, rendered inside label |
| description | .mantine-JsonInput-description | Description element |
| error | .mantine-JsonInput-error | Error element |