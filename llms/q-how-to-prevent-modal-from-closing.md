# How to prevent Modal from closing?
Learn how to prevent Modal from closing when the user clicks outside of it or presses the Escape key

[Modal](https://mantine.dev/core/modal/) and [Drawer](https://mantine.dev/core/drawer/) components'
opened state is controlled by the `opened` prop. You can use it to prevent the modal from closing by setting
it to `true`. For example, this can be useful if you have an async operation inside the modal and want to
prevent the user from closing it before the operation is finished:

#### Example: ModalDoNotClose

```tsx
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button, Modal } from '@mantine/core';

function operation() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}

function Demo() {
  const [opened, { open, close }] = useDisclosure();
  const [loading, setLoading] = useState(false);

  const performOperation = () => {
    setLoading(true);
    operation().then(() => setLoading(false));
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={loading ? () => {} : close}
        withCloseButton={!loading}
        title="Modal with async operation"
      >
        <Button loading={loading} onClick={performOperation} fullWidth>
          Perform heavy operation
        </Button>
      </Modal>
      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

