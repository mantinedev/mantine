# CloseButton
Package: @mantine/core
Import: import { CloseButton } from '@mantine/core';
Description: Button with close icon

## Usage

`CloseButton` renders a button with an `X` icon inside. It is used in other Mantine components like [Drawer](https://mantine.dev/llms/core-drawer.md) or [Modal](https://mantine.dev/llms/core-modal.md).

```tsx
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton size="md" variant="subtle" />;
}
```


## Change icon

You can change the icon by passing any react node to the `icon` prop.
It is useful when `CloseButton` is used as a part of other components,
for example, in [Drawer](https://mantine.dev/llms/core-drawer.md) or [Modal](https://mantine.dev/llms/core-modal.md).
Note that if you use the `icon` prop, the `iconSize` prop is ignored –
you will have to set the icon size manually.

```tsx
import { XCircleIcon } from '@phosphor-icons/react';
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton icon={<XCircleIcon size={18} />} />;
}
```


## Accessibility

To make the `CloseButton` accessible for screen readers, you need to either set `aria-label` or
use the [VisuallyHidden](https://mantine.dev/llms/core-visually-hidden.md) component:

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

**CloseButton props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Content rendered inside the button. For example `VisuallyHidden` with label for screen readers. |
| disabled | boolean | - | Sets `disabled` attribute, assigns disabled styles |
| icon | React.ReactNode | - | React node to replace the default close icon. If set, `iconSize` prop is ignored. |
| iconSize | string \| number | - | `X` icon `width` and `height` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. |
| size | MantineSize \| number | - | Controls width and height of the button. Numbers are converted to rem. |


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
