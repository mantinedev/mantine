# useInViewport
Package: @mantine/hooks
Import: import { UseInViewport } from '@mantine/hooks';

## Usage

The `use-in-viewport` hook is a simpler alternative to [use-intersection](https://mantine.dev/llms/hooks-use-intersection.md) that only checks if the element
is visible in the viewport:

```tsx
import { Box, Text } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';

function Demo() {
  const { ref, inViewport } = useInViewport();
  return (
    <>
      <Text ta="center">{inViewport ? 'Box is visible' : 'Scroll to see box'}</Text>
      <Box h={64} style={{ overflow: 'scroll' }}>
        <Box h={128}></Box>
        <Box ref={ref} bg="blue" h={32} p={8}>
          <Text ta="center" c="white">
            A box
          </Text>
        </Box>
      </Box>
    </>
  );
}
```


## Definition

```tsx
interface UseInViewportReturnValue<T extends HTMLElement = any> {
  inViewport: boolean;
  ref: React.RefCallback<T | null>;
}

function useInViewport<T extends HTMLElement = any>(): UseInViewportReturnValue<T>
```

## Exported types

The `UseInViewportReturnValue` type is exported from the `@mantine/hooks` package;
you can import it in your application:

```tsx
import type { UseInViewportReturnValue } from '@mantine/hooks';
```
