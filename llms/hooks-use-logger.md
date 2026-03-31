# useLogger
Package: @mantine/hooks
Import: import { UseLogger } from '@mantine/hooks';

## Usage

The `use-logger` hook logs given values to the console each time the component renders.
Open DevTools to see state changes in the console:

```tsx
import { useState } from 'react';
import { useLogger } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);
  useLogger('Demo', [{ count, hello: 'world' }]);
  return <Button onClick={() => setCount((c) => c + 1)}>Update state ({count})</Button>;
}
```


## Definition

```tsx
function useLogger(componentName: string, props: any[]): any;
```
