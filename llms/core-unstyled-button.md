# UnstyledButton
Package: @mantine/core
Import: import { UnstyledButton } from '@mantine/core';
Description: Unstyled polymorphic button

## Usage

`UnstyledButton` resets default button styles, it is used as a
base for all other button components. You can use it to as a base for custom
polymorphic buttons.

```tsx
import { UnstyledButton } from '@mantine/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
```



#### Props

**UnstyledButton props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | string \| number | - | Size passed from parent component, sets `data-size` if value is not number like |


#### Styles API

UnstyledButton component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**UnstyledButton selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-UnstyledButton-root | Root element |
