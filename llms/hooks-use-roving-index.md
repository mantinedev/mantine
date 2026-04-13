# useRovingIndex
Package: @mantine/hooks
Import: import { UseRovingIndex } from '@mantine/hooks';

## Usage

`use-roving-index` implements the [roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex) keyboard navigation pattern.
In a group of focusable elements, only one element has `tabIndex={0}` (can be reached with Tab key),
while all others have `tabIndex={-1}`. Arrow keys move focus between items in the group.

```tsx
import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['Bold', 'Italic', 'Underline', 'Strikethrough', 'Code'];

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button key={item} variant="default" {...getItemProps({ index })}>
          {item}
        </Button>
      ))}
    </Group>
  );
}
```


## Orientation

Set `orientation` to control which arrow keys are used for navigation:

* `'horizontal'` (default) – ArrowLeft/ArrowRight
* `'vertical'` – ArrowUp/ArrowDown
* `'both'` – all four arrow keys

```tsx
import { Stack, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['General', 'Account', 'Security', 'Notifications', 'Privacy'];

function Demo() {
  const { getItemProps, focusedIndex } = useRovingIndex({
    total: items.length,
    orientation: 'vertical',
    loop: true,
  });

  return (
    <Stack gap={4} w={200}>
      {items.map((item, index) => (
        <UnstyledButton
          key={item}
          {...getItemProps({ index })}
          p="xs"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            backgroundColor:
              focusedIndex === index
                ? 'var(--mantine-color-blue-light)'
                : undefined,
          }}
        >
          {item}
        </UnstyledButton>
      ))}
    </Stack>
  );
}
```


## Grid navigation

Set `columns` to enable 2D grid navigation. ArrowLeft/ArrowRight navigate within a row,
ArrowUp/ArrowDown navigate across rows preserving the column position.
Navigation stops at grid boundaries. Use Ctrl+Home/Ctrl+End to jump to the first/last item in the grid,
and Home/End to jump to the first/last item in the current row.

```tsx
import { SimpleGrid, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

function Demo() {
  const total = 9;
  const columns = 3;

  const { getItemProps, focusedIndex } = useRovingIndex({
    total,
    columns,
  });

  return (
    <SimpleGrid cols={columns} w={300} spacing="xs">
      {Array.from({ length: total }, (_, index) => (
        <UnstyledButton
          key={index}
          {...getItemProps({ index })}
          p="md"
          ta="center"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            border: '1px solid var(--mantine-color-default-border)',
            backgroundColor:
              focusedIndex === index
                ? 'var(--mantine-color-blue-light)'
                : undefined,
          }}
        >
          Cell {index + 1}
        </UnstyledButton>
      ))}
    </SimpleGrid>
  );
}
```


## Disabled items

Use `isItemDisabled` callback to mark items as disabled. Disabled items are skipped during
keyboard navigation. If the initially focused item is disabled, the first non-disabled item
receives focus instead.

```tsx
import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['Cut', 'Copy', 'Paste', 'Delete', 'Select All'];
const disabledIndices = new Set([1, 3]);

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
    isItemDisabled: (index) => disabledIndices.has(index),
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button
          key={item}
          variant="default"
          disabled={disabledIndices.has(index)}
          {...getItemProps({ index })}
        >
          {item}
        </Button>
      ))}
    </Group>
  );
}
```


## Loop

By default, navigation wraps around at boundaries (`loop` is `true`).
Set `loop={false}` to stop at the first and last items.

```tsx
import { useState } from 'react';
import { Button, Checkbox, Group, Stack } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

function Demo() {
  const [loop, setLoop] = useState(true);
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop,
  });

  return (
    <Stack>
      <Checkbox
        label="Loop navigation"
        checked={loop}
        onChange={(event) => setLoop(event.currentTarget.checked)}
      />
      <Group gap="xs">
        {items.map((item, index) => (
          <Button key={item} variant="default" {...getItemProps({ index })}>
            {item}
          </Button>
        ))}
      </Group>
    </Stack>
  );
}
```


## Controlled mode

Use `focusedIndex` and `onFocusChange` to control the focused index externally:

```tsx
import { useState } from 'react';
import { useRovingIndex } from '@mantine/hooks';

function Demo() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const { getItemProps } = useRovingIndex({
    total: 5,
    focusedIndex,
    onFocusChange: setFocusedIndex,
  });

  // ...
}
```

## activateOnFocus

Set `activateOnFocus` to `true` to automatically click items when they receive focus
via keyboard navigation. This is useful for tab-like interfaces where focus and selection
should be synchronized:

```tsx
import { useRovingIndex } from '@mantine/hooks';

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: 5,
    activateOnFocus: true,
  });

  // ...
}
```

## RTL support

Set `dir="rtl"` to swap ArrowLeft/ArrowRight behavior for right-to-left layouts:

```tsx
import { useRovingIndex } from '@mantine/hooks';

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: 5,
    dir: 'rtl',
  });

  // ...
}
```

## Definition

```tsx
export interface UseRovingIndexInput {
  /** Total number of items in the group */
  total: number;

  /** Which arrow keys navigate, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical' | 'both';

  /** Whether navigation wraps at boundaries, `true` by default */
  loop?: boolean;

  /** Text direction, `'ltr'` by default */
  dir?: 'rtl' | 'ltr';

  /** Whether to click element when it receives focus via keyboard, `false` by default */
  activateOnFocus?: boolean;

  /** Number of columns for grid (2D) navigation. When set, enables grid mode */
  columns?: number;

  /** Controlled focused index */
  focusedIndex?: number;

  /** Initial focused index for uncontrolled mode, first non-disabled item by default */
  initialIndex?: number;

  /** Called when focused index changes */
  onFocusChange?: (index: number) => void;

  /** Function to check if item at given index is disabled, `() => false` by default */
  isItemDisabled?: (index: number) => boolean;
}

export interface UseRovingIndexGetItemPropsInput {
  /** Index of the item in the group */
  index: number;

  /** Called when item is clicked */
  onClick?: React.MouseEventHandler;

  /** Called when keydown event fires on item */
  onKeyDown?: React.KeyboardEventHandler;
}

export interface UseRovingIndexReturnValue {
  /** Get props to spread on each navigable item */
  getItemProps: (options: UseRovingIndexGetItemPropsInput) => {
    tabIndex: 0 | -1;
    onKeyDown: React.KeyboardEventHandler;
    onClick: React.MouseEventHandler;
    ref: React.RefCallback<HTMLElement>;
  };

  /** Currently focused index */
  focusedIndex: number;

  /** Programmatically set focused index */
  setFocusedIndex: (index: number) => void;
}

function useRovingIndex(input: UseRovingIndexInput): UseRovingIndexReturnValue;
```

## Exported types

`UseRovingIndexInput`, `UseRovingIndexGetItemPropsInput` and `UseRovingIndexReturnValue` types are exported
from the `@mantine/hooks` package; you can import them in your application:

```tsx
import type {
  UseRovingIndexInput,
  UseRovingIndexGetItemPropsInput,
  UseRovingIndexReturnValue,
} from '@mantine/hooks';
```
