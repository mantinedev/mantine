# Kbd
Package: @mantine/core
Import: import { Kbd } from '@mantine/core';
Description: Display keyboard key

## Usage

```tsx
import { Kbd } from '@mantine/core';

function Demo() {
  return (
    <div dir="ltr">
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </div>
  );
}
```


## Size

```tsx
import { Kbd } from '@mantine/core';

function Demo() {
  return <Kbd size="sm">Shift</Kbd>;
}
```



#### Props

**Kbd props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | MantineSize \| number | - | Controls `font-size` and `padding` |


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
