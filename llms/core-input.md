# Input
Package: @mantine/core
Import: import { Input } from '@mantine/core';
Description: Base component to create custom inputs

## Disclaimer

**!important:** In most cases, you should not use `Input` in your application.
`Input` is a base for other inputs and was not designed to be used directly.
Use `Input` to create custom inputs. For other cases, prefer [TextInput](https://mantine.dev/llms/core-text-input.md)
or another component.

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

The `Input` component is used as a base for some other inputs ([NativeSelect](https://mantine.dev/llms/core-native-select.md), [TextInput](https://mantine.dev/llms/core-text-input.md), [Textarea](https://mantine.dev/llms/core-textarea.md), etc.).
The purpose of the `Input` is to provide shared styles and features to other inputs.

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return <Input variant="default" size="sm" radius="md" disabled={false} error={false} placeholder="Input component" />;
}
```


## Loading state

Set `loading` prop to display a loading indicator. By default, the loader is displayed on the right side of the input.
You can change the position with the `loadingPosition` prop to `'left'` or `'right'`. This is useful for async operations like API calls, searches, or validations:

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return <Input placeholder="Your email" loading />;
}
```


## Input sections

Input supports left and right sections to display icons, buttons or other content alongside the input.

```tsx
import { useState } from 'react';
import { Input } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<AtIcon size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          value ? (
            <Input.ClearButton
              aria-label="Clear input"
              onClick={() => setValue('')}
            />
          ) : null
        }
      />
    </>
  );
}
```


## Change input element

Input is a [polymorphic component](https://mantine.dev/llms/guides-polymorphic.md), the default root element is `input`,
but it can be changed to any other element or component.

Example of using `Input` as `button` and `select`:

```tsx
import { Input } from '@mantine/core';
import { CaretDownIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<CaretDownIcon size={14} />}
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

```tsx
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
```


## Input.Wrapper component

The `Input.Wrapper` component is used in all other inputs
([TextInput](https://mantine.dev/llms/core-text-input.md), [NativeSelect](https://mantine.dev/llms/core-native-select.md), [Textarea](https://mantine.dev/llms/core-textarea.md), etc.)
under the hood. You *do not need to wrap your inputs with it, as it is already included in all of them*.
Use `Input.Wrapper` only when you want to create custom inputs.

```tsx
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper label="Input label" withAsterisk={false} description="Input description" error="Input error" size="sm">
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
```


## inputWrapperOrder

`inputWrapperOrder` allows configuring the order of `Input.Wrapper` parts.
It accepts an array of four elements: `label`, `input`, `error` and `description`.
Note that it is not required to include all of them – you can use only those that you need.
Parts that are not included will not be rendered.

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

With the `inputContainer` prop, you can enhance inputs that use `Input.Wrapper` under the hood.
For example, you can add a [Tooltip](https://mantine.dev/llms/core-tooltip.md) to the [TextInput](https://mantine.dev/llms/core-text-input.md) when
the input is focused:

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
The only difference is whether the input element will have the `required` attribute. Example with
the [TextInput](https://mantine.dev/llms/core-text-input.md) component:

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

All inputs that use `Input.Wrapper` under the hood support the `error` prop.
When set to `true`, it will add a red border to the input. You can also pass a React node to display
an error message below the input. To only display an error message without a red border, set the `error` prop
to a React node and `withErrorStyles={false}`:

```tsx
import { TextInput } from '@mantine/core';
import { WarningCircleIcon } from '@phosphor-icons/react';

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
          <WarningCircleIcon
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

`Input.Placeholder` component can be used to add a placeholder to `Input` and `InputBase` components that are based on the `button` element
or do not support the placeholder property natively:

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

Use the `Input.ClearButton` component to add a clear button to custom inputs
based on the `Input` component. The `size` of the clear button is automatically
inherited from the input:

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
      size="sm"
    />
  );
}
```


## Default props on theme

You can add [default props](https://mantine.dev/llms/theming-default-props.md) on the [theme](https://mantine.dev/llms/theming-theme-object.md)
to `Input` and `Input.Wrapper` components. These default props will be inherited by all inputs
that use `Input` and `Input.Wrapper` under the hood ([TextInput](https://mantine.dev/llms/core-text-input.md), [NativeSelect](https://mantine.dev/llms/core-native-select.md), [Textarea](https://mantine.dev/llms/core-textarea.md), etc.):

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

Same as with default props, you can use `Input` and `Input.Wrapper` [Styles API](https://mantine.dev/llms/styles-styles-api.md)
on the [theme](https://mantine.dev/llms/theming-theme-object.md) to add styles to all inputs:

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
one component with `classNames` prop or to all inputs with [Styles API](https://mantine.dev/llms/styles-styles-api.md)
on [theme](https://mantine.dev/llms/theming-theme-object.md).

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

You can use [use-id](https://mantine.dev/llms/hooks-use-id.md) to generate unique ids:

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

**Input props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Determines whether the input should have error styles and `aria-invalid` attribute |
| id | string | - | Input element id |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| multiline | boolean | - | Adjusts padding and sizing calculations for multiline inputs (use with `component="textarea"`). Does not make the input multiline by itself. |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Sets `required` attribute on the `input` element |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| rootRef | Ref<HTMLDivElement> | - | Root element ref |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| withAria | boolean | - | Determines whether `aria-` and other accessibility attributes should be added to the input. Only disable when implementing custom accessibility handling. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element of the `Input` component |

**Input.Base props**

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
| multiline | boolean | - | If set, the input can have multiple lines, for example when `component="textarea"` |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| withAria | boolean | - | If set, `aria-` and other accessibility attributes are added to the input |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | React.ComponentProps<"div"> | - | Props passed down to the root element (`Input.Wrapper` component) |

**Input.Label props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| labelElement | "div" \| "label" | - | Root element of the label |
| required | boolean | - | If set, the required asterisk is displayed next to the label |
| size | MantineFontSize | - | Controls label `font-size` |

**Input.Wrapper props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| id | string | - | Static id used as base to generate `aria-` attributes, by default generates random id |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelElement | "div" \| "label" | - | Root element for the label. Use `'div'` when wrapper contains multiple input elements and you need to handle `htmlFor` manually. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| size | MantineFontSize | - | Controls size of `Input.Label`, `Input.Description` and `Input.Error` components |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |

**Input.Description props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | MantineFontSize | - | Controls description `font-size` |

**Input.Error props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | MantineFontSize | - | Controls error `font-size` |


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
