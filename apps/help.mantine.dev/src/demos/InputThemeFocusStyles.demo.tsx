import { createTheme, Input, MantineThemeProvider, NativeSelect, TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './InputThemeFocusStyles.demo.module.css';

const cssCode = `.input {
  &:focus-within {
    outline: rem(2px) solid var(--mantine-primary-color-filled);
  }
}`;

const code = `
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />
      <NativeSelect mt="md" label="Native select" data={['React', 'Angular', 'Vue', 'Svelte']} />
    </MantineProvider>
  );
}
`;

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />
      <NativeSelect mt="md" label="Native select" data={['React', 'Angular', 'Vue', 'Svelte']} />
    </MantineThemeProvider>
  );
}

export const InputThemeFocusStyles: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
  centered: true,
  maxWidth: 340,
};
