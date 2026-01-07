# useDisclosure
Package: @mantine/hooks
Import: import { UseDisclosure } from '@mantine/hooks';

## Usage

`use-disclosure` hook manages boolean state. It provides `open`, `close` and `toggle` handlers
and accepts optional `onOpen` and `onClose` callbacks. You can use it to manage controlled modals,
popovers and other similar components:

```tsx
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, handlers] = useDisclosure(false);

  // Sets opened to true
  handlers.open();

  // Sets opened to false
  handlers.close();

  // Sets opened to true if it was false and vice versa
  handlers.toggle();
}
```

## Callbacks

The `onOpen` and `onClose` callbacks execute when the opened state changes:

```tsx
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  });

  // Calls `onOpen` callback and sets opened to true
  handlers.open();

  // Does nothing, opened is already true
  handlers.open();

  // Calls `onClose` callback and sets opened to false
  handlers.close();

  // Does nothing, opened is already false
  handlers.close();

  // Calls `onOpen` or `onClose` depending on the current state
  handlers.toggle();
}
```

## Definition

```tsx
interface UseDisclosureOptions {
  onOpen?: () => void;
  onClose?: () => void;
}

interface UseDisclosureHandlers {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

type UseDisclosureReturnValue = [boolean, UseDisclosureHandlers];

function useDisclosure(
  initialState?: boolean,
  options?: UseDisclosureOptions,
): UseDisclosureReturnValue
```

## Exported types

`UseDisclosureOptions`, `UseDisclosureHandlers` and `UseDisclosureReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseDisclosureOptions, UseDisclosureHandlers, UseDisclosureReturnValue } from '@mantine/hooks';
```
