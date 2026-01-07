# usePrevious
Package: @mantine/hooks
Import: import { UsePrevious } from '@mantine/hooks';

## Usage

`use-previous` stores the previous value of a state in a ref.
It returns `undefined` on initial render and the previous value of a state after rerender:



## Definition

```tsx
function usePrevious<T>(value: T): T | undefined;
```
