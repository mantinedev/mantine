# useRadialMove
Package: @mantine/hooks
Import: import { UseRadialMove } from '@mantine/hooks';

## Usage

`use-radial-move` hook can be used to create custom radial sliders, for example [AngleSlider](https://mantine.dev/core/angle-slider)
component is based on this hook. It works similar to [use-move](https://mantine.dev/hooks/use-move) hook.

Example of creating custom radial slider:



## Definition

```tsx
interface UseRadialMoveOptions {
  /** Number by which value is incremented/decremented with mouse and touch events, `0.01` by default */
  step?: number;

  /** Called in `onMouseUp` and `onTouchEnd` events with the current value */
  onChangeEnd?: (value: number) => void;

  /** Called in `onMouseDown` and `onTouchStart` events */
  onScrubStart?: () => void;

  /** Called in `onMouseUp` and `onTouchEnd` events */
  onScrubEnd?: () => void;
}

interface UseRadialMoveReturnValue<T extends HTMLElement = any> {
  /** Ref to be passed to the element that should be used for radial move */
  ref: React.RefCallback<T | null>;

  /** Indicates whether the radial move is active */
  active: boolean;
}

function useRadialMove<T extends HTMLElement = HTMLDivElement>(
  onChange: (value: number) => void,
  options?: UseRadialMoveOptions,
): UseRadialMoveReturnValue<T>;
```

## Exported types

`UseRadialMoveOptions` and `UseRadialMoveReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseRadialMoveOptions, UseRadialMoveReturnValue } from '@mantine/hooks';
```
