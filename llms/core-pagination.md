# Pagination
Package: @mantine/core
Import: import { Pagination } from '@mantine/core';
Description: Display active page and navigate between multiple pages

## Usage

#### Example: configurator

```tsx
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10} />;
}
```


## Example with chunked content

#### Example: withContent

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

To control component state provide `value` and `onChange` props:

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

Control number of active item siblings with `siblings` prop:

#### Example: siblings

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

Control number of items displayed after previous and before next buttons with `boundaries` prop:

#### Example: boundaries

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


## Hide pages controls

Set `withPages={false}` to hide pages controls:

#### Example: withPages

```tsx
import { useState } from 'react';
import { Group, Pagination, Text } from '@mantine/core';

const limit = 10;
const total = 145;
const totalPages = Math.ceil(total / limit);

function Demo() {
  const [page, setPage] = useState(1);
  const message = `Showing ${limit * (page - 1) + 1} – ${Math.min(total, limit * page)} of ${total}`;

  return (
    <Group justify="flex-end">
      <Text size="sm">{message}</Text>
      <Pagination total={totalPages} value={page} onChange={setPage} withPages={false} />
    </Group>
  );
}
```


#### Example: stylesApi

```tsx
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10} />;
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

#### Example: composition

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

#### Example: links

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

#### Example: icons

```tsx
import { Group, Pagination } from '@mantine/core';
import {
  IconArrowBarToRight,
  IconArrowBarToLeft,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        nextIcon={IconArrowRight}
        previousIcon={IconArrowLeft}
        firstIcon={IconArrowBarToLeft}
        lastIcon={IconArrowBarToRight}
        dotsIcon={IconGripHorizontal}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={IconArrowBarToLeft} />
          <Pagination.Previous icon={IconArrowLeft} />
          <Pagination.Items dotsIcon={IconGripHorizontal} />
          <Pagination.Next icon={IconArrowRight} />
          <Pagination.Last icon={IconArrowBarToRight} />
        </Group>
      </Pagination.Root>
    </>
  );
}
```


<AutoContrast component="Pagination" withVariant="[object Object]" />

## autoContrast

Pagination supports autoContrast prop and [theme.autoContrast](https://mantine.dev/theming/theme-object/#autocontrast). If autoContrast is set either on Pagination or on theme, content color will be adjusted to have sufficient contrast with the value specified in color prop.

Note that autoContrast feature works only if you use color prop to change background color. autoContrast works only with filled variant.

#### Example: autoContrast

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


## use-pagination hook

If you need more flexibility `@mantine/hooks` package exports [use-pagination](https://mantine.dev/hooks/use-pagination/) hook,
you can use it to create custom pagination components.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| boundaries | number | - | Number of elements visible on the left/right edges |
| color | MantineColor | - | Key of <code>theme.colors</code>, active item color |
| defaultValue | number | - | Active page for uncontrolled component, must be an integer in [0, total] interval |
| disabled | boolean | - | Disables all controls, applies disabled styles |
| dotsIcon | PaginationIcon | - | Dots icon component |
| firstIcon | PaginationIcon | - | First control icon component |
| gap | MantineSpacing | - | Key of <code>theme.spacing</code>, gap between controls |
| getControlProps | (control: "next" | "previous" | "first" | "last") => Record<string, any> | - | Props passed down to next/previous/first/last controls |
| getItemProps | (page: number) => Record<string, any> | - | Additional props passed down to controls |
| hideWithOnePage | boolean | - | If set, the pagination is hidden when only one page is available (<code>total={1}</code>) |
| lastIcon | PaginationIcon | - | Last control icon component |
| nextIcon | PaginationIcon | - | Next control icon component |
| onChange | (value: number) => void | - | Called when page changes |
| onFirstPage | () => void | - | Called when first page control is clicked |
| onLastPage | () => void | - | Called when last page control is clicked |
| onNextPage | () => void | - | Called when next page control is clicked |
| onPreviousPage | () => void | - | Called when previous page control is clicked |
| previousIcon | PaginationIcon | - | Previous control icon component |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| siblings | number | - | Number of siblings displayed on the left/right side of the selected page |
| size | number | MantineSize | (string & {}) | - | <code>height</code> and <code>min-width</code> of controls |
| total | number | required | Total number of pages, must be an integer |
| value | number | - | Active page for controlled component, must be an integer in [0, total] interval |
| withControls | boolean | - | If set, next/previous controls are displayed |
| withEdges | boolean | - | If set, first/last controls are displayed |
| withPages | boolean | - | If set to <code>false</code>, pages controls are hidden |


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
| root | --pagination-control-fz | Controls control `font-size` |
| root | --pagination-control-radius | Controls control `border-radius` |
| root | --pagination-control-size | Controls control `min-width` and `height` |

**Pagination data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-active | Control is active | - |
| control | data-disabled | Control is disabled | - |