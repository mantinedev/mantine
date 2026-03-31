# useReducedMotion
Package: @mantine/hooks
Import: import { UseReducedMotion } from '@mantine/hooks';

## Usage

The `use-reduced-motion` hook detects if the user [prefers to reduce motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).
It uses the [use-media-query](https://mantine.dev/llms/hooks-use-media-query.md) hook under the hood.
The hook relies on the `window.matchMedia()` [API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
and will always return `false` if the API is not available (for example, during server-side rendering), unless the initial value is provided in the first argument.

Use the hook to detect if the user prefers to reduce motion (`(prefers-reduced-motion: reduce)` media query) and set animation duration based on this value.

```tsx
import { Badge } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';

function Demo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      color={reduceMotion ? 'red' : 'teal'}
      style={{ transitionDuration: reduceMotion ? '0ms' : '200ms' }}
      variant="filled"
    >
      {reduceMotion ? 'You prefer to reduce motion' : 'You prefer not to reduce motion'}
    </Badge>
  );
}
```


## Definition

```tsx
interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean;
}

function useReducedMotion(initialValue?: boolean, options?: UseMediaQueryOptions): boolean;
```
