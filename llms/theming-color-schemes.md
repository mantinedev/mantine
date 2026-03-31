# ColorSchemes

# Color schemes

[MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) manages the color scheme context in your application.
You can configure the default color scheme value with the `defaultColorScheme` prop; possible values are `light`,
`dark`, and `auto` (system color scheme is used). The default value is `light`.

```tsx
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider defaultColorScheme="dark">
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## data-mantine-color-scheme attribute

When [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) is mounted, it sets a `data-mantine-color-scheme`
attribute on the `<html />` element to the value that the user has previously selected or to the value of the `defaultColorScheme` prop.
The `data-mantine-color-scheme` attribute is used in all component styles to determine which colors each component should use.

## use-mantine-color-scheme hook

The `useMantineColorScheme` hook can be used to get and set the current color scheme value:

```tsx
function useMantineColorScheme(): {
  /** Current color scheme value */
  colorScheme: 'dark' | 'light' | 'auto';

  /** Sets colors scheme to given value */
  setColorScheme: (colorScheme: 'dark' | 'light' | 'auto') => void;

  /** Toggles color scheme to the opposite value; if value is 'auto', color scheme is inferred from the OS settings */
  toggleColorScheme: () => void;

  /** Clears the color scheme value from storage and sets it to `defaultColorScheme` */
  clearColorScheme: () => void;
};
```

```tsx
import { useMantineColorScheme, Button, Group } from '@mantine/core';

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}
```


## use-computed-color-scheme hook

`useComputedColorScheme` returns a computed color scheme value—it returns either `light` or `dark`.
It can be used to implement color scheme toggle logic:

```tsx
import {
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';

function Demo() {
  // -> colorScheme is 'auto' | 'light' | 'dark'
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  // -> computedColorScheme is 'light' | 'dark', argument is the default value
  const computedColorScheme = useComputedColorScheme('light');

  // Incorrect color scheme toggle implementation
  // If colorScheme is 'auto', then it is not possible to
  // change color scheme correctly in all cases:
  // 'auto' can mean both light and dark
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  // Correct color scheme toggle implementation
  // computedColorScheme is always either 'light' or 'dark'
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };
}
```

## Transitions during color scheme change

By default, transitions on all elements are disabled when the color scheme changes to avoid
inconsistent animations. To enable transitions during color scheme changes, set the `keepTransitions: true`
option on the `useMantineColorScheme` hook:

```tsx
import { useMantineColorScheme } from '@mantine/core';

function Demo() {
  const { colorScheme, setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
}
```

## Color scheme value caveats

By default, the color scheme value is stored in local storage, and its value is saved in state
before the component is mounted to avoid a flash of inaccurate color scheme. This means that the
color scheme value can be different on the client and server, as the server does not have access
to local storage and always uses the default value.

If you have server-side rendering in your application (for example, if you use [Next.js](https://mantine.dev/llms/guides-next.md) or [React Router](https://mantine.dev/llms/guides-react-router.md)), then you cannot use the `colorScheme`
value in your application to avoid hydration issues. Instead, you can use the `dark` and `light`
mixins from [postcss-preset-mantine](https://mantine.dev/llms/styles-postcss-preset.md) to generate styles that will
hide elements based on the color scheme value:

```tsx
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@phosphor-icons/react';
import cx from 'clsx';
import classes from './Demo.module.css';

function Demo() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <SunIcon className={cx(classes.icon, classes.light)} />
      <MoonIcon className={cx(classes.icon, classes.dark)} />
    </ActionIcon>
  );
}
```


> **colorScheme for client-only applications**
>
> You can safely use the `colorScheme` value in client-only applications (for example, Vite or create-react-app applications).
> In this case, there is no hydration, and thus no hydration error can occur.

## ColorSchemeScript

The `ColorSchemeScript` component renders a script tag that sets the `data-mantine-color-scheme` attribute
on the `<html />` element to the user's selected value or to the `defaultColorScheme` prop value before
hydration. It is used to avoid a flash of inaccurate color scheme in server-side rendered applications,
for example [Next.js](https://mantine.dev/llms/guides-next.md) or [React Router](https://mantine.dev/llms/guides-react-router.md). Follow the framework-specific guides
to learn where to render the `ColorSchemeScript` component.

You can add any additional props to the `<script />` tag generated by the `ColorSchemeScript` component,
for example, you can add a [nonce](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce) attribute:

```tsx
import { ColorSchemeScript } from '@mantine/core';

function Demo() {
  return (
    <ColorSchemeScript
      nonce="8IBTHwOdqNKAWeKl7plt8g=="
      defaultColorScheme="dark"
    />
  );
}
```

## Auto color scheme

Set `defaultColorScheme="auto"` on `MantineProvider` and `ColorSchemeScript` to use the system color scheme.
In this case, the color scheme value will be controlled by the user's OS:

```tsx
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">
        {/* Your app here */}
      </MantineProvider>
    </>
  );
}
```

## Color scheme manager

By default, the color scheme value is stored in local storage, but you can implement your own
color scheme manager to store the value in any other external storage.

A color scheme manager must have the following methods:

```tsx
interface MantineColorSchemeManager {
  /** Function to retrieve color scheme value from external storage, for example window.localStorage */
  get: (defaultValue: MantineColorScheme) => MantineColorScheme;

  /** Function to set color scheme value in external storage, for example window.localStorage */
  set: (value: MantineColorScheme) => void;

  /** Function to subscribe to color scheme changes triggered by external events */
  subscribe: (
    onUpdate: (colorScheme: MantineColorScheme) => void
  ) => void;

  /** Function to unsubscribe from color scheme changes triggered by external events */
  unsubscribe: () => void;

  /** Function to clear value from external storage */
  clear: () => void;
}
```

Usually, it's better to wrap the color scheme manager in a creator function to provide a way to
configure it. Default local storage-based color scheme manager example:

```tsx
import {
  isMantineColorScheme,
  MantineColorScheme,
  MantineColorSchemeManager,
} from '@mantine/core';

export interface LocalStorageColorSchemeManagerOptions {
  /** Local storage key used to retrieve value with `localStorage.getItem(key)`, `mantine-color-scheme` by default */
  key?: string;
}

export function localStorageColorSchemeManager({
  key = 'mantine-color-scheme',
}: LocalStorageColorSchemeManagerOptions = {}): MantineColorSchemeManager {
  let handleStorageEvent: (event: StorageEvent) => void;

  return {
    get: (defaultValue) => {
      if (typeof window === 'undefined') {
        return defaultValue;
      }

      try {
        return (
          (window.localStorage.getItem(key) as MantineColorScheme) ||
          defaultValue
        );
      } catch {
        return defaultValue;
      }
    },

    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(
          '[@mantine/core] Local storage color scheme manager was unable to save color scheme.',
          error
        );
      }
    },

    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (
          event.storageArea === window.localStorage &&
          event.key === key
        ) {
          isMantineColorScheme(event.newValue) &&
            onUpdate(event.newValue);
        }
      };

      window.addEventListener('storage', handleStorageEvent);
    },

    unsubscribe: () => {
      window.removeEventListener('storage', handleStorageEvent);
    },

    clear: () => {
      window.localStorage.removeItem(key);
    },
  };
}
```

Then the custom color scheme manager can be passed to [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md):

```tsx
import { MantineProvider } from '@mantine/core';
import { localStorageColorSchemeManager } from './localStorageColorSchemeManager';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-color-scheme',
});

function Demo() {
  return (
    <MantineProvider colorSchemeManager={colorSchemeManager}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Default color scheme

The default color scheme value is used when the user has not selected any color scheme yet.
It is required to be set both on [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) and
`ColorSchemeScript`. If `defaultColorScheme` is not set, then `light` is used.

```tsx
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="dark" />
      <MantineProvider defaultColorScheme="dark">
        {/* Your app here */}
      </MantineProvider>
    </>
  );
}
```

## Force color scheme

You can force the color scheme value to be either `light` or `dark` with `forceColorScheme` prop.
It is required to be set both on [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) and
`ColorSchemeScript`. If `forceColorScheme` is set, then `defaultColorScheme` and `colorSchemeManager` are ignored.
When `forceColorScheme` is set, it's not possible to change the color scheme value with the `setColorScheme` function.

```tsx
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorSchemeScript forceColorScheme="light" />
      <MantineProvider forceColorScheme="light">
        {/* Your app here */}
      </MantineProvider>
    </>
  );
}
```

## lightHidden and darkHidden props

All Mantine components support `lightHidden` and `darkHidden` props that can be used to hide
a component in a specific color scheme:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Button color="cyan" lightHidden>
        Visible in dark color scheme only
      </Button>

      <Button color="pink" darkHidden>
        Visible in light color scheme only
      </Button>
    </>
  );
}
```


## With disabled JavaScript

If you need to support users with disabled JavaScript, you need to set the `data-mantine-color-scheme`
attribute on the `<html />` element manually.

Example with Next.js app router that supports disabled JavaScript:

```tsx
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
```
