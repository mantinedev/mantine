# useDocumentTitle
Package: @mantine/hooks
Import: import { UseDocumentTitle } from '@mantine/hooks';

## Usage

`use-document-title` sets `document.title` property with `React.useLayoutEffect` hook.
`use-document-title` is not called during server side rendering.
Use this hook with client only applications, for isomorphic use more advanced options
(for example, [react-helmet](https://github.com/nfl/react-helmet)).

Call hook with a string that should be set as document title in any component.
`use-document-title` triggers every time value changes
and the value is not an empty string (trailing whitespace is trimmed) or `null`.



## Definition

```tsx
function useDocumentTitle(title: string): void;
```
