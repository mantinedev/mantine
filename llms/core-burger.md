# Burger
Package: @mantine/core
Import: import { Burger } from '@mantine/core';
Description: Open/close navigation button

## Usage

The `Burger` component renders an open/close menu button.
Set the `opened` and `onClick` props to control the component state.
If the `opened` prop is set, a cross will be rendered, otherwise a burger icon.

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger size="md" opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
```


## Change line size

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger lineSize={2} size="xl" opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
```


## Accessibility

To make the `Burger` accessible for screen readers, you need to either set `aria-label` or
use the [VisuallyHidden](https://mantine.dev/llms/core-visually-hidden.md) component:

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

**Burger props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of `theme.colors` of any valid CSS value, by default `theme.white` in dark color scheme and `theme.black` in light |
| lineSize | string \| number | - | Controls height of lines, by default calculated based on `size` prop |
| opened | boolean | - | State of the burger, when `true` burger is transformed into X |
| size | MantineSize \| number | - | Controls burger `width` and `height`, numbers are converted to rem |
| transitionDuration | number | - | `transition-duration` property value in ms |
| transitionTimingFunction | string | - | `transition-timing-function` property value |


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
