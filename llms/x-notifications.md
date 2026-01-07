# Notifications system
Package: @mantine/notifications
Import: import { Notifications system } from '@mantine/notifications';
Description: Mantine notifications system

## Installation

```bash
yarn add @mantine/notifications
```

```bash
npm install @mantine/notifications
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import notifications styles after core package styles
import '@mantine/notifications/styles.css';
```

Add `Notifications` component anywhere in your application. Note that:

* It is required to render `Notifications` component inside [MantineProvider](https://mantine.dev/theming/mantine-provider/)
* You do not need to wrap your application with `Notifications` component – it is not a provider, it is a regular component
* You should not render multiple `Notifications` components – if you do that, your notifications will be duplicated

```tsx
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

function Demo() {
  return (
    <MantineProvider>
      <Notifications />
      {/* Your app here */}
    </MantineProvider>
  );
}
```

All set! You can now use all notifications system features.

#### Example: base

```tsx
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Do not forget to star Mantine on GitHub! 🌟',
        })
      }
    >
      Show notification
    </Button>
  );
}
```


## Do not forget to import styles

Followed installation instructions above but something is not working
(`position` prop not working, notifications are stuck at the bottom)?
You've fallen into the trap of not importing notifications styles!
To fix the issue, import notifications styles at the root of your application:

```tsx
import '@mantine/notifications/styles.css';
```

## Functions

`@mantine/notifications` package exports `notifications` object with the following functions:

* `notifications.show` – adds given notification to the notifications list or queue, depending on the current state and `limit`
* `notifications.hide` – removes notification with given `id` from the notifications state and queue
* `notifications.update` – updates notification that was previously added to the state or queue
* `notifications.updateState` – executes given callback with current notifications state and queue as an argument and updates state with returned value
* `notifications.clean` – removes all notifications from the notifications state and queue
* `notifications.cleanQueue` – removes all notifications from the queue

All functions can be imported from `@mantine/notifications` package and can be used in any part of your application:

```tsx
import { notifications } from '@mantine/notifications';
```

You can also import these functions separately:

```tsx
// alias functions
import {
  cleanNotifications, // notifications.clean
  cleanNotificationsQueue, // notifications.cleanQueue
  hideNotification, // notifications.hide
  showNotification, // notifications.show
  updateNotification, // notifications.update
  updateNotificationsState, // notifications.updateState
} from '@mantine/notifications';
```

## Notification props

`notifications.show` and `notification.update` functions can be called with an object that has the following properties:

* `id` – notification id, it is used to update and remove notifications, by default `id` is randomly generated
* `position` – notification position, by default the value from the `position` prop of the `Notifications` component is used
* `withBorder` – determines whether notification should have a border
* `withCloseButton` – determines whether the close button should be visible
* `onClose` – calls when notification is unmounted
* `onOpen` – calls when notification is mounted
* `autoClose` – defines timeout in ms on which notification will be automatically closed, use `false` to disable auto close
* `message` – required notification body
* `color, icon, title, radius, className, style, loading` – props passed down to the [Notification](https://mantine.dev/core/notification/) component

All properties except `message` are optional.

```tsx
import { IconX } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

// Bare minimum – message is required for all notifications
notifications.show({ message: 'Hello' });

// Most used notification props
notifications.show({
  id: 'hello-there',
  position: 'bottom-center',
  withCloseButton: true,
  onClose: () => console.log('unmounted'),
  onOpen: () => console.log('mounted'),
  autoClose: 5000,
  title: "You've been compromised",
  message: 'Leave the building immediately',
  color: 'red',
  icon: <IconX />,
  className: 'my-notification-class',
  style: { backgroundColor: 'red' },
  loading: false,
});
```

Notifications preview (`message` prop used as `children`):

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


## Customize notification styles

You can use `style`, `className` or [Styles API](https://mantine.dev/styles/styles-api/) `classNames`, `styles` props to customize notification styles.
Usually, it is better to override [Notification](https://mantine.dev/core/notification) styles with `classNames` prop in the [theme object](https://mantine.dev/theming/theme-object/).

#### Example: customize

```tsx
// Demo.tsx
import { Button, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Notification with custom styles',
            message: 'It is default blue',
            classNames: classes,
          })
        }
      >
        Default notification
      </Button>

      <Button
        color="red"
        onClick={() =>
          notifications.show({
            color: 'red',
            title: 'Notification with custom styles',
            message: 'It is red',
            classNames: classes,
          })
        }
      >
        Error notification
      </Button>
    </Group>
  );
}

// Demo.module.css
.root {
  background-color: var(--notification-color, var(--mantine-primary-color-filled));

  &::before {
    background-color: var(--mantine-color-white);
  }
}

.description,
.title {
  color: var(--mantine-color-white);
}

.closeButton {
  color: var(--mantine-color-white);

  @mixin hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
```


## Notifications container position

You can define notification position in `notifications.show` function. Possible `position` values:

* `top-left`
* `top-right`
* `top-center`
* `bottom-left`
* `bottom-right`
* `bottom-center`

#### Example: position

```tsx
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const positions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-center',
  'bottom-center',
] as const;

function Demo() {
  const buttons = positions.map((position) => (
    <Button
      key={position}
      onClick={() =>
        notifications.show({
          title: `Notification at ${position}`,
          message: `Notification at ${position} message`,
          position,
        })
      }
    >
      {position}
    </Button>
  ));

  return <Group>{buttons}</Group>;
}
```


The `position` can be defined on the `Notifications` component.
In the following example, notifications will be displayed in the top right corner of the screen
if `position` is not defined in `notifications.show` function:

```tsx
import { Notifications } from '@mantine/notifications';

function Demo() {
  return <Notifications position="top-right" zIndex={1000} />;
}
```

## Limit and queue

You can limit maximum number of notifications that are displayed at a time by setting
`limit` prop on `Notifications`:

```tsx
import { Notifications } from '@mantine/notifications';

function Demo() {
  return <Notifications limit={5} />;
}
```

All notifications added after the `limit` was reached are added to the queue
and displayed when notification from current state is hidden.

#### Example: limit

```tsx
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      onClick={() => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: `Notification ${index + 1}`,
              message: 'Most notifications are added to queue',
            });
          }, 200 * index);
        });
      }}
    >
      Show 10 notifications
    </Button>
  );
}
```


## Remove notifications from state and queue

To remove specific notification from state or queue use `notifications.hide` function:

```tsx
import { notifications } from '@mantine/notifications';

const id = notifications.show({ message: 'Hello!' });
notifications.hide(id);
```

Use `notifications.cleanQueue` function to remove all notifications from the queue and
`notifications.clean` to remove all notifications both from the state and queue:

#### Example: clean

```tsx
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: `Notification ${index + 1}`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="default" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}
```


## Update notification

#### Example: update

```tsx
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Button
      onClick={() => {
        const id = notifications.show({
          loading: true,
          title: 'Loading your data',
          message: 'Data will be loaded in 3 seconds, you cannot close this yet',
          autoClose: false,
          withCloseButton: false,
        });

        setTimeout(() => {
          notifications.update({
            id,
            color: 'teal',
            title: 'Data was loaded',
            message: 'Notification will close in 2 seconds, you can close this notification now',
            icon: <IconCheck size={18} />,
            loading: false,
            autoClose: 2000,
          });
        }, 3000);
      }}
    >
      Show update notification
    </Button>
  );
}
```


## Auto close

You can configure auto close timeout with `Notifications`:

```tsx
import { Notifications } from '@mantine/notifications';

// All notifications will be closed automatically in 4000ms
function Demo() {
  return <Notifications autoClose={4000} />;
}
```

Or per notification in `notifications.show`/`notifications.update` functions:

```tsx
import { notifications } from '@mantine/notifications';

notifications.show({
  message: 'I will close in 500ms seconds',
  autoClose: 500,
});

notifications.update({
  id: 'hello',
  message: 'I will never close',
  autoClose: false,
});
```

`notifications.show` and `notifications.update` functions `autoClose` prop has higher priority.

#### Example: autoclose

```tsx
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}
```


## Subscribe to notifications state

You can subscribe to notifications state changes with `useNotifications` hook.
The hook returns an object with `notifications` and `queue` arrays. `notifications`
array contains all notifications that are currently displayed, `queue` contains
notifications that are waiting to be displayed.

#### Example: store

```tsx
function Demo() {
  const [counter, { increment }] = useCounter();
  const notificationsStore = useNotifications();

  const showNotification = () => {
    notifications.show({
      title: `Notification ${counter}`,
      message: 'Most notifications are added to queue',
    });

    increment();
  };

  return (
    <>
      <Button onClick={showNotification} mb="md">
        Show notification
      </Button>

      <Text>Notifications state</Text>
      <Code block>{JSON.stringify(notificationsStore.notifications, null, 2)}</Code>

      <Text mt="md">Notifications queue</Text>
      <Code block>{JSON.stringify(notificationsStore.queue, null, 2)}</Code>
    </>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoClose | number | false | - | Auto close timeout for all notifications in ms, <code>false</code> to disable auto close, can be overwritten for individual notifications in <code>notifications.show</code> function |
| containerWidth | string | number | - | Notification width, cannot exceed 100% |
| limit | number | - | Maximum number of notifications displayed at a time, other new notifications will be added to queue |
| notificationMaxHeight | string | number | - | Notification <code>max-height</code>, used for transitions |
| portalProps | BasePortalProps | - | Props passed down to the <code>Portal</code> component |
| position | NotificationPosition | - | Notifications default position |
| store | NotificationsStore | - | Store for notifications state, can be used to create multiple instances of notifications system in your application |
| transitionDuration | number | - | Notification transition duration in ms |
| withinPortal | boolean | - | Determines whether notifications container should be rendered inside <code>Portal</code> |
| zIndex | string | number | - | Notifications container z-index |


#### Styles API

Notifications component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

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