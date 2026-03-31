# How can I apply styles to all Mantine components?
Learn how to use attribute selector to apply styles to all Mantine components

## Attribute selector

All Mantine components have static classes that start with the `mantine-` prefix.
Use an [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
in a `.css` file to apply styles to all Mantine components:

```scss
[class^=mantine] {
  color: red;
}
```

Note that if you change the `classNamesPrefix` on `MantineProvider`:

```tsx
import { MantineProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider classNamesPrefix="app">
      <Text>Just some text</Text>
    </MantineProvider>
  );
}
```

You will need to update the selector to match the new prefix:

```scss
[class^=app] {
  color: red;
}
```
