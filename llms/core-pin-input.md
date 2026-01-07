# PinInput
Package: @mantine/core
Import: import { PinInput } from '@mantine/core';
Description: Capture pin code or one time password from the user

## Usage

#### Example: configurator

```tsx
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput />
}
```


## Regex type

You can use regular expression to validate user input. Characters that do not match given expression
will be disregarded. For example, to create a `PinInput` that will accept only numbers from `0` to `3`,
set `type={/^[0-3]+/}`:

#### Example: regexp

```tsx
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}
```


## One time code

Some operating systems expose the last received SMS code to be used by applications like your keyboard.
If the current form input asks for this code, your keyboard adapts and proposes the code as keyboard-suggestion.
Prop `oneTimeCode` makes your input setting `autocomplete="one-time-code"` which allows using that feature.

```tsx
import { PinInput } from '@mantine/core';

function OneTimeCodeInput() {
  return <PinInput oneTimeCode />;
}
```

#### Example: stylesApi

```tsx
import { PinInput } from '@mantine/core';

function Demo() {
  return (
    <PinInput />
  );
}
```


## Accessibility

Inputs do not have associated labels, set `aria-label` to make component visible to the screen reader:

```tsx
import { PinInput } from '@mantine/core';

function Accessibility() {
  return <PinInput aria-label="One time code" />;
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ariaLabel | string | - | <code>aria-label</code> attribute |
| autoFocus | boolean | - | If set, the first input is focused when component is mounted |
| defaultValue | string | - | Uncontrolled component default value |
| disabled | boolean | - | Adds disabled attribute to all inputs |
| error | boolean | - | Sets <code>aria-invalid</code> attribute and applies error styles to all inputs |
| form | string | - | Hidden input <code>form</code> attribute |
| gap | MantineSpacing | - | Key of <code>theme.spacing</code> or any valid CSS value to set <code>gap</code> between inputs, numbers are converted to rem |
| getInputProps | (index: number) => InputProps & ElementProps<"input", "size"> | - | Props added to the input element depending on its index |
| hiddenInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input |
| id | string | - | Base id used to generate unique ids for inputs |
| inputMode | "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | - | <code>inputmode</code> attribute, inferred from the <code>type</code> prop if not specified |
| inputType | HTMLInputTypeAttribute | - | Inputs <code>type</code> attribute, inferred from the <code>type</code> prop if not specified |
| length | number | - | Number of inputs |
| manageFocus | boolean | - | Determines whether focus should be moved automatically to the next input once filled |
| mask | boolean | - | Changes input type to <code>"password"</code> |
| name | string | - | Hidden input <code>name</code> attribute |
| onChange | (value: string) => void | - | Called when value changes |
| onComplete | (value: string) => void | - | Called when all inputs have value |
| oneTimeCode | boolean | - | Determines whether <code>autocomplete="one-time-code"</code> attribute should be set on all inputs |
| placeholder | string | - | Inputs placeholder |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| readOnly | boolean | - | If set, the user cannot edit the value |
| rootRef | ForwardedRef<HTMLDivElement> | - | Assigns ref of the root element |
| size | MantineSize | - | Controls inputs <code>width</code> and <code>height</code> |
| type | "number" | RegExp | "alphanumeric" | - | Determines which values can be entered |
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