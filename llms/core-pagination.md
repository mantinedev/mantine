# Pagination
Package: @mantine/core
Import: import { Pagination } from '@mantine/core';
Description: Display active page and navigate between multiple pages

## Usage

```tsx
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10} color="blue" size="md" radius="md" withControls={true} withEdges={false} disabled={false} />;
}
```


## Example with chunked content

```tsx
import { useState } from 'react';
import { randomId } from '@mantine/hooks';
import { Pagination, Text } from '@mantine/core';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const data = chunk(
  Array(30)
    .fill(0)
    .map((_, index) => ({ id: index, name: randomId() })),
  5
);

function Demo() {
  const [activePage, setPage] = useState(1);
  const items = data[activePage - 1].map((item) => (
    <Text key={item.id}>
      id: {item.id}, name: {item.name}
    </Text>
  ));

  return (
    <>
      {items}
      <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
    </>
  );
}
```


## Controlled

To control the component state, provide `value` and `onChange` props:

```tsx
import { useState } from 'react';
import { Pagination } from '@mantine/core';

function Demo() {
  const [activePage, setPage] = useState(1);
  return (
    <Pagination value={activePage} onChange={setPage} total={10} />
  );
}
```

## Siblings

Control the number of active item siblings with the `siblings` prop:

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

Control the number of items displayed after previous and before next buttons with the `boundaries` prop:

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


## Compound components

You can use the following compound components to have full control over the `Pagination` rendering:

* `Pagination.Root` – context provider
* `Pagination.Items` – items list
* `Pagination.Next` – next control
* `Pagination.Previous` – previous control
* `Pagination.First` – first control
* `Pagination.Last` – last control

```tsx
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
```


## Controls as links

```tsx
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        getItemProps={(page) => ({
          component: 'a',
          href: `#page-${page}`,
        })}
        getControlProps={(control) => {
          if (control === 'first') {
            return { component: 'a', href: '#page-0' };
          }

          if (control === 'last') {
            return { component: 'a', href: '#page-10' };
          }

          if (control === 'next') {
            return { component: 'a', href: '#page-2' };
          }

          if (control === 'previous') {
            return { component: 'a', href: '#page-1' };
          }

          return {};
        }}
      />

      {/* Compound pagination */}
      <Pagination.Root
        total={10}
        getItemProps={(page) => ({
          component: 'a',
          href: `#page-${page}`,
        })}
      >
        <Group gap={7} mt="xl">
          <Pagination.First component="a" href="#page-0" />
          <Pagination.Previous component="a" href="#page-1" />
          <Pagination.Items />
          <Pagination.Next component="a" href="#page-2" />
          <Pagination.Last component="a" href="#page-10" />
        </Group>
      </Pagination.Root>
    </>
  );
}
```


## Change icons

```tsx
import { Group, Pagination } from '@mantine/core';
import { ArrowLineRightIcon, ArrowLineLeftIcon, ArrowLeftIcon, ArrowRightIcon, DotsSixIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        nextIcon={ArrowRightIcon}
        previousIcon={ArrowLeftIcon}
        firstIcon={ArrowLineLeftIcon}
        lastIcon={ArrowLineRightIcon}
        dotsIcon={DotsSixIcon}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={ArrowLineLeftIcon} />
          <Pagination.Previous icon={ArrowLeftIcon} />
          <Pagination.Items dotsIcon={DotsSixIcon} />
          <Pagination.Next icon={ArrowRightIcon} />
          <Pagination.Last icon={ArrowLineRightIcon} />
        </Group>
      </Pagination.Root>
    </>
  );
}
```


```tsx
import { Pagination, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>autoContrast: off</Text>
      <Pagination total={10} color="lime.4" />

      <Text mt="md">autoContrast: on</Text>
      <Pagination total={10} autoContrast color="lime.4" />
    </>
  );
}
```


## Controls size

By default, pagination controls have reduced size compared to inputs and buttons.
If you want controls to have the same size as inputs and buttons, you can use `input-` prefix for the `size` prop:

```tsx
import { Button, Group, Pagination, TextInput } from '@mantine/core';

function Demo() {
  return (
    <div>
      <Group>
        <Pagination total={45} size="sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>

      <Group mt="md">
        <Pagination total={45} size="input-sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>
    </div>
  );
}
```


## Start value

Set `startValue` to define the starting page number. For example, with `startValue={5}` and `total={15}`,
the pagination range will be from 5 to 15:

```tsx
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">Pages 5–15 (startValue=5, total=15)</Text>
      <Pagination total={15} startValue={5} defaultValue={5} />
    </>
  );
}
```


## URL synchronization

You can synchronize pagination state with URL query parameters. This pattern is commonly used for list views where you want to share the URL with a specific page selected.

### Next.js

```tsx
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from '@mantine/core';

function Demo() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = Number(searchParams.get('page')) || 1;

  const handlePageChange = (p: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', p.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return <Pagination total={10} value={page} onChange={handlePageChange} />;
}
```

### react-router-dom

```tsx
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mantine/core';

function Demo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const handlePageChange = (p: number) => {
    setSearchParams({ page: p.toString() });
  };

  return <Pagination total={10} value={page} onChange={handlePageChange} />;
}
```

### nuqs

Example using [nuqs](https://nuqs.dev/):

```tsx
import { useQueryState, parseAsInteger } from 'nuqs';
import { Pagination } from '@mantine/core';

function Demo() {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
  return <Pagination total={10} value={page} onChange={setPage} />;
}
```

## use-pagination hook

If you need more flexibility, the `@mantine/hooks` package exports the [use-pagination](https://mantine.dev/llms/hooks-use-pagination.md) hook.
You can use it to create custom pagination components.


#### Props

**Pagination props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on the active page background color to ensure sufficient contrast |
| boundaries | number | - | Number of elements visible on the left/right edges |
| color | MantineColor | - | Key of `theme.colors`, active item color |
| defaultValue | number | - | Active page for uncontrolled component, must be an integer in [1, total] interval |
| disabled | boolean | - | Disables all controls, applies disabled styles |
| dotsIcon | PaginationIcon | - | Dots icon component |
| firstIcon | PaginationIcon | - | First control icon component |
| gap | MantineSpacing | - | Key of `theme.spacing`, gap between controls |
| getControlProps | (control: "next" \| "previous" \| "first" \| "last") => Record<string, any> | - | Props passed down to next/previous/first/last controls |
| getItemProps | (page: number) => Record<string, any> | - | Additional props passed down to controls |
| hideWithOnePage | boolean | - | If set, the pagination is hidden when only one page is available (`total={1}`) |
| lastIcon | PaginationIcon | - | Last control icon component |
| nextIcon | PaginationIcon | - | Next control icon component |
| onChange | (value: number) => void | - | Called when page changes |
| onFirstPage | () => void | - | Called when first page control is clicked |
| onLastPage | () => void | - | Called when last page control is clicked |
| onNextPage | () => void | - | Called when next page control is clicked |
| onPreviousPage | () => void | - | Called when previous page control is clicked |
| previousIcon | PaginationIcon | - | Previous control icon component |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| siblings | number | - | Number of siblings displayed on the left/right side of the selected page |
| size | number \| MantineSize \| (string & {}) \| "input-xs" \| "input-sm" \| "input-md" \| "input-lg" \| "input-xl" | - | `height` and `min-width` of controls |
| startValue | number | - | Starting page number, defaults to 1 |
| total | number | required | Total number of pages, must be an integer |
| value | number | - | Active page for controlled component, must be an integer in [1, total] interval |
| withControls | boolean | - | If set, next/previous controls are displayed |
| withEdges | boolean | - | If set, first/last controls are displayed |
| withPages | boolean | - | If set to `false`, page number buttons are hidden, only next/previous controls remain |

**Pagination.Root props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on the active page background color to ensure sufficient contrast |
| boundaries | number | - | Number of elements visible on the left/right edges |
| color | MantineColor | - | Key of `theme.colors`, active item color |
| defaultValue | number | - | Active page for uncontrolled component, must be an integer in [1, total] interval |
| disabled | boolean | - | Disables all controls, applies disabled styles |
| getItemProps | (page: number) => Record<string, any> | - | Additional props passed down to controls |
| onChange | (value: number) => void | - | Called when page changes |
| onFirstPage | () => void | - | Called when first page control is clicked |
| onLastPage | () => void | - | Called when last page control is clicked |
| onNextPage | () => void | - | Called when next page control is clicked |
| onPreviousPage | () => void | - | Called when previous page control is clicked |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| siblings | number | - | Number of siblings displayed on the left/right side of the selected page |
| size | number \| MantineSize \| (string & {}) \| "input-xs" \| "input-sm" \| "input-md" \| "input-lg" \| "input-xl" | - | `height` and `min-width` of controls |
| startValue | number | - | Starting page number, defaults to 1 |
| total | number | required | Total number of pages, must be an integer |
| value | number | - | Active page for controlled component, must be an integer in [1, total] interval |

**Pagination.Items props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| dotsIcon | PaginationIcon | - | Dots icon component |

**Pagination.Dots props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | FC<PaginationIconProps> | - | Custom dots icon component, must accept svg element props and size prop |

**Pagination.Next props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | FC<PaginationIconProps> | - | An icon component to replace the default icon |

**Pagination.Previous props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | FC<PaginationIconProps> | - | An icon component to replace the default icon |

**Pagination.First props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | FC<PaginationIconProps> | - | An icon component to replace the default icon |

**Pagination.Last props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | FC<PaginationIconProps> | - | An icon component to replace the default icon |

**Pagination.Control props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | - | Applies active styles, adds `data-active` attribute |
| withPadding | boolean | - | Applies padding |


#### Styles API

Pagination component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Pagination selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Pagination-root | Root element |
| control | .mantine-Pagination-control | Control element: items, next/previous, first/last buttons |
| dots | .mantine-Pagination-dots | Dots icon wrapper |

**Pagination CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --pagination-active-bg | Active control `background-color` |
| root | --pagination-active-color | Active control `color` |
| root | --pagination-control-fz | Controls `font-size` |
| root | --pagination-control-radius | Controls control `border-radius` |
| root | --pagination-control-size | Controls control `min-width` and `height` |

**Pagination data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-active | Control is active | - |
| control | data-disabled | Control is disabled | - |
