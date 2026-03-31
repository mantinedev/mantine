# FocusTrap
Package: @mantine/core
Import: import { FocusTrap } from '@mantine/core';
Description: Trap focus at child node

## Usage

FocusTrap is a component implementation of the [use-focus-trap](https://mantine.dev/llms/hooks-use-focus-trap.md) hook.
It is used in all Mantine components that require focus trap ([Modal](https://mantine.dev/llms/core-modal.md), [DatePicker](https://mantine.dev/llms/dates-date-picker.md), [Popover](https://mantine.dev/llms/core-popover.md), etc.).

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

To define the element that will receive initial focus, set the `data-autofocus` attribute:

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

For example, it is useful if you do not want to focus any elements inside the [Modal](https://mantine.dev/llms/core-modal.md) when it is opened:

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

* Focus is trapped within the child node if the `active` prop is `true`
* When the FocusTrap component is mounted or when the `active` prop changes from `false` to `true`, the first element with the `data-autofocus` attribute is focused
* If there are no elements with the `data-autofocus` attribute, then the first element that supports keyboard interaction is focused
* If the target element does not have focusable elements or does not support `ref`, then the focus trap will not work
* Trap stops working when an element outside of the `FocusTrap` child is focused


#### Props

**FocusTrap props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | - | If set to `false`, disables focus trap |
| children | any | required | Element to trap focus at, must support ref prop |
| innerRef | Ref<any> | - | Ref to combine with the focus trap ref |
| refProp | string | - | Prop that is used to access element ref |

**FocusTrap..InitialFocus props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|

**FocusTrap.InitialFocus props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|