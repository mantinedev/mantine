# useMouse
Package: @mantine/hooks
Import: import { UseMouse } from '@mantine/hooks';

## Usage

```tsx
import { Text, Code, Group, Box } from '@mantine/core';
import { useMouse } from '@mantine/hooks';

function Demo() {
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group justify="center">
        <Box ref={ref} w={300} h={180} bg="var(--mantine-color-blue-light)" />
      </Group>
      <Text ta="center">
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </>
  );
}
```


If you do not provide a `ref`, the mouse position is tracked relative to the document element:

```tsx
import { Text, Code } from '@mantine/core';
import { useMousePosition } from '@mantine/hooks';

function Demo() {
  const { x, y } = useMousePosition();

  return (
    <Text ta="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}
```


## API

Set the `resetOnExit` option to reset the mouse position to `0, 0` when the mouse leaves the element:

```tsx
import { useMouse } from '@mantine/hooks';

const { ref, x, y } = useMouse({ resetOnExit: true });
```

The hook returns an object with `ref` and `x`, `y` mouse coordinates:

```tsx
import { useMouse } from '@mantine/hooks';

const {
  ref, // -> pass ref to target element; if not used, document element will be used as target element
  x, // -> mouse x position
  y, // -> mouse y position
} = useMouse();
```

On the first render (as well as during SSR), both `x` and `y` values are equal to `0`.

## Definition

```tsx
function useMouse<T extends HTMLElement = any>(options?: {
  resetOnExit?: boolean;
}): {
  x: number;
  y: number;
  ref: React.RefObject<T>;
};
```
