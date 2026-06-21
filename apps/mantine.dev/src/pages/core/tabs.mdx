import { FloatingIndicatorDemos, TabsDemos } from '@docs/demos';
import { Layout } from '@/layout';
import { MDX_DATA } from '@/mdx';

export default Layout(MDX_DATA.Tabs);

## Usage

<Demo data={TabsDemos.usage} />

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

<Demo data={TabsDemos.colors} />

## Tabs position

<Demo data={TabsDemos.position} />

To display a tab on the opposite side, set `margin-left: auto` with the `ml="auto"` prop or with `className`:

<Demo data={TabsDemos.pull} />

## Inverted tabs

To make tabs inverted, place `Tabs.Panel` components before `Tabs.List` and add the `inverted` prop to the `Tabs` component:

<Demo data={TabsDemos.inverted} />

## Vertical tabs placement

To change the placement of `Tabs.List` in vertical orientation, set the `placement` prop:

<Demo data={TabsDemos.placement} />

## Custom variants

Example of custom variant with [FloatingIndicator](/core/floating-indicator):

<Demo data={FloatingIndicatorDemos.tabs} />

## Disabled tabs

Set the `disabled` prop on the `Tabs.Tab` component to disable a tab.
Disabled tabs cannot be activated with the mouse or keyboard, and they will be skipped when the user navigates with arrow keys:

<Demo data={TabsDemos.disabled} />

## Activation mode

By default, tabs are activated when the user presses arrow keys or Home/End keys.
To disable that, set `activateTabWithKeyboard={false}` on the `Tabs` component:

<Demo data={TabsDemos.keyboardActivation} />

## Tab deactivation

By default, the active tab cannot be deactivated. To allow that, set `allowTabDeactivation` on the `Tabs` component:

<Demo data={TabsDemos.deactivate} />

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

## Tab as a link

You can render `Tabs.Tab` as an `a` element by using the `renderRoot` prop. This gives you
native link behavior: right-click to open in a new tab, middle-click, and `href` for
crawlers and accessibility.

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="home">
      <Tabs.List>
        <Tabs.Tab
          value="home"
          renderRoot={(props) => <a href="/home" {...props} />}
        >
          Home
        </Tabs.Tab>
        <Tabs.Tab
          value="about"
          renderRoot={(props) => <a href="/about" {...props} />}
        >
          About
        </Tabs.Tab>
        <Tabs.Tab
          value="contacts"
          renderRoot={(props) => <a href="/contacts" {...props} />}
        >
          Contacts
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

You can also use the `component` prop to render tabs as links:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="home">
      <Tabs.List>
        <Tabs.Tab value="home" component="a" href="/home">
          Home
        </Tabs.Tab>
        <Tabs.Tab value="about" component="a" href="/about">
          About
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Tab as a link with Next.js

Use the `renderRoot` prop to render `Tabs.Tab` as a Next.js `Link` component. The `renderRoot` prop
is required instead of `component` because Next.js `Link` is a generic component:

```tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs } from '@mantine/core';

function Demo() {
  const pathname = usePathname();

  return (
    <Tabs value={pathname}>
      <Tabs.List>
        <Tabs.Tab
          value="/home"
          renderRoot={(props) => <Link href="/home" {...props} />}
        >
          Home
        </Tabs.Tab>
        <Tabs.Tab
          value="/about"
          renderRoot={(props) => <Link href="/about" {...props} />}
        >
          About
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Tab as a link with React Router

Use the `renderRoot` prop to render `Tabs.Tab` as a React Router `NavLink` or `Link` component:

```tsx
import {
  Link,
  Route,
  useLocation,
} from 'react-router-dom';
import { Tabs } from '@mantine/core';

// Route: <Route path="/tabs/:tabValue" element={<Demo />} />

function Demo() {
  const location = useLocation();

  return (
    <Tabs value={location.pathname}>
      <Tabs.List>
        <Tabs.Tab
          value="/tabs/first"
          renderRoot={(props) => (
            <Link to="/tabs/first" {...props} />
          )}
        >
          First tab
        </Tabs.Tab>
        <Tabs.Tab
          value="/tabs/second"
          renderRoot={(props) => (
            <Link to="/tabs/second" {...props} />
          )}
        >
          Second tab
        </Tabs.Tab>
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

## Usage with Next.js Pages Router

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

## Usage with Next.js App Router

In the App Router, get the current tab value from the pathname with the `usePathname`
hook and change tabs with the router returned by `useRouter`. Both hooks are imported
from `next/navigation`. Note that components that use these hooks must be
[Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
(add the `'use client'` directive at the top of the file).

```tsx
// For file /tabs/[activeTab]/page.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Tabs } from '@mantine/core';

function Demo() {
  const router = useRouter();
  const pathname = usePathname();
  const activeTab = pathname.split('/').pop();

  return (
    <Tabs
      value={activeTab}
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

<StylesApiSelectors component="Tabs" />

<Demo data={TabsDemos.stylesApi} />

Example of Styles API usage to customize tab styles:

<Demo data={TabsDemos.customize} />

## Example with Scroller component

Use [Scroller](/core/scroller) component to make the tabs list scrollable when there are too many tabs to fit in the available space:

<Demo data={TabsDemos.scroller} />

## Accessibility

The Tabs component follows [WAI-ARIA recommendations](https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html) on accessibility.

### Tabs as links

When `Tabs.Tab` is rendered as a link (`<a>` tag), the `role="tab"` attribute overrides
the implicit link role. Screen readers will announce the element as a "tab", not a "link".
This is the expected behavior per the WAI-ARIA specification.

When using tabs as navigation links without `Tabs.Panel` components, the `aria-controls` attribute
on each tab references a panel element that does not exist in the DOM. This is a minor
accessibility consideration – most screen readers handle this gracefully.

If you use `Tabs.Tab` without text content, for example, only with an icon, then set `aria-label`
or use the [VisuallyHidden](/core/visually-hidden) component:

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

<KeyboardEventsTable
  data={[
    {
      key: 'ArrowRight',
      description:
        'Focuses and activates next tab that is not disabled',
      condition: 'orientation="horizontal"',
    },
    {
      key: 'ArrowLeft',
      description:
        'Focuses and activates previous tab that is not disabled',
      condition: 'orientation="horizontal"',
    },
    {
      key: 'ArrowDown',
      description:
        'Focuses and activates next tab that is not disabled',
      condition: 'orientation="vertical"',
    },
    {
      key: 'ArrowUp',
      description:
        'Focuses and activates previous tab that is not disabled',
      condition: 'orientation="vertical"',
    },
    { key: 'Home', description: 'Focuses and activates first tab' },
    { key: 'End', description: 'Focuses and activates last tab' },
  ]}
/>
