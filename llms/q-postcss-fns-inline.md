# Can I use PostCSS function in inline styles?
Learn where PostCSS functions can be used in Mantine

## What are PostCSS functions?

[postcss-preset-mantine](https://mantine.dev/styles/postcss-preset/) provides functions,
mixins and other helpers to simplify working with Mantine styles. Example of using
`light-dark` function in styles:

```scss
// What you write
.demo {
  background: light-dark(white, black);
}

// What you get after PostCSS processing
[data-mantine-color-scheme='light'] .demo {
  background: white;
}

[data-mantine-color-scheme='dark'] .demo {
  background: black;
}
```

## Can I use PostCSS functions in inline styles?

No, PostCSS functions are not supported in inline styles. **You can use PostCSS functions only in `.css` files**.
The following example will not work:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      style={{
        // ❌ This does not get processed by PostCSS
        backgroundColor: 'light-dark(white, black)',
      }}
    >
      Button
    </Button>
  );
}
```
