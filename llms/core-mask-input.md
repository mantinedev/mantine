# MaskInput
Package: @mantine/core
Import: import { MaskInput } from '@mantine/core';
Description: Input with mask pattern for formatted text entry

## Usage

`MaskInput` is a wrapper around [useMask](https://mantine.dev/llms/hooks-use-mask.md) hook that provides all standard input
props (label, description, error, etc.) and supports all mask options. The mask string defines
the expected format using token characters (`9` for digits, `a` for letters, etc.).

```tsx
import { MaskInput } from '@mantine/core';


function Demo() {
  return (
    <MaskInput
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      mask="(999) 999-9999"
      placeholder="(___) ___-____"
    />
  );
}
```


## Dynamic mask

Use the `modify` option to change the mask based on the current input value.
This example switches between standard and American Express credit card formats:

```tsx
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Credit card"
      placeholder="____ ____ ____ ____"
      mask="9999 9999 9999 9999"
      modify={(value) => {
        if (/^3[47]/.test(value)) {
          return { mask: '9999 999999 99999' };
        }
        return undefined;
      }}
    />
  );
}
```


## Custom tokens

Override or extend the built-in token map with the `tokens` option:

```tsx
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Hex color"
      placeholder="#______"
      mask="#hhhhhh"
      tokens={{ h: /[0-9a-fA-F]/ }}
    />
  );
}
```


## Regex array format

For complex masks where built-in tokens are not enough, pass an array of
string literals and `RegExp` objects:

```tsx
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Time (HH:MM)"
      placeholder="__:__"
      mask={[/[0-2]/, /\\\\d/, ':', /[0-5]/, /\\\\d/]}
    />
  );
}
```


## Transform

Use the `transform` option to convert each character before validation.
This example auto-uppercases input so the `A` token accepts lowercase letters:

```tsx
import { MaskInput, Text } from '@mantine/core';
import { formatMask, isMaskComplete } from '@mantine/hooks';

function Demo() {
  return (
    <>
      <MaskInput
        label="Promo code"
        placeholder="AAA-9999"
        mask="AAA-9999"
        transform={(char) => char.toUpperCase()}
        slotChar="XXX-0000"
      />
      <Text size="sm" mt="sm" c="dimmed">
        Type lowercase letters – they will be auto-uppercased
      </Text>
    </>
  );
}
```


## Disabled state

```tsx
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Phone number"
      placeholder="(___) ___-____"
      mask="(999) 999-9999"
      disabled
    />
  );
}
```


## Error state

```tsx
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Phone number"
      placeholder="(___) ___-____"
      mask="(999) 999-9999"
      error="Invalid phone number"
    />
  );
}
```


## Mask pattern syntax

The mask string defines the expected format. Each character is either a **token** (editable slot)
or a **literal** (fixed character inserted automatically).

### Built-in tokens

* `9` – any single digit (`[0-9]`)
* `a` – any single letter (`[A-Za-z]`)
* `A` – any uppercase letter (`[A-Z]`)
* `*` – any alphanumeric character (`[A-Za-z0-9]`)
* `#` – digit or sign (`[-+0-9]`)

### Optional segments

Append `?` after the last required character to mark remaining slots as optional:

```tsx
<MaskInput mask="(999) 999-9999? x9999" /> // Extension is optional
```

### Escaping

Prefix a token character with `\` to treat it as a literal:

```tsx
<MaskInput mask="\A999" /> // "A" is literal, not a token
```


#### Props

**MaskInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| alwaysShowMask | boolean | - | Show mask pattern even when field is empty and unfocused |
| autoClear | boolean | - | Clear value on blur when mask is incomplete, `false` by default |
| beforeMaskedStateChange | (states: { previousState: { value: string; selection: { start: number; end: number; } \| null; }; currentState: { value: string; selection: { start: number; end: number; } \| null; }; nextState: { value: string; selection: { ...; } \| null; }; }) => { ...; } | - | Escape hatch for advanced cursor/value manipulation |
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
| mask | string \| (string \| RegExp)[] | required | Mask pattern string or array of string literals and RegExp objects |
| modify | ((value: string) => Partial<Pick<MaskInputProps, "mask" \| "tokens" \| "separate" \| "slotChar">>) \| undefined | - | Called before masking on each keystroke, can return overrides for mask options |
| onChangeRaw | (rawValue: string, maskedValue: string) => void | - | Called on every change with raw and masked values |
| onComplete | (maskedValue: string, rawValue: string) => void | - | Called when all required mask slots are filled |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| separate | boolean | - | When true, raw and display values are decoupled |
| showMaskOnFocus | boolean | - | Show mask placeholder on focus, `true` by default |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| slotChar | string \| null | - | Character displayed in unfilled slots, `"_"` by default |
| tokens | Record<string, RegExp> | - | Override or extend the default token map |
| transform | (char: string) => string | - | Transform each character before validation and insertion |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

MaskInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**MaskInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-MaskInput-wrapper | Root element of the Input |
| input | .mantine-MaskInput-input | Input element |
| section | .mantine-MaskInput-section | Left and right sections |
| root | .mantine-MaskInput-root | Root element |
| label | .mantine-MaskInput-label | Label element |
| required | .mantine-MaskInput-required | Required asterisk element, rendered inside label |
| description | .mantine-MaskInput-description | Description element |
| error | .mantine-MaskInput-error | Error element |
