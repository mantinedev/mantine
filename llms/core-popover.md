# Popover
Package: @mantine/core
Import: import { Popover } from '@mantine/core';
Description: Display popover section relative to given target element

## Usage

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

You can control the Popover state with the `opened` and `onChange` props:

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

If you need to use interactive elements (inputs, buttons, etc.) inside `Popover.Dropdown`, set the `trapFocus` prop:

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

Enable the `inline` middleware to use `Popover` with inline elements:

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

Set the `width="target"` prop to make the Popover dropdown take the same width as the target element:

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

Set the `offset` prop to a number to change the dropdown position relative to the target element.
This way you can control the dropdown offset on the main axis only.

```tsx
import { Popover, Button, Text } from '@mantine/core';


function Demo() {
  return (
    <Popover
      width={200}
      opened
       position="bottom" offset={0}
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


To control offset on both axes, pass an object with `mainAxis` and `crossAxis` properties:

```tsx
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={200}
      position="bottom"
      opened
      offset={{ mainAxis: 0, crossAxis: 0 }}
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

You can enable or disable [Floating UI](https://floating-ui.com/) middlewares with the
`middlewares` prop:

* [shift](https://floating-ui.com/docs/shift) middleware shifts the dropdown to keep it in view. It is enabled by default.
* [flip](https://floating-ui.com/docs/flip) middleware changes the placement of the dropdown to keep it in view. It is enabled by default.
* [inline](https://floating-ui.com/docs/inline) middleware improves positioning for inline reference elements that span over multiple lines. It is disabled by default.
* [size](https://floating-ui.com/docs/size) middleware manipulates the dropdown size. It is disabled by default.

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

To customize [Floating UI](https://floating-ui.com/) middleware options, pass them as
an object to the `middlewares` prop. For example, to change the [shift](https://floating-ui.com/docs/shift)
middleware padding to `20px`, use the following configuration:

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

Set the `withArrow` prop to add an arrow to the dropdown. The arrow is a `div` element rotated with `transform: rotate(45deg)`.

The `arrowPosition` prop determines how the arrow is positioned relative to the target element when `position` is set to `*-start` and `*-end` values on the `Popover` component.
By default, the value is `center` – the arrow is positioned in the center of the target element if it is possible.

If you change `arrowPosition` to `side`, then the arrow will be positioned on the side of the target element,
and you will be able to control the arrow offset with the `arrowOffset` prop. Note that when `arrowPosition` is set to `center`,
the `arrowOffset` prop is ignored.

```tsx
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow arrowPosition="center" arrowOffset={10} arrowSize={7} arrowRadius={0}>
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

Set the `withOverlay` prop to add an overlay behind the dropdown. You can pass additional
configuration to the [Overlay](https://mantine.dev/llms/core-overlay.md) component with the `overlayProps` prop:

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

Use the `hideDetached` prop to configure how the dropdown behaves when the target
element is hidden with styles (`display: none`, `visibility: hidden`, etc.),
removed from the DOM, or when the target element is scrolled out of the viewport.

By default, `hideDetached` is enabled – the dropdown is hidden with the target element.
You can change this behavior with `hideDetached={false}`. To see the difference, try to scroll
the root element of the following demo:

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

Set the `disabled` prop to prevent `Popover.Dropdown` from rendering:

```tsx
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} disabled={false}>
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

You can configure events that are used for click-outside detection with the `clickOutsideEvents` prop.
By default, `Popover` listens to `mousedown` and `touchstart` events. You can change it to any other
events, for example, `mouseup` and `touchend`:

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

If you need to control the opened state, but still want to close the popover on outside clicks
and escape key presses, use the `onDismiss` prop:

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

Popover uses the [FocusTrap](https://mantine.dev/llms/core-focus-trap.md) component to manage focus.
Add the `data-autofocus` attribute to the element that should receive initial focus:

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

## Target component

The target element determines where the Popover will be positioned relative to.

## Nested popovers

Nested popovers require children rendering without [Portal](https://mantine.dev/llms/core-portal.md). Usually, you
should disable the portal with props of the component that renders popover content. For example,
[Select](https://mantine.dev/llms/core-select.md) has a `comboboxProps={{ withinPortal: false }}` prop. Check the documentation
of the component that you are using to render popover content to find out how to disable the portal.
If the portal is not disabled, outside clicks will close all popovers.

Example of disabling the portal in [Select](https://mantine.dev/llms/core-select.md) and [DatePickerInput](https://mantine.dev/llms/dates-date-picker-input.md)
components:

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

An uncontrolled Popover will be accessible only when used with a `button` element or component that renders it ([Button](https://mantine.dev/llms/core-button.md), [ActionIcon](https://mantine.dev/llms/core-action-icon.md), etc.).
Other elements will not support `Space` and `Enter` key presses.

## Keyboard interactions


#### Props

**Popover props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | 'center' \| 'side' | - | Arrow position |
| arrowRadius | number | - | Arrow `border-radius` in px |
| arrowSize | number | - | Arrow size in px |
| children | React.ReactNode | - | `Popover.Target` and `Popover.Dropdown` components |
| clickOutsideEvents | string[] | - | Events that trigger outside clicks |
| closeOnClickOutside | boolean | - | Determines whether dropdown should be closed on outside clicks |
| closeOnEscape | boolean | - | Determines whether dropdown should be closed when `Escape` key is pressed |
| defaultOpened | boolean | - | Initial opened state for uncontrolled component |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
| id | string | - | Id base to create accessibility connections |
| keepMounted | boolean | - | If set, the dropdown is not unmounted from the DOM when hidden. `display: none` styles are added instead. |
| middlewares | PopoverMiddlewares | - | Floating ui middlewares to configure position handling |
| offset | number \| FloatingAxesOffsets | - | Offset of the dropdown element |
| onChange | (opened: boolean) => void | - | Called with current state when dropdown opens or closes |
| onClose | () => void | - | Called when dropdown closes |
| onDismiss | () => void | - | Called when the popover is dismissed by clicking outside or by pressing escape |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onOpen | () => void | - | Called when dropdown opens |
| onPositionChange | (position: FloatingPosition) => void | - | Called when dropdown position changes |
| opened | boolean | - | Controlled dropdown opened state |
| overlayProps | OverlayProps & ElementProps<"div"> | - | Props passed down to `Overlay` component |
| portalProps | BasePortalProps | - | Props to pass down to the `Portal` when `withinPortal` is true |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| preventPositionChangeWhenVisible | boolean | - | Prevents popover from flipping/shifting when it the dropdown is visible |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| shadow | MantineShadow | - | Key of `theme.shadows` or any other valid CSS `box-shadow` value |
| transitionProps | TransitionProps | - | Props passed down to the `Transition` component. Use to configure duration and animation type. |
| trapFocus | boolean | - | Determines whether focus should be trapped within dropdown |
| width | PopoverWidth | - | Dropdown width, or `'target'` to make dropdown width the same as target element |
| withArrow | boolean | - | Determines whether component should have an arrow |
| withOverlay | boolean | - | Determines whether the overlay should be displayed when the dropdown is opened |
| withRoles | boolean | - | Determines whether dropdown and target elements should have accessible roles |
| withinPortal | boolean | - | Determines whether dropdown should be rendered within the `Portal` |
| zIndex | string \| number | - | Dropdown `z-index` |

**Popover..Target props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Target element |
| popupType | string | - | Popup accessible type |
| refProp | string | - | Key of the prop that should be used to access element ref |

**Popover..Dropdown props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|

**Popover.Target props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Target element |
| popupType | string | - | Popup accessible type |
| refProp | string | - | Key of the prop that should be used to access element ref |

**Popover.Dropdown props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|


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
