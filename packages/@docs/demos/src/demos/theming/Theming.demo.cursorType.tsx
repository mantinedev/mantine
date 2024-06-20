import { Checkbox, createTheme, MantineThemeProvider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MantineProvider, createTheme, Checkbox } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
`;

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineThemeProvider theme={theme}>
        <Checkbox
          label="Pointer cursor"
          mt="md"
          styles={{ input: { cursor: 'pointer' }, label: { cursor: 'pointer' } }}
        />
      </MantineThemeProvider>
    </>
  );
}

export const cursorType: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
