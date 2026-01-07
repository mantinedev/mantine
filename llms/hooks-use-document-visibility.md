# useDocumentVisibility
Package: @mantine/hooks
Import: import { UseDocumentVisibility } from '@mantine/hooks';

## Usage

`use-document-visibility` hook returns current [document.visibilityState](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState)
– it allows detecting if the current tab is active:



## Definition

```tsx
// DocumentVisibilityState is 'visible' | 'hidden'
function useDocumentVisibility(): DocumentVisibilityState;
```
