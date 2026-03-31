# How can I change component color prop value depending on the color scheme?
Learn how to use CSS variables resolver to change color value depending on the color scheme

The `color` prop in all components uses Mantine [CSS variables](https://mantine.dev/styles/css-variables)
to resolve the color value depending on the color scheme. You can define these variables with the `virtualColor` function:

#### Example: ColorSchemeColor

```tsx
import { virtualColor, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  colors: {
    primary: virtualColor({ name: 'primary', light: 'blue', dark: 'red' }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <YourApp />
    </MantineProvider>
  );
}
```

