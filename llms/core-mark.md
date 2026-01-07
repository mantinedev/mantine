# Mark
Package: @mantine/core
Import: import { Mark } from '@mantine/core';
Description: Highlight part of the text

## Usage

#### Example: usage

```tsx
import { Text, Mark } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark>this chunk</Mark> of the text
    </Text>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color |


#### Styles API

Mark component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Mark selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Mark-root | Root element |

**Mark CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --mark-bg-dark | Controls `background-color` in dark color scheme |
| root | --mark-bg-light | Controls `background-color` for light color scheme |