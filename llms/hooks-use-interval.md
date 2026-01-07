# useInterval
Package: @mantine/hooks
Import: import { UseInterval } from '@mantine/hooks';

## Usage



## Auto invoke interval

To automatically start interval when component is mounted, set `autoInvoke` option to `true`:

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

* `start` – start interval
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

`UseIntervalOptions` and `UseIntervalReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseIntervalOptions, UseIntervalReturnValue } from '@mantine/hooks';
```
