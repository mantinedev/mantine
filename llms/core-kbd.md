# Kbd
Package: @mantine/core
Import: import { Kbd } from '@mantine/core';
Description: Display keyboard key

## Usage



## Size

#### Example: size

```tsx
import { Kbd } from '@mantine/core';

function Demo() {
  return <Kbd>Shift</Kbd>;
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | number | MantineSize | (string & {}) | - | Controls <code>font-size</code> and <code>padding</code> |


#### Styles API

Kbd component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Kbd selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Kbd-root | Root element |

**Kbd CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --kbd-fz | Controls `font-size` |