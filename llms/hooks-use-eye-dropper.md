# useEyeDropper
Package: @mantine/hooks
Import: import { UseEyeDropper } from '@mantine/hooks';

## Usage

`use-eye-dropper` hook provides an interface to work with [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API).
Check [browser support](https://caniuse.com/mdn-api_eyedropper) to learn which browsers support the API.



## Definition

```tsx
interface EyeDropperOpenOptions {
  signal?: AbortSignal;
}

interface EyeDropperOpenReturnType {
  sRGBHex: string;
}

interface UseEyeDropperReturnValue {
  supported: boolean;
  open: (options?: EyeDropperOpenOptions) => Promise<EyeDropperOpenReturnType | undefined>;
}

function useEyeDropper(): UseEyeDropperReturnValue;
```

## Exported types

`EyeDropperOpenOptions`, `EyeDropperOpenReturnType` and `UseEyeDropperReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type {
  EyeDropperOpenOptions,
  EyeDropperOpenReturnType,
  UseEyeDropperReturnValue,
} from '@mantine/hooks';
```
