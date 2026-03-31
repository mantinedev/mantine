# Portal
Package: @mantine/core
Import: import { Portal } from '@mantine/core';
Description: Renders component outside of parent element tree

## Usage

Portal is a wrapper component for the [ReactDOM.createPortal](https://reactjs.org/docs/portals.html) API.
Render any component or element at the end of `document.body` or at a given element. The [Modal](https://mantine.dev/llms/core-modal.md) and [Drawer](https://mantine.dev/llms/core-drawer.md) components are wrapped in Portal by default.

Use Portal to render a component or an element at a different place (defaults to the end of `document.body`).
Portal is useful when you want to prevent parent styles from interfering with children.
Usually all these styles are related to `position` and `z-index` properties,
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

In the example above, the div element is rendered outside of the parent main (before the closing body tag),
but still receives the `opened` and `onClose` props. The element will not be affected by the parent z-index.

## Reuse target node

By default, Portal reuses the same target node for all instances (`reuseTargetNode={true}`).
To create a new target node for each instance, set `reuseTargetNode={false}`. In the following
example, all three paragraphs will be rendered in separate target nodes:

```tsx
import { Portal } from '@mantine/core';

function Demo() {
  return (
    <>
      <Portal reuseTargetNode={false}>
        <p>First</p>
      </Portal>

      <Portal reuseTargetNode={false}>
        <p>Second</p>
      </Portal>

      <Portal reuseTargetNode={false}>
        <p>Third</p>
      </Portal>
    </>
  );
}
```

## Specify target DOM node

You can specify the DOM node where the portal will be rendered by passing the `target` prop:

```tsx
import { Portal } from '@mantine/core';

const container = document.createElement('div');
document.body.appendChild(container);

function Demo() {
  return <Portal target={container}>My portal</Portal>;
}
```

Alternatively, you can specify a selector to render the portal in an existing element:

```tsx
import { Portal } from '@mantine/core';

function Demo() {
  return <Portal target="#portal-container">My portal</Portal>;
}
```

If you don't specify the target element, a new one will be created and appended to the `document.body` for each Portal component.

## Server side rendering

`createPortal` is not supported during server-side rendering.
All components inside Portal are rendered only after the application was mounted to the DOM.

## OptionalPortal component

The `OptionalPortal` component lets you configure whether children should be rendered in `Portal`.
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

**Portal props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Content to render inside the portal |
| reuseTargetNode | boolean | - | When true and target is not specified, all Portal instances share a single container node appended to document.body. When false, each Portal creates its own container node.  Has no effect when target is specified. |
| target | string \| HTMLElement | - | Target element where portal should be rendered. Accepts: - HTMLElement: Renders portal inside this element - string: CSS selector - renders inside first matching element - undefined: Uses shared portal node or creates new one based on `reuseTargetNode`  Note: If selector doesn't match any element, portal will not render |