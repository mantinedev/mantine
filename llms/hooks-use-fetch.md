# useFetch
Package: @mantine/hooks
Import: import { UseFetch } from '@mantine/hooks';

## Usage

`useFetch` hook sends a fetch request to the specified URL and returns the response data, loading state, error,
`refetch` and `abort` functions. You can pass other parameters that fetch takes like method, headers etc.



## Definition

```tsx
interface UseFetchOptions extends RequestInit {
  autoInvoke?: boolean;
}

interface UseFetchReturnValue<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<any>;
  abort: () => void;
}

function useFetch<T>(
  url: string,
  options?: UseFetchOptions,
): UseFetchReturnValue<T>
```

## Exported types

`UseFetchOptions` and `UseFetchReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseFetchOptions, UseFetchReturnValue } from '@mantine/hooks';
```
