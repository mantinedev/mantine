# Modal
Package: @mantine/core
Import: import { Modal } from '@mantine/core';
Description: An accessible overlay dialog

## Usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Center modal vertically

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open centered Modal
      </Button>
    </>
  );
}
```


## Remove header

To remove the header, set `withCloseButton={false}`:

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Change size

You can change the modal width by setting the `size` prop to a predefined size or any valid width, for example, `55%` or `50rem`.
The `Modal` width cannot exceed `100vw`.

```tsx
function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState<string | number>('md');

  const buttons = SIZES.map((s) => (
    <Button
      key={s}
      variant="default"
      onClick={() => {
        setSize(s);
        setOpened(true);
      }}
    >
      {s}
    </Button>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        size={size}
      >
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Group justify="center">{buttons}</Group>
    </>
  );
}
```


## Size auto

`Modal` with `size="auto"` will have width that fits its content:

```tsx
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button onClick={increment}>Add badge</Button>
          <Button onClick={decrement}>Remove badge</Button>
        </Group>
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Fullscreen

A fullscreen modal will take the entire screen. It is usually better to change the transition to `fade`
when the `fullScreen` prop is set:

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


To switch Modal to fullscreen on devices with small screens only, use the [use-media-query](https://mantine.dev/llms/hooks-use-media-query.md) hook.
The `size` prop is ignored if the `fullScreen` prop is set:

```tsx
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${em(800)})');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Customize overlay

`Modal` uses the [Overlay](https://mantine.dev/llms/core-overlay.md) component. You can set any props that [Overlay](https://mantine.dev/llms/core-overlay.md)
supports with `overlayProps`:

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Modal with scroll

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Usage with ScrollArea

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Change offsets

Use `xOffset`/`yOffset` to configure the horizontal/vertical content offsets:

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Change transitions

`Modal` is built with the [Transition](https://mantine.dev/llms/core-transition.md) component. Use the `transitionProps`
prop to customize any [Transition](https://mantine.dev/llms/core-transition.md) properties:

```tsx
import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'rotate-left' }}
      >
        rotate-left transition
      </Modal>

      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      >
        fade transition 600ms linear transition
      </Modal>

      <Group justify="center">
        <Button onClick={() => setSlowTransitionOpened(true)} variant="default">
          Rotate left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} variant="default">
          Fade transition
        </Button>
      </Group>
    </>
  );
}
```


## onExitTransitionEnd and onEnterTransitionEnd

The `onExitTransitionEnd` and `onEnterTransitionEnd` props can be used to run code after
the exit/enter transition is finished. For example, this is useful when you want to clear
data after the modal is closed:

```tsx
import { useState } from 'react';
import { Button, Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [modalData, setModalData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Modal
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setModalData({ title: '', message: '' });
        }}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>
      <Modal
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setModalData({ title: '', message: '' })}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}
```


## Initial focus

Modal uses [FocusTrap](https://mantine.dev/llms/core-focus-trap.md) to trap focus. Add the `data-autofocus`
attribute to the element that should receive initial focus.

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


If you do not want to focus any elements when the modal is opened, use the `FocusTrap.InitialFocus`
component to create a visually hidden element that will receive initial focus:

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


If you do not add the `data-autofocus` attribute and do not use `FocusTrap.InitialFocus`,
the modal will focus the first focusable element inside it, which is usually the close button.

## Control behavior

The following props can be used to control `Modal` behavior.
In most cases, it is not recommended to turn these features off –
it will make the component less accessible.

* `trapFocus` – determines whether focus should be trapped inside the modal
* `closeOnEscape` – determines whether the modal should be closed when the `Escape` key is pressed
* `closeOnClickOutside` – determines whether the modal should be closed when the user clicks on the overlay
* `returnFocus` – determines whether focus should be returned to the element that was focused before the modal was opened

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

```tsx
import { XCircleIcon } from '@phosphor-icons/react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <XCircleIcon size={20} />,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Compound components

You can use the following compound components to have full control over the `Modal` rendering:

* `Modal.Root` – context provider
* `Modal.Overlay` – render [Overlay](https://mantine.dev/llms/core-overlay.md)
* `Modal.Content` – main modal element, should include all modal content
* `Modal.Header` – sticky header, usually contains `Modal.Title` and `Modal.CloseButton`
* `Modal.Title` – `h2` element, the `aria-labelledby` of `Modal.Content` is pointing to this element, usually rendered inside `Modal.Header`
* `Modal.CloseButton` – close button, usually rendered inside `Modal.Header`
* `Modal.Body` – a place for main content, the `aria-describedby` of `Modal.Content` is pointing to this element

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Modal.Stack

Use the `Modal.Stack` component to render multiple modals at the same time.
`Modal.Stack` keeps track of opened modals, manages z-index values, focus trapping,
and `closeOnEscape` behavior. `Modal.Stack` is designed to be used with the `useModalsStack` hook.

Differences from using multiple `Modal` components:

* `Modal.Stack` manages z-index values – modals that are opened later will always have a higher z-index value regardless of their order in the DOM
* `Modal.Stack` disables focus trap and `Escape` key handling for all modals except the one that is currently opened
* Modals that are not currently opened are present in the DOM but are hidden with `opacity: 0` and `pointer-events: none`
* Only one overlay is rendered at a time

```tsx
import { Button, Group, Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Modal.Stack>
        <Modal {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('confirm-action')} title="Confirm action">
          Are you sure you want to perform this action? This action cannot be undone. If you are
          sure, press confirm button below.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('really-confirm-action')} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('really-confirm-action')} title="Really confirm action">
          Jokes aside. You have confirmed this action. This is your last chance to cancel it. After
          you press confirm button below, action will be performed and cannot be undone. For real
          this time. Are you sure you want to proceed?
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={stack.closeAll} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open modal
      </Button>
    </>
  );
}
```


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


#### Props

**Modal props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| centered | boolean | - | If set, the modal is centered vertically |
| children | React.ReactNode | - | Modal content |
| closeButtonProps | ModalBaseCloseButtonProps | - | Props passed down to the close button |
| closeOnClickOutside | boolean | - | If set, the modal/drawer is closed when user clicks on the overlay |
| closeOnEscape | boolean | - | If set, `onClose` is called when user presses the escape key |
| fullScreen | boolean | - | If set, the modal takes the entire screen |
| id | string | - | Id used to connect modal/drawer with body and title |
| keepMounted | boolean | - | If set modal/drawer is not unmounted from the DOM when hidden. `display: none` styles are applied instead. |
| lockScroll | boolean | - | If set, scroll is locked when `opened={true}` |
| onClose | () => void | required | Called when modal/drawer is closed |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| opened | boolean | required | Controls opened state |
| overlayProps | ModalBaseOverlayProps | - | Props passed down to the `Overlay` component, use to configure opacity, `background-color`, styles and other properties |
| padding | MantineSpacing | - | Key of `theme.spacing` or any valid CSS value to set content, header and footer padding |
| portalProps | BasePortalProps | - | Props passed down to the Portal component when `withinPortal` is set |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| removeScrollProps | RemoveScrollProps | - | Props passed down to react-remove-scroll, can be used to customize scroll lock behavior |
| returnFocus | boolean | - | If set, focus is returned to the last active element when `onClose` is called |
| scrollAreaComponent | ScrollAreaComponent | - | Scroll area component |
| shadow | MantineShadow | - | Key of `theme.shadows` or any valid CSS box-shadow value |
| size | MantineSize \| number | - | Controls width of the content area |
| stackId | string | - | Id of the modal in the `Modal.Stack` |
| title | React.ReactNode | - | Modal title |
| transitionProps | TransitionProps | - | Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'fade-down' }` by default |
| trapFocus | boolean | - | If set, focus is trapped within the modal/drawer |
| withCloseButton | boolean | - | If set, the close button is rendered |
| withOverlay | boolean | - | If set, the overlay is rendered |
| withinPortal | boolean | - | If set, the component is rendered inside `Portal` |
| xOffset | MarginLeft<string \| number> | - | Left/right modal offset |
| yOffset | MarginTop<string \| number> | - | Top/bottom modal offset |
| zIndex | string \| number | - | `z-index` CSS property of the root element |

**Modal.Base props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Modal/drawer content |
| closeOnClickOutside | boolean | - | If set, the modal/drawer is closed when user clicks on the overlay |
| closeOnEscape | boolean | - | If set, `onClose` is called when user presses the escape key |
| id | string | - | Id used to connect modal/drawer with body and title |
| keepMounted | boolean | - | If set modal/drawer is not unmounted from the DOM when hidden. `display: none` styles are applied instead. |
| lockScroll | boolean | - | If set, scroll is locked when `opened={true}` |
| onClose | () => void | required | Called when modal/drawer is closed |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| opened | boolean | required | Controls opened state |
| padding | MantineSpacing | - | Key of `theme.spacing` or any valid CSS value to set content, header and footer padding |
| portalProps | BasePortalProps | - | Props passed down to the Portal component when `withinPortal` is set |
| removeScrollProps | RemoveScrollProps | - | Props passed down to react-remove-scroll, can be used to customize scroll lock behavior |
| returnFocus | boolean | - | If set, focus is returned to the last active element when `onClose` is called |
| shadow | MantineShadow | - | Key of `theme.shadows` or any valid CSS box-shadow value |
| size | MantineSize \| number | - | Controls width of the content area |
| transitionProps | TransitionProps | - | Props added to the `Transition` component that used to animate overlay and body, use to configure duration and animation type, `{ duration: 200, transition: 'fade-down' }` by default |
| trapFocus | boolean | - | If set, focus is trapped within the modal/drawer |
| withinPortal | boolean | - | If set, the component is rendered inside `Portal` |
| zIndex | string \| number | - | `z-index` CSS property of the root element |

**Modal.sProvider props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Your app |
| labels | ConfirmLabels | - | Confirm modal labels |
| modalProps | ModalSettings | - | Shared Modal component props, applied for every modal |
| modals | Record<string, FC<ContextModalProps<any>>> | - | Predefined modals |


#### Styles API

Modal component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Modal selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Modal-root | Root element |
| inner | .mantine-Modal-inner | Element used to center modal, has fixed position, takes entire screen |
| content | .mantine-Modal-content | `Modal.Content` root element |
| header | .mantine-Modal-header | Contains title and close button |
| overlay | .mantine-Modal-overlay | Overlay displayed under the `Modal.Content` |
| title | .mantine-Modal-title | Modal title (h2 tag), displayed in the header |
| body | .mantine-Modal-body | Modal body, displayed after header |
| close | .mantine-Modal-close | Close button |

**Modal CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --modal-radius | Controls `border-radius` of `Modal.Content` |
| root | --modal-size | Controls `width` of `Modal.Content` |

**Modal data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-full-screen | `fullScreen` prop is set | - |
| root | data-centered | `centered` prop is set | - |
