# useHover
Package: @mantine/hooks
Import: import { UseHover } from '@mantine/hooks';

## Usage



## Definition

```tsx
interface UseHoverReturnValue<T extends HTMLElement = any> {
  hovered: boolean;
  ref: React.RefCallback<T | null>;
}

function useHover<T extends HTMLElement = any>(): UseHoverReturnValue<T>
```

## Exported types

`UseHoverReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseHoverReturnValue } from '@mantine/hooks';
```
