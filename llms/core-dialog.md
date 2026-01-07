# Dialog
Package: @mantine/core
Import: import { Dialog } from '@mantine/core';
Description: Display a fixed overlay dialog at any side of the screen

## Usage

`Dialog` is a simplified version of [Modal](https://mantine.dev/core/modal/) component.
It does not include most of accessibility and usability [Modal](https://mantine.dev/core/modal/) features:

* Focus trap is not available
* Does not close on click outside
* Does not have overlay

Use `Dialog` to attract attention with not important information or action,
for example, you can create an email subscription form:

#### Example: usage

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

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
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

`Dialog` is rendered in [Portal](https://mantine.dev/core/portal/) and has fixed position, set `position` prop to control dialog's position:

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

`Dialog` is not accessible and most likely will not be announced by screen reader,
make sure you do not put any important information. In most cases it would be better
to select [Modal](https://mantine.dev/core/modal/), [Drawer](https://mantine.dev/core/drawer/) or [Notifications](https://mantine.dev/x/notifications/).


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Dialog content |
| keepMounted | boolean | - | If set, dialog is not unmounted from the DOM when hidden, <code>display: none</code> styles are applied instead |
| onClose | () => void | - | Called when the close button is clicked |
| opened | boolean | required | Opened state |
| portalProps | BasePortalProps | - | Props passed down to the <code>Portal</code> component. Ignored when <code>withinPortal</code> is <code>false</code>. |
| position | AffixPosition | - | Affix position on screen |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius, numbers are converted to rem |
| shadow | MantineShadow | - | Key of <code>theme.shadows</code> or any valid CSS value to set <code>box-shadow</code> |
| size | number | MantineSize | (string & {}) | - | Controls <code>width</code> of the dialog |
| transitionProps | TransitionProps | - | Props passed down to the underlying <code>Transition</code> component |
| withBorder | boolean | - | Adds border to the root element |
| withCloseButton | boolean | - | If set, the close button is displayed |
| withinPortal | boolean | - | Determines whether the component is rendered within <code>Portal</code> |
| zIndex | React.CSSProperties["zIndex"] | - | Root element <code>z-index</code> property |


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