# useSet
Package: @mantine/hooks
Import: import { UseSet } from '@mantine/hooks';

## Usage

`useSet` return [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
object that can be used as React state: `add`, `clear` and `delete` methods trigger state updates.



## Definition

```tsx
function useSet<T>(values?: T[]): Set<T>;
```
