# useFullscreen
Package: @mantine/hooks
Import: import { UseFullscreen } from '@mantine/hooks';

## Usage

`use-fullscreen` allows to enter/exit fullscreen for given element using the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).
By default, if you don't provide `ref`, the hook will target `document.documentElement`:



## Custom target element

The hook returns an optional `ref` function that can be passed to an element to act as root.
Be sure to follow best practices to not [confuse or trap the end user](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide#things_your_users_want_to_know):



## Definition

```tsx
interface UseFullscreenReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  toggle: () => Promise<void>;
  fullscreen: boolean;
}

function useFullscreen<T extends HTMLElement = any>(): UseFullscreenReturnValue<T>
```

## Exported types

`UseFullscreenReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseFullscreenReturnValue } from '@mantine/hooks';
```
