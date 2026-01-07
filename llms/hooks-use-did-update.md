# useDidUpdate
Package: @mantine/hooks
Import: import { UseDidUpdate } from '@mantine/hooks';

## Usage

`use-did-update` hook works the same way as `useEffect` but it is not called when component is mounted:

```tsx
import { useDidUpdate } from '@mantine/hooks';

function Demo() {
  useDidUpdate(
    () => console.log("Will not be called when mounted"),
    [dependency1, dependency2]
  );
}
```

## Definition

```tsx
function useDidUpdate(fn: React.EffectCallback, dependencies?: any[]): void;
```
