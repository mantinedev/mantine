# PinInput
Package: @mantine/core
Import: import { PinInput } from '@mantine/core';
Description: Capture pin code or one time password from the user

## Usage

```tsx
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput size="sm" length={4} mask={false} placeholder="○" disabled={false} error={false} type="alphanumeric" />
}
```


## Controlled

```tsx
import { useState } from 'react';
import { PinInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <PinInput value={value} onChange={setValue} />;
}
```

## Uncontrolled

`PinInput` can be used with uncontrolled forms the same way as a native input element.
Set the `name` attribute to include pin input value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `PinInput` with `FormData`:

```tsx
import { PinInput } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('PIN value:', formData.get('pin'));
      }}
    >
      <PinInput
        name="pin"
        length={4}
        oneTimeCode
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Regex type

You can use a regular expression to validate user input. Characters that do not match the given expression
will be disregarded. For example, to create a `PinInput` that will accept only numbers from `0` to `3`,
set `type={/^[0-3]+/}`:

```tsx
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}
```


## Accessibility

Inputs do not have associated labels. Set `aria-label` to make the component visible to screen readers:

```tsx
import { PinInput } from '@mantine/core';

function Accessibility() {
  return <PinInput aria-label="One time code" />;
}
```


#### Props

**PinInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ariaLabel | string | - | `aria-label` attribute |
| autoFocus | boolean | - | If set, the first input is focused when component is mounted |
| defaultValue | string | - | Uncontrolled component default value |
| disabled | boolean | - | Adds disabled attribute to all inputs |
| error | boolean | - | Sets `aria-invalid` attribute and applies error styles to all inputs |
| form | string | - | Hidden input `form` attribute |
| gap | MantineSpacing | - | Key of `theme.spacing` or any valid CSS value to set `gap` between inputs, numbers are converted to rem |
| getInputProps | (index: number) => InputProps & ElementProps<"input", "size"> & DataAttributes | - | Props added to the input element depending on its index |
| hiddenInputProps | React.ComponentProps<"input"> | - | Props passed down to the hidden input |
| id | string | - | Base id used to generate unique ids for inputs |
| inputMode | "search" \| "text" \| "none" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" | - | `inputmode` attribute, inferred from the `type` prop if not specified |
| inputType | HTMLInputTypeAttribute | - | Inputs `type` attribute, inferred from the `type` prop if not specified |
| length | number | - | Number of inputs |
| manageFocus | boolean | - | Determines whether focus should be moved automatically to the next input once filled |
| mask | boolean | - | Changes input type to `"password"` |
| name | string | - | Hidden input `name` attribute |
| onChange | (value: string) => void | - | Called when value changes |
| onComplete | (value: string) => void | - | Called when all inputs have value |
| oneTimeCode | boolean | - | Determines whether `autocomplete="one-time-code"` attribute should be set on all inputs |
| placeholder | string | - | Inputs placeholder |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| readOnly | boolean | - | If set, the user cannot edit the value |
| rootRef | Ref<HTMLDivElement> | - | Assigns ref of the root element |
| size | MantineSize | - | Controls inputs `width` and `height` |
| type | "number" \| RegExp \| "alphanumeric" | - | Determines which values can be entered |
| value | string | - | Controlled component value |


#### Styles API

PinInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**PinInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-PinInput-root | Root element |
| pinInput | .mantine-PinInput-pinInput | Input item wrapper |
| input | .mantine-PinInput-input | Input element |

**PinInput CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --pin-input-size | Controls input `width` and `height` |
