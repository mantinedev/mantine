# useDocumentVisibility
Package: @mantine/hooks
Import: import { UseDocumentVisibility } from '@mantine/hooks';

## Usage

The `use-document-visibility` hook returns the current [document.visibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState)
– it allows you to detect if the current tab is active:

```tsx
import { Text } from '@mantine/core';
import { useDocumentTitle, useDocumentVisibility } from '@mantine/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return <Text>Switch to another tab to see document title change</Text>;
}
```


## Definition

```tsx
// DocumentVisibilityState is 'visible' | 'hidden'
function useDocumentVisibility(): DocumentVisibilityState;
```
