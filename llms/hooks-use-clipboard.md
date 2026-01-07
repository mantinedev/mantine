# useClipboard
Package: @mantine/hooks
Import: import { UseClipboard } from '@mantine/hooks';

## Usage

`use-clipboard` hook provides a simple way to copy text to the clipboard,
track the copied state, handle errors, and reset the state after a given timeout.
It uses [navigator.clipboard.writeText](https://caniuse.com/mdn-api_clipboard_writetext) API under the hood.



## Limitations

Due to security reasons `use-clipboard` hook will not work in iframes and may not work with local files opened with `file://` protocol
(hook will work fine with local websites that are using `http://` protocol). You can learn more about `navigator.clipboard` [here](https://web.dev/async-clipboard/).

## Definition

```tsx
interface UseClipboardOptions {
  /** Time in ms after which the copied state will reset, `2000` by default */
  timeout?: number;
}

interface UseClipboardReturnValue {
  /** Function to copy value to clipboard */
  copy: (value: any) => void;

  /** Function to reset copied state and error */
  reset: () => void;

  /** Error if copying failed */
  error: Error | null;

  /** Boolean indicating if the value was copied successfully */
  copied: boolean;
}

function useClipboard(options?: UseClipboardOptions): UseClipboardReturnValue
```

## Exported types

`UseClipboardOptions` and `UseClipboardReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseClipboardOptions, UseClipboardReturnValue } from '@mantine/hooks';
```
