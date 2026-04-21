# useDebouncedCallback
Package: @mantine/hooks
Import: import { UseDebouncedCallback } from '@mantine/hooks';

## Usage

The `use-debounced-callback` hook creates a debounced version of the given function,
delaying its execution until a specified time has elapsed since the last invocation.

```tsx
import { useState } from 'react';
import { Loader, Text, TextInput } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';

function getSearchResults(query: string): Promise<{ id: number; title: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        query.trim() === ''
          ? []
          : Array(5)
              .fill(0)
              .map((_, index) => ({ id: index, title: `${query} ${index + 1}` }))
      );
    }, 1000);
  });
}

function Demo() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: number; title: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback(async (query: string) => {
    setLoading(true);
    setSearchResults(await getSearchResults(query));
    setLoading(false);
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    handleSearch(event.currentTarget.value);
  };

  return (
    <>
      <TextInput
        value={search}
        onChange={handleChange}
        placeholder="Search..."
        rightSection={loading && <Loader size={20} />}
      />
      {searchResults.map((result) => (
        <Text key={result.id} size="sm">
          {result.title}
        </Text>
      ))}
    </>
  );
}
```


## flushOnUnmount option

By default, the callback is not fired when the component unmounts.
If you want to execute the pending callback before the component unmounts,
set `flushOnUnmount: true`:

```tsx
import { useDebouncedCallback } from '@mantine/hooks';

const callback = useDebouncedCallback(
  () => console.log('Hello'),
  { delay: 1000, flushOnUnmount: true },
);
```

## leading option

Set `leading: true` to execute the callback immediately on the first call,
then ignore subsequent calls within the delay window:

```tsx
import { useDebouncedCallback } from '@mantine/hooks';

const callback = useDebouncedCallback(
  () => console.log('Hello'),
  { delay: 1000, leading: true },
);
```

## maxWait option

Use `maxWait` to guarantee the callback is executed at least once within the given time
window, even if calls keep arriving. This is useful for scenarios like search-as-you-type
where you want intermediate results during continuous input:

```tsx
import { useDebouncedCallback } from '@mantine/hooks';

const callback = useDebouncedCallback(
  (query: string) => fetchResults(query),
  { delay: 300, maxWait: 1000 },
);
```

## Flush and cancel

You can call the `flush` method to execute the debounced callback immediately,
or `cancel` to discard the pending call:

```tsx
import { useDebouncedCallback } from '@mantine/hooks';

const callback = useDebouncedCallback(() => console.log('Hello'), 1000);

callback.flush(); // immediately executes the pending callback
callback.cancel(); // discards the pending callback
callback.isPending(); // returns true if a call is waiting to execute
```

## Definition

```tsx
interface UseDebouncedCallbackOptions {
  delay: number;
  flushOnUnmount?: boolean;
  leading?: boolean;
  maxWait?: number;
}

type UseDebouncedCallbackReturnValue<T extends (...args: any[]) => any> = ((
  ...args: Parameters<T>
) => void) & { flush: () => void; cancel: () => void; isPending: () => boolean };

function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delayOrOptions: number | UseDebouncedCallbackOptions
): UseDebouncedCallbackReturnValue<T>
```

## Exported types

The `UseDebouncedCallbackOptions` and `UseDebouncedCallbackReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseDebouncedCallbackOptions, UseDebouncedCallbackReturnValue } from '@mantine/hooks';
```
