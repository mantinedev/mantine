# useScrollDirection
Package: @mantine/hooks
Import: import { UseScrollDirection } from '@mantine/hooks';

## Usage

The `use-scroll-direction` hook detects whether the user is currently scrolling up or down.
It returns `'up'` when the user is scrolling up, `'down'` when scrolling down, and `'unknown'`
before any scroll event has occurred.

```tsx
import { Badge, Text } from '@mantine/core';
import { useScrollDirection } from '@mantine/hooks';

function Demo() {
  const direction = useScrollDirection();

  return (
    <>
      <Badge color={direction === 'up' ? 'teal' : direction === 'down' ? 'red' : 'gray'}>
        {direction === 'up' && '↑ Scrolling UP'}
        {direction === 'down' && '↓ Scrolling DOWN'}
        {direction === 'unknown' && 'Scroll to detect direction'}
      </Badge>
      <Text mt="xs">Scroll the page to see the scroll direction</Text>
    </>
  );
}
```


## Definition

```tsx
function useScrollDirection(): 'up' | 'down' | 'unknown';
```
