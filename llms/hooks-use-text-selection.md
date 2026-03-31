# useTextSelection
Package: @mantine/hooks
Import: import { UseTextSelection } from '@mantine/hooks';

## Usage

The `use-text-selection` hook returns the current text selection:

```tsx
import { useTextSelection } from '@mantine/hooks';

function Demo() {
  const selection = useTextSelection();
  return (
    <>
      <div>Select some text here or anywhere on the page and it will be displayed below</div>
      <div>Selected text: {selection?.toString()}</div>
    </>
  );
}
```


## Definition

```tsx
function useTextSelection(): Selection | null;
```
