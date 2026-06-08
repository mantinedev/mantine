# useLongPress
Package: @mantine/hooks
Import: import { UseLongPress } from '@mantine/hooks';

## Usage

```tsx
import { Button } from '@mantine/core';
import { useLongPress } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

function Demo() {
  const handlers = useLongPress(() => notifications.show({ message: 'Long press triggered' }));
  return <Button {...handlers}>Press and hold</Button>;
}
```


## Definition

```tsx
type UseLongPressEvent = 'mouse' | 'touch';

interface UseLongPressOptions {
  /** Time in milliseconds to trigger the long press, default is 400ms */
  threshold?: number;

  /** Input types that can trigger the long press, `['mouse', 'touch']` by default */
  events?: UseLongPressEvent[];

  /** If set, the long press is canceled when the pointer moves further than the given distance in px from the start position. `true` uses a 10px threshold, a number sets a custom threshold. `false` by default */
  cancelOnMove?: boolean | number;

  /** Callback triggered when the long press starts */
  onStart?: (event: React.MouseEvent | React.TouchEvent) => void;

  /** Callback triggered when the long press finishes */
  onFinish?: (event: React.MouseEvent | React.TouchEvent) => void;

  /** Callback triggered when the long press is canceled */
  onCancel?: (event: React.MouseEvent | React.TouchEvent) => void;
}

interface UseLongPressReturnValue {
  onMouseDown?: (event: React.MouseEvent) => void;
  onMouseUp?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onMouseMove?: (event: React.MouseEvent) => void;
  onTouchStart?: (event: React.TouchEvent) => void;
  onTouchEnd?: (event: React.TouchEvent) => void;
  onTouchCancel?: (event: React.TouchEvent) => void;
  onTouchMove?: (event: React.TouchEvent) => void;
}

function useLongPress(
  onLongPress: (event: React.MouseEvent | React.TouchEvent) => void,
  options?: UseLongPressOptions,
): UseLongPressReturnValue
```

## Restrict to specific input types

By default the long press is triggered by both mouse and touch input. Use the `events`
option to restrict it to a subset – for example, `['touch']` returns only touch handlers,
leaving mouse input to your own handlers:

```tsx
import { useLongPress } from '@mantine/hooks';

function Demo() {
  const handlers = useLongPress(() => console.log('Long pressed'), {
    events: ['touch'],
  });

  return <button {...handlers}>Press me</button>;
}
```

## Cancel on movement

Set `cancelOnMove` to cancel a pending long press when the pointer moves further than the
given distance from the start position. This is useful on touch devices so that a scroll
gesture does not trigger the long press. Pass `true` to use the default 10px threshold or a
number to set a custom one:

```tsx
import { useLongPress } from '@mantine/hooks';

function Demo() {
  const handlers = useLongPress(() => console.log('Long pressed'), {
    cancelOnMove: true,
  });

  return <button {...handlers}>Press me</button>;
}
```

## Exported types

`UseLongPressEvent`, `UseLongPressOptions` and `UseLongPressReturnValue` types are exported
from the `@mantine/hooks` package; you can import them in your application:

```tsx
import type {
  UseLongPressEvent,
  UseLongPressOptions,
  UseLongPressReturnValue,
} from '@mantine/hooks';
```
