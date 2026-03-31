# Paper
Package: @mantine/core
Import: import { Paper } from '@mantine/core';
Description: Renders white or dark background depending on color scheme

## Usage

```tsx
import { Text, Paper } from '@mantine/core';

function Demo() {
  return (
    <Paper shadow="xs" radius="md" withBorder={false} p="xl">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>
  );
}
```



#### Props

**Paper props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem |
| shadow | MantineShadow | - | Key of `theme.shadows` or any valid CSS value to set `box-shadow` |
| withBorder | boolean | - | Adds border to the root element |


#### Styles API

Paper component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Paper selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Paper-root | Root element |

**Paper CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --paper-radius | Controls `border-radius` |
| root | --paper-shadow | Controls `box-shadow` |

**Paper data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-border | `withBorderProp` is set | - |
