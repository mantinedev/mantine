# Rtl

# Right-to-left direction

All Mantine components support right-to-left direction out of the box.
You can preview how components work with RTL direction by clicking direction control
in the top right corner or pressing `Ctrl + Shift + L`.

## DirectionProvider

`DirectionProvider` component is used to set direction for all components inside it.
It is required to wrap your application with `DirectionProvider` if you are planning to
either use RTL direction or change direction dynamically.

`DirectionProvider` supports the following props:

```tsx
export interface DirectionProviderProps {
  /** Your application */
  children: React.ReactNode;

  /** Direction set as a default value, `ltr` by default */
  initialDirection?: 'rtl' | 'ltr';

  /** Determines whether direction should be updated on mount based on `dir` attribute set on root element (usually html element), `true` by default  */
  detectDirection?: boolean;
}
```

Setup `DirectionProvider` in your application:

```tsx
import { DirectionProvider, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <DirectionProvider>
      <MantineProvider>{/* Your app here */}</MantineProvider>
    </DirectionProvider>
  );
}
```

## dir attribute

It is required to set `dir` attribute on the root element of your application, usually it is `html` element.
`DirectionProvider` will use its value to set direction on mount if `detectDirection` prop is set to `true`.
Note that this guide does not cover setting `dir` attribute for different frameworks – follow your framework
documentation to learn how to do it.

```html
<!doctype html>
<!-- Set direction attribute on html element -->
<html dir="rtl">
  <head></head>
  <body></body>
</html>
```

## useDirection hook

`useDirection` returns an object with the following properties:

* `dir` – current direction
* `setDirection` – function to set direction
* `toggleDirection` – function to change direction to the opposite value

You can use it to create direction control in your application:

#### Example: directionControl

```tsx
import { ActionIcon, useDirection } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" radius="md" size="lg">
      {dir === 'rtl' ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}
```


## rtl mixin

If you have [postcss-preset-mantine](https://mantine.dev/styles/postcss-preset) installed then you can use `rtl` mixin in `.css` files:

#### Example: rtlMixin

```tsx
// Demo.module.css
.demo {
  text-align: center;
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  /* LTR styles */
  background-color: var(--mantine-color-blue-filled);

  @mixin rtl {
    /* RTL styles override LTR styles */
    background-color: var(--mantine-color-red-filled);
  }
}

// Demo.tsx
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
```

