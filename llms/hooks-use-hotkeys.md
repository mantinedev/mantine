# useHotkeys
Package: @mantine/hooks
Import: import { UseHotkeys } from '@mantine/hooks';

## Usage

The `use-hotkeys` hook accepts an array of hotkeys and handler tuples as its first argument:

* `hotkey` - hotkey string, for example `ctrl+E`, `shift+alt+L`, `mod+S`
* `handler` - event handler called when the given combination is pressed
* `options` - object with extra options for the hotkey handler

```tsx
// Demo.tsx
import { useHotkeys } from '@mantine/hooks';
import { spotlight } from '@mantine/spotlight';
import { useMantineColorScheme } from '@mantine/core';
import { Shortcut } from './Shortcut';

function Demo() {
  const { toggleColorScheme } = useMantineColorScheme();

  useHotkeys([
    ['mod + K', () => spotlight.open()],
    ['mod + J', () => toggleColorScheme()],
    ['mod + shift + alt + X', () => secret()],
  ]);

  return (
    <>
      <Shortcut symbol="K" description="Open search" />
      <Shortcut symbol="J" description="Toggle color scheme" />
    </>
  );
}

// Shortcut.tsx
import { Box, Group, Kbd } from '@mantine/core';

export function Shortcut({ symbol, description }: { symbol: string; description: string }) {
  return (
    <Group gap={7} p={10}>
      <Kbd size={20}>Ctrl</Kbd>
      <Box fz={22} fw={500}>
        +
      </Box>
      <Kbd size={20} w={40}>
        {symbol}
      </Kbd>

      <Box fz={18} ms="sm">
        – {description}
      </Box>
    </Group>
  );
}
```


The second argument is a list of HTML tags on which hotkeys should be ignored.
By default, hotkey events are ignored if the focus is in `input`, `textarea`, and `select` elements.

```tsx
import { useHotkeys } from '@mantine/hooks';

function Demo() {
  // Ignore hotkey events only when focus is in input and textarea elements
  useHotkeys(
    [['ctrl+K', () => console.log('Trigger search')]],
    ['INPUT', 'TEXTAREA']
  );

  // Empty array – do not ignore hotkey events on any element
  useHotkeys([['ctrl+K', () => console.log('Trigger search')]], []);
}
```

## Targeting elements

The `use-hotkeys` hook can only work with the document element; you will need to create your own event listener
if you need to support other elements. For this purpose, the `@mantine/hooks` package exports a `getHotkeyHandler` function
that should be used with `onKeyDown`:

```tsx
import { useState } from 'react';
import { getHotkeyHandler } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState("I've just used a hotkey to send a message");
  const handleSubmit = () => notifications.show({ title: 'Your message', message: value });
  const handleSave = () => notifications.show({ title: 'You saved', color: 'teal', message: value });

  return (
    <TextInput
      placeholder="Your message"
      label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={getHotkeyHandler([
        ['mod+Enter', handleSubmit],
        ['mod+S', handleSave],
      ])}
    />
  );
}
```


With `getHotkeyHandler` you can also add events to any DOM node using `.addEventListener`:

```tsx
import { getHotkeyHandler } from '@mantine/hooks';

document.body.addEventListener(
  'keydown',
  getHotkeyHandler([
    ['mod+Enter', () => console.log('Submit')],
    ['mod+S', () => console.log('Save')],
  ])
);
```

## Supported formats

* `mod+S` – detects `⌘+S` on macOS and `Ctrl+S` on Windows
* `ctrl+shift+X` – handles multiple modifiers
* `alt + shift + L` – you can use whitespace inside hotkey
* `ArrowLeft` – you can use special keys using [this format](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
* `shift + [plus]` – you can use `[plus]` to detect `+` key
* `Digit1` and `Hotkey1` - you can use physical key assignments [defined on MDN](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values).

## Types

The `@mantine/hooks` package exports `HotkeyItemOptions` and `HotkeyItem` types:

```tsx
interface HotkeyItemOptions {
  preventDefault?: boolean;
  usePhysicalKeys?: boolean;
}

type HotkeyItem = [
  string,
  (event: KeyboardEvent) => void,
  HotkeyItemOptions?,
];
```

`HotkeyItemOptions` provides the `usePhysicalKeys` option to force physical key assignment. This is useful for non-QWERTY keyboard layouts.

The `HotkeyItem` type can be used to create hotkey items outside of the `use-hotkeys` hook:

```tsx
import { HotkeyItem, useHotkeys } from '@mantine/hooks';

const hotkeys: HotkeyItem[] = [
  [
    'mod+J',
    () => console.log('Toggle color scheme'),
    { preventDefault: false },
  ],
  ['ctrl+K', () => console.log('Trigger search')],
  ['alt+mod+shift+X', () => console.log('Rick roll')],
  [
    'D',
    () => console.log('Triggers when pressing "E" on Dvorak keyboards!'),
    { usePhysicalKeys: true }
  ],
];

useHotkeys(hotkeys);
```

## Definition

```tsx
interface HotkeyItemOptions {
  preventDefault?: boolean;
  usePhysicalKeys?: boolean;
}

type HotkeyItem = [string, (event: KeyboardEvent) => void, HotkeyItemOptions?]

function useHotkeys(
  hotkeys: HotkeyItem[],
  tagsToIgnore?: string[],
  triggerOnContentEditable?: boolean
): void;
```

## Exported types

The `HotkeyItemOptions` and `HotkeyItem` types are exported from `@mantine/hooks`;

```tsx
import type { HotkeyItemOptions, HotkeyItem } from '@mantine/hooks';
```
