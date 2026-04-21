# useFullscreen
Package: @mantine/hooks
Import: import { UseFullscreen } from '@mantine/hooks';

## Usage

The `use-fullscreen` hook allows you to enter/exit fullscreen for a given element using the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).
By default, if you don't provide a `ref`, the hook will target `document.documentElement`:

```tsx
import { useFullscreenDocument } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreenDocument();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
```


## Custom target element

The hook returns an optional `ref` function that can be passed to an element to act as root.
Be sure to follow best practices to not [confuse or trap the end user](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide#things_your_users_want_to_know):

```tsx

import { useFullscreenElement } from '@mantine/hooks';
import { Button, Stack } from '@mantine/core';

function RefDemo() {
  const { ref, toggle, fullscreen } = useFullscreenElement();

  return (
    <Stack align="center">
      <img
        ref={ref}
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"
        alt="For demo"
        width={200}
      />
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'View Image Fullscreen'}
      </Button>
    </Stack>
  );
}

```


## Mobile Safari limitations

Mobile Safari (especially on iPhone) has limited Fullscreen API support. In many cases, fullscreen is only supported for `<video>` elements and may not work for arbitrary elements (including `document.documentElement`).

`use-fullscreen` includes Safari-specific fallbacks where possible, but it cannot bypass browser/platform restrictions.

Also note that entering fullscreen usually requires a direct user interaction (for example, a button click).

## Definition

```tsx
interface UseFullscreenElementReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  toggle: () => Promise<void>;
  fullscreen: boolean;
}

interface UseFullscreenDocumentReturnValue {
  toggle: () => Promise<void>;
  fullscreen: boolean;
}

function useFullscreenElement<T extends HTMLElement = any>(): UseFullscreenElementReturnValue<T>
function useFullscreenDocument(): UseFullscreenDocumentReturnValue
```

## Exported types

The `UseFullscreenElementReturnValue` and `UseFullscreenDocumentReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseFullscreenElementReturnValue, UseFullscreenDocumentReturnValue } from '@mantine/hooks';
```
