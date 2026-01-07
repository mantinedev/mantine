# ColorSwatch
Package: @mantine/core
Import: import { ColorSwatch } from '@mantine/core';
Description: Displays color

## Usage

#### Example: usage

```tsx
import { ColorSwatch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--mantine-color-orange-5)" />
    </Group>
  );
}
```


## withShadow

By default, `ColorSwatch` has an inner box-shadow to make it more visible on light backgrounds,
you can disable it by setting `withShadow={false}` prop:

#### Example: shadow

```tsx
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)" />;
}
```


<Polymorphic defaultElement="div" changeToElement="button" component="ColorSwatch" />

## Polymorphic component

ColorSwatch is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch component="button" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, ColorSwatchProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

#### Example: component

```tsx
import { useState } from 'react';
import { ColorSwatch, CheckIcon } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon size={12} />}
    </ColorSwatch>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Content displayed inside the swatch |
| color | string | required | Valid CSS color to display |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem. |
| size | React.CSSProperties["width"] | - | Controls <code>width</code> and <code>height</code> of the swatch, any valid CSS value, numbers are converted to rem. |
| withShadow | boolean | - | Determines whether the swatch should have inner <code>box-shadow</code> |


#### Styles API

ColorSwatch component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ColorSwatch selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ColorSwatch-root | Root element |
| alphaOverlay | .mantine-ColorSwatch-alphaOverlay | Overlay with checkerboard pattern |
| shadowOverlay | .mantine-ColorSwatch-shadowOverlay | Overlay with inner box-shadow |
| colorOverlay | .mantine-ColorSwatch-colorOverlay | Overlay with given color background |
| childrenOverlay | .mantine-ColorSwatch-childrenOverlay | Overlay with `children` inside |

**ColorSwatch CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --cs-radius | Controls `border-radius` of all overlays and `root` element |
| root | --cs-size | Controls `width`, `height`, `min-width` and `min-height` of the `root` element |