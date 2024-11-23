import { Box } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box } from '@mantine/core';

export function Demo() {
  return (
    <Box bg="primary" c="white" p="md" fw={700}>
      This box has virtual background color,
      it is pink in dark mode and cyan in light mode
    </Box>
  );
}
`;

const appCode = `
import { createTheme, MantineProvider, virtualColor } from '@mantine/core';
import { Demo } from './Demo';

const theme = createTheme({
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
      <Demo />
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <Box bg="virtual" c="white" p="md" fw={700}>
      This box has virtual background color, it is pink in dark mode and cyan in light mode
    </Box>
  );
}

export const virtualColors: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'App.tsx', code: appCode, language: 'tsx' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
};
