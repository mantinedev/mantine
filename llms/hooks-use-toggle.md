# useToggle
Package: @mantine/hooks
Import: import { UseToggle } from '@mantine/hooks';

## Usage

The `use-toggle` hook implements a common state pattern – it switches state between given values:

```tsx
import { Button } from '@mantine/core';
import { useToggle } from '@mantine/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
```


## API

The hook accepts an array as a single argument; the first option will be used as the default value.

The hook returns an array with the state value and toggle function:

```tsx
import { useToggle } from '@mantine/hooks';

const [value, toggle] = useToggle(['light', 'dark'] as const);

toggle(); // -> value == 'dark'
toggle(); // -> value == 'light'

// You can force a specific value; in this case, state will be set to the given value
toggle('dark'); // -> value == 'dark'
```

If you do not provide an array with options, then `use-toggle` will use boolean values with `false` as the default:

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

The `UseToggleReturnValue` type is exported from `@mantine/hooks`;

```tsx
import type { UseToggleReturnValue } from '@mantine/hooks';
```
