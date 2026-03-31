# useDocumentTitle
Package: @mantine/hooks
Import: import { UseDocumentTitle } from '@mantine/hooks';

## Usage

The `use-document-title` hook sets the `document.title` property with the `React.useLayoutEffect` hook.
`use-document-title` is not called during server-side rendering.
Use this hook with client-only applications; for isomorphic use, consider more advanced options
(for example, [react-helmet](https://github.com/nfl/react-helmet)).

Call the hook with a string that should be set as the document title in any component.
`use-document-title` triggers every time the value changes
and the value is not an empty string (trailing whitespace is trimmed) or `null`.

```tsx
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}
```


## Definition

```tsx
function useDocumentTitle(title: string): void;
```
