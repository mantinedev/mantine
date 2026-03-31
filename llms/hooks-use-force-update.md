# useForceUpdate
Package: @mantine/hooks
Import: import { UseForceUpdate } from '@mantine/hooks';

## Usage

The `use-force-update` hook returns a function that, when called, rerenders the component:

```tsx
import { Button, Text, Group } from '@mantine/core';
import { useForceUpdate, randomId } from '@mantine/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group justify="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
```


## Definition

```tsx
function useForceUpdate(): () => void;
```
