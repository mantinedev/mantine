# useIsomorphicEffect
Package: @mantine/hooks
Import: import { UseIsomorphicEffect } from '@mantine/hooks';

## Usage

The `use-isomorphic-effect` hook is a replacement for the `useLayoutEffect` hook that works in both browser and server environments.

```tsx
import { useIsomorphicEffect } from '@mantine/hooks';

function Demo() {
  useIsomorphicEffect(() => {
    document.title = 'title';
  });

  return null;
}
```
