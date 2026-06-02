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

        <Menu.Item>Customers</Menu.Item>
        <Menu.Item>Reports</Menu.Item>

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


Use `safeAreaPolygon` to keep a submenu open while the cursor moves from the target toward the dropdown.
Pass an object to adjust [Floating UI `safePolygon`](https://floating-ui.com/docs/useHover#safepolygon) options, for example when `offset` creates a larger gap between the target and dropdown.



## Search

`Menu.Search` renders a search input inside the dropdown. Focus stays on the input while
`ArrowUp`/`ArrowDown` move a highlight through items, and `Enter` triggers the highlighted item.
Filtering is controlled by the user – pass `value` and `onChange` and filter `Menu.Item` children
based on the query. By default, the search value is cleared automatically after the menu close
transition completes – disable with `clearSearchOnClose={false}` if you want to preserve the query
between openings.

```tsx
import { useState } from 'react';
import { Button, Menu, Text } from '@mantine/core';

const data = [
  'Dashboard',
  'Customers',
  'Products',
  'Orders',
  'Reports',
  'Settings',
  'Integrations',
  'Billing',
  'Team members',
  'Help center',
];

function Demo() {
  const [query, setQuery] = useState('');
  const items = data.filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()));

  return (
    <Menu shadow="md" width={240}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Search
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder="Search items"
        />

        {items.length > 0 ? (
          items.map((item) => <Menu.Item key={item}>{item}</Menu.Item>)
        ) : (
          <Text c="dimmed" size="sm" ta="center" py="xs">
            Nothing found
          </Text>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
```


The same approach works with submenus. To keep a parent visible when a nested item matches,
include the parent in the filtered tree if any of its descendants match the query:

```tsx
import { useState } from 'react';
import { Button, Menu, Text } from '@mantine/core';

interface MenuNode {
  label: string;
  children?: MenuNode[];
}

const data: MenuNode[] = [
  { label: 'Dashboard' },
  { label: 'Customers' },
  {
    label: 'Products',
    children: [
      { label: 'All products' },
      { label: 'Categories' },
      { label: 'Tags' },
      { label: 'Inventory' },
    ],
  },
  { label: 'Orders' },
  {
    label: 'Settings',
    children: [
      {
        label: 'Account',
        children: [
          { label: 'Profile' },
          { label: 'Security' },
          { label: 'Two-factor authentication' },
        ],
      },
      { label: 'Notifications' },
      { label: 'Billing' },
    ],
  },
];

function filterTree(nodes: MenuNode[], query: string): MenuNode[] {
  const q = query.toLowerCase().trim();
  if (!q) {
    return nodes;
  }
  return nodes.reduce<MenuNode[]>((acc, node) => {
    const labelMatches = node.label.toLowerCase().includes(q);
    const children = node.children ? filterTree(node.children, query) : undefined;
    if (labelMatches || (children && children.length > 0)) {
      acc.push({ ...node, children: node.children ? children : undefined });
    }
    return acc;
  }, []);
}

function renderNode(node: MenuNode) {
  if (node.children) {
    return (
      <Menu.Sub key={node.label}>
        <Menu.Sub.Target>
          <Menu.Sub.Item>{node.label}</Menu.Sub.Item>
        </Menu.Sub.Target>
        <Menu.Sub.Dropdown>{node.children.map(renderNode)}</Menu.Sub.Dropdown>
      </Menu.Sub>
    );
  }
  return <Menu.Item key={node.label}>{node.label}</Menu.Item>;
}

function Demo() {
  const [query, setQuery] = useState('');
  const items = filterTree(data, query);

  return (
    <Menu shadow="md" width={240}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Search
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder="Search items"
        />

        {items.length > 0 ? (
          items.map(renderNode)
        ) : (
          <Text c="dimmed" size="sm" ta="center" py="xs">
            Nothing found
          </Text>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Checkbox items

`Menu.CheckboxItem` renders a menu item with a check indicator. It works like a regular
[Checkbox](https://mantine.dev/llms/core-checkbox.md) – manage state with `checked`/`onChange` or use `defaultChecked`
for an uncontrolled value. By default, clicking a checkbox item does not close the menu;
set `closeMenuOnClick` on the item (or `closeOnItemClick={false}` on the `Menu`)
to override:

```tsx
import { useState } from 'react';
import { Button, Menu } from '@mantine/core';

function Demo() {
  const [columns, setColumns] = useState({
    name: true,
    email: true,
    role: false,
    lastSeen: false,
  });

  const setColumn = (key: keyof typeof columns) => (checked: boolean) =>
    setColumns((current) => ({ ...current, [key]: checked }));

  return (
    <Menu shadow="md" width={220} closeOnItemClick={false}>
      <Menu.Target>
        <Button>Columns</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Visible columns</Menu.Label>
        <Menu.CheckboxItem checked={columns.name} onChange={setColumn('name')}>
          Name
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={columns.email} onChange={setColumn('email')}>
          Email
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={columns.role} onChange={setColumn('role')}>
          Role
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={columns.lastSeen} onChange={setColumn('lastSeen')}>
          Last seen
        </Menu.CheckboxItem>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Checkbox group

Wrap `Menu.CheckboxItem` components in `Menu.CheckboxGroup` to manage multi-select state with a
single `value: string[]` / `onChange` pair (or `defaultValue` for uncontrolled). Each item needs
a `value`. Clicking an item toggles its value in the group:

```tsx
import { useState } from 'react';
import { Button, Menu } from '@mantine/core';

function Demo() {
  const [columns, setColumns] = useState(['name', 'email']);

  return (
    <Menu shadow="md" width={220} closeOnItemClick={false}>
      <Menu.Target>
        <Button>Columns</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Visible columns</Menu.Label>
        <Menu.CheckboxGroup value={columns} onChange={setColumns}>
          <Menu.CheckboxItem value="name">Name</Menu.CheckboxItem>
          <Menu.CheckboxItem value="email">Email</Menu.CheckboxItem>
          <Menu.CheckboxItem value="role">Role</Menu.CheckboxItem>
          <Menu.CheckboxItem value="lastSeen">Last seen</Menu.CheckboxItem>
        </Menu.CheckboxGroup>
      </Menu.Dropdown>
    </Menu>
  );
}
```


`Menu.CheckboxItem` can still be used standalone (without a group) with its own `checked` /
`defaultChecked` / `onChange` props. Item-level `checked` and `onChange` also override the group
when both are present.

## Radio items

`Menu.RadioItem` represents a single option inside a `Menu.RadioGroup`. The group manages
the selected value via `value`/`onChange` (or `defaultValue` for uncontrolled). The currently
selected item displays an indicator dot. Like checkbox items, radio items do not close the
menu on click by default:

```tsx
import { useState } from 'react';
import { Button, Menu } from '@mantine/core';

function Demo() {
  const [sort, setSort] = useState('newest');

  return (
    <Menu shadow="md" width={220} closeOnItemClick={false}>
      <Menu.Target>
        <Button>Sort by</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Order</Menu.Label>
        <Menu.RadioGroup value={sort} onChange={setSort}>
          <Menu.RadioItem value="newest">Newest first</Menu.RadioItem>
          <Menu.RadioItem value="oldest">Oldest first</Menu.RadioItem>
          <Menu.RadioItem value="popular">Most popular</Menu.RadioItem>
          <Menu.RadioItem value="commented">Most commented</Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Aligning labels of items with and without indicators

Use the `alignItemsLabels` prop on `Menu` to control how indicator slot space is reserved.
This is useful when mixing `Menu.Item` with `Menu.CheckboxItem` or `Menu.RadioItem` and you
want labels to start at the same horizontal position:

* `alignItemsLabels="with-indicators"` (default) – reserves indicator space on `Menu.CheckboxItem`
  and `Menu.RadioItem` only. Regular `Menu.Item` is not padded.
* `alignItemsLabels="all"` – reserves indicator space on every `Menu.Item`, so labels of plain
  items align with checkbox and radio items.
* `alignItemsLabels="none"` – reserves indicator space only on items that currently show an
  indicator. Unchecked checkbox and radio items render without the slot (layout shifts when
  toggled).

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu alignItemsLabels="with-indicators">
      <Menu.Target>
        <button type="button">Toggle menu</button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>View details</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Divider />
        <Menu.CheckboxItem defaultChecked>Pinned</Menu.CheckboxItem>
        <Menu.CheckboxItem>Archived</Menu.CheckboxItem>
        <Menu.Divider />
        <Menu.RadioGroup defaultValue="newest">
          <Menu.RadioItem value="newest">Newest first</Menu.RadioItem>
          <Menu.RadioItem value="oldest">Oldest first</Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Custom check icon

Use the `checkIcon` prop to replace the default indicator rendered by `Menu.CheckboxItem` and
`Menu.RadioItem`. Setting `checkIcon` on `Menu` applies to all checkbox/radio items in the
dropdown. Setting `checkIcon` on an individual item overrides the menu-level value:

```tsx
import { useState } from 'react';
import { CheckIcon } from '@phosphor-icons/react';
import { Button, Menu } from '@mantine/core';

function Demo() {
  const [filters, setFilters] = useState({ open: true, drafts: false, archived: false });

  const setFilter = (key: keyof typeof filters) => (checked: boolean) =>
    setFilters((current) => ({ ...current, [key]: checked }));

  return (
    <Menu shadow="md" width={220} closeOnItemClick={false} checkIcon={<CheckIcon size={12} weight="bold" />}>
      <Menu.Target>
        <Button>Filters</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Filters</Menu.Label>
        <Menu.CheckboxItem checked={filters.open} onChange={setFilter('open')}>
          Open
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={filters.drafts} onChange={setFilter('drafts')}>
          Drafts
        </Menu.CheckboxItem>
        <Menu.CheckboxItem
          checked={filters.archived}
          onChange={setFilter('archived')}
          checkIcon="✦"
        >
          Archived
        </Menu.CheckboxItem>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Type-ahead navigation

When focus is inside the dropdown and `Menu.Search` is not used, pressing a printable character
key moves focus to the next menu item whose label starts with the typed character. Pressing the
same character again cycles through items that start with it. Multiple characters typed in quick
succession (within 500ms) match items whose labels start with the full typed string. Disabled
items are skipped.

## Context menu

Use `Menu.ContextMenu` to open the menu dropdown at the cursor position on right-click.
It replaces `Menu.Target` and wraps the element that should respond to the `contextmenu` event –
the browser's default context menu is suppressed, and the Mantine `Menu.Dropdown` is positioned
at the cursor instead. Right-clicking again repositions the dropdown to the new coordinates.
Set `disabled` to restore the browser's default context menu:

```tsx
import { Menu, Paper, Text } from '@mantine/core';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.ContextMenu>
        <Paper withBorder p="xl" radius="md" style={{ userSelect: 'none', textAlign: 'center' }}>
          <Text fw={500}>Right-click anywhere inside this area</Text>
          <Text c="dimmed" size="sm" mt={4}>
            The menu will open at the cursor position
          </Text>
        </Paper>
      </Menu.ContextMenu>

      <Menu.Dropdown>
        <Menu.Label>Actions</Menu.Label>
        <Menu.Item>Open</Menu.Item>
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Divider />
        <Menu.Item color="red">Delete</Menu.Item>
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
| alignItemsLabels | "none" \| "all" \| "with-indicators" | - | Controls how indicator slot space is reserved on menu items for label alignment. `'all'` reserves space on every `Menu.Item`, `'with-indicators'` reserves space only on `Menu.CheckboxItem` and `Menu.RadioItem`, `'none'` reserves space only on items that currently display an indicator. |
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | 'center' \| 'side' | - | Arrow position |
| arrowRadius | number | - | Arrow `border-radius` in px |
| arrowSize | number | - | Arrow size in px |
| checkIcon | React.ReactNode | - | Custom icon rendered as the indicator of checked `Menu.CheckboxItem` and selected `Menu.RadioItem`. Can be overridden per item with the `checkIcon` prop. |
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
| preventPositionChangeWhenVisible | boolean | - | If `true`, the dropdown picks its side on open (flip runs once, preferring the `position` prop) and then never changes side — scrolling, resizing, and content size changes will not flip the dropdown. The side is recalculated fresh on the next open. Does not affect the `shift` middleware. Set to `false` to keep flip active and allow the dropdown to re-flip on every change. |
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

**Menu.Search props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| clearSearchOnClose | boolean | - | If set, clears the search value after the menu close transition completes. Requires a controlled `value`/`onChange` pair. |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Determines whether the input should have error styles and `aria-invalid` attribute |
| id | string | - | Input element id |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| multiline | boolean | - | Adjusts padding and sizing calculations for multiline inputs (use with `component="textarea"`). Does not make the input multiline by itself. |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Sets `required` attribute on the `input` element |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| rootRef | Ref<HTMLDivElement> | - | Root element ref |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| withAria | boolean | - | Determines whether `aria-` and other accessibility attributes should be added to the input. Only disable when implementing custom accessibility handling. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element of the `Input` component |

**Menu.CheckboxItem props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checkIcon | React.ReactNode | - | Replaces the default check icon rendered in the indicator slot when the item is checked. Overrides `checkIcon` set on `Menu`. |
| checked | boolean | - | Controlled checked state. Overrides selection derived from the parent `Menu.CheckboxGroup`. |
| children | React.ReactNode | - | Item label |
| closeMenuOnClick | boolean | - | If set, closes the menu when this item is clicked. By default, checkbox items do not close the menu. |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| defaultChecked | boolean | - | Uncontrolled default checked state. Ignored when the item is used inside `Menu.CheckboxGroup`. |
| disabled | boolean | - | Sets disabled attribute, applies disabled styles |
| onChange | (checked: boolean) => void | - | Called when checked state changes. Overrides `onChange` of the parent `Menu.CheckboxGroup`. |
| rightSection | React.ReactNode | - | Section displayed at the end of the label |
| value | string | - | Value of the checkbox item. When used inside `Menu.CheckboxGroup`, determines whether the item is checked and what value is added/removed on toggle. |

**Menu.RadioItem props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checkIcon | React.ReactNode | - | Replaces the default radio indicator rendered when the item is selected. Overrides `checkIcon` set on `Menu`. |
| checked | boolean | - | Overrides selected state determined by the parent `Menu.RadioGroup`. |
| children | React.ReactNode | - | Item label |
| closeMenuOnClick | boolean | - | If set, closes the menu when this item is clicked. By default, radio items do not close the menu. |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| disabled | boolean | - | Sets disabled attribute, applies disabled styles |
| onChange | (value: string) => void | - | Called with the item value when item is selected. Overrides `onChange` of the parent `Menu.RadioGroup`. |
| rightSection | React.ReactNode | - | Section displayed at the end of the label |
| value | string | required | Value of the radio item. Used by the parent `Menu.RadioGroup` to determine which item is selected. |

**Menu.RadioGroup props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | `Menu.RadioItem` components and other elements |
| defaultValue | string \| null | - | Uncontrolled default selected value |
| onChange | (value: string) => void | - | Called with the new value when a `Menu.RadioItem` is selected |
| value | string \| null | - | Controlled selected value |

**Menu.CheckboxGroup props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | `Menu.CheckboxItem` components and other elements |
| defaultValue | string[] | - | Uncontrolled default selected values |
| onChange | (value: string[]) => void | - | Called with the new array of selected values when a `Menu.CheckboxItem` is toggled |
| value | string[] | - | Controlled selected values |

**Menu.ContextMenu props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Element that opens the menu when right-clicked. Menu dropdown is positioned at the cursor. The trigger element must not call `event.preventDefault()` in its own `onContextMenu` handler, otherwise the native context menu is not suppressed. |
| disabled | boolean | - | If set, the right-click trigger is disabled and the browser's default context menu is shown |

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
| preventPositionChangeWhenVisible | boolean | - | If `true`, the dropdown picks its side on open (flip runs once, preferring the `position` prop) and then never changes side — scrolling, resizing, and content size changes will not flip the dropdown. The side is recalculated fresh on the next open. Does not affect the `shift` middleware. Set to `false` to keep flip active and allow the dropdown to re-flip on every change. |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| safeAreaPolygon | boolean \| SafePolygonOptions | - | Determines whether submenu stays open while the cursor moves toward its dropdown. Pass an object to configure safe polygon behavior. |
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
| itemIndicator | .mantine-Menu-itemIndicator | Indicator slot of `Menu.CheckboxItem` and `Menu.RadioItem` |
| chevron | .mantine-Menu-chevron | Sub menu chevron |
| search | .mantine-Menu-search | `Menu.Search` input element |

**Menu data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| item | data-disabled | `disabled` prop is set on `Menu.Item` | - |
