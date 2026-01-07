# useThrottledValue
Package: @mantine/hooks
Import: import { UseThrottledValue } from '@mantine/hooks';

## Usage

`useThrottledValue` accepts a value and a wait time in milliseconds.
It returns a throttled value that cannot change more than once every `wait` milliseconds.



## Definition

```tsx
function useThrottledValue<T>(value: T, wait: number): T;
```
