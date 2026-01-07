# Portal
Package: @mantine/core
Import: import { Portal } from '@mantine/core';
Description: Renders component outside of parent element tree

## Usage

Portal is a wrapper component for [ReactDOM.createPortal](https://reactjs.org/docs/portals.html) API.
Render any component or element at the end of `document.body` or at a given element. [Modal](https://mantine.dev/core/modal/) and [Drawer](https://mantine.dev/core/drawer/) components are wrapped in Portal by default.

Use Portal to render a component or an element at a different place (defaults to the end of `document.body`).
Portal is useful when you want to prevent parent styles from interfering with children,
usually all these styles are related to `position` and `z-index` properties
and portals are used for components with fixed position, for example, modals.

```tsx
import { useState } from 'react';
import { Portal } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {opened && (
        <Portal>
          <div>Your modal content</div>
        </Portal>
      )}

      <button onClick={() => setOpened(true)} type="button">
        Open modal
      </button>
    </main>
  );
}
```

In the example above, the div element is rendered outside of parent main (before closing body tag),
but still receives `opened` and `onClose` props. The element will not be affected by parent z-index.

## Reuse target node

By default, Portal creates a new target node for each instance. To change this behavior and
reuse the same target node for all instances, set `reuseTargetNode` prop. In the following
example, all three paragraphs will be rendered in the same target node:

```tsx
import { Portal } from '@mantine/core';

function Demo() {
  return (
    <>
      <Portal reuseTargetNode>
        <p>First</p>
      </Portal>

      <Portal reuseTargetNode>
        <p>Second</p>
      </Portal>

      <Portal reuseTargetNode>
        <p>Third</p>
      </Portal>
    </>
  );
}
```

## Specify target DOM node

You can specify dom node where portal will be rendered by passing `target` prop:

```tsx
import { Portal } from '@mantine/core';

const container = document.createElement('div');
document.body.appendChild(container);

function Demo() {
  return <Portal target={container}>My portal</Portal>;
}
```

Alternatively, you can specify selector to render portal in existing element:

```tsx
import { Portal } from '@mantine/core';

function Demo() {
  return <Portal target="#portal-container">My portal</Portal>;
}
```

If you don't specify the target element, new one will be created and appended to the `document.body` for each Portal component.

## Server side rendering

`createPortal` is not supported during server side rendering.
All components inside Portal are rendered only after the application was mounted to the dom.

## OptionalPortal component

`OptionalPortal` component lets you configure whether children should be rendered in `Portal`.
It accepts the same props as the `Portal` component:

```tsx
import { OptionalPortal } from '@mantine/core';

function Demo() {
  return (
    <>
      <OptionalPortal withinPortal>
        This text is rendered in Portal
      </OptionalPortal>
      <OptionalPortal withinPortal={false}>
        This text is rendered as regular child
      </OptionalPortal>
    </>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Portal children, for example, custom modal or popover |
| reuseTargetNode | boolean | - | If set, all portals are rendered in the same DOM node |
| target | string | HTMLElement | - | Element inside which portal should be created, by default a new div element is created and appended to the <code>document.body</code> |