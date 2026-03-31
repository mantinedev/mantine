# useIntersection
Package: @mantine/hooks
Import: import { UseIntersection } from '@mantine/hooks';

## Usage

The `use-intersection` hook returns information about the intersection
of a given element with its scroll container or body element using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API):

```tsx
import { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Text, Paper, Box } from '@mantine/core';

function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} style={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: entry?.isIntersecting
              ? 'var(--mantine-color-teal-7)'
              : 'var(--mantine-color-red-7)',
            minWidth: '50%',
          }}
        >
          <Text c="#fff" fw={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}
```


## API

The hook accepts `IntersectionObserver`'s options as its only optional argument:

```tsx
import { useIntersection } from '@mantine/hooks';

useIntersection({
  root: document.querySelector('#some-element'),
  rootMargin: '0rem',
  threshold: 1.0,
});
```

The hook returns a `ref` function that should be passed to the observed element, and the latest entry, as returned by the `IntersectionObserver`'s callback.
See the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) documentation to learn everything about the options.

On the first render (as well as during SSR), or when no element is being observed, the entry is `null`.

```tsx
import { Paper } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';

function Demo() {
  const { ref } = useIntersection();

  return (
    <>
      {/* With regular element: */}
      <div ref={ref} />

      {/* With Mantine component: */}
      <Paper ref={ref} />
    </>
  );
}
```

## Definition

```tsx
interface UseIntersectionReturnValue<T> {
  ref: React.RefCallback<T | null>;
  entry: IntersectionObserverEntry | null;
}

function useIntersection<T extends HTMLElement = any>(
  options?: IntersectionObserverInit,
): UseIntersectionReturnValue<T>
```

## Exported types

`UseIntersectionReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseIntersectionReturnValue } from '@mantine/hooks';
```
