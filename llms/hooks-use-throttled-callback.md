# useThrottledCallback
Package: @mantine/hooks
Import: import { UseThrottledCallback } from '@mantine/hooks';

## Usage

`useThrottledCallback` accepts a function and a wait time in milliseconds.
It returns a throttled version of the function that will only be called at most once every `wait` milliseconds.



## Definition

```tsx
function useThrottledCallback<T extends (...args: any[]) => any>(
  callback: T,
  wait: number
): (...args: Parameters<T>) => void;
```
