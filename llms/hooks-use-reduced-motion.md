# useReducedMotion
Package: @mantine/hooks
Import: import { UseReducedMotion } from '@mantine/hooks';

## Usage

`use-reduced-motion` detects if user [prefers to reduce motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).
It uses [use-media-query](https://mantine.dev/hooks/use-media-query/) hook under the hood.
Hook relies on `window.matchMedia()` [API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
and will always return `false` if api is not available (for example, during server side rendering), unless the initial value is provided in the first argument.

Use hook to detect if user prefers to reduce motion (`(prefers-reduced-motion: reduce)` media query) and set animations duration based on this value.



## Definition

```tsx
interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean;
}

function useReducedMotion(initialValue?: boolean, options?: UseMediaQueryOptions): boolean;
```
