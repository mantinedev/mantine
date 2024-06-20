import { Button, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="primary">Blue in light, Red in dark</Button>
      <Button color="primary" variant="light">
        Blue in light, Red in dark
      </Button>
      <Button color="primary" variant="outline">
        Blue in light, Red in dark
      </Button>
    </Group>
  );
}
`;

const appCode = `
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
`;

function Demo() {
  return (
    <Group>
      <Button color="primary">Blue in light, Red in dark</Button>
      <Button color="primary" variant="light">
        Blue in light, Red in dark
      </Button>
      <Button color="primary" variant="outline">
        Blue in light, Red in dark
      </Button>
    </Group>
  );
}

export const ColorSchemeColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'App.tsx', code: appCode, language: 'tsx' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
  centered: true,
};
