# useInterval
Package: @mantine/hooks
Import: import { UseInterval } from '@mantine/hooks';

## Usage

```tsx
import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { Stack, Button, Text } from '@mantine/core';

function Demo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack align="center">
      <Text>Page loaded <b>{seconds}</b> seconds ago</Text>
      <Button onClick={interval.toggle} color={interval.active ? 'red' : 'teal'}>
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}
```


## Auto invoke interval

To automatically start the interval when the component is mounted, set the `autoInvoke` option to `true`:

```tsx
import { useInterval } from '@mantine/hooks';

const interval = useInterval(
  () => console.log('Interval tick'),
  1000,
  { autoInvoke: true }
);
```

## API

```tsx
import { useInterval } from '@mantine/hooks';

const { start, stop, toggle, active } = useInterval(fn, interval);
```

Arguments:

* `fn` – function that is called at each interval tick
* `interval` – amount of milliseconds between each tick

Return object:

* `start` – start the interval
* `stop` – stop interval
* `toggle` – toggle interval
* `active` – current interval status

## Definition

```tsx
interface UseIntervalOptions {
  /** If set, the interval will start automatically when the component is mounted, `false` by default */
  autoInvoke?: boolean;
}

interface UseIntervalReturnValue {
  /** Starts the interval */
  start: () => void;

  /** Stops the interval */
  stop: () => void;

  /** Toggles the interval */
  toggle: () => void;

  /** Indicates if the interval is active */
  active: boolean;
}

function useInterval(
  fn: () => void,
  interval: number,
  options?: UseIntervalOptions,
): UseIntervalReturnValue
```

## Exported types

`UseIntervalOptions` and `UseIntervalReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseIntervalOptions, UseIntervalReturnValue } from '@mantine/hooks';
```
