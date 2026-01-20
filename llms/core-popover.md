# Popover
Package: @mantine/core
Import: import { Popover } from '@mantine/core';
Description: Display popover section relative to given target element

## Usage

#### Example: usage

```tsx
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Controlled

You can control Popover state with `opened` and `onChange` props:

```tsx
import { useState } from 'react';
import { Button, Popover } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover opened={opened} onChange={setOpened}>
      <Popover.Target>
        <Button onClick={() => setOpened((o) => !o)}>
          Toggle popover
        </Button>
      </Popover.Target>

      <Popover.Dropdown>Dropdown</Popover.Dropdown>
    </Popover>
  );
}
```

Controlled example with mouse events:

#### Example: hover

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Focus trap

If you need to use interactive elements (inputs, buttons, etc.) inside `Popover.Dropdown`, set `trapFocus` prop:

#### Example: form

```tsx
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Inline elements

Enable `inline` middleware to use `Popover` with inline elements:

#### Example: inline

```tsx
import { Popover, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pokémon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <Mark>When visiting a junkyard</Mark>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
```


## Same width

Set `width="target"` prop to make Popover dropdown take the same width as target element:

#### Example: sameWidth

```tsx
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```


## offset

Set `offset` prop to a number to change dropdown position relative to the target element.
This way you can control dropdown offset on main axis only.

#### Example: offset

```tsx
import { Popover, Button, Text } from '@mantine/core';


function Demo() {
  return (
    <Popover
      width={200}
      opened
      
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```


To control offset on both axis, pass object with `mainAxis` and `crossAxis` properties:

#### Example: offsetAxis

```tsx
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={200}
      position="bottom"
      opened
      offset={{ mainAxis: , crossAxis:  }}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Middlewares

You can enable or disable [Floating UI](https://floating-ui.com/) middlewares with
`middlewares` prop:

* [shift](https://floating-ui.com/docs/shift) middleware shifts the dropdown to keep it in view. It is enabled by default
* [flip](https://floating-ui.com/docs/flip) middleware changes the placement of the dropdown to keep it in view. It is enabled by default.
* [inline](https://floating-ui.com/docs/inline) middleware improves positioning for inline reference elements that span over multiple lines. It is disabled by default.
* [size](https://floating-ui.com/docs/size) middleware manipulates dropdown size. It is disabled by default.

Example of turning off `shift` and `flip` middlewares:

```tsx
import { Popover } from '@mantine/core';

function Demo() {
  return (
    <Popover
      middlewares={{ flip: false, shift: false }}
      position="bottom"
    >
      {/* Popover content */}
    </Popover>
  );
}
```

## Customize middleware options

To customize [Floating UI](https://floating-ui.com/) middlewares options, pass them as
an object to the `middlewares` prop. For example, to change [shift](https://floating-ui.com/docs/shift)
middleware padding to `20px` use the following configuration:

```tsx
import { Popover } from '@mantine/core';

function Demo() {
  return (
    <Popover
      middlewares={{ shift: { padding: 20 } }}
      position="bottom"
    >
      {/* Popover content */}
    </Popover>
  );
}
```

## Dropdown arrow

Set `withArrow` prop to add an arrow to the dropdown. Arrow is a `div` element rotated with `transform: rotate(45deg)`.

`arrowPosition` prop determines how arrow is position relative to the target element when `position` is set to `*-start` and `*-end` values on `Popover` component.
By default, the value is `center` – the arrow is positioned in the center of the target element if it is possible.

If you change `arrowPosition` to `side`, then the arrow will be positioned on the side of the target element,
and you will be able to control arrow offset with `arrowOffset` prop. Note that when `arrowPosition` is set to `center`,
`arrowOffset` prop is ignored.

#### Example: arrow

```tsx
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```


## With overlay

Set `withOverlay` prop to add overlay behind the dropdown. You can pass additional
configuration to [Overlay](https://mantine.dev/core/overlay/) component with `overlayProps` prop:

#### Example: overlay

```tsx
import { Popover, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={320}
      shadow="md"
      withArrow
      withOverlay
      overlayProps={{ zIndex: 10000, blur: '8px' }}
      zIndex={10001}
    >
      <Popover.Target>
        <UnstyledButton style={{ zIndex: 10001, position: 'relative' }}>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <Group>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
          <Stack gap={5}>
            <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
              Mantine
            </Text>
            <Anchor href="https://x.com/mantinedev" c="dimmed" size="xs" style={{ lineHeight: 1 }}>
              @mantinedev
            </Anchor>
          </Stack>
        </Group>

        <Text size="sm" mt="md">
          Customizable React components and hooks library with focus on usability, accessibility and
          developer experience
        </Text>

        <Group mt="md" gap="xl">
          <Text size="sm">
            <b>0</b> Following
          </Text>
          <Text size="sm">
            <b>1,174</b> Followers
          </Text>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Hide detached

Use `hideDetached` prop to configure how the dropdown behaves when the target
element is hidden with styles (`display: none`, `visibility: hidden`, etc.),
removed from the DOM, or when the target element is scrolled out of the viewport.

By default, `hideDetached` is enabled – the dropdown is hidden with the target element.
You can change this behavior with `hideDetached={false}`. To see the difference, try to scroll
the root element of the following demo:

#### Example: hideDetached

```tsx
import { Box, Button, Group, Popover } from '@mantine/core';

function Demo() {
  return (
    <Box
      bd="1px solid var(--mantine-color-dimmed)"
      p="xl"
      w={{ base: 340, sm: 400 }}
      h={200}
      style={{ overflow: 'auto' }}
    >
      <Box w={1000} h={400}>
        <Group>
          <Popover width="target" position="bottom" opened>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is hidden when detached</Popover.Dropdown>
          </Popover>

          <Popover width="target" position="bottom" opened hideDetached={false}>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is visible when detached</Popover.Dropdown>
          </Popover>
        </Group>
      </Box>
    </Box>
  );
}
```


## Disabled

Set `disabled` prop to prevent `Popover.Dropdown` from rendering:

#### Example: disabled

```tsx
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Click outside

By default, `Popover` closes when you click outside of the dropdown. To disable this behavior, set `closeOnClickOutside={false}`.

You can configure events that are used for click outside detection with `clickOutsideEvents` prop.
By default, `Popover` listens to `mousedown` and `touchstart` events. You can change it to any other
events, for example, `mouseup` and `touchend`:

#### Example: clickOutsideEvents

```tsx
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```


## onDismiss

If you need to control opened state, but still want to close popover on outside clicks
and escape key presses, use `onDismiss` prop:

```tsx
import { useState } from 'react';
import { Button, Popover } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onDismiss={() => setOpened(false)}
    >
      <Popover.Target>
        <Button onClick={() => setOpened((o) => !o)}>
          Toggle popover
        </Button>
      </Popover.Target>

      <Popover.Dropdown>Dropdown</Popover.Dropdown>
    </Popover>
  );
}
```

## Initial focus

Popover uses [FocusTrap](https://mantine.dev/core/focus-trap/) component to manage focus.
Add `data-autofocus` attribute to element that should receive initial focus:

```tsx
import { Popover } from '@mantine/core';

function Demo() {
  return (
    <Popover>
      <Popover.Target>
        <button type="button">Target</button>
      </Popover.Target>
      <Popover.Dropdown>
        <input />
        <input data-autofocus />
        <input />
      </Popover.Dropdown>
    </Popover>
  );
}
```

<TargetComponent component="Popover" />

## Target component

The target element determines where the Popover will be positioned relative to.

## Nested popovers

Nested popovers require children rendering without [Portal](https://mantine.dev/core/portal/). Usually, you
should disable portal with props of the component that renders popover content, for example,
[Select](https://mantine.dev/core/select/) has `comboboxProps={{ withinPortal: false }}` prop. Check documentation
of the component that you are using to render popover content to find out how to disable the portal.
If the portal is not disabled, outside click will close all popovers.

Example of disabling portal in [Select](https://mantine.dev/core/select/) and [DatePickerInput](https://mantine.dev/dates/date-picker-input/)
components:

#### Example: portalChildren

```tsx
import { Button, Popover, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown bg="var(--mantine-color-body)">
        <Select
          label="Select within Popover"
          placeholder="Select within Popover"
          comboboxProps={{ withinPortal: false }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
        <DatePickerInput
          label="DatePickerInput within Popover"
          placeholder="DatePickerInput within Popover"
          popoverProps={{ withinPortal: false }}
          mt="md"
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```


## Accessibility

Popover follows [WAI-ARIA recommendations](https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal):

* Dropdown element has `role="dialog"` and `aria-labelledby="target-id"` attributes
* Target element has `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls="dropdown-id"` attributes

Whilst the dropdown is unopened, the `aria-controls` attribute will be undefined

Uncontrolled Popover will be accessible only when used with `button` element or component that renders it ([Button](https://mantine.dev/core/button/), [ActionIcon](https://mantine.dev/core/action-icon/), etc.).
Other elements will not support `Space` and `Enter` key presses.

## Keyboard interactions


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | ArrowPosition | - | Arrow position |
| arrowRadius | number | - | Arrow <code>border-radius</code> in px |
| arrowSize | number | - | Arrow size in px |
| children | React.ReactNode | - | <code>Popover.Target</code> and <code>Popover.Dropdown</code> components |
| clickOutsideEvents | string[] | - | Events that trigger outside clicks |
| closeOnClickOutside | boolean | - | Determines whether dropdown should be closed on outside clicks |
| closeOnEscape | boolean | - | Determines whether dropdown should be closed when <code>Escape</code> key is pressed |
| defaultOpened | boolean | - | Initial opened state for uncontrolled component |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
| id | string | - | Id base to create accessibility connections |
| keepMounted | boolean | - | If set, the dropdown is not unmounted from the DOM when hidden. <code>display: none</code> styles are added instead. |
| middlewares | PopoverMiddlewares | - | Floating ui middlewares to configure position handling |
| offset | number | FloatingAxesOffsets | - | Offset of the dropdown element |
| onChange | (opened: boolean) => void | - | Called with current state when dropdown opens or closes |
| onClose | () => void | - | Called when dropdown closes |
| onDismiss | () => void | - | Called when the popover is dismissed by clicking outside or by pressing escape |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onOpen | () => void | - | Called when dropdown opens |
| onPositionChange | (position: FloatingPosition) => void | - | Called when dropdown position changes |
| opened | boolean | - | Controlled dropdown opened state |
| overlayProps | OverlayProps & ElementProps<"div"> | - | Props passed down to <code>Overlay</code> component |
| portalProps | BasePortalProps | - | Props to pass down to the <code>Portal</code> when <code>withinPortal</code> is true |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| positionDependencies | any[] | - | @deprecated : Do not use, will be removed in 9.0 |
| preventPositionChangeWhenVisible | boolean | - | Prevents popover from flipping/shifting when it the dropdown is visible |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| shadow | MantineShadow | - | Key of <code>theme.shadows</code> or any other valid CSS <code>box-shadow</code> value |
| transitionProps | TransitionProps | - | Props passed down to the <code>Transition</code> component. Use to configure duration and animation type. |
| trapFocus | boolean | - | Determines whether focus should be trapped within dropdown |
| width | PopoverWidth | - | Dropdown width, or <code>'target'</code> to make dropdown width the same as target element |
| withArrow | boolean | - | Determines whether component should have an arrow |
| withOverlay | boolean | - | Determines whether the overlay should be displayed when the dropdown is opened |
| withRoles | boolean | - | Determines whether dropdown and target elements should have accessible roles |
| withinPortal | boolean | - | Determines whether dropdown should be rendered within the <code>Portal</code> |
| zIndex | string | number | - | Dropdown <code>z-index</code> |


#### Styles API

Popover component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Popover selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| dropdown | .mantine-Popover-dropdown | Dropdown element |
| arrow | .mantine-Popover-arrow | Dropdown arrow |
| overlay | .mantine-Popover-overlay | Overlay element |

**Popover CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| dropdown | --popover-radius | Controls dropdown border-radius |
| dropdown | --popover-shadow | Controls dropdown box-shadow |

**Popover data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| dropdown | data-position | - | Value of floating ui dropdown position |