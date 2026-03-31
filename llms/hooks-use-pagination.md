# usePagination
Package: @mantine/hooks
Import: import { UsePagination } from '@mantine/hooks';

## Usage

The `use-pagination` hook is a state management hook for the [Pagination](https://mantine.dev/llms/core-pagination.md) component;
it manages pagination with controlled and uncontrolled state:

```tsx
function Demo() {
  return <Pagination total={10} />;
}
```


```tsx
import { usePagination } from '@mantine/hooks';

const pagination = usePagination({ total: 10, initialPage: 1 });

pagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];

pagination.setPage(5);
pagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];

pagination.next();
pagination.range; // -> [1, 'dots', 5, 6, 7, 'dots', 10];

pagination.previous();
pagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];

pagination.last();
pagination.range; // -> [1, 'dots', 6, 7, 8, 9, 10];

pagination.first();
pagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];
```

## Controlled

The hook supports controlled mode; provide `page` and `onChange` props to manage state from outside:

```tsx
import { useState } from 'react';
import { usePagination } from '@mantine/hooks';

const [page, onChange] = useState(1);
const pagination = usePagination({ total: 10, page, onChange });

// Will call onChange with 5
pagination.setPage(5);
pagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];

// ... All other examples work the same
```

## Siblings

Control number of active item siblings with `siblings`:

```tsx
import { usePagination } from '@mantine/hooks';

const pagination = usePagination({ total: 20, siblings: 3 });
```

```tsx
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
```


## Boundaries

Control number of items on each boundary with `boundaries`:

```tsx
import { usePagination } from '@mantine/hooks';

const pagination = usePagination({ total: 20, boundaries: 3 });
```

```tsx
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
```


## Start value

Set `startValue` to define the starting page number. For example, with `startValue={5}` and `total={15}`,
the pagination range will be from 5 to 15:

```tsx
import { Button, Group, Text } from '@mantine/core';
import { usePagination } from '@mantine/hooks';

function Demo() {
  const pagination = usePagination({ total: 15, startValue: 5, initialPage: 5 });

  return (
    <>
      <Text>Active page: {pagination.active}</Text>
      <Text>Range: [{pagination.range.join(', ')}]</Text>
      <Group mt="md" gap={4}>
        <Button size="compact-sm" variant="default" onClick={pagination.first}>
          First
        </Button>
        <Button size="compact-sm" variant="default" onClick={pagination.previous}>
          Previous
        </Button>
        {pagination.range.map((page, index) =>
          page === 'dots' ? (
            <span key={index}>...</span>
          ) : (
            <Button
              size="compact-sm"
              key={index}
              onClick={() => pagination.setPage(page)}
              variant={pagination.active === page ? 'filled' : 'default'}
              miw={34}
            >
              {page}
            </Button>
          )
        )}
        <Button size="compact-sm" variant="default" onClick={pagination.next}>
          Next
        </Button>
        <Button size="compact-sm" variant="default" onClick={pagination.last}>
          Last
        </Button>
      </Group>
    </>
  );
}
```


## Definition

```tsx
export interface UsePaginationOptions {
  /** Page selected on initial render, defaults to 1 or startValue if provided */
  initialPage?: number;

  /** Controlled active page number */
  page?: number;

  /** Total amount of pages */
  total: number;

  /** Siblings amount on left/right side of selected page, defaults to 1 */
  siblings?: number;

  /** Amount of elements visible on left/right edges, defaults to 1  */
  boundaries?: number;

  /** Callback fired after change of each page */
  onChange?: (page: number) => void;

  /** Starting page number, defaults to 1 */
  startValue?: number;
}

export interface UsePaginationReturnValue {
  /** Array of page numbers and dots */
  range: (number | 'dots')[];

  /** Active page number */
  active: number;

  /** Function to set active page */
  setPage: (page: number) => void;

  /** Function to go to next page */
  next: () => void;

  /** Function to go to previous page */
  previous: () => void;

  /** Function to go to first page */
  first: () => void;

  /** Function to go to last page */
  last: () => void;
}

function usePagination(settings: UsePaginationOptions): UsePaginationReturnValue;
```

## Exported types

`UsePaginationOptions` and `UsePaginationReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UsePaginationOptions, UsePaginationReturnValue } from '@mantine/hooks';
```
