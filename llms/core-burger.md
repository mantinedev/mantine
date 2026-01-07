# Burger
Package: @mantine/core
Import: import { Burger } from '@mantine/core';
Description: Open/close navigation button

## Usage

`Burger` component renders open/close menu button.
Set `opened` and `onClick` props to control component state.
If `opened` prop is set, cross will be rendered, otherwise – burger.

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
```


## Change lines size

#### Example: lineWidth

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger size="xl" opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
```


<GetElementRef component="Burger" refType="button" />

## Get element ref

```tsx
import { useRef } from 'react';
import { Burger } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <Burger ref={ref} />;
}
```

## Accessibility

To make `Burger` accessible for screen readers, you need to either set `aria-label` or
use [VisuallyHidden](https://mantine.dev/core/visually-hidden) component:

```tsx
import { Burger, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <Burger aria-label="Toggle navigation" />

      <Burger>
        <VisuallyHidden>Toggle navigation</VisuallyHidden>
      </Burger>
    </>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of <code>theme.colors</code> of any valid CSS value, by default <code>theme.white</code> in dark color scheme and <code>theme.black</code> in light |
| lineSize | string | number | - | Controls height of lines, by default calculated based on <code>size</code> prop |
| opened | boolean | - | State of the burger, when <code>true</code> burger is transformed into X |
| size | number | MantineSize | (string & {}) | - | Controls burger <code>width</code> and <code>height</code>, numbers are converted to rem |
| transitionDuration | number | - | <code>transition-duration</code> property value in ms |
| transitionTimingFunction | string | - | <code>transition-timing-function</code> property value |


#### Styles API

Burger component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Burger selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Burger-root | Root element (button) |
| burger | .mantine-Burger-burger | Inner element that contains burger lines |

**Burger CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --burger-line-size | Controls height of lines |
| root | --burger-color | Controls background-color of lines |
| root | --burger-size | Controls width and height of the button |
| root | --burger-transition-duration | Controls transition-duration of lines |
| root | --burger-transition-timing-function | Controls transition-timing-function of lines |

**Burger data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| burger | data-opened | opened prop is set | - |