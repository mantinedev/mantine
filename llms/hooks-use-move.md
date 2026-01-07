# useMove
Package: @mantine/hooks
Import: import { UseMove } from '@mantine/hooks';

## Usage

`use-move` handles move behavior over any element:



## API

The hook accepts a callback that is called when user moves pressed mouse over the given element
and returns an object with `ref` and active state:

```tsx
import { useMove } from '@mantine/hooks';

const {
  ref, // -> pass ref to target element
  active, // -> is user changing something right now?
} = useMove(({ x, y }) => console.log({ x, y }));
```

`x` and `y` values are always between `0` and `1`, you can use them to calculate value in your boundaries.

## Horizontal slider

You can ignore changes for one of the axis:



## Horizontal slider with styles

#### Example: customSlider

```tsx
// Demo.tsx
import { useState } from 'react';
import { IconGripVertical } from '@tabler/icons-react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: `calc(${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: `calc(${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: `calc(${value * 100}% - var(--thumb-width) / 2)` }}
        >
          <IconGripVertical stroke={1.5} />
        </div>
      </div>
    </div>
  );
}

// Demo.module.css
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
```


## Vertical slider

Moving the slider down increases the value, to reverse that set value to `1 - y` in your `setValue` function:



## Color picker



## clampUseMovePosition

`clampUseMovePosition` function can be used to clamp `x` and `y` values to `0-1` range.
It is useful when you want to use external events to change the value, for example changing value with keyboard arrows:

```tsx
import { clampUseMovePosition } from '@mantine/hooks';

clampUseMovePosition({ x: 0.5, y: 0.5 }); // -> { x: 0.5, y: 0.5 }
clampUseMovePosition({ x: 1.5, y: 0.5 }); // -> { x: 1, y: 0.5 }
clampUseMovePosition({ x: -0.5, y: 0.5 }); // -> { x: 0, y: 0.5 }
```

## UseMovePosition

`@mantine/hooks` exports `UseMovePosition` type, it can be used as a type parameter for `useState`:

```tsx
import { useState } from 'react';
import { UseMovePosition } from '@mantine/hooks';

const [value, setValue] = useState<UseMovePosition>({
  x: 0.5,
  y: 0.5,
});
```

## Definition

```tsx
interface UseMovePosition {
  x: number;
  y: number;
}

interface UseMoveHandlers {
  onScrubStart?: () => void;
  onScrubEnd?: () => void;
}

interface UseMoveReturnValue<T extends HTMLElement = any> {
  ref: React.RefCallback<T | null>;
  active: boolean;
}

function useMove<T extends HTMLElement = any>(
  onChange: (value: UseMovePosition) => void,
  handlers?: UseMoveHandlers,
  dir?: "ltr" | "rtl",
): UseMoveReturnValue<T>
```

## Exported types

`UseMovePosition`, `UseMoveReturnValue` and `UseMoveHandlers` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseMovePosition, UseMoveHandlers, UseMoveReturnValue } from '@mantine/hooks';
```
