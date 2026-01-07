# useMediaQuery
Package: @mantine/hooks
Import: import { UseMediaQuery } from '@mantine/hooks';

## Usage

`use-media-query` subscribes to media queries.
It receives a media query as an argument and returns `true` if the given media query matches the current state.
The hook relies on `window.matchMedia()` [API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
and will return `false` if the API is not available, unless an initial value is provided in the second argument.

Resize browser window to trigger `window.matchMedia` event:



## Server Side Rendering

During server side rendering the hook will always return `false` as `window.matchMedia` api is not available,
if that is not a desired behavior, you can override the initial value:

```tsx
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  // Set initial value in second argument and getInitialValueInEffect option to false
  const matches = useMediaQuery('(max-width: 40em)', true, {
    getInitialValueInEffect: false,
  });
}
```

## Definition

```tsx
interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean;
}

function useMediaQuery(
  query: string,
  initialValue?: boolean,
  options?: UseMediaQueryOptions,
): boolean;
```

## Exported types

`UseMediaQueryOptions` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseMediaQueryOptions } from '@mantine/hooks';
```
