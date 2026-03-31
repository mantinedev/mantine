# It is not possible to pinch to zoom when a Modal is opened. What should I do?
Use removeScrollProps to configure react-remove-scroll options

The [Modal](https://mantine.dev/core/modal) and [Drawer](https://mantine.dev/core/drawer) components use [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
to lock scroll when they are opened. By default, `react-remove-scroll` will lock scroll and prevent pinch-to-zoom on mobile devices.
To change various scroll lock options, you can use the `removeScrollProps` prop:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return (
    <Modal
      removeScrollProps={{
        allowPinchZoom: true, // Allow pinch-to-zoom on mobile devices
      }}
    >
      {/* Modal content */}
    </Modal>
  );
}
```
