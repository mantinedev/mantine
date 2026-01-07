# Tabs
Package: @mantine/core
Import: import { Tabs } from '@mantine/core';
Description: Switch between different views

## Usage

#### Example: usage

```tsx
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />}>
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

To control Tabs state, use `value` and `onChange` props:

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

To change colors of all tabs, set `color` on `Tabs` component, to change color of the individual tab,
set `color` on `Tabs.Tab`.

#### Example: colors

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

#### Example: position

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```


To display tab on the opposite side, set `margin-left: auto` with `ml="auto"` prop or with `className`:

#### Example: pull

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

To make tabs inverted, place `Tabs.Panel` components before `Tabs.List` and add `inverted` prop to `Tabs` component:

#### Example: inverted

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

To change placement of `Tabs.List` in vertical orientation set `placement` prop:

#### Example: placement

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery" orientation="vertical">
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

Example of custom variant with [FloatingIndicator](https://mantine.dev/core/floating-indicator):

#### Example: tabs

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
  font-weight: 500;
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

Set `disabled` prop on `Tabs.Tab` component to disable tab.
Disabled tab cannot be activated with mouse or keyboard, and they will be skipped when user navigates with arrow keys:

#### Example: disabled

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

By default, tabs are activated when user presses arrows keys or Home/End keys.
To disable that set `activateTabWithKeyboard={false}` on `Tabs` component:

#### Example: keyboardActivation

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

By default, active tab cannot be deactivated. To allow that set `allowTabDeactivation` on `Tabs` component:

#### Example: deactivate

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

By default, inactive `Tabs.Panel` will stay mounted, to unmount inactive tabs, set `keepMounted={false}` on Tabs.
This is useful when you want to render components that impact performance inside `Tabs.Panel`. Note that
components that are rendered inside `Tabs.Panel` will reset their state on each mount (tab change).

```tsx
import { Tabs } from '@mantine/core';

// Second tab panel will be mounted only when user activates second tab
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

## Usage with Next.js router

```tsx
// For file /tabs/[activeTab].tsx
import { useRouter } from 'next/router';
import { Tabs } from '@mantine/core';

function Demo() {
  const router = useRouter();

  return (
    <Tabs
      value={router.query.activeTab as string}
      onChange={(value) => router.push(`/tabs/${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

#### Example: stylesApi

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" rightSection={<IconSettings size={12} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
```


Example of Styles API usage to customize tab styles:

#### Example: customize

```tsx
// Demo.module.css
.tab {
  position: relative;
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));

  &:first-of-type {
    border-radius: 4px 0 0 4px;

    @mixin rtl {
      border-radius: 0 4px 4px 0;
    }
  }

  &:last-of-type {
    border-radius: 0 4px 4px 0;

    @mixin rtl {
      border-radius: 4px 0 0 4px;
    }
  }

  & + & {
    border-left-width: 0;

    @mixin rtl {
      border-right-width: 0;
      border-left-width: 1px;
    }
  }

  @mixin hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5));
  }

  &[data-active] {
    z-index: 1;
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);

    @mixin hover {
      background-color: var(--mantine-color-blue-filled-hover);
    }
  }
}

// Demo.tsx
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="settings"
          leftSection={<IconSettings size={16} />}
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle size={16} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          leftSection={<IconPhoto size={16} />}
        >
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```


## Accessibility

Tabs component follows [WAI-ARIA recommendations](https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html) on accessibility.

If you use `Tabs.Tab` without text content, for example, only with icon, then set `aria-label`
or use [VisuallyHidden](https://mantine.dev/core/visually-hidden) component:

```tsx
import { IconCoin } from '@tabler/icons-react';
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
          leftSection={<IconCoin size={14} />}
        />

        {/* You can use VisuallyHidden instead of aria-label */}
        <Tabs.Tab value="money" leftSection={<IconCoin size={14} />}>
          <VisuallyHidden>Get money</VisuallyHidden>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

To set tabs list label, set `aria-label` on `Tabs.List` component, it will be announced by screen reader:

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activateTabWithKeyboard | boolean | - | If set, tab is activated with arrow key press |
| allowTabDeactivation | boolean | - | If set, tab can be deactivated |
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>pills</code> variant |
| children | React.ReactNode | - | Tabs content |
| color | MantineColor | - | Changes colors of <code>Tabs.Tab</code> components when variant is <code>pills</code> or <code>default</code>, does nothing for other variants |
| defaultValue | string | null | - | Uncontrolled component default value |
| id | string | - | Base id, used to generate ids to connect labels with controls, generated randomly by default |
| inverted | boolean | - | Determines whether tabs should have inverted styles |
| keepMounted | boolean | - | If set to <code>false</code>, <code>Tabs.Panel</code> content will be unmounted when the associated tab is not active |
| loop | boolean | - | If set, arrow key presses loop though items (first to last and last to first) |
| onChange | (value: string | null) => void | - | Called when value changes |
| orientation | "horizontal" | "vertical" | - | Tabs orientation |
| placement | "left" | "right" | - | <code>Tabs.List</code> placement relative to <code>Tabs.Panel</code>, applicable only when <code>orientation="vertical"</code> |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>@default <code>theme.defaultRadius</code> |
| value | string | null | - | Controlled component value |


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