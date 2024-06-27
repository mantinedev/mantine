import { Button, createTheme, MantineThemeProvider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MantineProvider, createTheme, Button } from '@mantine/core';

const theme = createTheme({
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Button variant="gradient">Button with custom default gradient</Button>
    </MantineProvider>
  );
}
`;

const theme = createTheme({
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Button variant="gradient">Button with custom default gradient</Button>
    </MantineThemeProvider>
  );
}

export const defaultGradient: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
