# Can I have different primary color for light and dark color schemes?
Learn how to use virtual color with primary color in theme object

## Virtual colors

To have different primary color for light and dark color schemes you can use [virtual color](https://mantine.dev/theming/colors/#virtual-colors).
Virtual color is a color that changes its value based on current color scheme.

```tsx
import {
  createTheme,
  MantineProvider,
  virtualColor,
} from '@mantine/core';

const theme = createTheme({
  primaryColor: 'primary',

  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'cyan',
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Box bg="primary" c="white" p="md" fw={700}>
        This box has virtual background color, it is pink in dark mode
        and cyan in light mode
      </Box>
    </MantineProvider>
  );
}
```
