# useValidatedState
Package: @mantine/hooks
Import: import { UseValidatedState } from '@mantine/hooks';

## Usage

`use-validated-state` validates state with a given rule each time state is set.
It returns an object with current validation state, last valid value and current value:

```tsx
import { useValidatedState } from '@mantine/hooks';

const [{ lastValidValue, value, valid }, setValue] =
  useValidatedState('valid', (state) => state === 'valid');

lastValidValue; // -> valid
value; // -> valid
valid; // -> true

setValue('invalid');

lastValidValue; // -> valid
value; // -> invalid
valid; // -> false
```

## Example



## Definition

```tsx
interface UseValidatedStateValue<T> {
  /** Current value */
  value: T;

  /** Last valid value */
  lastValidValue: T | undefined;

  /** True if the current value is valid, false otherwise */
  valid: boolean;
}

type UseValidatedStateReturnValue<T> = [
  /** Current value */
  UseValidatedStateValue<T>,
  /** Handler to update the state, passes `value` and `payload` to `onChange` */
  (value: T) => void,
];

function useValidatedState<T>(
  initialValue: T,
  validate: (value: T) => boolean,
  initialValidationState?: boolean,
): UseValidatedStateReturnValue<T>
```

## Exported types

`UseValidatedStateValue` and `UseValidatedStateReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseValidatedStateValue, UseValidatedStateReturnValue } from '@mantine/hooks';
```
