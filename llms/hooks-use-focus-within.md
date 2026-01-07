# useFocusWithin
Package: @mantine/hooks
Import: import { UseFocusWithin } from '@mantine/hooks';

## Usage

`use-focus-within` hook detects if any element within the other element has focus.
It works the same way as `:focus-within` CSS selector:



## Definition

```tsx
interface UseFocusWithinOptions {
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

interface UseFocusWithinReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  focused: boolean;
}

function useFocusWithin<T extends HTMLElement = any>(
  options?: UseFocusWithinOptions,
): UseFocusWithinReturnValue<T>
```

## Exported types

`UseFocusWithinOptions` and `UseFocusWithinReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseFocusWithinOptions, UseFocusWithinReturnValue } from '@mantine/hooks';
```
