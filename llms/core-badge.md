# Badge
Package: @mantine/core
Import: import { Badge } from '@mantine/core';
Description: Display badge, pill or tag

## Usage

```tsx
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge variant="filled" color="blue" size="md" radius="xl">Badge</Badge>;
}
```


```tsx
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
    >
      Gradient badge
    </Badge>
  );
}
```


## Rounded

Set the `circle` prop to reduce horizontal padding and make the badge width equal to its height:

```tsx
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="xs" circle>
        1
      </Badge>
      <Badge size="sm" circle>
        7
      </Badge>
      <Badge size="md" circle>
        9
      </Badge>
      <Badge size="lg" circle>
        3
      </Badge>
      <Badge size="xl" circle>
        8
      </Badge>
    </Group>
  );
}
```


## Left and right sections

```tsx
import { Badge, Group } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <AtIcon size={12} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
```


## Full width

Set `fullWidth` to make the badge span the full width of its parent element:

```tsx
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
```



#### Props

**Badge props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| children | React.ReactNode | - | Main badge content |
| circle | boolean | - | If set, badge `min-width` becomes equal to its `height` and horizontal padding is removed |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| fullWidth | boolean | - | Determines whether Badge should take 100% of its parent width |
| gradient | MantineGradient | - | Gradient configuration used when `variant=\"gradient\"` |
| leftSection | React.ReactNode | - | Content displayed on the left side of the badge label |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| rightSection | React.ReactNode | - | Content displayed on the right side of the badge label |
| size | MantineSize | - | Controls `font-size`, `height` and horizontal `padding` |


#### Styles API

Badge component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Badge selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Badge-root | Root element |
| section | .mantine-Badge-section | Left and right sections |
| label | .mantine-Badge-label | Badge children |

**Badge CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --badge-bd | Controls `border` |
| root | --badge-bg | Controls `background` |
| root | --badge-color | Controls text `color` |
| root | --badge-dot-color | Controls dot `color`, only applicable when `variant="dot"` |
| root | --badge-fz | Controls `font-size` |
| root | --badge-height | Controls `height` |
| root | --badge-padding-x | Controls horizontal `padding` |
| root | --badge-radius | Controls `border-radius` |

**Badge data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-block | `fullWidth` prop is set | - |
| section | data-position | - | Section position: left or right |
