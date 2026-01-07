# useColorScheme
Package: @mantine/hooks
Import: import { UseColorScheme } from '@mantine/hooks';

## Usage

`use-color-scheme` hook returns preferred OS color scheme value (`dark` or `light`)
and subscribes to changes:



## Limitations

`use-color-scheme` uses [use-media-query](https://mantine.dev/hooks/use-media-query/) under the hood.
It relies on `window.matchMedia()` [API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
and always returns the specified initial value (first argument, `light` by default)
if the API is not available (for example, during the server-side rendering).

```tsx
// returns 'dark' on server side
// returns computed value on client side after mount
const colorScheme = useColorScheme('dark');
```

## Get initial value in effect

By default, to support server-side rendering, `use-color-scheme` does not
calculate the initial value on the first render during state initialization.
Instead, the value is calculated in `useEffect` and updated after the parent
component mounts.

If your application does not have server-side rendering, you can enable
immediate calculation of the initial value by changing `getInitialValueInEffect` option:

```tsx
const colorScheme = useColorScheme('light', { getInitialValueInEffect: true });
```

## Definition

```tsx
interface UseMediaQueryOptions {
  getInitialValueInEffect: boolean;
}

type UseColorSchemeValue = 'dark' | 'light';

function useColorScheme(
  initialValue?: UseColorSchemeValue,
  options?: UseMediaQueryOptions,
): UseColorSchemeValue
```

## Exported types

`UseColorSchemeValue` and `UseMediaQueryOptions` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseColorSchemeValue, UseMediaQueryOptions } from '@mantine/hooks';
```
