# Menubar
Package: @mantine/core
Import: import { Menubar } from '@mantine/core';
Description: Desktop application style menubar with a row of menu triggers

## Usage

`Menubar` is a desktop-application style menu bar: a horizontal row of top-level menu triggers
(File, Edit, View, …) where each trigger opens a dropdown. Arrow keys move between the top-level
menus, and once one menu is opened, moving to a sibling opens it immediately. `Menubar` follows the
[WAI-ARIA menubar pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).

`Menubar` is built on top of [Menu](https://mantine.dev/llms/core-menu.md) – each `Menubar.Menu` is a separate `Menu`
instance, and the dropdown content is composed from the usual `Menu.Item`, `Menu.Divider`,
`Menu.Label`, `Menu.Sub`, `Menu.CheckboxItem` and `Menu.RadioItem` components.

```tsx
import { Menu, Menubar, Text } from '@mantine/core';

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu width={220}>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘N</Text>}>New file</Menu.Item>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘⇧N</Text>}>New window</Menu.Item>
          <Menu.Sub>
            <Menu.Sub.Target>
              <Menu.Sub.Item>Open recent</Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>
              <Menu.Item>project-alpha</Menu.Item>
              <Menu.Item>project-beta</Menu.Item>
              <Menu.Item>project-gamma</Menu.Item>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
          <Menu.Divider />
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘S</Text>}>Save</Menu.Item>
          <Menu.Item>Save as…</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘Z</Text>}>Undo</Menu.Item>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘⇧Z</Text>}>Redo</Menu.Item>
          <Menu.Divider />
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Help</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Documentation</Menu.Item>
          <Menu.Item>Keyboard shortcuts</Menu.Item>
          <Menu.Item>About</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
```


## How it differs from Menu

[Menu](https://mantine.dev/llms/core-menu.md) is a single disclosure widget – one target that toggles one dropdown.
`Menubar` coordinates multiple menus:

* The root renders `role="menubar"` and `Menubar.Target` renders `role="menuitem"` triggers with
  `aria-haspopup="menu"`.
* Only one menu in the bar is open at a time. Moving to a sibling while a menu is open switches
  which menu is open.
* The whole bar is a single tab stop (roving `tabindex`) – `Tab` moves focus into and out of the
  menu bar as a single unit, arrow keys move between triggers.

If you need a single dropdown attached to one button, use [Menu](https://mantine.dev/llms/core-menu.md) instead.

## Composition

`Menubar` consists of the following components:

* `Menubar` – root element, owns the open/active state of all menus
* `Menubar.Menu` – wraps a single menu, renders a `Menu` instance under the hood
* `Menubar.Target` – top-level trigger button (`role="menuitem"`)
* `Menubar.Dropdown` – dropdown container, accepts the same children as `Menu.Dropdown`

```tsx
import { Menu, Menubar } from '@mantine/core';

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>New file</Menu.Item>
          <Menu.Item>Open…</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
```

## Trigger and loop

`trigger` controls how a menu is opened when none of the menus is currently open:

* `click` (default) – a menu opens when its target is clicked. Once any menu is open, hovering a
  sibling target switches to it immediately. This matches the behavior of native desktop
  application menu bars.
* `hover` – a menu opens as soon as its target is hovered, even when all menus are closed.

With `trigger="hover"`, a menu opens as soon as its target is hovered and closes when the pointer
leaves the bar:

```tsx
import { Menu, Menubar } from '@mantine/core';

function Demo() {
  return (
    <Menubar trigger="hover">
      <Menubar.Menu width={220}>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>New file</Menu.Item>
          <Menu.Item>New window</Menu.Item>
          <Menu.Item>Save</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>View</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Zoom in</Menu.Item>
          <Menu.Item>Zoom out</Menu.Item>
          <Menu.Item>Reset zoom</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
```


`loop` (default `true`) controls whether arrow key navigation wraps around from the last menu to
the first and vice versa.

## Submenus

Use `Menu.Sub` inside `Menubar.Dropdown` to create nested submenus. `ArrowRight` opens a submenu
and moves focus to its first item, `ArrowLeft` closes it and returns focus to the parent item.
See the [Menu submenus documentation](https://mantine.dev/llms/core-menu.md#submenus) for more information.

The [usage demo](#usage) above includes a submenu in the File menu.

## Checkbox and radio items

`Menubar.Dropdown` supports the same selectable items as `Menu`: `Menu.CheckboxItem` for toggles
and `Menu.RadioGroup` with `Menu.RadioItem` for single-choice options. By default, clicking a
checkbox or radio item does not close the menu.

```tsx
import { Menu, Menubar } from '@mantine/core';

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu width={220}>
        <Menubar.Target>View</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.CheckboxItem defaultChecked>Show sidebar</Menu.CheckboxItem>
          <Menu.CheckboxItem>Show status bar</Menu.CheckboxItem>
          <Menu.Divider />
          <Menu.Label>Appearance</Menu.Label>
          <Menu.RadioGroup defaultValue="comfortable">
            <Menu.RadioItem value="compact">Compact</Menu.RadioItem>
            <Menu.RadioItem value="comfortable">Comfortable</Menu.RadioItem>
            <Menu.RadioItem value="spacious">Spacious</Menu.RadioItem>
          </Menu.RadioGroup>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Window</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Minimize</Menu.Item>
          <Menu.Item>Zoom</Menu.Item>
          <Menu.Item>Bring all to front</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
```


## Controlled

Set `openIndex` and `onOpenChange` to control which menu is open. `openIndex` is the zero-based
index of the opened `Menubar.Menu` (in DOM order) or `null` when all menus are closed:

```tsx
import { useState } from 'react';
import { Button, Group, Menu, Menubar, Stack } from '@mantine/core';

function Demo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Stack>
      <Group>
        <Button variant="default" onClick={() => setOpenIndex(0)}>Open File</Button>
        <Button variant="default" onClick={() => setOpenIndex(1)}>Open Edit</Button>
        <Button variant="default" onClick={() => setOpenIndex(null)}>Close all</Button>
      </Group>

      <Menubar openIndex={openIndex} onOpenChange={setOpenIndex}>
        <Menubar.Menu width={220}>
          <Menubar.Target>File</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>New file</Menu.Item>
            <Menu.Item>Save</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu width={220}>
          <Menubar.Target>Edit</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Undo</Menu.Item>
            <Menu.Item>Redo</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>
    </Stack>
  );
}
```


For uncontrolled usage with an initially open menu, use the `defaultOpenIndex` prop instead.

## Position

By default, dropdowns are positioned at `bottom-start` relative to their target. Change the
`position` prop to use a different [Floating UI position](https://mantine.dev/llms/core-popover.md#position-and-placement)
for all menus in the bar:

```tsx
import { Menubar } from '@mantine/core';

function Demo() {
  return (
    <Menubar position="bottom-end">
      {/* ...menus */}
    </Menubar>
  );
}
```

Individual menus accept the same props as [Menu](https://mantine.dev/llms/core-menu.md) – pass them to `Menubar.Menu` to
override settings for a single menu, for example `position`, `withinPortal`, `closeOnItemClick`,
`shadow`, `width` or `transitionProps`.

## Accessibility

`Menubar` follows the [WAI-ARIA menubar pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/):

* The root element has `role="menubar"` and `aria-orientation="horizontal"`.
* Each `Menubar.Target` has `role="menuitem"`, `aria-haspopup="menu"` and `aria-expanded`.
* The menu bar is a single tab stop – only the active trigger is included in the tab sequence,
  arrow keys move focus between the triggers.

The labels you pass to `Menubar.Target` are used as accessible names for the triggers, so make
sure they describe the menu content.


#### Props

**Menubar props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | `Menubar.Menu` components |
| defaultOpenIndex | number \| null | - | Index of the opened menu for uncontrolled component |
| loop | boolean | - | If set, arrow key navigation wraps from last to first menu and vice versa |
| onOpenChange | (index: number \| null) => void | - | Called when the opened menu changes with its index or `null` when all menus are closed |
| openIndex | number \| null | - | Index of the controlled opened menu, `null` closes all menus |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| trigger | "hover" \| "click" | - | Event that opens a menu when none of the menus is opened. `'click'` opens a menu on target click and then switches menus on hover (desktop application pattern), `'hover'` opens a menu when the target is hovered |


#### Styles API

Menubar component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Menubar selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Menubar-root | Root element with `role="menubar"` |
| target | .mantine-Menubar-target | `Menubar.Target` top-level trigger button |

**Menubar data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| target | data-expanded | Associated menu is opened | - |
