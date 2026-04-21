# Tabs
Package: @mantine/core
Import: import { Tabs } from '@mantine/core';
Description: Switch between different views

## Usage

```tsx
import { Tabs } from '@mantine/core';
import { ImageIcon, ChatCircleIcon, GearSixIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Tabs color="blue" variant="default" radius="md" orientation="horizontal" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<ImageIcon size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<ChatCircleIcon size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<GearSixIcon size={12} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
```


## Controlled Tabs

To control the Tabs state, use `value` and `onChange` props:

```tsx
import { useState } from 'react';
import { Tabs } from '@mantine/core';

function Demo() {
  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
```

## Uncontrolled Tabs

If you do not need to subscribe to Tabs state changes, use `defaultValue`:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
```

## Change colors

To change the colors of all tabs, set `color` on the `Tabs` component; to change the color of an individual tab,
set `color` on `Tabs.Tab`.

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">Teal tab</Tabs.Tab>
        <Tabs.Tab value="second" color="blue">
          Blue tab
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        First tab color is teal, it gets this value from context
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        Second tab color is blue, it gets this value from props, props have the priority and will
        override context value
      </Tabs.Panel>
    </Tabs>
  );
}
```


## Tabs position

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List grow={false} justify="flex-start">
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```


To display a tab on the opposite side, set `margin-left: auto` with the `ml="auto"` prop or with `className`:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="account" ml="auto">
          Account
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```


## Inverted tabs

To make tabs inverted, place `Tabs.Panel` components before `Tabs.List` and add the `inverted` prop to the `Tabs` component:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" inverted>
      <Tabs.Panel value="chat" pb="xs">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery" pb="xs">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account" pb="xs">Account panel</Tabs.Panel>

      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```


## Vertical tabs placement

To change the placement of `Tabs.List` in vertical orientation, set the `placement` prop:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery" orientation="vertical" placement="left">
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
```


## Custom variants

Example of custom variant with [FloatingIndicator](https://mantine.dev/llms/core-floating-indicator.md):

```tsx
// Demo.tsx
import { useState } from 'react';
import { FloatingIndicator, Tabs } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List ref={setRootRef} className={classes.list}>
        <Tabs.Tab value="1" ref={setControlRef('1')} className={classes.tab}>
          First tab
        </Tabs.Tab>
        <Tabs.Tab value="2" ref={setControlRef('2')} className={classes.tab}>
          Second tab
        </Tabs.Tab>
        <Tabs.Tab value="3" ref={setControlRef('3')} className={classes.tab}>
          Third tab
        </Tabs.Tab>

        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className={classes.indicator}
        />
      </Tabs.List>

      <Tabs.Panel value="1">First tab content</Tabs.Panel>
      <Tabs.Panel value="2">Second tab content</Tabs.Panel>
      <Tabs.Panel value="3">Third tab content</Tabs.Panel>
    </Tabs>
  );
}

// Demo.module.css
.list {
  position: relative;
  margin-bottom: var(--mantine-spacing-md);
}

.indicator {
  background-color: var(--mantine-color-white);
  border-radius: var(--mantine-radius-md);
  border: 1px solid var(--mantine-color-gray-2);
  box-shadow: var(--mantine-shadow-sm);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
  }
}

.tab {
  z-index: 1;
  font-weight: 600;
  transition: color 100ms ease;
  color: var(--mantine-color-gray-7);

  &[data-active] {
    color: var(--mantine-color-black);
  }

  @mixin dark {
    color: var(--mantine-color-dark-1);

    &[data-active] {
      color: var(--mantine-color-white);
    }
  }
}
```


## Disabled tabs

Set the `disabled` prop on the `Tabs.Tab` component to disable a tab.
Disabled tabs cannot be activated with the mouse or keyboard, and they will be skipped when the user navigates with arrow keys:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings" disabled>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```


## Activation mode

By default, tabs are activated when the user presses arrow keys or Home/End keys.
To disable that, set `activateTabWithKeyboard={false}` on the `Tabs` component:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" activateTabWithKeyboard={false}>
      {/* ...content */}
    </Tabs>
  );
}
```


## Tab deactivation

By default, the active tab cannot be deactivated. To allow that, set `allowTabDeactivation` on the `Tabs` component:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" allowTabDeactivation>
      {/* ...content */}
    </Tabs>
  );
}
```


## Unmount inactive tabs

By default, inactive `Tabs.Panel` will stay mounted; to unmount inactive tabs, set `keepMounted={false}` on Tabs.
This is useful when you want to render components that impact performance inside `Tabs.Panel`. Note that
components that are rendered inside `Tabs.Panel` will reset their state on each mount (tab change).

```tsx
import { Tabs } from '@mantine/core';

// Second tab panel will be mounted only when the user activates the second tab
function Demo() {
  return (
    <Tabs keepMounted={false} defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
```

## Get tab control ref

```tsx
import { useRef } from 'react';
import { Tabs } from '@mantine/core';

function Demo() {
  const secondTabRef = useRef<HTMLButtonElement>(null);

  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="Second" ref={secondTabRef}>
          Second tab
        </Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Usage with react-router

```tsx
<Route path="/tabs/:tabValue" element={<Demo />} />
```

```tsx
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs } from '@mantine/core';

function Demo() {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs
      value={tabValue}
      onChange={(value) => navigate(`/tabs/${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Example with Scroller component

Use [Scroller](https://mantine.dev/llms/core-scroller.md) component to make the tabs list scrollable when there are too many tabs to fit in the available space:

```tsx
import { Scroller, Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="tab-1">
      <Tabs.List>
        <Scroller>
          <Tabs.Tab value="tab-1">First tab</Tabs.Tab>
          <Tabs.Tab value="tab-2">Second tab</Tabs.Tab>
          <Tabs.Tab value="tab-3">Third tab</Tabs.Tab>
          <Tabs.Tab value="tab-4">Fourth tab</Tabs.Tab>
          <Tabs.Tab value="tab-5">Fifth tab</Tabs.Tab>
          <Tabs.Tab value="tab-6">Sixth tab</Tabs.Tab>
          <Tabs.Tab value="tab-7">Seventh tab</Tabs.Tab>
          <Tabs.Tab value="tab-8">Eighth tab</Tabs.Tab>
          <Tabs.Tab value="tab-9">Ninth tab</Tabs.Tab>
          <Tabs.Tab value="tab-10">Tenth tab</Tabs.Tab>
        </Scroller>
      </Tabs.List>
    </Tabs>
  );
}
```


## Accessibility

The Tabs component follows [WAI-ARIA recommendations](https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html) on accessibility.

If you use `Tabs.Tab` without text content, for example, only with an icon, then set `aria-label`
or use the [VisuallyHidden](https://mantine.dev/llms/core-visually-hidden.md) component:

```tsx
import { CoinIcon } from '@phosphor-icons/react';
import { Tabs, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        {/* aria-label is not required, tab is labelled by children */}
        <Tabs.Tab value="chat">Chat</Tabs.Tab>

        {/* aria-label is required, tab is not labelled by children */}
        <Tabs.Tab
          value="money"
          aria-label="Get money"
          leftSection={<CoinIcon size={14} />}
        />

        {/* You can use VisuallyHidden instead of aria-label */}
        <Tabs.Tab value="money" leftSection={<CoinIcon size={14} />}>
          <VisuallyHidden>Get money</VisuallyHidden>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

To set the tabs list label, set `aria-label` on the `Tabs.List` component; it will be announced by screen reader:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="recent">
      {/* Tabs.List aria-label will be announced when tab is focused for the first time */}
      <Tabs.List aria-label="Chats">
        <Tabs.Tab value="recent">Most recent</Tabs.Tab>
        <Tabs.Tab value="recent">Unanswered</Tabs.Tab>
        <Tabs.Tab value="archived">Archived</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Keyboard interactions


#### Props

**Tabs props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activateTabWithKeyboard | boolean | - | If set, tab is activated with arrow key press |
| allowTabDeactivation | boolean | - | If set, tab can be deactivated |
| autoContrast | boolean | - | If set, adjusts text color based on background color for `pills` variant |
| children | React.ReactNode | - | Tabs content |
| color | MantineColor | - | Changes colors of `Tabs.Tab` components when variant is `pills` or `default`, does nothing for other variants |
| defaultValue | string \| null | - | Uncontrolled component default value |
| id | string | - | Base id, used to generate ids to connect labels with controls, generated randomly by default |
| inverted | boolean | - | Determines whether tabs should have inverted styles |
| keepMounted | boolean | - | If set to `false`, `Tabs.Panel` content will be unmounted when the associated tab is not active |
| keepMountedMode | "activity" \| "display-none" | - | Controls how inactive tabs content is hidden when `keepMounted` is `true`, `'activity'` – hidden with `Activity` component, `'display-none'` – hidden with `display: none` styles |
| loop | boolean | - | If set, arrow key presses loop though items (first to last and last to first) |
| onChange | (value: string \| null) => void | - | Called when value changes |
| orientation | "horizontal" \| "vertical" | - | Tabs orientation |
| placement | "left" \| "right" | - | `Tabs.List` placement relative to `Tabs.Panel`, applicable only when `orientation="vertical"` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| value | string \| null | - | Controlled component value |

**Tabs.Tab props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Tab label |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color, controls tab color based on `variant` |
| leftSection | React.ReactNode | - | Content displayed on the left side of the label |
| rightSection | React.ReactNode | - | Content displayed on the right side of the label |
| size | string \| number | - | Size passed from parent component, sets `data-size` if value is not number like |
| value | string | required | Value of associated panel |

**Tabs.List props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | `Tabs.Tab` components |
| grow | boolean | - | Determines whether tabs should take all available space |
| justify | JustifyContent | - | Tabs alignment |

**Tabs.Panel props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Panel content |
| keepMounted | boolean | - | If set, the content is kept mounted, even if `keepMounted` is set `false` in the parent `Tabs` component |
| value | string | required | Value of associated control |


#### Styles API

Tabs component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Tabs selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Tabs-root | Root element (`Tabs` component) |
| list | .mantine-Tabs-list | List of tabs (`Tabs.List` component) |
| panel | .mantine-Tabs-panel | Panel with tab content (`Tabs.Panel` component) |
| tab | .mantine-Tabs-tab | Tab button (`Tabs.Tab` component) |
| tabLabel | .mantine-Tabs-tabLabel | Label of `Tabs.Tab` |
| tabSection | .mantine-Tabs-tabSection | Left and right sections of `Tabs.Tab` |

**Tabs CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --tabs-radius | Controls `Tabs.Tab` `border-radius` |
