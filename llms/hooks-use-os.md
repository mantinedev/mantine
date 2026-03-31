# useOs
Package: @mantine/hooks
Import: import { UseOs } from '@mantine/hooks';

## Usage

The `use-os` hook returns the user's operating system. Possible values are: `undetermined`, `macos`, `ios`, `windows`, `android`, `linux`, `chromeos`.
If the OS cannot be identified, for example, during server-side rendering, `undetermined` will be returned.

```tsx
import { useOs } from '@mantine/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
```


## Definition

```tsx
type UseOSReturnValue =
  | 'undetermined'
  | 'macos'
  | 'ios'
  | 'windows'
  | 'android'
  | 'linux'
  | 'chromeos';

interface UseOsOptions {
  getValueInEffect: boolean;
}

function getOS(options?: UseOsOptions): UseOSReturnValue;
```

## Exported types

`UseOsOptions` and `UseOSReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseOsOptions, UseOSReturnValue } from '@mantine/hooks';
```
