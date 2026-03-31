# useFavicon
Package: @mantine/hooks
Import: import { UseFavicon } from '@mantine/hooks';

## Usage

The `use-favicon` hook appends a `<link />` element to the head component with the given favicon in `useLayoutEffect`.
The hook is not called during server-side rendering.

Call the hook with a favicon URL (supported formats: `.ico`, `.png`, `.svg`, and `.gif`) that should be set as the favicon.
The hook is triggered every time the URL changes and the value is not an empty string (trailing whitespace is trimmed) or `null`.

```tsx
import { useState } from 'react';
import { useFavicon } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');
  const setMantineUIFavicon = () => setFavicon('https://ui.mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
      <Button onClick={setMantineUIFavicon}>Mantine UI favicon</Button>
    </Group>
  );
}
```


## Definition

```tsx
function useFavicon(url: string): void;
```
