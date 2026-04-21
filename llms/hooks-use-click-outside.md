# useClickOutside
Package: @mantine/hooks
Import: import { UseClickOutside } from '@mantine/hooks';

## Usage

```tsx
import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
```


## API

The `use-click-outside` hook accepts 3 arguments:

* `handler` – function that is called when clicking outside
* `events` – optional list of events that trigger outside click, `['mousedown', 'touchstart']` by default
* `nodes` - optional list of nodes that should not trigger outside click event
* `enabled` - optional boolean to dynamically enable/disable the listener, `true` by default

The hook returns a `ref` object that must be passed to the element
based on which outside clicks should be captured.

```tsx
import { useClickOutside } from '@mantine/hooks';

function Example() {
  const handleClickOutside = () =>
    console.log('Clicked outside of div');
  const ref = useClickOutside(handleClickOutside);
  return <div ref={ref} />;
}
```

## Change events

By default, `use-click-outside` listens to `mousedown` and `touchstart` events,
you can change these events by passing an array of events as second argument:

```tsx
import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false), ['mouseup', 'touchend']);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
```


## Multiple nodes

```tsx
// Will work only with useState, not useRef
import { useState } from 'react';
import { Portal } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(
    null
  );
  const [control, setControl] = useState<HTMLDivElement | null>(null);

  useClickOutside(() => console.log('outside'), null, [
    control,
    dropdown,
  ]);

  return (
    // We cannot use root element ref as it does not contain dropdown
    <div>
      <div ref={setControl}>Control</div>
      <Portal>
        <div ref={setDropdown}>Dropdown</div>
      </Portal>
    </div>
  );
}
```

## Set ref type

```tsx
import { useClickOutside } from '@mantine/hooks';

const ref = useClickOutside<HTMLDivElement>(() =>
  console.log('Click outside')
);
```

## Definition

```tsx
function useClickOutside<T extends HTMLElement = any>(
  handler: (event: MouseEvent | TouchEvent) => void,
  events?: string[] | null,
  nodes?: (HTMLElement | null)[],
  enabled?: boolean
): React.RefObject<T>;
```
