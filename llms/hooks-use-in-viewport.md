# useInViewport
Package: @mantine/hooks
Import: import { UseInViewport } from '@mantine/hooks';

## Usage

`use-in-viewport` is a simpler alternative to [use-intersection](https://mantine.dev/hooks/use-intersection) that only checks if the element
is visible in the viewport:



## Definition

```tsx
interface UseInViewportReturnValue<T extends HTMLElement = any> {
  inViewport: boolean;
  ref: React.RefCallback<T | null>;
}

function useInViewport<T extends HTMLElement = any>(): UseInViewportReturnValue<T>
```

## Exported types

`UseInViewportReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseInViewportReturnValue } from '@mantine/hooks';
```
