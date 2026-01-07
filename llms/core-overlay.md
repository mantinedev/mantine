# Overlay
Package: @mantine/core
Import: import { Overlay } from '@mantine/core';
Description: Overlays parent element with div element with any color and opacity

## Usage

`Overlay` takes 100% of width and height of parent container or viewport if `fixed` prop is set.
Set `color` and `backgroundOpacity` props to change `Overlay` background-color. Note that `backgroundOpacity` prop
does not change CSS opacity property, it changes background-color. For example, if you set
`color="#000"` and `backgroundOpacity={0.85}` background-color will be `rgba(0, 0, 0, 0.85)`:

#### Example: usage

```tsx
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
          alt="Demo"
        />
        {visible && <Overlay color="#000" backgroundOpacity={0.85} />}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
```


## Gradient

Set `gradient` prop to use background-image instead of background-color. When `gradient` prop is set,
`color` and `backgroundOpacity` props are ignored.

#### Example: gradient

```tsx
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          alt="Demo"
        />
        {visible && (
          <Overlay
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
          />
        )}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
```


## Blur

Set `blur` prop to add `backdrop-filter: blur({value})` styles.
Note that `backdrop-filter` [is not supported in all browsers](https://caniuse.com/css-backdrop-filter).

#### Example: blur

```tsx
import { Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35} />
    </AspectRatio>
  );
}
```


<Polymorphic defaultElement="div" changeToElement="a" component="Overlay" withNext />

## Polymorphic component

Overlay is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { Overlay } from '@mantine/core';

function Demo() {
  return <Overlay component="a" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Overlay } from '@mantine/core';

function Demo() {
  return <Overlay component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, OverlayProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| backgroundOpacity | number | - | Overlay <code>background-color</code> opacity 0–1, ignored when <code>gradient</code> prop is set |
| blur | string | number | - | Overlay background blur |
| center | boolean | - | Centers content inside the overlay |
| children | React.ReactNode | - | Content inside overlay |
| color | BackgroundColor | - | Overlay <code>background-color</code> |
| fixed | boolean | - | Changes position to <code>fixed</code> |
| gradient | string | - | Changes overlay to gradient. If set, <code>color</code> prop is ignored. |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius |
| zIndex | string | number | - | Overlay z-index |


#### Styles API

Overlay component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Overlay selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Overlay-root | Root element |

**Overlay CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --overlay-bg | Controls `background-color` |
| root | --overlay-filter | Controls `backdrop-filter` |
| root | --overlay-radius | Controls `border-radius` |
| root | --overlay-z-index | Controls `z-index` |

**Overlay data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-center | - | - |
| root | data-fixed | - | - |