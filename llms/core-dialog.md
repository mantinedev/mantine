# Dialog
Package: @mantine/core
Import: import { Dialog } from '@mantine/core';
Description: Display a fixed overlay dialog at any side of the screen

## Usage

`Dialog` is a simplified version of the [Modal](https://mantine.dev/llms/core-modal.md) component.
It does not include most of the accessibility and usability [Modal](https://mantine.dev/llms/core-modal.md) features:

* Focus trap is not available
* Does not close on click outside
* Does not have an overlay

Use `Dialog` to attract attention with non-important information or actions.
For example, you can create an email subscription form:

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
```


## Change position

`Dialog` is rendered in [Portal](https://mantine.dev/llms/core-portal.md) and has a fixed position. Set the `position` prop to control the dialog's position:

```tsx
import { Dialog } from '@mantine/core';

function Demo() {
  return (
    <>
      <Dialog position={{ top: 20, left: 20 }} opened>
        Dialog in top left corner
      </Dialog>
      <Dialog position={{ bottom: 20, left: 20 }} opened>
        Dialog in bottom left corner
      </Dialog>
    </>
  );
}
```

## Accessibility

`Dialog` is not accessible and most likely will not be announced by screen readers.
Make sure you do not put any important information in it. In most cases it would be better
to select [Modal](https://mantine.dev/llms/core-modal.md), [Drawer](https://mantine.dev/llms/core-drawer.md) or [Notifications](https://mantine.dev/llms/x-notifications.md).


#### Props

**Dialog props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Dialog content |
| keepMounted | boolean | - | If set, the component uses `display: none` to hide the root element instead of removing the DOM node |
| onClose | () => void | - | Called on close button click |
| opened | boolean | required | Opened state |
| portalProps | BasePortalProps | - | Props passed down to the `Portal` component. Ignored when `withinPortal` is `false`. |
| position | AffixPosition | - | Affix position on screen |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem |
| shadow | MantineShadow | - | Key of `theme.shadows` or any valid CSS value to set `box-shadow` |
| size | MantineSize \| number | - | Controls `width` of the dialog |
| transitionProps | TransitionProps | - | Props passed down to the underlying `Transition` component |
| withBorder | boolean | - | Adds border to the root element |
| withCloseButton | boolean | - | If set, displays the close button |
| withinPortal | boolean | - | Determines whether the component is rendered within `Portal` |
| zIndex | React.CSSProperties["zIndex"] | - | Root element `z-index` property |


#### Styles API

Dialog component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Dialog selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Dialog-root | Root element |
| closeButton | .mantine-Dialog-closeButton | Close button |

**Dialog CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --dialog-size | Controls `width` of the dialog |
