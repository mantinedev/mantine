# Notification
Package: @mantine/core
Import: import { Notification } from '@mantine/core';
Description: Show dynamic notifications and alerts to user, part of notifications system

## Usage

Notification is a base component for notification system.
Build your own or use [@mantine/notifications](https://mantine.dev/x/notifications/) package.

#### Example: configurator

```tsx
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification>
      {{children}}
    </Notification>
  );
}
```


## With icon

#### Example: icon

```tsx
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification } from '@mantine/core';

function Demo() {
  const xIcon = <IconX size={20} />;
  const checkIcon = <IconCheck size={20} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}
```


#### Example: stylesApi

```tsx
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
```


## Accessibility

To support screen readers, set close button aria-label or title with `closeButtonProps`:

```tsx
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification
      closeButtonProps={{ 'aria-label': 'Hide notification' }}
    />
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Main notification message |
| closeButtonProps | Record<string, any> | - | Props passed down to the close button |
| color | MantineColor | - | Controls notification line or icon color, key of <code>theme.colors</code> or any valid CSS color |
| icon | React.ReactNode | - | Notification icon, replaces color line |
| loaderProps | LoaderProps | - | Props passed down to the <code>Loader</code> component |
| loading | boolean | - | If set, the <code>Loader</code> component is displayed instead of the icon |
| onClose | () => void | - | Called when the close button is clicked |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| title | React.ReactNode | - | Notification title, displayed above the message body |
| withBorder | boolean | - | Adds border to the root element |
| withCloseButton | boolean | - | If set, the close button is visible |


#### Styles API

Notification component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Notification selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Notification-root | Root element |
| loader | .mantine-Notification-loader | Loader component, displayed only when `loading` prop is set |
| icon | .mantine-Notification-icon | Icon component, displayed only when `icon` prop is set |
| body | .mantine-Notification-body | Notification body, contains all other elements |
| title | .mantine-Notification-title | Title element, displayed only when `title` prop is set |
| description | .mantine-Notification-description | Description displayed below the title |
| closeButton | .mantine-Notification-closeButton | Close button element |

**Notification CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --notification-radius | Controls `border-radius` |
| root | --notification-color | Controls icon color or notification line color |

**Notification data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-icon | - | - |
| root | data-with-border | - | - |
| description | data-with-title | - | - |

**Notifications selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Notifications-root | Notifications container, contains all notifications |
| notification | .mantine-Notifications-notification | Single notification |

**Notifications CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --notifications-container-width | Controls notifications container `max-width` |
| root | --notifications-z-index | Controls notifications container `z-index` |