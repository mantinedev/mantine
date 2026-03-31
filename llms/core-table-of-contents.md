# TableOfContents
Package: @mantine/core
Import: import { TableOfContents } from '@mantine/core';
Description: Renders a list of headings on the page and tracks current heading visible in the viewport

## Usage

Use the `TableOfContents` component to display a table of contents like
in the sidebar of mantine.dev documentation. The component tracks
the scroll position and highlights the current heading in the list.

```tsx
import { TableOfContents } from '@mantine/core';


function Demo() {
  return (
    <TableOfContents
       variant="filled" color="blue" size="md" radius="md"
      scrollSpyOptions={{
        selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
```


## use-scroll-spy options

`TableOfContents` is based on the [use-scroll-spy](https://mantine.dev/llms/hooks-use-scroll-spy.md) hook.
You can pass options down to the `use-scroll-spy` hook using the `scrollSpyOptions` prop.

Example of customizing selector, depth and value retrieval:

```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      scrollSpyOptions={{
        selector: '#mdx [data-heading]',
        getDepth: (element) => Number(element.getAttribute('data-order')),
        getValue: (element) => element.getAttribute('data-heading') || '',
      }}
    />
  );
}
```

## Pass props to controls

You can pass props down to controls rendered by the `TableOfContents` component
with the `getControlProps` function. It accepts an object with `active` and `data`
properties and should return a props object.

Example of changing controls to links:

```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      getControlProps={({ active, data }) => ({
        component: 'a',
        href: `#${data.id}`,
        style: { color: active ? 'blue' : 'gray' },
        children: data.value,
      })}
    />
  );
}
```

## Initial data

`TableOfContents` retrieves data on mount. If you want to render headings
before the `TableOfContents` component is mounted (for example during server-side rendering),
you can pass the `initialData` prop with an array of headings data. `initialData` is replaced
with actual data on mount.

```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      initialData={[
        { id: '1', value: 'Heading 1', depth: 1 },
        { id: '2', value: 'Heading 2', depth: 2 },
        { id: '3', value: 'Heading 3', depth: 3 },
      ]}
    />
  );
}
```

## Depth offset

Use the `minDepthToOffset` prop to set the minimum depth at which offset should be applied.
By default, `minDepthToOffset` is `1`, which means that first and second level headings
will not be offset. Set it to `0` to apply offset to all headings.

To control the offset value in px, set the `depthOffset` prop:

```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      minDepthToOffset={0}
      depthOffset={40}
      size="sm"
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
```


```tsx
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      minDepthToOffset={0}
      depthOffset={40}
      size="sm"
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}
```


## Styles API

Example of customizing `TableOfContents` with [Styles API](https://mantine.dev/llms/styles-styles-api.md) and [data-\* attributes](https://mantine.dev/llms/styles-data-attributes.md):

```tsx
// Demo.tsx
import { TableOfContents } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <TableOfContents
      size="sm"
      variant="none"
      classNames={classes}
      minDepthToOffset={0}
      depthOffset={40}
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
      getControlProps={({ data }) => ({
        onClick: () => data.getNode().scrollIntoView(),
        children: data.value,
      })}
    />
  );
}

// Demo.module.css
.control {
  transition: transform 100ms ease;

  &[data-active] {
    background-color: var(--mantine-color-lime-4);
    color: var(--mantine-color-black);
    transform: scale(1.1);
  }
}
```


## Reinitialize

By default, `TableOfContents` does not track changes in the DOM. If you want
to update headings data after the parent component has mounted, you can use
`reinitializeRef` to get the reinitialize function from the [use-scroll-spy](https://mantine.dev/llms/hooks-use-scroll-spy.md) hook:

```tsx
import { useRef, useLayoutEffect } from 'react';
import { TableOfContents } from '@mantine/core';

function Demo({ dependency }) {
  const reinitializeRef = useRef(() => {});

  useLayoutEffect(() => {
    reinitializeRef.current();
  }, [dependency]);

  return <TableOfContents reinitializeRef={reinitializeRef} />;
}
```


#### Props

**TableOfContents props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color value |
| depthOffset | string \| number | - | Controls padding on the left side of control, multiplied by (`depth` - `minDepthToOffset`), `20px` by default |
| getControlProps | (payload: TableOfContentsGetControlPropsPayload) => UnstyledButtonProps & ElementProps<"button"> & Record<...> | - | A function to pass props down to controls, accepts values from `use-scroll-spy` hook as an argument and active state. |
| initialData | InitialTableOfContentsData[] | - | Data used to render content until actual values are retrieved from the DOM |
| minDepthToOffset | number | - | Minimum `depth` value that requires offset, `1` by default |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| reinitializeRef | RefObject<() => void> | - | A function to reinitialize headings from `use-scroll-spy` hook |
| scrollSpyOptions | UseScrollSpyOptions | - | Options passed down to `use-scroll-spy` hook |
| size | MantineSize \| number | - | Controls font-size and padding of all elements |


#### Styles API

TableOfContents component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**TableOfContents selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-TableOfContents-root | Root element |
| control | .mantine-TableOfContents-control | Control element |

**TableOfContents CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --toc-bg | Background color of active control |
| root | --toc-color | Text color of active control |
| root | --toc-depth-offset | Offset between of control depending on depth |
| root | --toc-radius | Border-radius of control |
| root | --toc-size | Controls font-size and padding of all elements |

**TableOfContents data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-active | Associated heading is currently the best match in the viewport | - |
