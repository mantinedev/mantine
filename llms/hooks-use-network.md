# useNetwork
Package: @mantine/hooks
Import: import { UseNetwork } from '@mantine/hooks';

## Usage

`use-network` hook returns an object with current connection status:



## Browser support

`use-network` uses experimental `navigator.connection`, see [browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection#browser_compatibility).

## Definition

```tsx

interface UserNetworkReturnValue {
  online: boolean;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  rtt?: number;
  saveData?: boolean;
  type?: 'bluetooth' | 'cellular' | 'ethernet' | 'wifi' | 'wimax' | 'none' | 'other' | 'unknown';
}

function useNetwork(): UserNetworkReturnValue;
```

## Exported types

`UserNetworkReturnValue` type is exported from `@mantine/hooks` package,
you can import it in your application:

```tsx
import type { UserNetworkReturnValue } from '@mantine/hooks';
```
