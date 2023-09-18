import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TextInput, NativeSelect, MantineThemeProvider, createTheme, Input } from '@mantine/core';
import classes from './Input.demo.sharedStyles.module.css';

const code = `
import { TextInput, NativeSelect, MantineThemeProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        placeholder="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineThemeProvider>
  );
}
`;

const cssCode = `
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: rem(1px) solid var(--mantine-color-violet-filled);
}
`;

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        placeholder="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineThemeProvider>
  );
}

export const sharedStyles: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  maxWidth: 340,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'css' },
  ],
};
