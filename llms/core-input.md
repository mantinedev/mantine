# Input
Package: @mantine/core
Import: import { Input } from '@mantine/core';
Description: Base component to create custom inputs

## Disclaimer

**!important:** In most cases, you should not use `Input` in your application.
`Input` is a base for other inputs and was not designed to be used directly.
Use `Input` to create custom inputs, for other cases prefer [TextInput](https://mantine.dev/core/text-input/)
or other component.

```tsx
import { Input, TextInput } from '@mantine/core';

// Incorrect usage, input is not accessible
function Incorrect() {
  return (
    <Input.Wrapper label="Input label">
      <Input />
    </Input.Wrapper>
  );
}

// Use TextInput instead of Input everywhere you want to use Input,
// it is accessible by default and includes Input.Wrapper
function Correct() {
  return (
    <TextInput label="Input label" description="Input description" />
  );
}
```

## Usage

`Input` component is used as base for some other inputs ([NativeSelect](https://mantine.dev/core/native-select/), [TextInput](https://mantine.dev/core/text-input/), [Textarea](https://mantine.dev/core/textarea/), etc.).
The purpose of the `Input` is to provide shared styles and features to other inputs.

#### Example: usage

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return <Input placeholder="Input component" />;
}
```


<InputSections component="Input" />

## Input sections

Input supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </>
  );
}
```


## Change input element

Input is a [polymorphic component](https://mantine.dev/guides/polymorphic), the default root element is `input`,
but it can be changed to any other element or component.

Example of using `Input` as `button` and `select`:

#### Example: component

```tsx
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<IconChevronDown size={14} stroke={1.5} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
```


Example of using [react-imask](https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask) with `Input`:

#### Example: mask

```tsx
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
```


## Input.Wrapper component

`Input.Wrapper` component is used in all other inputs
([TextInput](https://mantine.dev/core/text-input/), [NativeSelect](https://mantine.dev/core/native-select/), [Textarea](https://mantine.dev/core/textarea/), etc.)
under the hood, you *do not need to wrap your inputs with it, as it is already included in all of them*.
Use `Input.Wrapper` only when you want to create custom inputs.

#### Example: wrapper

```tsx
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
```


## inputWrapperOrder

`inputWrapperOrder` allows configuring the order of `Input.Wrapper` parts.
It accepts an array of four elements: `label`, `input`, `error` and `description`.
Note that it is not required to include all of them, you can use only those that you need
– parts that are not included will not be rendered.

#### Example: inputWrapperOrder

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
```


## inputContainer

With `inputContainer` prop, you can enhance inputs that use `Input.Wrapper` under the hood,
for example, you can add [Tooltip](https://mantine.dev/core/tooltip/) to the [TextInput](https://mantine.dev/core/text-input/) when
the input is focused:

#### Example: inputContainer

```tsx
import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
```


## required and withAsterisk props

All components that are based on `Input.Wrapper` support `required` and `withAsterisk` props.
When set to true, both of these props will add a red asterisk to the end of the label.
The only difference is whether input element will have `required` attribute, example with
[TextInput](https://mantine.dev/core/text-input/) component:

```tsx
import { TextInput } from '@mantine/core';

// Will display required asterisk and add `required` attribute to the input element
function RequiredDemo() {
  return <TextInput label="test-label" required />;
}

// Will only display the asterisk, `required` attribute is not added to the input element
function AsteriskDemo() {
  return <TextInput label="test-label" withAsterisk />;
}
```

## error prop

All inputs that use `Input.Wrapper` under the hood support `error` prop.
When set to `true`, it will add a red border to the input. You can also pass a React node to display
an error message below the input. To only display error message without a red border, set `error` prop
to React node and `withErrorStyles={false}`:

#### Example: error

```tsx
import { TextInput } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            size={20}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
```


## Input.Label, Input.Description and Input.Error components

`Input.Label`, `Input.Error` and `Input.Description` components can be used to create custom
form layouts if the default `Input.Wrapper` layout does not meet your requirements.

#### Example: compound

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
```


## Input.Placeholder component

`Input.Placeholder` component can be used to add placeholder to `Input` and `InputBase` components that are based on `button` element
or do not support placeholder property natively:

#### Example: placeholder

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
```


## Input.ClearButton component

Use `Input.ClearButton` component to add clear button to custom inputs
based on `Input` component. `size` of the clear button is automatically
inherited from the input:

#### Example: clearButton

```tsx
import { Input } from '@mantine/core';

function Demo(){
  const [value, setValue] = useState('clearable');

  return (
    <Input
      placeholder="Clearable input"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
      rightSectionPointerEvents="auto"
      size="md"
    />
  );
}
```


## Default props on theme

You can add [default props](https://mantine.dev/theming/default-props/) on [theme](https://mantine.dev/theming/theme-object/)
to `Input` and `Input.Wrapper` components. These default props will be inherited by all inputs
that use `Input` and `Input.Wrapper` under the hood ([TextInput](https://mantine.dev/core/text-input/), [NativeSelect](https://mantine.dev/core/native-select/), [Textarea](https://mantine.dev/core/textarea/), etc.):

#### Example: defaultProps

```tsx
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput
        label="Text input"
        placeholder="Text input"
        description="Description below the input"
      />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
```


## Styles on theme

Same as with default props, you can use `Input` and `Input.Wrapper` [Styles API](https://mantine.dev/styles/styles-api/)
on [theme](https://mantine.dev/theming/theme-object/) to add styles to all inputs:

#### Example: sharedStyles

```tsx
// Demo.tsx
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineProvider>
  );
}

// Demo.module.css
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: 1px solid var(--mantine-color-violet-filled);
}
```


## Change focus styles

Use `&:focus-within` selector to change inputs focus styles. You can apply these styles to
one component with `classNames` prop or to all inputs with [Styles API](https://mantine.dev/styles/styles-api/)
on [theme](https://mantine.dev/theming/theme-object/).

#### Example: focusStyles

```tsx
// Demo.module.css
.input {
  transition: none;

  &:focus-within {
    outline: 2px solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}

// Demo.tsx
import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
```


## InputBase component

`InputBase` component combines `Input` and `Input.Wrapper` components and supports `component` prop:

#### Example: inputBase

```tsx
import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <>
      <InputBase
        label="Your phone"
        component={IMaskInput}
        mask="+7 (000) 000-0000"
        placeholder="Your phone"
      />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
```


## Styles API

`Input` and `Input.Wrapper` components support [Styles API](https://mantine.dev/styles/styles-api) –
you can customize styles of any inner element with `classNames` and `styles` props.

`Input` Styles API selectors:

#### Example: stylesApi

```tsx
import { Input } from '@mantine/core';

function Demo() {
  const at = <IconAt size={16} stroke={1.5} />;
  const chevron = <IconChevronDown size={16} stroke={1.5} />;
  return <Input placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
```


`Input.Wrapper` Styles API selectors:

#### Example: wrapperStylesApi

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper label="Input label" description="Input description" error="Input error" withAsterisk />;
}
```


<GetElementRef component="Input" refType="input" />

## Get element ref

```tsx
import { useRef } from 'react';
import { Input } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <Input ref={ref} />;
}
```

## Accessibility

If you use `Input` component without associated label element, set `aria-label`:

```tsx
import { Input } from '@mantine/core';

// ok – the input is labelled by the aria-label
function WithAriaLabel() {
  return <Input aria-label="Your email" />;
}

// ok – the input is labelled by the label element
function WithLabel() {
  return (
    <>
      <label htmlFor="my-email">Your email</label>
      <Input id="my-email" />
    </>
  );
}
```

When you use `Input` with `Input.Wrapper` it is required to set `id` on both components
to connect label and other elements with the input:

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input.Wrapper label="Your email" id="your-email">
      <Input id="your-email" />
    </Input.Wrapper>
  );
}
```

You can use [use-id](https://mantine.dev/hooks/use-id) to generate unique ids:

```tsx
import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';

function Demo() {
  const id = useId();
  return (
    <Input.Wrapper label="Your email" id={id}>
      <Input id={id} />
    </Input.Wrapper>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | - | Sets <code>disabled</code> attribute on the <code>input</code> element |
| error | React.ReactNode | - | Determines whether the input should have error styles and <code>aria-invalid</code> attribute |
| id | string | - | Input element id |
| inputSize | string | - | <code>size</code> attribute passed down to the input element |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>leftSection</code> element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>leftSection</code> element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set <code>width</code> of the section and input <code>padding-left</code>, by default equals to the input height |
| multiline | boolean | - | Determines whether the input can have multiple lines, for example when <code>component="textarea"</code> |
| pointer | boolean | - | Determines whether the input should have <code>cursor: pointer</code> style |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| required | boolean | - | Sets <code>required</code> attribute on the <code>input</code> element |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets <code>pointer-events</code> styles on the <code>rightSection</code> element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the <code>rightSection</code> element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set <code>width</code> of the section and input <code>padding-right</code>, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input <code>height</code> and horizontal <code>padding</code> |
| withAria | boolean | - | Determines whether <code>aria-</code> and other accessibility attributes should be added to the input |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the <code>error</code> prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element of the <code>Input</code> component |


#### Styles API

Input component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Input selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Input-wrapper | Root element of the Input |
| input | .mantine-Input-input | Input element |
| section | .mantine-Input-section | Left and right sections |

**Input CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| wrapper | --input-fz | `font-size` of the input element |
| wrapper | --input-left-section-width | `width` of the left section |
| wrapper | --input-right-section-width | `width` of the right section |
| wrapper | --input-padding-y | `padding-top` and `padding-bottom` of the input element |
| wrapper | --input-radius | `border-radius` of the input element |
| wrapper | --input-left-section-pointer-events | Controls `pointer-events` of the left section |
| wrapper | --input-right-section-pointer-events | Controls `pointer-events` of the right section |

**Inputwrapper selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Inputwrapper-root | Root element |
| label | .mantine-Inputwrapper-label | Label element |
| required | .mantine-Inputwrapper-required | Required asterisk element, rendered inside label |
| description | .mantine-Inputwrapper-description | Description element |
| error | .mantine-Inputwrapper-error | Error element |

**Inputwrapper CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| label | --input-label-size | Controls label `font-size` |
| label | --input-asterisk-color | Controls label asterisk text `color` |

**Inputbase selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Inputbase-wrapper | Root element of the Input |
| input | .mantine-Inputbase-input | Input element |
| section | .mantine-Inputbase-section | Left and right sections |
| root | .mantine-Inputbase-root | Root element |
| label | .mantine-Inputbase-label | Label element |
| required | .mantine-Inputbase-required | Required asterisk element, rendered inside label |
| description | .mantine-Inputbase-description | Description element |
| error | .mantine-Inputbase-error | Error element |