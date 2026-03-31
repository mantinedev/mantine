# Blockquote
Package: @mantine/core
Import: import { Blockquote } from '@mantine/core';
Description: Blockquote with optional cite

## Usage

```tsx
import { Blockquote } from '@mantine/core';
import { InfoIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <InfoIcon />;
  return (
    <Blockquote color="blue" radius="md" iconSize={38} cite="– Forrest Gump" icon={icon} mt="xl">
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}
```



#### Props

**Blockquote props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| cite | React.ReactNode | - | Reference to a cited quote |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| icon | React.ReactNode | - | Blockquote icon, displayed at the top left side |
| iconSize | string \| number | - | Controls icon `width` and `height`, numbers are converted to rem |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |


#### Styles API

Blockquote component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Blockquote selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Blockquote-root | Root element |
| icon | .mantine-Blockquote-icon | Icon element |
| cite | .mantine-Blockquote-cite | Cite element |

**Blockquote CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --bq-bd | Controls `border` |
| root | --bq-bg-dark | Controls `background-color` in dark color scheme |
| root | --bq-bg-light | Controls `background-color` in light color scheme |
| root | --bq-icon-size | Controls `width` and `height` of the icon |
| root | --bq-radius | Controls `border-radius` |
