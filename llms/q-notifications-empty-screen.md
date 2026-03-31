# Why is my screen completely empty after I
You have used Notifications component incorrectly

## Notifications component

A common error when using the [@mantine/notifications](https://mantine.dev/x/notifications/) package
is to wrap your application with the `Notifications` component:

```tsx
// ❌ This is incorrect
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

function Demo() {
  return (
    <MantineProvider>
      <Notifications>
        <App />
      </Notifications>
    </MantineProvider>
  );
}
```

## How to fix

The `Notifications` component does not support the `children` prop. If you put your application
inside it, it will not be rendered. Instead, you should render the `Notifications` component
as a sibling to your application:

```tsx
// ✅ This is correct
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

function Demo() {
  return (
    <MantineProvider>
      <Notifications />
      <App />
    </MantineProvider>
  );
}
```
