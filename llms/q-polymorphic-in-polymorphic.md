# Why can I not use one polymorphic component in the component prop of another polymorphic component?
Learn how polymorphic components types work

## What is polymorphic component?

A polymorphic component is a component which root element can be changed with component prop.
All polymorphic components have a default element which is used when component prop is not provided.
For example, the `Button` component default element is `button` and it can be changed to
`a` or any other element or component:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
```

## Polymorphic components types

Polymorphic components types are defined by the type of the root element
which is not known until the component is used.

Example:

```tsx
import { Box } from '@mantine/core';

// MyBox component props types are now known
// Types will be assigned only when MyBox is used
const MyBox = Box;

function Demo() {
  // MyBox props type can be determined based on
  // `component` prop or its absence
  // In this case MyBox props type contain
  // React.ComponentProps<'div'>
  return <MyBox>Hello</MyBox>;
}

function Demo2() {
  // In this case MyBox props type contain
  // React.ComponentProps<'a'>
  return <MyBox component="a" href="https://mantine.dev/" />;
}
```

## Why I cannot use one polymorphic component in component prop of another polymorphic component?

When you use one polymorphic component in `component` prop of another polymorphic component,
types cannot be inferred correctly because the type of the root element is not known until the component is used.

```tsx
import { Box, Button } from '@mantine/core';

function Demo() {
  // Types cannot be inferred correctly
  return <Box component={Button} />;
}
```
