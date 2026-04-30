import { ModalDemos } from '@docs/demos';
import { Layout } from '@/layout';
import { MDX_DATA } from '@/mdx';

export default Layout(MDX_DATA.Modal);

## Usage

<Demo data={ModalDemos.usage} />

## Center modal vertically

<Demo data={ModalDemos.centered} />

## Remove header

To remove the header, set `withCloseButton={false}`:

<Demo data={ModalDemos.header} />

## Change size

You can change the modal width by setting the `size` prop to a predefined size or any valid width, for example, `55%` or `50rem`.
The `Modal` width cannot exceed `100vw`.

<Demo data={ModalDemos.sizes} />

## Size auto

`Modal` with `size="auto"` will have width that fits its content:

<Demo data={ModalDemos.sizeAuto} />

## Fullscreen

A fullscreen modal will take the entire screen. It is usually better to change the transition to `fade`
when the `fullScreen` prop is set:

<Demo data={ModalDemos.fullScreen} />

To switch Modal to fullscreen on devices with small screens only, use the [use-media-query](/hooks/use-media-query/) hook.
The `size` prop is ignored if the `fullScreen` prop is set:

<Demo data={ModalDemos.fullScreenMobile} />

## Customize overlay

`Modal` uses the [Overlay](/core/overlay/) component. You can set any props that [Overlay](/core/overlay/)
supports with `overlayProps`:

<Demo data={ModalDemos.overlay} />

## Modal with scroll

<Demo data={ModalDemos.overflow} />

## Usage with ScrollArea

<Demo data={ModalDemos.scrollarea} />

## Change offsets

Use `xOffset`/`yOffset` to configure the horizontal/vertical content offsets:

<Demo data={ModalDemos.offset} />

## Change transitions

`Modal` is built with the [Transition](/core/transition/) component. Use the `transitionProps`
prop to customize any [Transition](/core/transition/) properties:

<Demo data={ModalDemos.transitions} />

## onExitTransitionEnd and onEnterTransitionEnd

The `onExitTransitionEnd` and `onEnterTransitionEnd` props can be used to run code after
the exit/enter transition is finished. For example, this is useful when you want to clear
data after the modal is closed:

<Demo data={ModalDemos.transitionEnd} />

## Initial focus

Modal uses [FocusTrap](/core/focus-trap/) to trap focus. Add the `data-autofocus`
attribute to the element that should receive initial focus.

<Demo data={ModalDemos.initialFocus} />

If you do not want to focus any elements when the modal is opened, use the `FocusTrap.InitialFocus`
component to create a visually hidden element that will receive initial focus:

<Demo data={ModalDemos.initialFocusTrap} />

If you do not add the `data-autofocus` attribute and do not use `FocusTrap.InitialFocus`,
the modal will focus the first focusable element inside it, which is usually the close button.

## Control behavior

The following props can be used to control `Modal` behavior.
In most cases, it is not recommended to turn these features off –
it will make the component less accessible.

- `trapFocus` – determines whether focus should be trapped inside the modal
- `closeOnEscape` – determines whether the modal should be closed when the `Escape` key is pressed
- `closeOnClickOutside` – determines whether the modal should be closed when the user clicks on the overlay
- `returnFocus` – determines whether focus should be returned to the element that was focused before the modal was opened

## react-remove-scroll settings

`Modal` uses the [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
package to lock scroll. You can pass props down to the `RemoveScroll` component
with `removeScrollProps`:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return (
    <Modal
      removeScrollProps={{ allowPinchZoom: true }}
      opened
      onClose={() => {}}
    />
  );
}
```

## Change close icon

Use `closeButtonProps` to customize the close button:

<Demo data={ModalDemos.closeIcon} />

## Compound components

You can use the following compound components to have full control over the `Modal` rendering:

- `Modal.Root` – context provider
- `Modal.Overlay` – render [Overlay](/core/overlay/)
- `Modal.Content` – main modal element, should include all modal content
- `Modal.Header` – sticky header, usually contains `Modal.Title` and `Modal.CloseButton`
- `Modal.Title` – `h2` element, the `aria-labelledby` of `Modal.Content` is pointing to this element, usually rendered inside `Modal.Header`
- `Modal.CloseButton` – close button, usually rendered inside `Modal.Header`
- `Modal.Body` – a place for main content, the `aria-describedby` of `Modal.Content` is pointing to this element

<Demo data={ModalDemos.composition} />

## Modal.Stack

Use the `Modal.Stack` component to render multiple modals at the same time.
`Modal.Stack` keeps track of opened modals, manages z-index values, focus trapping,
and `closeOnEscape` behavior. `Modal.Stack` is designed to be used with the `useModalsStack` hook.

Differences from using multiple `Modal` components:

- `Modal.Stack` manages z-index values – modals that are opened later will always have a higher z-index value regardless of their order in the DOM
- `Modal.Stack` disables focus trap and `Escape` key handling for all modals except the one that is currently opened
- Modals that are not currently opened are present in the DOM but are hidden with `opacity: 0` and `pointer-events: none`
- Only one overlay is rendered at a time

<Demo data={ModalDemos.stack} />

Note that `Modal.Stack` can only be used with the `Modal` component. Components built with `Modal.Root`
and other compound components are not compatible with `Modal.Stack`.

## useModalsStack hook

The `useModalsStack` hook provides an easy way to control multiple modals at the same time.
It accepts an array of unique modal IDs and returns an object with the following properties:

```tsx
interface UseModalsStackReturnType<T extends string> {
  // Current opened state of each modal
  state: Record<T, boolean>;

  // Opens modal with the given id
  open: (id: T) => void;

  // Closes modal with the given id
  close: (id: T) => void;

  // Toggles modal with the given id
  toggle: (id: T) => void;

  // Closes all modals within the stack
  closeAll: () => void;

  // Returns props for modal with the given id
  register: (id: T) => {
    opened: boolean;
    onClose: () => void;
    stackId: T;
  };
}
```

Example of using `useModalsStack` with the `Modal` component:

```tsx
import { Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['first', 'second']);

  return (
    <>
      <Modal {...stack.register('first')}>First</Modal>
      <Modal {...stack.register('second')}>Second</Modal>
      <Button onClick={() => stack.open('first')}>Open first</Button>
    </>
  );
}
```

## Fixed elements offset

The `Modal` component uses the [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
package to lock scroll. To properly size these elements, add a `className` to them ([documentation](https://github.com/theKashey/react-remove-scroll#positionfixed-elements)):

```tsx
import { RemoveScroll } from '@mantine/core';

function Demo() {
  return (
    <>
      <div className={RemoveScroll.classNames.fullWidth}>
        width: 100%
      </div>
      <div className={RemoveScroll.classNames.zeroRight}>
        right: 0
      </div>
    </>
  );
}
```

## Accessibility

The `Modal` component follows [WAI-ARIA recommendations](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog) on accessibility.

Set the `title` prop to make the component accessible, which will add `aria-labelledby` to the content element:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return <Modal title="Modal label" opened onClose={() => {}} />;
}
```

To set the close button's `aria-label`, use `closeButtonProps`:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return (
    <Modal
      closeButtonProps={{ 'aria-label': 'Close modal' }}
      opened
      onClose={() => {}}
    />
  );
}
```
