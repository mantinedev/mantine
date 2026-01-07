# useSetState
Package: @mantine/hooks
Import: import { UseSetState } from '@mantine/hooks';

## Usage

`use-set-state` works similar to how `this.setState` works in class components – it shallow merges state partial
into current state.

```tsx
import { useSetState } from '@mantine/hooks';

const [state, setState] = useSetState({
  name: 'John',
  age: 35,
  job: 'Engineer',
});

state; // -> { name: 'John', age: 35, job: 'Engineer' }

setState({ name: 'Jane' }); // -> { name: 'Jane', age: 35, job: 'Engineer' }
setState({ age: 25, job: 'Manager' }); // -> { name: 'Jane', age: 25, job: 'Manager' }
setState((current) => ({ age: current.age + 7 })); // -> { name: 'Jane', age: 32, job: 'Manager' }
```

Note that it can work only with objects: primitive values and arrays are not supported:

```tsx
import { useSetState } from '@mantine/hooks';

useSetState([1, 2, 3]); // -> will not work
useSetState(1); // -> will not work
useSetState({ skills: ['JavaScript', 'TypeScript'] }); // -> works fine
```

## Definition

```tsx
type UseSetStateCallback<T> = (
  state: Partial<T> | ((currentState: T) => Partial<T>)
) => void;

type UseSetStateReturnValue<T> = [T, UseSetStateCallback<T>];

function useSetState<T extends Record<string, any>>(initialState: T): UseSetStateReturnValue<T>
```

## Exported types

`UseSetStateCallback` and `UseSetStateReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseSetStateCallback, UseSetStateReturnValue } from '@mantine/hooks';
```
