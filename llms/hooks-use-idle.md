# useIdle
Package: @mantine/hooks
Import: import { UseIdle } from '@mantine/hooks';

## Usage

The `use-idle` hook detects if the user does nothing for a given time in milliseconds:

```tsx
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
```


## Custom events

By default, the hook will listen to `keypress`, `mousemove`, `touchmove`, `wheel`, `click`, and `scroll` events to set the idle status.
To change that, provide a list of events in the `options` argument:

```tsx

import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}

```


## Initial state

By default, the hook will return an idle state.
To change this, provide an initial state value in the `options` argument:

```tsx

import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}

```


## Definition

```tsx
interface UseIdleOptions {
  events?: (keyof DocumentEventMap)[];
  initialState?: boolean;
}

function useIdle(timeout: number, options?: UseIdleOptions): boolean;
```

## Exported types

The `UseIdleOptions` type is exported from `@mantine/hooks`;

```tsx
import type { UseIdleOptions } from '@mantine/hooks';
```
