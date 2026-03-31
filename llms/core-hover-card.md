# HoverCard
Package: @mantine/core
Import: import { HoverCard } from '@mantine/core';
Description: Display popover section when target element is hovered

## Usage

```tsx
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
```


## Delays

Set open and close delays in ms with the `openDelay` and `closeDelay` props:

```tsx
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard shadow="md" openDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms open delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Opened with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard shadow="md" closeDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms close delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Will close with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
```


## HoverCard delay group

Use the `HoverCard.Group` component to sync open and close delays of multiple `HoverCard` components:

```tsx
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <HoverCard.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>First</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">First hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Second</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Second hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Button>Third</Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">Third hover card content</Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
    </HoverCard.Group>
  );
}
```


## With interactive elements

`HoverCard` is displayed only when the mouse is over the target element or dropdown.
You can use anchors and buttons within dropdowns, using inputs is not recommended:

```tsx
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
            <Stack gap={5}>
              <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="https://x.com/mantinedev"
                c="dimmed"
                size="xs"
                style={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" gap="xl">
            <Text size="sm">
              <b>0</b> Following
            </Text>
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
```


## Target component

The target element determines where the HoverCard will be positioned relative to.

## Accessibility

`HoverCard` is ignored by screen readers and cannot be activated with the keyboard. Use it to display only additional information
that is not required to understand the context.


#### Props

**HoverCard props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | 'center' \| 'side' | - | Arrow position |
| arrowRadius | number | - | Arrow `border-radius` in px |
| arrowSize | number | - | Arrow size in px |
| children | React.ReactNode | - | `Popover.Target` and `Popover.Dropdown` components |
| clickOutsideEvents | string[] | - | Events that trigger outside clicks |
| closeDelay | number | - | Delay in ms before the dropdown closes after mouse leaves the target or dropdown. Overridden by HoverCard.Group delay if used within a group. |
| closeOnClickOutside | boolean | - | Determines whether dropdown should be closed on outside clicks |
| closeOnEscape | boolean | - | Determines whether dropdown should be closed when `Escape` key is pressed |
| defaultOpened | boolean | - | Initial opened state for uncontrolled component |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
| id | string | - | Id base to create accessibility connections |
| initiallyOpened | boolean | - | Initial opened state |
| keepMounted | boolean | - | If set, the dropdown is not unmounted from the DOM when hidden. `display: none` styles are added instead. |
| middlewares | PopoverMiddlewares | - | Floating ui middlewares to configure position handling |
| offset | number \| FloatingAxesOffsets | - | Offset of the dropdown element |
| onClose | () => void | - | Called when the dropdown is closed |
| onDismiss | () => void | - | Called when the popover is dismissed by clicking outside or by pressing escape |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onOpen | () => void | - | Called when the dropdown is opened |
| onPositionChange | (position: FloatingPosition) => void | - | Called when dropdown position changes |
| openDelay | number | - | Delay in ms before the dropdown opens after mouse enters the target. Overridden by HoverCard.Group delay if used within a group. |
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

**HoverCard..Target props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Target element |
| eventPropsWrapperName | string | - | Name of the prop to wrap event listeners in. Use when the target component expects event listeners in a nested object. For example, some components expect `componentProps={{ onMouseEnter, onMouseLeave }}`. |
| popupType | string | - | Popup accessible type |
| refProp | string | - | Key of the prop that should be used to access element ref |

**HoverCard..Dropdown props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Dropdown content |

**HoverCard..Group props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | `HoverCard` components |
| closeDelay | number | - | Close delay in ms |
| openDelay | number | - | Open delay in ms |

**HoverCard.Target props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Target element |
| eventPropsWrapperName | string | - | Name of the prop to wrap event listeners in. Use when the target component expects event listeners in a nested object. For example, some components expect `componentProps={{ onMouseEnter, onMouseLeave }}`. |
| popupType | string | - | Popup accessible type |
| refProp | string | - | Key of the prop that should be used to access element ref |

**HoverCard.Group props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | `HoverCard` components |
| closeDelay | number | - | Close delay in ms |
| openDelay | number | - | Open delay in ms |