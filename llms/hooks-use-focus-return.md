# useFocusReturn
Package: @mantine/hooks
Import: import { UseFocusReturn } from '@mantine/hooks';

## Usage

The `use-focus-return` hook automatically returns focus to the last focused element when a given condition is met.
For example, it is used in the [Modal](https://mantine.dev/llms/core-modal.md) component to restore focus after the modal was closed.

Close the modal with the `Escape` key and see how focus returns to the button after the modal closes:

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


In most cases, you should use this hook with [use-focus-trap](https://mantine.dev/llms/hooks-use-focus-trap.md).

```tsx
import { useFocusReturn } from '@mantine/hooks';

useFocusReturn({
  // Is region with focus trap active?
  // When it activates hook saves document.activeElement to the internal state
  // and focuses this element once focus trap is deactivated
  opened: false,

  // Determines whether focus should be returned automatically, true by default
  shouldReturnFocus: true,
});
```

If the `shouldReturnFocus` option is set to `false`, you can call the returned function to focus the last active element:

```tsx
import { useFocusReturn } from '@mantine/hooks';

const returnFocus = useFocusReturn({
  opened: false,
  shouldReturnFocus: false,
});

// ... later
returnFocus();
```

## Definition

```tsx
interface UseFocusReturnOptions {
  opened: boolean;
  shouldReturnFocus?: boolean;
}

type UseFocusReturnReturnValue = () => void;

function useFocusReturn(options: UseFocusReturnOptions): UseFocusReturnReturnValue
```

## Exported types

`UseFocusReturnOptions` and `UseFocusReturnReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseFocusReturnOptions, UseFocusReturnReturnValue } from '@mantine/hooks';
```
