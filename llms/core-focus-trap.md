# FocusTrap
Package: @mantine/core
Import: import { FocusTrap } from '@mantine/core';
Description: Trap focus at child node

## Usage

FocusTrap is a component implementation of [use-focus-trap](https://mantine.dev/hooks/use-focus-trap/) hook,
it is used in all Mantine components that require focus trap ([Modal](https://mantine.dev/core/modal/), [DatePicker](https://mantine.dev/dates/date-picker/), [Popover](https://mantine.dev/core/popover/), etc.).

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
```


## Initial focus

To define the element that will receive initial focus set `data-autofocus` attribute:

#### Example: initial

```tsx
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
```


## FocusTrap.InitialFocus

`FocusTrap.InitialFocus` is a special component that adds a visually hidden
element which will receive the focus when the focus trap is activated.
Once `FocusTrap.InitialFocus` loses focus, it is removed from the tab order.

For example, it is useful if you do not want to focus any elements inside the [Modal](https://mantine.dev/core/modal) when it is opened:

#### Example: initialFocusTrap

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```


## Focus trapping logic

* Focus is trapped within child node if `active` prop is `true`
* When FocusTrap component is mounted or when `active` prop changes from `false` to `true` first element with `data-autofocus` attribute is focused
* If there are no elements with `data-autofocus` attribute, then the first element that supports keyboard interaction is focused
* If the target element does not have focusable elements or does not support `ref`, then the focus trap will not work
* Trap stops working when element outside of the `FocusTrap` child is focused


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | - | If set to <code>false</code>, disables focus trap |
| children | any | required | Element to trap focus at, must support ref prop |
| innerRef | ForwardedRef<any> | - | Ref to combine with the focus trap ref |
| refProp | string | - | Prop that is used to access element ref |