# Overlay
Package: @mantine/core
Import: import { Overlay } from '@mantine/core';
Description: Overlays parent element with div element with any color and opacity

## Usage

`Overlay` takes 100% of the width and height of the parent container or viewport if the `fixed` prop is set.
Set the `color` and `backgroundOpacity` props to change the `Overlay` background-color. Note that the `backgroundOpacity` prop
does not change the CSS opacity property; it changes the background-color. For example, if you set
`color="#000"` and `backgroundOpacity={0.85}`, the background-color will be `rgba(0, 0, 0, 0.85)`:

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

Set the `gradient` prop to use background-image instead of background-color. When the `gradient` prop is set,
the `color` and `backgroundOpacity` props are ignored.

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

Set the `blur` prop to add `backdrop-filter: blur({value})` styles.
Note that `backdrop-filter` [is not supported in all browsers](https://caniuse.com/css-backdrop-filter).

```tsx
import { Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35} blur={15} />
    </AspectRatio>
  );
}
```



#### Props

**Overlay props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| backgroundOpacity | number | - | Overlay `background-color` opacity 0–1, ignored when `gradient` prop is set |
| blur | string \| number | - | Overlay background blur in px (converted to rem). Applies `backdrop-filter: blur()`. Note: backdrop-filter is not supported in all browsers. |
| center | boolean | - | Centers content inside the overlay using flexbox (sets display: flex, align-items: center, justify-content: center) |
| children | React.ReactNode | - | Content inside overlay |
| color | BackgroundColor | - | Overlay `background-color` |
| fixed | boolean | - | Changes position from `absolute` to `fixed` (viewport-relative instead of parent-relative) |
| gradient | string | - | Changes overlay to gradient. If set, both `color` and `backgroundOpacity` props are ignored. |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius |
| zIndex | string \| number | - | Overlay z-index |


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
| root | data-center | `center` prop is set | - |
| root | data-fixed | `fixed` prop is set | - |
