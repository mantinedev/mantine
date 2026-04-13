# useMask
Package: @mantine/hooks
Import: import { UseMask } from '@mantine/hooks';

## Usage

`useMask` attaches real-time input masking to any `<input>` element via a ref callback.
It formats user input against a defined pattern and exposes both the masked display value
and the raw unmasked value. If you need a ready-made input component, use [MaskInput](https://mantine.dev/llms/core-mask-input.md)
which wraps this hook with all standard input props.

```tsx
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, value, rawValue } = useMask({ mask: '(999) 999-9999' });

  return (
    <>
      <TextInput ref={ref} label="Phone number" placeholder="(___) ___-____" />
      <Text size="sm" mt="sm">Masked value: {value}</Text>
      <Text size="sm">Raw value: {rawValue}</Text>
    </>
  );
}
```


## isComplete, slotChar, and transform

Use `isComplete` to check whether all required mask slots are filled — for example, to control
a submit button. The `slotChar` option accepts a multi-character string to show positional
hints for each slot. The `transform` option converts each character before validation —
this example uses it to auto-uppercase input so the `A` token (`[A-Z]`) accepts lowercase letters:

```tsx
import { Button, Group, Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, isComplete, rawValue } = useMask({
    mask: 'AAA-9999',
    slotChar: 'XXX-0000',
    transform: (char) => char.toUpperCase(),
  });

  return (
    <>
      <TextInput ref={ref} label="Promo code" placeholder="Enter promo code" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
      <Group mt="xs">
        <Button disabled={!isComplete} size="xs">Apply code</Button>
      </Group>
    </>
  );
}
```


## Dynamic mask

Use the `modify` option to change the mask based on the current input value.
This example switches between standard and American Express credit card formats:

```tsx
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '9999 9999 9999 9999',
    modify: (value) => {
      const digits = value.replace(/\\D/g, '');
      if (digits.startsWith('34') || digits.startsWith('37')) {
        return { mask: '9999 999999 99999' };
      }
    },
  });

  return (
    <>
      <TextInput ref={ref} label="Credit card number" placeholder="Enter card number" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
      <Text size="xs" c="dimmed">Try starting with 34 or 37 for Amex format</Text>
    </>
  );
}
```


## Custom tokens

Override or extend the built-in token map with the `tokens` option:

```tsx
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\#hhhhhh',
    tokens: { h: /[0-9a-fA-F]/ },
  });

  return (
    <>
      <TextInput ref={ref} label="Hex color" placeholder="#______" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
```


## Escaping

Prefix a token character with `\` to treat it as a literal.
In this example, `A` would normally be an uppercase letter token,
but `\A` makes it a literal character:

```tsx
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\A-9999',
  });

  return (
    <>
      <TextInput ref={ref} label="Product code" placeholder="A-____" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
```


## Regex array format

For complex masks where built-in tokens are not enough, pass an array of
string literals and `RegExp` objects. This example creates a time input where
the first digit is restricted to `0-2` and the minute tens digit to `0-5`:

```tsx
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: [/[0-2]/, /\\d/, ':', /[0-5]/, /\\d/],
  });

  return (
    <>
      <TextInput ref={ref} label="Time (HH:MM)" placeholder="__:__" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
```


## Reset

Use the `reset` function returned by the hook to programmatically clear
the input value:

```tsx
import { Button, Group, Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, value, rawValue, reset } = useMask({
    mask: '(999) 999-9999',
  });

  return (
    <>
      <TextInput ref={ref} label="Phone number" placeholder="(___) ___-____" />
      <Text size="sm" mt="sm">Masked: {value}</Text>
      <Text size="sm">Raw: {rawValue}</Text>
      <Group mt="xs">
        <Button size="xs" variant="default" onClick={reset}>Reset</Button>
      </Group>
    </>
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
useMask({ mask: '(999) 999-9999? x9999' }) // Extension is optional
```

## Utility functions

The following pure functions are exported alongside the hook:

* `formatMask(raw, options)` – apply a mask to a raw value string
* `unformatMask(masked, options)` – strip all mask literals from a masked value
* `isMaskComplete(masked, options)` – check if all required slots are filled
* `generatePattern(mode, options)` – generate a regex string for HTML `pattern` attribute

```tsx
import { formatMask, unformatMask, isMaskComplete } from '@mantine/hooks';

const options = { mask: '(999) 999-9999' };

formatMask('1234567890', options);      // "(123) 456-7890"
unformatMask('(123) 456-7890', options); // "1234567890"
isMaskComplete('(123) 456-7890', options); // true
```

## Definition

```tsx
interface UseMaskOptions {
  // Mask pattern string or array of string literals and RegExp objects
  mask: string | Array<string | RegExp>;

  // Override or extend the default token map
  tokens?: Record<string, RegExp>;

  // Called on each keystroke, can return overrides for mask, tokens, or slotChar
  modify?: (value: string) => Partial<Pick<UseMaskOptions, 'mask' | 'tokens' | 'slotChar'>> | undefined;

  // Transform each character before validation and insertion
  transform?: (char: string) => string;

  // Character displayed in unfilled slots, "_" by default
  slotChar?: string | null;

  // Show mask pattern even when the field is empty and unfocused
  alwaysShowMask?: boolean;

  // Show mask placeholder on focus, true by default
  showMaskOnFocus?: boolean;

  // Clear value on blur when mask is incomplete, false by default
  autoClear?: boolean;

  // Sets aria-invalid on the input
  invalid?: boolean;

  // Called on every change with raw and masked values
  onChangeRaw?: (rawValue: string, maskedValue: string) => void;

  // Called when all required mask slots are filled
  onComplete?: (maskedValue: string, rawValue: string) => void;

}

interface UseMaskReturnValue {
  // Ref callback to attach to the input element
  ref: React.RefCallback<HTMLInputElement>;

  // Current masked display value
  value: string;

  // Current raw unmasked value
  rawValue: string;

  // Whether all required mask slots are filled
  isComplete: boolean;

  // Clear the input value and reset state
  reset: () => void;
}

function useMask(options: UseMaskOptions): UseMaskReturnValue;
```

## Exported types

The `UseMaskOptions` and `UseMaskReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseMaskOptions, UseMaskReturnValue } from '@mantine/hooks';
```
