# Menu
Package: @mantine/core
Import: import { Menu } from '@mantine/core';
Description: Combine a list of secondary actions into single interactive area

## Usage

```tsx
import { Menu, Button, Text } from '@mantine/core';
import { GearSixIcon, MagnifyingGlassIcon, ImageIcon, ChatCircleIcon, TrashIcon, IconArrowsLeftRight } from '@phosphor-icons/react';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<GearSixIcon size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<ChatCircleIcon size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<ImageIcon size={14} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<MagnifyingGlassIcon size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<TrashIcon size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Submenus

```tsx
import { Button, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu width={200} position="bottom-start">
      <Menu.Target>
        <Button>Toggle Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Dashboard</Menu.Item>

        <Menu.Sub openDelay={120} closeDelay={150}>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Products</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>All products</Menu.Item>
            <Menu.Item>Categories</Menu.Item>
            <Menu.Item>Tags</Menu.Item>
            <Menu.Item>Attributes</Menu.Item>
            <Menu.Item>Shipping classes</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Orders</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>Open</Menu.Item>
            <Menu.Item>Completed</Menu.Item>
            <Menu.Item>Cancelled</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Settings</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
            <Menu.Item>Notifications</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Controlled

The dropdown's opened state can be controlled with the `opened` and `onChange` props:

```tsx
import { useState } from 'react';
import { Menu } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Menu opened={opened} onChange={setOpened}>
      {/* Menu content */}
    </Menu>
  );
}
```

## Show menu on hover

Set `trigger="hover"` to reveal the dropdown when hovering over the menu target and dropdown.
The `closeDelay` and `openDelay` props can be used to control open and close delay in ms.
Note that:

* If you set `closeDelay={0}` then the menu will close before the user reaches the dropdown, so set `offset={0}` to remove space between the target element and dropdown.
* Menu with `trigger="hover"` is not accessible – users that navigate with the keyboard will not be able to use it. If you need both hover and click triggers, use `trigger="click-hover"`.

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
```


To make a `Menu` that is revealed on hover accessible on all devices, use `trigger="click-hover"` instead.
The dropdown will be revealed on hover on desktop and on click on mobile devices.

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
```


## Disabled items

```tsx
import { Menu, Button } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<MagnifyingGlassIcon size={14} />}
          disabled
        >
          Search
        </Menu.Item>

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Dropdown position

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu position="bottom" offset={5} withArrow={false} arrowPosition="side">
      {/* Menu items */}
    </Menu>
  );
}
```


## Transitions

The Menu dropdown can be animated with any of the premade transitions from the [Transition](https://mantine.dev/llms/core-transition.md) component:

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
```


## Custom component as Menu.Item

By default, `Menu.Item` renders as a button element. To change that, set the `component` prop:

```tsx
import { Menu, Button } from '@mantine/core';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>
        <Menu.Item
          leftSection={<ArrowSquareOutIcon size={14} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```


Note that the component you pass to the `component` prop should allow spreading props to its root element:

```tsx
import { Menu } from '@mantine/core';

// ❌ Will not work with Menu.Item
function IncorrectItem() {
  return <button type="button">My custom Menu item</button>;
}

// ✅ Will work correctly with Menu.Item
const CorrectItem = ({ ref, ...props }) => (
  <button type="button" {...props} ref={ref}>
    My custom Menu item
  </button>
);

function Demo() {
  // ❌ Will not work
  const incorrect = <Menu.Item component={IncorrectItem} />;

  // ✅ Will work
  const correct = <Menu.Item component={CorrectItem} />;
}
```

## Accessibility

Menu follows [WAI-ARIA recommendations](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/):

* Dropdown element has `role="menu"` and `aria-labelledby="target-id"` attributes
* Target element has `aria-haspopup="menu"`, `aria-expanded`, `aria-controls="dropdown-id"` attributes
* Menu item has `role="menuitem"` attribute

Whilst the dropdown is unopened, the `aria-controls` attribute will be undefined

### Supported target elements

An uncontrolled Menu with `trigger="click"` (default) will be accessible only when used with a `button` element or component that renders it ([Button](https://mantine.dev/llms/core-button.md), [ActionIcon](https://mantine.dev/llms/core-action-icon.md), etc.).
Other elements will not support `Space` and `Enter` key presses.

### Hover menu

Menu with `trigger="hover"` is not accessible – it cannot be accessed with the keyboard. Use it only if you do not care about accessibility. If you need both hover and click triggers, use `trigger="click-hover"`.

### Navigation

If you are using the Menu to build navigation, you can use the options from the demo below to follow the [WAI-ARIA recommendations for navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).

```tsx
import { Group, Menu } from '@mantine/core';

function Demo() {
  const menus = Array(4)
    .fill(0)
    .map((e, i) => (
      <Menu
        key={i}
        trigger="click-hover"
        loop={false}
        withinPortal={false}
        trapFocus={false}
        menuItemTabIndex={0}
      >
        {/* ... menu items */}
      </Menu>
    ));
  return <Group>{menus}</Group>;
}
```


### Keyboard interactions

If you also need to support `Tab` and `Shift + Tab` then set `menuItemTabIndex={0}`.


#### Props

**Menu props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | 'center' \| 'side' | - | Arrow position |
| arrowRadius | number | - | Arrow `border-radius` in px |
| arrowSize | number | - | Arrow size in px |
| children | React.ReactNode | - | Menu children |
| clickOutsideEvents | string[] | - | Events that trigger outside click detection. Includes mousedown for desktop clicks, touchstart for mobile, and keydown for Escape key handling |
| closeDelay | number | - | Close delay in ms, applicable only to `trigger="hover"` variant |
| closeOnClickOutside | boolean | - | If set, the dropdown is closed on outside clicks |
| closeOnEscape | boolean | - | If set, the dropdown is closed when the `Escape` key is pressed |
| closeOnItemClick | boolean | - | If set, the Menu is closed when one of the items is clicked. Can be overridden per item with `closeMenuOnClick` prop |
| defaultOpened | boolean | - | Uncontrolled menu initial opened state |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
| id | string | - | Id base to create accessibility connections |
| keepMounted | boolean | - | If set, the dropdown is not unmounted from the DOM when hidden. `display: none` styles are added instead. |
| loop | boolean | - | If set, arrow key presses wrap around from last item to first and vice versa |
| menuItemTabIndex | 0 \| -1 | - | Set the `tabindex` on all menu items. Use `0` to allow Tab key navigation through menu items (required for navigation menus following WAI-ARIA disclosure pattern). |
| middlewares | PopoverMiddlewares | - | Floating ui middlewares to configure position handling |
| offset | number \| FloatingAxesOffsets | - | Offset of the dropdown element |
| onChange | (opened: boolean) => void | - | Called when menu opened state changes |
| onClose | () => void | - | Called when Menu is closed |
| onDismiss | () => void | - | Called when the popover is dismissed by clicking outside or by pressing escape |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onOpen | () => void | - | Called when Menu is opened |
| onPositionChange | (position: FloatingPosition) => void | - | Called when dropdown position changes |
| openDelay | number | - | Open delay in ms, applicable only to `trigger="hover"` variant |
| opened | boolean | - | Controlled menu opened state |
| overlayProps | OverlayProps & ElementProps<"div"> | - | Props passed down to `Overlay` component |
| portalProps | BasePortalProps | - | Props to pass down to the `Portal` when `withinPortal` is true |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| preventPositionChangeWhenVisible | boolean | - | Prevents popover from flipping/shifting when it the dropdown is visible |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| shadow | MantineShadow | - | Key of `theme.shadows` or any other valid CSS `box-shadow` value |
| transitionProps | TransitionProps | - | Props passed down to the `Transition` component. Use to configure duration and animation type. |
| trapFocus | boolean | - | If set, focus is trapped within the menu dropdown when it is opened |
| trigger | "hover" \| "click" \| "click-hover" | - | Event trigger to open menu. Note: 'hover' is not keyboard accessible; prefer 'click-hover' for accessible hover menus |
| width | PopoverWidth | - | Dropdown width, or `'target'` to make dropdown width the same as target element |
| withArrow | boolean | - | Determines whether component should have an arrow |
| withInitialFocusPlaceholder | boolean | - | Adds a hidden focusable element at the start of the dropdown to prevent unexpected focus jumps when opening with keyboard. Set to false if you need custom focus management. |
| withOverlay | boolean | - | Determines whether the overlay should be displayed when the dropdown is opened |
| withinPortal | boolean | - | Determines whether dropdown should be rendered within the `Portal` |
| zIndex | string \| number | - | Dropdown `z-index` |

**Menu.Item props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Item label |
| closeMenuOnClick | boolean | - | Controls whether the menu closes when this item is clicked. When undefined, inherits from Menu's `closeOnItemClick` prop. When true or false, overrides the Menu-level setting |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| disabled | boolean | - | Sets disabled attribute, applies disabled styles |
| leftSection | React.ReactNode | - | Section displayed at the start of the label |
| rightSection | React.ReactNode | - | Section displayed at the end of the label |

**Menu.Target props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Target element |
| refProp | string | - | Key of the prop used to get element ref, useful for forwarding refs to custom components |

**Menu.Sub props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | 'center' \| 'side' | - | Arrow position |
| arrowRadius | number | - | Arrow `border-radius` in px |
| arrowSize | number | - | Arrow size in px |
| closeDelay | number | - | Close delay in ms, applicable when hover trigger is used |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
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
| openDelay | number | - | Open delay in ms, applicable when hover trigger is used |
| overlayProps | OverlayProps & ElementProps<"div"> | - | Props passed down to `Overlay` component |
| portalProps | BasePortalProps | - | Props to pass down to the `Portal` when `withinPortal` is true |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| preventPositionChangeWhenVisible | boolean | - | Prevents popover from flipping/shifting when it the dropdown is visible |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| shadow | MantineShadow | - | Key of `theme.shadows` or any other valid CSS `box-shadow` value |
| transitionProps | TransitionProps | - | Props passed down to the `Transition` component that used to animate dropdown presence, use to configure duration and animation type |
| width | PopoverWidth | - | Dropdown width, or `'target'` to make dropdown width the same as target element |
| withArrow | boolean | - | Determines whether component should have an arrow |
| withOverlay | boolean | - | Determines whether the overlay should be displayed when the dropdown is opened |
| withinPortal | boolean | - | Determines whether dropdown should be rendered within the `Portal` |
| zIndex | string \| number | - | Dropdown `z-index` |

**Menu.Sub.Target props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Target element |
| refProp | string | - | Key of the prop used to get element ref |

**Menu.Sub.Dropdown props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|

**Menu.Sub.Item props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Item label |
| closeMenuOnClick | boolean | - | If set, the menu is closed when the item is clicked. Overrides `closeOnItemClick` prop on the `Menu` component. |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| disabled | boolean | - | Sets disabled attribute, applies disabled styles |
| leftSection | React.ReactNode | - | Section displayed at the start of the label |
| rightSection | React.ReactNode | - | Section displayed at the end of the label |

**Menu.SubItem props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Item label |
| closeMenuOnClick | boolean | - | If set, the menu is closed when the item is clicked. Overrides `closeOnItemClick` prop on the `Menu` component. |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| disabled | boolean | - | Sets disabled attribute, applies disabled styles |
| leftSection | React.ReactNode | - | Section displayed at the start of the label |
| rightSection | React.ReactNode | - | Section displayed at the end of the label |

**Menu.SubTarget props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Target element |
| refProp | string | - | Key of the prop used to get element ref |


#### Styles API

Menu component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Menu selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| dropdown | .mantine-Menu-dropdown | Dropdown element |
| arrow | .mantine-Menu-arrow | Dropdown arrow |
| overlay | .mantine-Menu-overlay | Overlay element |
| divider | .mantine-Menu-divider | `Menu.Divider` root element |
| label | .mantine-Menu-label | `Menu.Label` root element |
| item | .mantine-Menu-item | `Menu.Item` root element |
| itemLabel | .mantine-Menu-itemLabel | Label of `Menu.Item` |
| itemSection | .mantine-Menu-itemSection | Left and right sections of `Menu.Item` |
| chevron | .mantine-Menu-chevron | Sub menu chevron |

**Menu data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| item | data-disabled | `disabled` prop is set on `Menu.Item` | - |
