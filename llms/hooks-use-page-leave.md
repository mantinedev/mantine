# usePageLeave
Package: @mantine/hooks
Import: import { UsePageLeave } from '@mantine/hooks';

## Usage

The `use-page-leave` hook calls the given function when the mouse leaves the page:

```tsx
import { useState } from 'react';
import { usePageLeave } from '@mantine/hooks';

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <>Mouse left the page {leftsCount} times</>;
}
```


## Definition

```tsx
function usePageLeave(onPageLeave: () => void): void;
```
