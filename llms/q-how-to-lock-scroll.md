# How can I lock scroll in my application?
Use react-remove-scroll library to lock scroll in your application

Mantine components use the [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
library to lock scroll. You can use it in your application to lock scroll. For your
convenience, the `@mantine/core` package exports the `RemoveScroll` component:

```tsx
import { RemoveScroll } from '@mantine/core';

function App() {
  return (
    <RemoveScroll>
      <div>Content</div>
    </RemoveScroll>
  );
}
```

The component supports all props that are supported by the `react-remove-scroll` library.
You can find the full list of props in the [official documentation](https://github.com/theKashey/react-remove-scroll).
