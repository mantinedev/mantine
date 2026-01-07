# useIsomorphicEffect
Package: @mantine/hooks
Import: import { UseIsomorphicEffect } from '@mantine/hooks';

## Usage

`use-isomorphic-effect` is a replacement for `useLayoutEffect` hook that works in both browser and server environments.

```tsx
import { useIsomorphicEffect } from '@mantine/hooks';

function Demo() {
  useIsomorphicEffect(() => {
    document.title = 'title';
  });

  return null;
}
```
