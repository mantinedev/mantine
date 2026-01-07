# Textarea
Package: @mantine/core
Import: import { Textarea } from '@mantine/core';
Description: Autosize or regular textarea

## Usage

<InputFeatures component="Textarea" element="textarea" />

Textarea component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all textarea element props. Textarea documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      
      placeholder="Input placeholder"
    />
  );
}
```


## Controlled

```tsx
import { useState } from 'react';
import { Textarea } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <Textarea
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Autosize

Autosize textarea uses [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize) package.
Textarea height will grow until maxRows are reached or indefinitely if maxRows not set.

#### Example: autosize

```tsx
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}
```


## Enable resize

By default, [resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) is `none`,
to enable it set `resize` prop to `vertical` or `both`:

#### Example: resize

```tsx
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
```


## Error state

#### Example: error

```tsx
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea label="Boolean error" placeholder="Boolean error" error />
      <Textarea
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
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
```


#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      autosize
      
    />
  );
}
```


<GetElementRef component="Textarea" refType="textarea" />

## Get element ref

```tsx
import { useRef } from 'react';
import { Textarea } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLTextAreaElement>(null);
  return <Textarea ref={ref} />;
}
```

<InputAccessibility component="Textarea" />

## Accessibility

Textarea provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autosize | boolean | - | If set, enables textarea height growing with its content |
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
| maxRows | number | - | Maximum rows for autosize textarea to grow, ignored if <code>autosize</code> prop is not set |
| minRows | number | - | Minimum rows of autosize textarea, ignored if <code>autosize</code> prop is not set |
| pointer | boolean | - | Determines whether the input should have <code>cursor: pointer</code> style |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| resize | Resize | - | Controls <code>resize</code> CSS property |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input <code>height</code> and horizontal <code>padding</code> |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides <code>required</code> prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

Textarea component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Textarea selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Textarea-wrapper | Root element of the Input |
| input | .mantine-Textarea-input | Input element |
| section | .mantine-Textarea-section | Left and right sections |
| root | .mantine-Textarea-root | Root element |
| label | .mantine-Textarea-label | Label element |
| required | .mantine-Textarea-required | Required asterisk element, rendered inside label |
| description | .mantine-Textarea-description | Description element |
| error | .mantine-Textarea-error | Error element |