# useOrientation
Package: @mantine/hooks
Import: import { UseOrientation } from '@mantine/hooks';

## Usage

`useOrientation` returns an object with the current orientation of the device:



## Definition

```tsx
interface UseOrientationOptions {
  /** Default angle value, used until the real can be retrieved
   * (during server side rendering and before js executes on the page)
   * If not provided, the default value is `0`
   * */
  defaultAngle?: number;

  /** Default angle value, used until the real can be retrieved
   * (during server side rendering and before js executes on the page)
   * If not provided, the default value is `'landscape-primary'`
   * */
  defaultType?: OrientationType;

  /** If true, the initial value will be resolved in useEffect (ssr safe)
   *  If false, the initial value will be resolved in useLayoutEffect (ssr unsafe)
   *  True by default.
   */
  getInitialValueInEffect?: boolean;
}

interface UseOrientationReturnType {
  angle: number;
  type: OrientationType;
}

function useOrientation(options?: UseOrientationOptions): UseOrientationReturnType;
```

## Exported types

`UseOrientationOptions` and `UseOrientationReturnType` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseOrientationOptions, UseOrientationReturnType } from '@mantine/hooks';
```
