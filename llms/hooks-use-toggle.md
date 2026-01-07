# useToggle
Package: @mantine/hooks
Import: import { UseToggle } from '@mantine/hooks';

## Usage

`use-toggle` implements a common state pattern – it switches state between given values:



## API

The hook accepts an array as single argument, the first option will be used as the default value.

The hook returns an array with state value and toggle function:

```tsx
import { useToggle } from '@mantine/hooks';

const [value, toggle] = useToggle(['light', 'dark'] as const);

toggle(); // -> value == 'light'
toggle(); // -> value == 'dark'

// You can force specific value, in this case state will be set to given value
toggle('dark'); // -> value == 'dark'
```

If you do not provide an array with options, then `use-toggle` will use boolean values with `false` as default:

```tsx
import { useToggle } from '@mantine/hooks';

const [value, toggle] = useToggle();
// -> value === false
toggle(); // -> value === true
```

## Set type

By default, TypeScript will guess your type, but in most cases it's better to use const assertion to prevent type widening:

```tsx
import { useToggle } from '@mantine/hooks';

useToggle(['light', 'dark']); // value is string
useToggle(['light', 'dark'] as const); // value is 'dark' | 'light'
useToggle<'dark' | 'light'>(['light', 'dark']); // same as above
```

## Definition

```tsx
type UseToggleAction<T> = (value?: React.SetStateAction<T>) => void;
type UseToggleReturnValue<T> = [T, UseToggleAction<T>];

function useToggle<T = boolean>(options?: T[]): UseToggleReturnValue<T>;
```

## Exported types

`UseToggleReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UseToggleReturnValue } from '@mantine/hooks';
```
