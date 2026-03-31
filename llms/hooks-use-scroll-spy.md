# useScrollSpy
Package: @mantine/hooks
Import: import { UseScrollSpy } from '@mantine/hooks';

## Usage

The `use-scroll-spy` hook tracks the scroll position and returns the index of the
element that is currently in the viewport. It is useful for creating
table of contents components (like in the mantine.dev sidebar on the right side)
and similar features.

```tsx
import { Text, UnstyledButton } from '@mantine/core';
import { useScrollSpy } from '@mantine/hooks';

function Demo() {
  const spy = useScrollSpy({
    selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
  });

  const headings = spy.data.map((heading, index) => (
    <li
      key={heading.id}
      style={{
        listStylePosition: 'inside',
        paddingInlineStart: heading.depth * 20,
        background: index === spy.active ? 'var(--mantine-color-blue-light)' : undefined,
      }}
    >
      <UnstyledButton onClick={() => heading.getNode().scrollIntoView()}>
        {heading.value}
      </UnstyledButton>
    </li>
  ));

  return (
    <div>
      <Text>Scroll to heading:</Text>
      <ul style={{ margin: 0, padding: 0 }}>{headings}</ul>
    </div>
  );
}
```


## Hook options

The `use-scroll-spy` hook accepts an object with options:

* `selector` - selector to get headings; by default it is `'h1, h2, h3, h4, h5, h6'`
* `getDepth` - a function to retrieve the depth of a heading; by default depth is calculated based on the tag name
* `getValue` - a function to retrieve the heading value; by default `element.textContent` is used
* `scrollHost` - host element to attach scroll event listener, if not provided, `window` is used
* `offset` - offset from the top of the viewport to use when determining the active heading, by default `0` is used

Example of using custom options to get headings with the `data-heading` attribute:

```tsx
import { Text, UnstyledButton } from '@mantine/core';
import { useScrollSpy } from '@mantine/hooks';

function Demo() {
  const spy = useScrollSpy({
    selector: '#mdx [data-heading]',
    getDepth: (element) => Number(element.getAttribute('data-order')),
    getValue: (element) => element.getAttribute('data-heading') || '',
  });

  const headings = spy.data.map((heading, index) => (
    <li
      key={heading.id}
      style={{
        listStylePosition: 'inside',
        paddingInlineStart: heading.depth * 20,
        background: index === spy.active ? 'var(--mantine-color-blue-light)' : undefined,
      }}
    >
      <UnstyledButton onClick={() => heading.getNode().scrollIntoView()}>
        {heading.value}
      </UnstyledButton>
    </li>
  ));

  return (
    <div>
      <Text>Scroll to heading:</Text>
      <ul style={{ margin: 0, padding: 0 }}>{headings}</ul>
    </div>
  );
}
```


## Reinitializing hook data

By default, `use-scroll-spy` does not track changes in the DOM. If you want
to update the headings data after the parent component has mounted, you can use
the `reinitialize` function:

```tsx
import { useEffect } from 'react';
import { useScrollSpy } from '@mantine/hooks';

function Demo({ dependency }) {
  const { reinitialize } = useScrollSpy();

  useEffect(() => {
    reinitialize();
  }, [dependency]);

  return null;
}
```

## Definition

All types used in the definition are exported from `@mantine/hooks` package.

```tsx
interface UseScrollSpyHeadingData {
  /** Heading depth, 1-6 */
  depth: number;

  /** Heading text content value */
  value: string;

  /** Heading id */
  id: string;

  /** Function to get heading node */
  getNode: () => HTMLElement;
}

interface UseScrollSpyOptions {
  /** Selector to get headings, `'h1, h2, h3, h4, h5, h6'` by default */
  selector?: string;

  /** A function to retrieve depth of heading, by default depth is calculated based on tag name */
  getDepth?: (element: HTMLElement) => number;

  /** A function to retrieve heading value, by default `element.textContent` is used */
  getValue?: (element: HTMLElement) => string;

  /** Host element to attach scroll event listener, if not provided, `window` is used */
  scrollHost?: HTMLElement;

  /** Offset from the top of the viewport to use when determining the active heading, `0` by default */
  offset?: number;
}

interface UseScrollSpyReturnValue {
  /** Index of the active heading in the `data` array */
  active: number;

  /** Headings data. If not initialize, data is represented by an empty array. */
  data: UseScrollSpyHeadingData[];

  /** True if headings value have been retrieved from the DOM. */
  initialized: boolean;

  /** Function to update headings values after the parent component has mounted. */
  reinitialize: () => void;
}

function useScrollSpy(options?: UseScrollSpyOptions): UseScrollSpyReturnValue
```

## Exported types

`UseScrollSpyOptions` and `UseScrollSpyReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseScrollSpyOptions, UseScrollSpyReturnValue } from '@mantine/hooks';
```
