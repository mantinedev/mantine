# useMounted
Package: @mantine/hooks
Import: import { UseMounted } from '@mantine/hooks';

## Usage

`useMounted` hook returns `true` if component is mounted and `false` if it's not.

```tsx
import { useMounted } from '@mantine/hooks';

function Demo() {
  const mounted = useMounted();
  return (
    <div>
      {mounted ? 'Component is mounted' : 'Component is not mounted'}
    </div>
  );
}
```

## Definition

```tsx
function useMounted(): boolean;
```
