# Notification
Package: @mantine/core
Import: import { Notification } from '@mantine/core';
Description: Show dynamic notifications and alerts to user, part of notifications system

## Usage

Notification is a base component for the notification system.
Build your own or use the [@mantine/notifications](https://mantine.dev/llms/x-notifications.md) package.

```tsx
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification loading={false} withCloseButton={true} withBorder={false} color="blue" radius="md" title="We notify you that" children="You are now obligated to give a star to Mantine project on GitHub">
      {{children}}
    </Notification>
  );
}
```


## Accessibility

To support screen readers, set the close button's aria-label or title with `closeButtonProps`:

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

**Notification props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Notification description, displayed below the title. When no title is provided, this serves as the main message. |
| closeButtonProps | ElementProps<"button"> & DataAttributes | - | Props passed down to the close button |
| color | MantineColor | - | Controls icon background color or notification accent line color, key of `theme.colors` or any valid CSS color. When `icon` is provided, sets the icon background color. When no icon is provided, sets the colored accent line on the left. |
| icon | React.ReactNode | - | Notification icon, replaces color line |
| loaderProps | LoaderProps | - | Props passed down to the `Loader` component |
| loading | boolean | - | If set, displays a `Loader` component instead of the icon. Takes precedence over the `icon` prop if both are provided. |
| onClose | () => void | - | Called when the close button is clicked |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| title | React.ReactNode | - | Notification title, displayed above the message body |
| withBorder | boolean | - | Adds border to the root element |
| withCloseButton | boolean | - | If set, the close button is visible |

**Notification.s props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoClose | number \| false | - | Auto close timeout for all notifications in ms, `false` to disable auto close, can be overwritten for individual notifications in `notifications.show` function |
| containerWidth | string \| number | - | Notification width, cannot exceed 100% |
| limit | number | - | Maximum number of notifications displayed at a time, other new notifications will be added to queue |
| notificationMaxHeight | string \| number | - | Notification `max-height`, used for transitions |
| pauseResetOnHover | "all" \| "notification" | - | Determines which notifications should pause auto close on hover, `'all'` – pauses auto close for all notifications when any notification is hovered, `'notification'` – pauses auto close only for the hovered notification |
| portalProps | BasePortalProps | - | Props passed down to the `Portal` component |
| position | NotificationPosition | - | Notifications default position |
| store | NotificationsStore | - | Store for notifications state, can be used to create multiple instances of notifications system in your application |
| transitionDuration | number | - | Notification transition duration in ms |
| withinPortal | boolean | - | Determines whether notifications container should be rendered inside `Portal` |
| zIndex | string \| number | - | Notifications container z-index |


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
| root | data-with-icon | `icon` prop is set | - |
| root | data-with-border | `withBorder` prop is set | - |
| description | data-with-title | `title` prop is set | - |

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
