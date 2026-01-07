# CloseButton
Package: @mantine/core
Import: import { CloseButton } from '@mantine/core';
Description: Button with close icon

## Usage

`CloseButton` renders a button with `X` icon inside. It is used in other Mantine components like [Drawer](https://mantine.dev/core/drawer) or [Modal](https://mantine.dev/core/modal).

#### Example: usage

```tsx
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton />;
}
```


## Change icon

You can change icon by passing any react node to the `icon` prop.
It is useful when `CloseButton` is used as a part of other components,
for example, in [Drawer](https://mantine.dev/core/drawer) or [Modal](https://mantine.dev/core/modal).
Note that if you use `icon` prop, `iconSize` prop is ignored –
you will have to set icon size manually.

#### Example: icon

```tsx
import { IconXboxX } from '@tabler/icons-react';
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton icon={<IconXboxX size={18} stroke={1.5} />} />;
}
```


## Accessibility

To make `CloseButton` accessible for screen readers, you need to either set `aria-label` or
use [VisuallyHidden](https://mantine.dev/core/visually-hidden) component:

```tsx
import { CloseButton, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <CloseButton aria-label="Close modal" />

      <CloseButton>
        <VisuallyHidden>Close modal</VisuallyHidden>
      </CloseButton>
    </>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Content rendered inside the button. For example <code>VisuallyHidden</code> with label for screen readers. |
| disabled | boolean | - | Sets <code>disabled</code> attribute, assigns disabled styles |
| icon | React.ReactNode | - | React node to replace the default close icon. If set, <code>iconSize</code> prop is ignored. |
| iconSize | string | number | - | <code>X</code> icon <code>width</code> and <code>height</code> |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius. Numbers are converted to rem. |
| size | number | MantineSize | (string & {}) | - | Controls width and height of the button. Numbers are converted to rem. |


#### Styles API

CloseButton component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**CloseButton selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-CloseButton-root | Root element |

**CloseButton CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --cb-icon-size | Controls `width` of the `X` icon |
| root | --cb-radius | Controls `border-radius` of the button |
| root | --cb-size | Controls `width` and `height` of the button |