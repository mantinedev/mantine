# How to call a function when Modal/Drawer closes and animation completes?
How to use transitionProps in Modal/Drawer components

[Modal](https://mantine.dev/core/modal/) and [Drawer](https://mantine.dev/core/drawer/) components
use [Transition](https://mantine.dev/core/transition/) component under the hood to animate
presence. You can use `transitionProps` property to pass props to `Transition` component:

```tsx
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, handlers] = useDisclosure();

  return (
    <Modal
      title="Modal title"
      opened={opened}
      onClose={handlers.close}
      transitionProps={{
        onEntered: () => console.log('Modal opened, animation done'),
        onExited: () => console.log('Modal closed, animation done'),
      }}
    >
      Modal content
    </Modal>
  );
}
```
