# Drawer
Package: @mantine/core
Import: import { Drawer } from '@mantine/core';
Description: Display overlay area at any side of the screen

## Usage

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## Position

Drawer can be placed on `left` (default), `top`, `right` and `bottom`. Control drawer position with `position` prop,
for example `<Drawer position="top" />`.

#### Example: positions

```tsx
function Demo() {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState<'top' | 'left' | 'right' | 'bottom'>('top');
  const open = (p: typeof position) => {
    setPosition(p);
    setOpened(true);
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        position={position}
        withCloseButton={false}
      >
        Press escape to close the drawer
      </Drawer>

      <Group justify="center">
        <Button variant="default" onClick={() => open('left')}>
          Left
        </Button>
        <Button variant="default" onClick={() => open('right')}>
          Right
        </Button>
        <Button variant="default" onClick={() => open('top')}>
          Top
        </Button>
        <Button variant="default" onClick={() => open('bottom')}>
          Bottom
        </Button>
      </Group>
    </>
  );
}
```


## Offset

Set `offset` prop to change drawer offset from the edge of the viewport:

#### Example: offset

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## Customize overlay

`Drawer` uses [Overlay](https://mantine.dev/core/overlay/) component, you can set any props that [Overlay](https://mantine.dev/core/overlay/)
supports with `overlayProps`:

#### Example: overlay

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## Sizes

You can change drawer width/height (depends on `position`) by setting `size` prop to predefined size or any valid width,
for example, `size="55%"` or `size={200}`:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return (
    <Drawer position="right" size="xl" opened onClose={() => {}}>
      {/* Drawer content */}
    </Drawer>
  );
}
```

#### Example: sizes

```tsx
function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState<number | string>('top');
  const open = (s: typeof size) => {
    setSize(s);
    setOpened(true);
  };

  const controls = (['xs', 'sm', 'md', 'lg', 'xl', '100%', '40rem', '25%'] as const).map((s) => (
    <Button variant="default" onClick={() => open(s)} key={s}>
      {s}
    </Button>
  ));

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        size={size}
        withCloseButton={false}
      >
        Press escape to close the drawer
      </Drawer>

      <Group justify="center">{controls}</Group>
    </>
  );
}
```


## Remove header

To remove header set `withCloseButton={false}`

#### Example: header

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## Drawer with scroll

#### Example: overflow

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## Usage with ScrollArea

#### Example: scrollarea

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## Change transition

`Drawer` is built with [Transition](https://mantine.dev/core/transition/) component. Use `transitionProps`
prop to customize any [Transition](https://mantine.dev/core/transition/) properties:

#### Example: transitions

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## onExitTransitionEnd and onEnterTransitionEnd

`onExitTransitionEnd` and `onEnterTransitionEnd` props can be used to run code after
exit/enter transition is finished. For example, this is useful when you want to clear
data after drawer is closed:

#### Example: transitionEnd

```tsx
import { useState } from 'react';
import { Button, Group, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [drawerData, setDrawerData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Drawer
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setDrawerData({ title: '', message: '' });
        }}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>
      <Drawer
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setDrawerData({ title: '', message: '' })}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
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

`Drawer` uses [FocusTrap](https://mantine.dev/core/focus-trap/) to trap focus. Add `data-autofocus`
attribute to the element that should receive initial focus.

#### Example: initialFocus

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


If you do not want to focus any elements when the drawer is opened, use `FocusTrap.InitialFocus`
component to create a visually hidden element that will receive initial focus:

#### Example: initialFocusTrap

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


If you do not add `data-autofocus` attribute and do not use `FocusTrap.InitialFocus`,
drawer will focus the first focusable element inside it which is usually the close button.

## Control behavior

The following props can be used to control `Drawer` behavior.
In most cases it is not recommended to turn these features off –
it will make the component less accessible.

* `trapFocus` – determines whether focus should be trapped inside drawer
* `closeOnEscape` – determines whether the drawer should be closed when `Escape` key is pressed
* `closeOnClickOutside` – determines whether the drawer should be closed when user clicks on the overlay
* `returnFocus` – determines whether focus should be returned to the element that was focused before the drawer was opened

## react-remove-scroll settings

`Drawer` uses [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
package to lock scroll. You can pass props down to the `RemoveScroll` component
with `removeScrollProps`:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return (
    <Drawer
      removeScrollProps={{ allowPinchZoom: true }}
      opened
      onClose={() => {}}
    >
      {/* Drawer content */}
    </Drawer>
  );
}
```

## Change close icon

Use `closeButtonProps` to customize close button:

#### Example: closeIcon

```tsx
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## Compound components

You can use the following compound components to have full control over the `Drawer` rendering:

* `Drawer.Root` – context provider
* `Drawer.Overlay` – render [Overlay](https://mantine.dev/core/overlay/)
* `Drawer.Content` – main drawer element, should include all drawer content
* `Drawer.Header` – sticky header, usually contains `Drawer.Title` and `Drawer.CloseButton`
* `Drawer.Title` – `h2` element, `aria-labelledby` of `Drawer.Content` is pointing to this element, usually is rendered inside `Drawer.Header`
* `Drawer.CloseButton` – close button, usually rendered inside `Drawer.Header`
* `Drawer.Body` – a place for main content, `aria-describedby` of `Drawer.Content` is pointing to this element

#### Example: composition

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
```


## Drawer.Stack

Use `Drawer.Stack` component to render multiple drawers at the same time.
`Drawer.Stack` keeps track of opened drawers, manages z-index values, focus trapping
and `closeOnEscape` behavior. `Drawer.Stack` is designed to be used with `useDrawersStack` hook.

Differences from using multiple `Drawer` components:

* `Drawer.Stack` manages z-index values – drawers that are opened later will always have higher z-index value disregarding their order in the DOM
* `Drawer.Stack` disables focus trap and `Escape` key handling for all drawers except the one that is currently opened
* Drawers that are not currently opened are present in the DOM but are hidden with `opacity: 0` and `pointer-events: none`
* Only one overlay is rendered at a time

#### Example: stack

```tsx
import { Button, Group, Drawer, useDrawersStack } from '@mantine/core';

function Demo() {
  const stack = useDrawersStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Drawer.Stack>
        <Drawer {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Drawer>

        <Drawer {...stack.register('confirm-action')} title="Confirm action">
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
        </Drawer>

        <Drawer {...stack.register('really-confirm-action')} title="Really confirm action">
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
        </Drawer>
      </Drawer.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open drawer
      </Button>
    </>
  );
}
```


Note that `Drawer.Stack` can only be used with `Drawer` component. Components built with `Drawer.Root`
and other compound components are not compatible with `Drawer.Stack`.

## useDrawersStack hook

`useDrawersStack` hook provides an easy way to control multiple drawers at the same time.
It accepts an array of unique drawers ids and returns an object with the following properties:

```tsx
interface UseDrawersStackReturnType<T extends string> {
  // Current opened state of each drawer
  state: Record<T, boolean>;

  // Opens drawer with the given id
  open: (id: T) => void;

  // Closes drawer with the given id
  close: (id: T) => void;

  // Toggles drawer with the given id
  toggle: (id: T) => void;

  // Closes all drawers within the stack
  closeAll: () => void;

  // Returns props for drawer with the given id
  register: (id: T) => {
    opened: boolean;
    onClose: () => void;
    stackId: T;
  };
}
```

Example of using `useDrawersStack` with `Drawer` component:

```tsx
import { Drawer, useDrawersStack } from '@mantine/core';

function Demo() {
  const stack = useDrawersStack(['first', 'second']);

  return (
    <>
      <Drawer {...stack.register('first')}>First</Drawer>
      <Drawer {...stack.register('second')}>Second</Drawer>
      <Button onClick={() => stack.open('first')}>Open first</Button>
    </>
  );
}
```

## Fixed elements offset

`Drawer` component uses [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
package to lock scroll. To properly size these `elements` add a `className` to them ([documentation](https://github.com/theKashey/react-remove-scroll#positionfixed-elements)):

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

`Drawer` component follows [WAI-ARIA recommendations](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog) on accessibility.

Set `title` props to make component accessible, will add `aria-labelledby` to the content element:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return <Drawer title="Drawer label" opened onClose={() => {}} />;
}
```

To set close button `aria-label` use `closeButtonProps`:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return (
    <Drawer
      closeButtonProps={{ 'aria-label': 'Close drawer' }}
      opened
      onClose={() => {}}
    />
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Drawer content |
| closeButtonProps | ModalBaseCloseButtonProps | - | Props passed down to the close button |
| closeOnClickOutside | boolean | - | If set, the modal/drawer is closed when user clicks on the overlay |
| closeOnEscape | boolean | - | If set, <code>onClose</code> is called when user presses the escape key |
| id | string | - | Id used to connect modal/drawer with body and title |
| keepMounted | boolean | - | If set modal/drawer is not unmounted from the DOM when hidden. <code>display: none</code> styles are applied instead. |
| lockScroll | boolean | - | If set, scroll is locked when <code>opened={true}</code> |
| offset | string | number | - | Drawer container offset from the viewport end |
| onClose | () => void | required | Called when modal/drawer is closed |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| opened | boolean | required | Controls opened state |
| overlayProps | ModalBaseOverlayProps | - | Props passed down to the <code>Overlay</code> component, can be used to configure opacity, <code>background-color</code>, styles and other properties |
| padding | MantineSpacing | - | Key of <code>theme.spacing</code> or any valid CSS value to set content, header and footer padding |
| portalProps | BasePortalProps | - | Props passed down to the Portal component when <code>withinPortal</code> is set |
| position | DrawerPosition | - | Side of the screen on which drawer will be opened |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| removeScrollProps | RemoveScrollProps | - | Props passed down to react-remove-scroll, can be used to customize scroll lock behavior |
| returnFocus | boolean | - | If set, focus is returned to the last active element when <code>onClose</code> is called |
| scrollAreaComponent | ScrollAreaComponent | - | Scroll area component |
| shadow | MantineShadow | - | Key of <code>theme.shadows</code> or any valid CSS box-shadow value |
| size | number | MantineSize | (string & {}) | - | Controls width of the content area |
| stackId | string | - | Id of the drawer in the <code>Drawer.Stack</code> |
| title | React.ReactNode | - | Drawer title |
| transitionProps | TransitionProps | - | Props added to the <code>Transition</code> component that used to animate overlay and body, use to configure duration and animation type, <code>{ duration: 200, transition: 'fade-down' }</code> by default |
| trapFocus | boolean | - | If set, focus is trapped within the modal/drawer |
| withCloseButton | boolean | - | If set, the close button is displayed |
| withOverlay | boolean | - | If set, the overlay is displayed |
| withinPortal | boolean | - | If set, the component is rendered inside <code>Portal</code> |
| zIndex | string | number | - | <code>z-index</code> CSS property of the root element |


#### Styles API

Drawer component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Drawer selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Drawer-root | Root element |
| inner | .mantine-Drawer-inner | Element used to center modal, has fixed position, takes entire screen |
| content | .mantine-Drawer-content | `Drawer.Content` root element |
| header | .mantine-Drawer-header | Contains title and close button |
| overlay | .mantine-Drawer-overlay | Overlay displayed under the `Drawer.Content` |
| title | .mantine-Drawer-title | Drawer title (h2 tag), displayed in the header |
| body | .mantine-Drawer-body | Drawer body, displayed after header |
| close | .mantine-Drawer-close | Close button |

**Drawer CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --drawer-offset | Controls `margin` of `Drawer.Content` |
| root | --drawer-size | Controls `width` of `Drawer.Content` |
| root | --drawer-flex | Controls `flex` property of `Drawer.Content` |
| root | --drawer-align | Controls `align-items` property of `Drawer.Content` |
| root | --drawer-justify | Controls `justify-content` property of `Drawer.Content` |
| root | --drawer-height | Controls `height` property of `Drawer.Content` |