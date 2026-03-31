# useFetch
Package: @mantine/hooks
Import: import { UseFetch } from '@mantine/hooks';

## Usage

The `useFetch` hook sends a GET request to the specified URL and returns the response data, loading state, error,
`refetch` and `abort` functions.

```tsx
import { Box, Button, Code, Group, LoadingOverlay, Text } from '@mantine/core';
import { useFetch } from '@mantine/hooks';

interface Item {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function Demo() {
  const { data, loading, error, refetch, abort } = useFetch<Item[]>(
    'https://jsonplaceholder.typicode.com/todos/'
  );

  return (
    <div>
      {error && <Text c="red">{error.message}</Text>}

      <Group>
        <Button onClick={refetch} color="blue">
          Refetch
        </Button>
        <Button onClick={abort} color="red">
          Abort
        </Button>
      </Group>
      <Box pos="relative" mt="md">
        <Code block>{data ? JSON.stringify(data.slice(0, 3), null, 2) : 'Fetching'}</Code>
        <LoadingOverlay visible={loading} />
      </Box>
    </div>
  );
}
```


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

`UseFetchOptions` and `UseFetchReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseFetchOptions, UseFetchReturnValue } from '@mantine/hooks';
```
