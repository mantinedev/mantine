# useFocusWithin
Package: @mantine/hooks
Import: import { UseFocusWithin } from '@mantine/hooks';

## Usage

The `use-focus-within` hook detects if any element within another element has focus.
It works the same way as the `:focus-within` CSS selector:

```tsx
import { useFocusWithin } from '@mantine/hooks';
import { TextInput, Button, Box, Text } from '@mantine/core';

function Demo() {
  const { ref, focused } = useFocusWithin();

  return (
    <div ref={ref}>
      <Box
        p="xl"
        style={{
          backgroundColor: focused ? 'var(--mantine-color-blue-light)' : 'transparent',
        }}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}
```


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

`UseFocusWithinOptions` and `UseFocusWithinReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseFocusWithinOptions, UseFocusWithinReturnValue } from '@mantine/hooks';
```
