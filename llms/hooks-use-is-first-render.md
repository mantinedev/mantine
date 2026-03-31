# useIsFirstRender
Package: @mantine/hooks
Import: import { UseIsFirstRender } from '@mantine/hooks';

## Usage

The `useIsFirstRender` hook returns `true` if the component is being rendered for the first time;
otherwise, it returns `false`.

```tsx
import { useState } from 'react';
import { Button, Text } from '@mantine/core';
import { useIsFirstRender } from '@mantine/hooks';

function Demo() {
  const [counter, setCounter] = useState(0);
  const firstRender = useIsFirstRender();
  return (
    <div>
      <Text>
        Is first render:{' '}
        <Text span c={firstRender ? 'teal' : 'red'}>
          {firstRender ? 'Yes' : 'No!'}
        </Text>
      </Text>
      <Button onClick={() => setCounter((c) => c + 1)} mt="sm">
        Rerendered {counter} times, click to rerender
      </Button>
    </div>
  );
}
```


## Definition

```tsx
function useIsFirstRender(): boolean;
```
