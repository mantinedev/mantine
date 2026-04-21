# useColorScheme
Package: @mantine/hooks
Import: import { UseColorScheme } from '@mantine/hooks';

## Usage

The `use-color-scheme` hook returns the preferred OS color scheme value (`dark` or `light`)
and subscribes to changes:

```tsx
import { Badge } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}
```


## Limitations

`use-color-scheme` uses [use-media-query](https://mantine.dev/llms/hooks-use-media-query.md) under the hood.
It relies on the `window.matchMedia()` [API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
and always returns the specified initial value (first argument, `light` by default)
if the API is not available (for example, during server-side rendering).

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
immediate calculation of the initial value by changing the `getInitialValueInEffect` option:

```tsx
const colorScheme = useColorScheme('light', { getInitialValueInEffect: false });
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

The `UseColorSchemeValue` and `UseMediaQueryOptions` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseColorSchemeValue, UseMediaQueryOptions } from '@mantine/hooks';
```
