# useHover
Package: @mantine/hooks
Import: import { UseHover } from '@mantine/hooks';

## Usage

```tsx
import { useHover } from '@mantine/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
```


## Definition

```tsx
interface UseHoverReturnValue<T extends HTMLElement = any> {
  hovered: boolean;
  ref: React.RefCallback<T | null>;
}

function useHover<T extends HTMLElement = any>(): UseHoverReturnValue<T>
```

## Exported types

The `UseHoverReturnValue` type is exported from `@mantine/hooks`;

```tsx
import type { UseHoverReturnValue } from '@mantine/hooks';
```
